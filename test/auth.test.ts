import { setupRecording, setupAPI } from "../test/setup";
import { SaleorSDK } from "../src/core";
import { API_URI, TEST_AUTH_EMAIL, TEST_AUTH_PASSWORD } from "../config";
import { USER } from "../src/apollo/queries";
import { saleorAuthToken } from "../src/apollo/constants";

describe("auth api", () => {
  const context = setupRecording();
  const { client } = setupAPI();
  const saleor = SaleorSDK(client);

  beforeEach(() => {
    const { server } = context.polly;
    server.any().on("beforePersist", (_, recording) => {
      const requestJson = JSON.parse(recording.request.postData.text);
      const responseHeaders = recording.response.headers.filter(
        (el: any) => el.name !== "set-cookie"
      );

      delete requestJson.variables?.email;
      delete requestJson.variables?.password;

      recording.request.postData.text = JSON.stringify(requestJson);
      recording.response.cookies = [];
      recording.response.headers = responseHeaders;
    });
  });

  it("can login", async () => {
    const { data } = await saleor.auth.login({
      email: TEST_AUTH_EMAIL as string,
      password: TEST_AUTH_PASSWORD as string,
    });
    expect(data.tokenCreate.user.id).toBeDefined();
    expect(data.tokenCreate.token).toBeDefined();
    expect(data.tokenCreate.errors).toHaveLength(0);
    expect(localStorage.getItem(saleorAuthToken)).not.toBeNull();
  });

  it("login caches user data", async () => {
    await saleor.auth.login({
      email: TEST_AUTH_EMAIL as string,
      password: TEST_AUTH_PASSWORD as string,
    });
    const cache = client.readQuery({
      query: USER,
    });
    expect(cache.me).not.toBeNull();
    expect(cache.me).toBeDefined();
  });

  it("will throw an error if login credentials are invalid", async () => {
    const { data } = await saleor.auth.login({
      email: "wrong@example.com",
      password: "wrong",
    });
    expect(data.tokenCreate.user).toBeFalsy();
    expect(data.tokenCreate.token).toBeFalsy();
    expect(data.tokenCreate.errors).not.toHaveLength(0);
  });

  it("can register", async () => {
    // This test has custom Polly config (/test/setup.ts) to ignore
    // changing user email in the request.
    // Dynamic user email allows running test multiple times on the
    // same database.
    const { data } = await saleor.auth.register({
      email: `register+${Date.now().toString()}@example.com`,
      password: "register",
      redirectUrl: API_URI,
      channel: "default-channel",
    });
    expect(data.accountRegister.accountErrors).toHaveLength(0);
  });

  it("logout clears user cache", async () => {
    await saleor.auth.login({
      email: TEST_AUTH_EMAIL as string,
      password: TEST_AUTH_PASSWORD as string,
    });
    await saleor.auth.logout();
    const cache = client.readQuery({
      query: USER,
    });
    expect(cache).toBeNull();
    expect(localStorage.getItem(saleorAuthToken)).toBeNull();
  });
});
