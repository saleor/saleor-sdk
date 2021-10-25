import { graphql } from "msw";
import {
  ExternalVerifyMutation,
  ExternalVerifyMutationVariables,
} from "../../src/apollo/types";
import {
  TEST_AUTH_EMAIL,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID,
} from "../../src/config";
import { verifyTestToken } from "../utils";

const externalVerify = () =>
  ({
    externalVerify: {
      __typename: "ExternalVerify",
      isValid: true,
      verifyData: null,
      user: {
        id: "VXNlcjoxMDMz",
        email: TEST_AUTH_EMAIL,
        firstName: "",
        lastName: "",
        isStaff: true,
        metadata: [],
        addresses: [],
        defaultBillingAddress: null,
        defaultShippingAddress: null,
        userPermissions: [],
        __typename: "User",
      },
      errors: [],
    },
  } as ExternalVerifyMutation);

const externalVerifyError = () =>
  ({
    externalVerify: {
      __typename: "ExternalVerify",
      isValid: false,
      user: null,
      verifyData: null,
      errors: [
        {
          message: "Token invalid",
          code: "INVALID",
          field: null,
        },
      ],
    },
  } as ExternalVerifyMutation);

export const externalVerifyHandler = graphql.mutation<
  ExternalVerifyMutation,
  ExternalVerifyMutationVariables
>("externalVerify", (req, res, ctx) => {
  const { pluginId, input } = req.variables;
  const token = req.headers.get("authorization-bearer") || "";
  const parsedInput = JSON.parse(input);

  const isTokenValid = verifyTestToken(token);

  if (
    pluginId === TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID &&
    !!parsedInput.csrfToken &&
    isTokenValid
  ) {
    return res(ctx.data(externalVerify()));
  }

  return res(ctx.data(externalVerifyError()));
});
