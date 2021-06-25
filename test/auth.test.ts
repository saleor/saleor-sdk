import { setupRecording, setupAPI } from "../test/setup";
import { SaleorSDK } from "../src/core";
import { TEST_AUTH_EMAIL, TEST_AUTH_PASSWORD } from "../config";

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
    const { data } = await saleor.auth.login(
      TEST_AUTH_EMAIL as string,
      TEST_AUTH_PASSWORD as string
    );
    expect(data.tokenCreate.user.id).toBeDefined();
    expect(data.tokenCreate.token).toBeDefined();
    expect(data.tokenCreate.errors).toHaveLength(0);
  });

  it("will throw an error if credentials are invalid", async () => {
    const { data } = await saleor.auth.login("sdk@example.com", "test");
    expect(data.tokenCreate.user).toBeFalsy();
    expect(data.tokenCreate.token).toBeFalsy();
    expect(data.tokenCreate.errors).not.toHaveLength(0);
  });

  it("can logout", async () => {
    await saleor.auth.logout();
    // TODO: write expect calls when ready
  });
});
