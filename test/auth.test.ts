import { setupRecording, setupAPI, setupPollyMiddleware } from "./setup";
import { readUserCache } from "./utils";
import { saleorAuthToken } from "../src/core/constants";
import { API_URI, TEST_AUTH_EMAIL, TEST_AUTH_PASSWORD } from "../src/config";

describe("auth api", () => {
  // Auth tests have custom recording matcher setup in the ./setup.ts.
  // Thanks to that, changing user email and password will not trigger
  // test to fail.
  const context = setupRecording();
  const { client, saleor } = setupAPI();

  beforeEach(() => {
    const { server } = context.polly;
    setupPollyMiddleware(server);
  });

  it("can login", async () => {
    const { data } = await saleor.auth.login({
      email: TEST_AUTH_EMAIL,
      password: TEST_AUTH_PASSWORD,
    });
    expect(data?.tokenCreate?.user?.id).toBeDefined();
    expect(data?.tokenCreate?.token).toBeDefined();
    expect(data?.tokenCreate?.errors).toHaveLength(0);
    expect(localStorage.getItem(saleorAuthToken)).not.toBeNull();
  });

  it("login caches user data", async () => {
    await saleor.auth.login({
      email: TEST_AUTH_EMAIL,
      password: TEST_AUTH_PASSWORD,
    });
    const cache = readUserCache(client);
    expect(cache?.user).toBeDefined();
    expect(cache?.token).toBeDefined();
    expect(cache?.authenticated).toBe(true);
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

  it("refreshes the auth token", async () => {
    await saleor.auth.login({
      email: TEST_AUTH_EMAIL,
      password: TEST_AUTH_PASSWORD,
    });
    const cache = readUserCache(client);
    const previousToken = cache?.token;
    expect(cache?.authenticated).toBe(true);

    const { data } = await saleor.auth.refreshToken();
    const newToken = readUserCache(client)?.token;
    expect(cache?.authenticated).toBe(true);
    expect(data?.tokenRefresh?.token === newToken);
    expect(newToken !== previousToken);
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
    await saleor.auth.login({
      email: TEST_AUTH_EMAIL,
      password: TEST_AUTH_PASSWORD,
    });
    await saleor.auth.logout();
    const cache = readUserCache(client);
    expect(cache?.user).toBeFalsy();
    expect(cache?.authenticated).toBe(false);
    expect(cache?.token).toBeNull();
    expect(localStorage.getItem(saleorAuthToken)).toBeNull();
  });

  it("verifies if token is valid", async () => {
    const { data } = await saleor.auth.login({
      email: TEST_AUTH_EMAIL,
      password: TEST_AUTH_PASSWORD,
    });

    if (data?.tokenCreate?.token) {
      const { data: result } = await saleor.auth.verifyToken(
        data.tokenCreate.token
      );
      expect(result?.tokenVerify?.isValid).toBe(true);
    }
  });

  it("sends request to reset password", async () => {
    const { data } = await saleor.auth.requestPasswordReset({
      channel: saleor.config.channel,
      email: TEST_AUTH_EMAIL,
      redirectUrl: API_URI,
    });
    expect(data?.requestPasswordReset?.errors).toHaveLength(0);
  });

  it("changes user's password", async () => {
    const { data } = await saleor.auth.changePassword({
      oldPassword: TEST_AUTH_PASSWORD,
      newPassword: TEST_AUTH_PASSWORD,
    });
    expect(data?.passwordChange?.errors).toHaveLength(0);
  });
});
