import { ExternalObtainAccessTokensMutation } from "../../src/apollo/types";
import { createToken, testCsrfToken } from "../utils";

export const mockExternalObtainAccessTokens = () =>
  ({
    externalObtainAccessTokens: {
      __typename: "ExternalObtainAccessTokens",
      token: createToken(),
      // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzQ2MzYzMDAsImlzcyI6Im1hc3Rlci5zdGFnaW5nLnNhbGVvci5jbG91ZCIsIm93bmVyIjoic2FsZW9yIiwiZXhwIjoxNjM0NjM2NjAwLCJ0b2tlbiI6Ik0yaXJGbXpWQVNSMyIsImVtYWlsIjoidGVzdGVycytkYXNoYm9hcmRAc2FsZW9yLmlvIiwidHlwZSI6ImFjY2VzcyIsInVzZXJfaWQiOiJWWE5sY2pveE1ETXoiLCJpc19zdGFmZiI6dHJ1ZX0.XDO2-_pISP5ouclcchu-6fNeBnTbyYvZ86UIJBOM0lw",
      csrfToken: testCsrfToken,
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
  } as ExternalObtainAccessTokensMutation);

export const mockExternalObtainAccessTokensError = () =>
  ({
    externalObtainAccessTokens: {
      __typename: "ExternalObtainAccessTokens",
      errors: [
        {
          message: "Invalid code or state",
          code: "INVALID",
        },
      ],
    },
  } as ExternalObtainAccessTokensMutation);
