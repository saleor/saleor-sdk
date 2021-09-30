import {
  setupRecording,
  setupSaleorClient,
  setupPollyMiddleware,
} from "./setup";
import { API_URI, TEST_AUTH_EMAIL, TEST_AUTH_PASSWORD } from "../src/config";
import { CountryCode } from "../src/apollo/types";
// import { storage } from "../src/core/storage";

describe("user api", () => {
  const context = setupRecording();
  const saleor = setupSaleorClient();

  const testAddress = {
    firstName: "Test name",
    lastName: "Test lastname",
    streetAddress1: "Test street address",
    city: "Test city",
    postalCode: "12-345",
    country: "PL" as CountryCode,
  };

  // beforeAll(async () => {
  //   const email = `register+${Date.now().toString()}@example.com`;
  //   const password = "register";

  //   await saleor.auth.register({
  //     email,
  //     password,
  //     redirectUrl: API_URI,
  //   });
  // });

  beforeEach(async () => {
    const { server } = context.polly;
    setupPollyMiddleware(server);

    await saleor.auth.login({
      email: TEST_AUTH_EMAIL,
      password: TEST_AUTH_PASSWORD,
    });
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

  it.skip("updates the user account address", async () => {
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
      const state = saleor.getState();
      if (data?.accountAddressUpdate?.user?.addresses?.length) {
        expect(
          data?.accountAddressUpdate?.user?.addresses[index]?.firstName
        ).toBe(newTestName);
        expect(state?.user?.addresses?.[index]?.firstName).toBe(newTestName);
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

  it.skip("deletes user address", async () => {
    const { data: newAddress } = await saleor.user.createAccountAddress({
      input: testAddress,
    });
    if (newAddress?.accountAddressCreate?.user?.addresses?.length) {
      const index =
        newAddress?.accountAddressCreate?.user?.addresses.length - 1;
      const addressId =
        newAddress?.accountAddressCreate?.user?.addresses[index].id;
      const { data } = await saleor.user.deleteAccountAddress(addressId);
      const state = saleor.getState();
      expect(data?.accountAddressDelete?.user?.addresses).toHaveLength(index);
      expect(state?.user?.addresses).toHaveLength(index);
      expect(data?.accountAddressDelete?.errors).toHaveLength(0);
    }
  });
});
