import { graphql } from "msw";
import {
  VerifyTokenMutation,
  VerifyTokenMutationVariables,
} from "../../src/apollo/types";
import { TEST_AUTH_EMAIL } from "../../src/config";
import { verifyTestToken } from "../utils";

const verifyToken = () =>
  ({
    tokenVerify: {
      __typename: "VerifyToken",
      isValid: true,
      payload: null,
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
  } as VerifyTokenMutation);

const verifyTokenError = () =>
  ({
    tokenVerify: {
      __typename: "VerifyToken",
      isValid: false,
      user: null,
      payload: null,
      errors: [
        {
          message: "Token invalid",
          code: "INVALID",
          field: null,
        },
      ],
    },
  } as VerifyTokenMutation);

export const verifyTokenHandler = graphql.mutation<
  VerifyTokenMutation,
  VerifyTokenMutationVariables
>("verifyToken", (req, res, ctx) => {
  const { token } = req.variables;

  const isTokenValid = verifyTestToken(token || "");

  if (isTokenValid) {
    return res(ctx.data(verifyToken()));
  }

  return res(ctx.data(verifyTokenError()));
});
