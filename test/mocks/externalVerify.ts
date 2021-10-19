import { ExternalVerifyMutation } from "../../src/apollo/types";

export const mockExternalVerify = () =>
  ({
    externalVerify: {
      __typename: "ExternalVerify",
      isValid: true,
      user: {
        id: "VXNlcjoxMDMz",
        email: "testers+dashboard@saleor.io",
        firstName: "",
        lastName: "",
        isStaff: true,
        metadata: [],
        __typename: "User",
      },
      errors: [],
    },
  } as ExternalVerifyMutation);

export const mockExternalVerifyError = () =>
  ({
    externalVerify: {
      __typename: "ExternalVerify",
      isValid: false,
      errors: [
        {
          message: "Token invalid",
          code: "INVALID",
        },
      ],
    },
  } as ExternalVerifyMutation);
