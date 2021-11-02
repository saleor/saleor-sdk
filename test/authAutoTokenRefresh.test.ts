import { setupMockServer, setupSaleorClient } from "./setup";
import {
  TEST_AUTH_EMAIL,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_CODE,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_STATE,
  TEST_AUTH_PASSWORD,
} from "../src/config";
import { storage } from "../src/core/storage";
import { loginWithExternalPlugin } from "./utils";
import { SaleorClient } from "../src/core";

interface RefreshTokenOnDelayedExample {
  previousToken: string | null;
  newToken: string | null;
}

const testRefreshTokenOnDelayedExampleRequest = async (
  saleor: SaleorClient,
  delayInSeconds: number
): Promise<RefreshTokenOnDelayedExample> => {
  // Check if initially logged in
  const state = saleor.getState();
  const previousToken = storage.getAccessToken();
  expect(state?.user?.id).toBeDefined();
  expect(state?.user?.email).toBe(TEST_AUTH_EMAIL);
  expect(state?.authenticated).toBe(true);

  // Wait until token can be refreshed
  await new Promise(r => setTimeout(r, delayInSeconds * 1000));

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

  return {
    previousToken,
    newToken,
  };
};

jest.setTimeout(15000);

describe("auth api auto token refresh", () => {
  const tokenExpirationPeriod = 6;
  const tokenExpirationPeriodCheckWait = tokenExpirationPeriod + 0.1;
  const tokenRefreshTimeSkew = 3;
  const tokenRefreshTimeSkewCheckWait = tokenRefreshTimeSkew + 0.1;
  const noCheckWait = 0;

  const saleor = setupSaleorClient({
    tokenRefreshTimeSkew,
  });
  const mockServer = setupMockServer({
    tokenExpirationPeriod,
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

  it("does not refresh access token before another request when refresh time skew not reached", async () => {
    await saleor.auth.login({
      email: TEST_AUTH_EMAIL,
      password: TEST_AUTH_PASSWORD,
    });
    const {
      previousToken,
      newToken,
    } = await testRefreshTokenOnDelayedExampleRequest(saleor, noCheckWait);
    expect(previousToken).toEqual(newToken);
  });

  it("does not refresh external access token before another request when refresh time skew not reached", async () => {
    await loginWithExternalPlugin(saleor, {
      code: TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_CODE,
      state: TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_STATE,
    });
    const {
      previousToken,
      newToken,
    } = await testRefreshTokenOnDelayedExampleRequest(saleor, noCheckWait);
    expect(previousToken).toEqual(newToken);
  });

  it("automatically refresh access token before another request when refresh time skew reached", async () => {
    await saleor.auth.login({
      email: TEST_AUTH_EMAIL,
      password: TEST_AUTH_PASSWORD,
    });
    const {
      previousToken,
      newToken,
    } = await testRefreshTokenOnDelayedExampleRequest(
      saleor,
      tokenRefreshTimeSkewCheckWait
    );
    expect(previousToken).not.toEqual(newToken);
  });

  it("automatically refresh external access token before another request when refresh time skew reached", async () => {
    await loginWithExternalPlugin(saleor, {
      code: TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_CODE,
      state: TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_STATE,
    });
    const {
      previousToken,
      newToken,
    } = await testRefreshTokenOnDelayedExampleRequest(
      saleor,
      tokenRefreshTimeSkewCheckWait
    );
    expect(previousToken).not.toEqual(newToken);
  });

  it("automatically refresh access token before another request when expiration period reached", async () => {
    await saleor.auth.login({
      email: TEST_AUTH_EMAIL,
      password: TEST_AUTH_PASSWORD,
    });
    const {
      previousToken,
      newToken,
    } = await testRefreshTokenOnDelayedExampleRequest(
      saleor,
      tokenExpirationPeriodCheckWait
    );
    expect(previousToken).not.toEqual(newToken);
  });

  it("automatically refresh external access token before another request when expiration period reached", async () => {
    await loginWithExternalPlugin(saleor, {
      code: TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_CODE,
      state: TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_STATE,
    });
    const {
      previousToken,
      newToken,
    } = await testRefreshTokenOnDelayedExampleRequest(
      saleor,
      tokenExpirationPeriodCheckWait
    );
    expect(previousToken).not.toEqual(newToken);
  });
});
