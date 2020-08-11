import APIProxy from "./APIProxy";
import setupAPI from "../../testUtils/api";

const { client, cache } = setupAPI();
const proxy = new APIProxy(client);

test("Can log in", () => {
  return proxy
    .signIn({
      email: "admin@example.com",
      password: "admin",
    })
    .then(result => {
      expect(result?.data?.token?.length).toBeGreaterThan(1);
      expect(result?.data?.errors.length).toBe(0);
    });
});

test("Returns error if credentials are invalid", () => {
  return proxy
    .signIn({
      email: "admin@example.com",
      password: "admin1",
    })
    .catch(error => {
      expect(error?.extraInfo.userInputErrors.length).toBe(1);
    });
});

test("Does not cache mutations", done => {
  proxy
    .signIn({
      email: "admin@example.com",
      password: "admin",
    })
    .then(() =>
      proxy.setPassword({
        email: "admin@example.com",
        password: "admin12345678",
        token: "5hr-73a06b70fd6ad8ab3913",
      })
    )
    .catch(() =>
      proxy.setPasswordChange({
        newPassword: "admin12345678",
        oldPassword: "admin12345678",
      })
    )
    .catch(() => {
      const extractedCache = cache.extract();
      expect(extractedCache.ROOT_MUTATION).toBeUndefined();

      done();
    });
});
