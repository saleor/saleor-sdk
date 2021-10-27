import { setupMockServer, setupSaleorClient } from "./setup";
import {
  API_URI,
  TEST_AUTH_EMAIL,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID,
  TEST_AUTH_PASSWORD,
} from "../src/config";
import { storage } from "../src/core/storage";
import { login, loginWithExternalPlugin } from "./utils";

describe("auth api", () => {
  const saleor = setupSaleorClient();
  const mockServer = setupMockServer();

  beforeAll(() => mockServer.listen());

  afterEach(() => {
    mockServer.resetHandlers();
    storage.clear();
    /*
      Clear cache to avoid legacy state persistance between tests:
      https://github.com/apollographql/apollo-client/issues/3766#issuecomment-578075556
    */
    saleor._internal.apolloClient.stop();
    saleor._internal.apolloClient.clearStore();
  });

  afterAll(() => mockServer.close());

  it("can login", async () => {
    const data = await login(saleor);
    expect(data?.tokenCreate?.errors).toHaveLength(0);
    expect(data?.tokenCreate?.user?.id).toBeDefined();
    expect(data?.tokenCreate?.user?.email).toBe(TEST_AUTH_EMAIL);
    expect(data?.tokenCreate?.token).toBeDefined();
    expect(storage.getAccessToken()).not.toBeNull();
    expect(storage.getCSRFToken()).not.toBeNull();
  });

  it("login caches user data", async () => {
    await login(saleor);
    const state = saleor.getState();
    expect(state?.user?.id).toBeDefined();
    expect(state?.user?.email).toBe(TEST_AUTH_EMAIL);
    expect(state?.authenticated).toBe(true);
  });

  it("will throw an error if login credentials are invalid", async () => {
    const { data } = await saleor.auth.login({
      email: "wrong@example.com",
      password: "wrong",
    });
    expect(data?.tokenCreate?.user).toBeFalsy();
    expect(data?.tokenCreate?.token).toBeFalsy();
    expect(data?.tokenCreate?.errors).not.toHaveLength(0);
  });

  it("manually refreshes auth token", async () => {
    await login(saleor);
    const state = saleor.getState();
    const previousToken = storage.getAccessToken();
    expect(state?.authenticated).toBe(true);

    const { data } = await saleor.auth.refreshToken();
    const newToken = storage.getAccessToken();
    expect(state?.user?.id).toBeDefined();
    expect(state?.user?.email).toBe(TEST_AUTH_EMAIL);
    expect(state?.authenticated).toBe(true);
    expect(newToken).toBeTruthy();
    expect(data?.tokenRefresh?.token).toEqual(newToken);
    expect(previousToken).not.toEqual(newToken);
  });

  it("can register", async () => {
    const { data } = await saleor.auth.register({
      email: `register+${Date.now().toString()}@example.com`,
      password: "register",
      redirectUrl: API_URI,
    });
    expect(data?.accountRegister?.errors).toHaveLength(0);
  });

  it("logout clears user cache", async () => {
    await login(saleor);
    await saleor.auth.logout();
    const state = saleor.getState();
    expect(state?.user).toBeFalsy();
    expect(state?.authenticated).toBe(false);
    expect(storage.getAccessToken()).toBeNull();
    expect(storage.getCSRFToken()).toBeNull();
  });

  it("verifies if token is valid", async () => {
    const data = await login(saleor);

    if (data?.tokenCreate?.token) {
      const { data: result } = await saleor.auth.verifyToken();
      expect(result?.tokenVerify?.isValid).toBe(true);
    }
  });

  it("sends request to reset password", async () => {
    const { data } = await saleor.auth.requestPasswordReset({
      email: TEST_AUTH_EMAIL,
      redirectUrl: API_URI,
    });
    expect(data?.requestPasswordReset?.errors).toHaveLength(0);
  });

  it("changes user's password", async () => {
    await login(saleor);
    const { data } = await saleor.auth.changePassword({
      oldPassword: TEST_AUTH_PASSWORD,
      newPassword: TEST_AUTH_PASSWORD,
    });
    expect(data?.passwordChange?.errors).toHaveLength(0);
  });

  it("can login with external plugin", async () => {
    const accessToken = await loginWithExternalPlugin(saleor);
    expect(accessToken?.externalObtainAccessTokens?.errors).toHaveLength(0);
    expect(accessToken?.externalObtainAccessTokens?.user?.id).toBeDefined();
    expect(accessToken?.externalObtainAccessTokens?.user?.email).toBe(
      TEST_AUTH_EMAIL
    );
    expect(accessToken?.externalObtainAccessTokens?.token).toBeDefined();
    expect(storage.getAccessToken()).not.toBeNull();
    expect(storage.getCSRFToken()).not.toBeNull();
    expect(storage.getAuthPluginId()).not.toBeNull();
  });

  it("login with external plugin caches user data", async () => {
    await loginWithExternalPlugin(saleor);
    const state = saleor.getState();
    expect(state?.user?.id).toBeDefined();
    expect(state?.user?.email).toBe(TEST_AUTH_EMAIL);
    expect(state?.authenticated).toBe(true);
  });

  it("fail to login with external plugin", async () => {
    const accessToken = await loginWithExternalPlugin(saleor, {
      code: "wrong",
      state: "wrong",
    });
    expect(accessToken?.externalObtainAccessTokens?.user).toBeFalsy();
    expect(accessToken?.externalObtainAccessTokens?.token).toBeFalsy();
    expect(accessToken?.externalObtainAccessTokens?.errors).not.toHaveLength(0);
  });

  it("logout with external plugin clears user cache", async () => {
    await loginWithExternalPlugin(saleor);
    await saleor.auth.logout();
    const state = saleor.getState();
    expect(state?.user).toBeFalsy();
    expect(state?.authenticated).toBe(false);
    expect(storage.getAccessToken()).toBeNull();
    expect(storage.getCSRFToken()).toBeNull();
  });

  it("manually refresh external access token", async () => {
    await loginWithExternalPlugin(saleor);
    const state = saleor.getState();
    const previousToken = storage.getAccessToken();
    const csrfToken = storage.getCSRFToken();
    expect(state?.authenticated).toBe(true);

    const { data } = await saleor.auth.refreshExternalToken({
      pluginId: TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID,
      input: JSON.stringify({ csrfToken }),
    });
    const newToken = storage.getAccessToken();
    expect(state?.user?.id).toBeDefined();
    expect(state?.authenticated).toBe(true);
    expect(newToken).toBeTruthy();
    expect(data?.externalRefresh?.token).toEqual(newToken);
    expect(previousToken).not.toEqual(newToken);
  });

  it("verifies if external token is valid", async () => {
    const data = await loginWithExternalPlugin(saleor);
    const csrfToken = storage.getCSRFToken();

    if (data?.externalObtainAccessTokens?.token) {
      const { data: result } = await saleor.auth.verifyExternalToken({
        pluginId: TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID,
        input: JSON.stringify({ csrfToken }),
      });
      expect(result?.externalVerify?.isValid).toBe(true);
    }
  });

  it("caches user data correctly in steps sequence: login, logout, login with external plugin", async () => {
    let state;

    await login(saleor);
    state = saleor.getState();
    expect(state?.user?.id).toBeDefined();
    expect(state?.user?.email).toBe(TEST_AUTH_EMAIL);
    expect(state?.authenticated).toBe(true);
    expect(storage.getAccessToken()).toBeTruthy();
    expect(storage.getCSRFToken()).toBeTruthy();
    expect(storage.getAuthPluginId()).toBeNull();

    await saleor.auth.logout();
    state = saleor.getState();
    expect(state?.user?.id).toBeFalsy();
    expect(state?.user?.email).toBeFalsy();
    expect(state?.authenticated).toBe(false);
    expect(storage.getAccessToken()).toBeNull();
    expect(storage.getCSRFToken()).toBeNull();
    expect(storage.getAuthPluginId()).toBeNull();

    await loginWithExternalPlugin(saleor);
    state = saleor.getState();
    expect(state?.user?.id).toBeDefined();
    expect(state?.user?.email).toBe(TEST_AUTH_EMAIL);
    expect(state?.authenticated).toBe(true);
    expect(storage.getAccessToken()).toBeTruthy();
    expect(storage.getCSRFToken()).toBeTruthy();
    expect(storage.getAuthPluginId()).toBeTruthy();
  });

  it("caches user data correctly in steps sequence: login with external plugin, logout, login", async () => {
    let state;

    await loginWithExternalPlugin(saleor);
    state = saleor.getState();
    expect(state?.user?.id).toBeDefined();
    expect(state?.user?.email).toBe(TEST_AUTH_EMAIL);
    expect(state?.authenticated).toBe(true);
    expect(storage.getAccessToken()).toBeTruthy();
    expect(storage.getCSRFToken()).toBeTruthy();
    expect(storage.getAuthPluginId()).toBeTruthy();

    await saleor.auth.logout();
    state = saleor.getState();
    expect(state?.user?.id).toBeFalsy();
    expect(state?.user?.email).toBeFalsy();
    expect(state?.authenticated).toBe(false);
    expect(storage.getAccessToken()).toBeNull();
    expect(storage.getCSRFToken()).toBeNull();
    expect(storage.getAuthPluginId()).toBeNull();

    await login(saleor);
    state = saleor.getState();
    expect(state?.user?.id).toBeDefined();
    expect(state?.user?.email).toBe(TEST_AUTH_EMAIL);
    expect(state?.authenticated).toBe(true);
    expect(storage.getAccessToken()).toBeTruthy();
    expect(storage.getCSRFToken()).toBeTruthy();
    expect(storage.getAuthPluginId()).toBeNull();
  });
});
