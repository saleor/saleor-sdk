import { setupMockServer, setupSaleorClient } from "./setup";
import { TEST_AUTH_EMAIL } from "../src/config";
import { storage } from "../src/core/storage";
import { login, loginWithExternalPlugin } from "./utils";

jest.setTimeout(15000);

describe("auth api auto token refresh", () => {
  const tokenRefreshTime = 5;
  const tokenRefreshTimeSkew = tokenRefreshTime - 2;
  const tokenRefreshTimeCheckWait = tokenRefreshTime + 1;
  const saleor = setupSaleorClient({
    tokenRefreshTimeSkew,
  });
  const mockServer = setupMockServer({
    tokenRefreshTime,
  });

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

  it("automatically refreshes auth token before another request when expiration time skew reached", async () => {
    // Login to obtain token
    await login(saleor);
    const state = saleor.getState();
    const previousToken = storage.getAccessToken();
    expect(state?.user?.id).toBeDefined();
    expect(state?.authenticated).toBe(true);

    // Wait until token expires
    await new Promise(r => setTimeout(r, tokenRefreshTimeCheckWait * 1000));

    // Check that token was not refreshed before making another request
    const unchangedPreviousToken = storage.getAccessToken();
    expect(previousToken).toEqual(unchangedPreviousToken);

    // Make another request
    const { data } = await saleor.user.updateAccount({
      input: {
        firstName: state?.user?.firstName,
        lastName: state?.user?.lastName,
      },
    });

    // Check that token was refreshed with another request which did not return errors
    expect(data?.accountUpdate?.errors).toHaveLength(0);
    const newToken = storage.getAccessToken();
    expect(state?.user?.id).toBeDefined();
    expect(state?.authenticated).toBe(true);
    expect(newToken).toBeTruthy();
    expect(previousToken).not.toEqual(newToken);
  });

  it("automatically refresh external access token before another request when expiration time skew reached", async () => {
    // Login to obtain token
    await loginWithExternalPlugin(saleor);
    const state = saleor.getState();
    const previousToken = storage.getAccessToken();
    expect(state?.user?.id).toBeDefined();
    expect(state?.user?.email).toBe(TEST_AUTH_EMAIL);
    expect(state?.authenticated).toBe(true);

    // Wait until token expires
    await new Promise(r => setTimeout(r, tokenRefreshTimeCheckWait * 1000));

    // Check that token was not refreshed before making another request
    const unchangedPreviousToken = storage.getAccessToken();
    expect(previousToken).toEqual(unchangedPreviousToken);

    // Make another request
    const { data } = await saleor.user.updateAccount({
      input: {
        firstName: state?.user?.firstName,
        lastName: state?.user?.lastName,
      },
    });

    // Check that token was refreshed with another request which did not return errors
    expect(data?.accountUpdate?.errors).toHaveLength(0);
    const newToken = storage.getAccessToken();
    expect(state?.user?.id).toBeDefined();
    expect(state?.user?.email).toBe(TEST_AUTH_EMAIL);
    expect(state?.authenticated).toBe(true);
    expect(newToken).toBeTruthy();
    expect(previousToken).not.toEqual(newToken);
  });
});
