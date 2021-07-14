import { setupRecording, setupAPI, setupPollyMiddleware } from "./setup";
import { API_URI, TEST_AUTH_EMAIL, TEST_AUTH_PASSWORD } from "../src/config";
import { USER } from "../src/apollo/queries";
import { CountryCode } from "../src/apollo/types";
import { saleorAuthToken } from "../src/core/constants";

describe("user api", () => {
  const context = setupRecording();
  const { client, saleor } = setupAPI();
  const testAddress = {
    firstName: "Test name",
    lastName: "Test lastname",
    streetAddress1: "Test street address",
    city: "Test city",
    postalCode: "12-345",
    country: "PL" as CountryCode,
  };
  let testUserToken: string;

  beforeAll(async () => {
    const email = `register+${Date.now().toString()}@example.com`;
    const password = "register";

    await saleor.auth.register({
      email,
      password,
      redirectUrl: API_URI,
    });
    const { data } = await saleor.auth.login({
      email: TEST_AUTH_EMAIL,
      password: TEST_AUTH_PASSWORD,
    });
    if (data?.tokenCreate?.token) {
      testUserToken = data?.tokenCreate?.token;
    }
  });

  afterAll(async () => {
    // Delete test user account if still exists
    await saleor.user.accountDelete(testUserToken);
  });

  beforeEach(async () => {
    const { server } = context.polly;
    setupPollyMiddleware(server);
  });

  it("sends a request to delete user account", async () => {
    const { data } = await saleor.user.accountRequestDeletion(API_URI);
    expect(data?.accountRequestDeletion?.errors).toHaveLength(0);
  });

  it("sends request to change user email", async () => {
    const { data } = await saleor.user.requestEmailChange({
      newEmail: `register+${Date.now().toString()}@example.com`,
      password: TEST_AUTH_PASSWORD,
      redirectUrl: API_URI,
    });
    expect(data?.requestEmailChange?.errors).toHaveLength(0);
  });

  it("updates the user first name", async () => {
    const { data } = await saleor.user.updateAccount({
      input: {
        firstName: "",
      },
    });
    expect(data?.accountUpdate?.user?.firstName).toBe("");
    expect(data?.accountUpdate?.errors).toHaveLength(0);
  });

  it("creates the user account address", async () => {
    const { data } = await saleor.user.createAccountAddress({
      input: testAddress,
    });

    if (data?.accountAddressCreate?.user?.addresses?.length) {
      expect(
        data?.accountAddressCreate?.user?.addresses[
          data?.accountAddressCreate?.user?.addresses?.length - 1
        ].firstName === testAddress.firstName
      );
    }
    expect(data?.accountAddressCreate?.errors).toHaveLength(0);
  });

  it("updates the user account address", async () => {
    const { data: newAddress } = await saleor.user.createAccountAddress({
      input: testAddress,
    });
    if (newAddress?.accountAddressCreate?.user?.addresses?.length) {
      const index =
        newAddress?.accountAddressCreate?.user?.addresses.length - 1;
      const newTestName = "New test name";
      const { data } = await saleor.user.updateAccountAddress({
        id: newAddress?.accountAddressCreate?.user?.addresses[index].id,
        input: {
          ...testAddress,
          firstName: newTestName,
        },
      });
      const updatedCachedUser = client.readQuery({
        query: USER,
      });
      if (data?.accountAddressUpdate?.user?.addresses?.length) {
        expect(
          data?.accountAddressUpdate?.user?.addresses[index]?.firstName
        ).toBe(newTestName);
        expect(updatedCachedUser?.me?.addresses[index]?.firstName).toBe(
          newTestName
        );
      }
      expect(data?.accountAddressUpdate?.errors).toHaveLength(0);
    }
  });

  it("sets address as a default billing address", async () => {
    const { data: newAddress } = await saleor.user.createAccountAddress({
      input: testAddress,
    });
    if (newAddress?.accountAddressCreate?.user?.addresses?.length) {
      const index = newAddress.accountAddressCreate.user.addresses.length - 1;
      const addressId =
        newAddress.accountAddressCreate.user.addresses[index].id;
      const oldAddress =
        newAddress.accountAddressCreate.user.defaultBillingAddress;
      const { data } = await saleor.user.setAccountDefaultAddress({
        id: addressId,
        type: "BILLING",
      });
      expect(
        data?.accountSetDefaultAddress?.user?.defaultBillingAddress?.id
      ).toBe(addressId);
      expect(data?.accountSetDefaultAddress?.errors).toHaveLength(0);

      // Set back default testing address
      if (oldAddress) {
        const {
          data: revertedData,
        } = await saleor.user.setAccountDefaultAddress({
          id: oldAddress.id,
          type: "BILLING",
        });
        expect(
          revertedData?.accountSetDefaultAddress?.user?.defaultBillingAddress
            ?.id
        ).toBe(oldAddress?.id);
        expect(revertedData?.accountSetDefaultAddress?.errors).toHaveLength(0);
      }
    }
  });

  it("deletes user address", async () => {
    const { data: newAddress } = await saleor.user.createAccountAddress({
      input: testAddress,
    });
    if (newAddress?.accountAddressCreate?.user?.addresses?.length) {
      const index =
        newAddress?.accountAddressCreate?.user?.addresses.length - 1;
      const addressId =
        newAddress?.accountAddressCreate?.user?.addresses[index].id;
      const { data } = await saleor.user.deleteAccountAddress(addressId);
      const updatedCachedUser = client.readQuery({
        query: USER,
      });
      expect(data?.accountAddressDelete?.user?.addresses).toHaveLength(index);
      expect(updatedCachedUser?.me?.addresses).toHaveLength(index);
      expect(data?.accountAddressDelete?.errors).toHaveLength(0);
    }
  });

  it("deletes user account", async () => {
    const cache = client.readQuery({
      query: USER,
    });
    if (cache.me.tokenCreate?.token) {
      const { data } = await saleor.user.accountDelete(
        cache.me.tokenCreate.token
      );
      expect(data?.accountDelete?.user).toBeNull();
      expect(data?.accountDelete?.errors).toHaveLength(0);
      expect(cache).toBeNull();
      expect(localStorage.getItem(saleorAuthToken)).toBeNull();
    }
  });
});
