import { graphql } from "msw";
import { LoginMutation, LoginMutationVariables } from "../../src/apollo/types";
import { TEST_AUTH_EMAIL, TEST_AUTH_PASSWORD } from "../../src/config";
import { createTestToken, testCsrfToken } from "../utils";

const login = () =>
  ({
    tokenCreate: {
      __typename: "CreateToken",
      token: createTestToken(),
      csrfToken: testCsrfToken,
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
        __typename: "User",
      },
      errors: [],
    },
  } as LoginMutation);

const loginError = () =>
  ({
    tokenCreate: {
      __typename: "CreateToken",
      csrfToken: null,
      token: null,
      user: null,
      errors: [
        {
          message: "Unable to login",
          code: "GRAPHQL_ERROR",
          field: null,
        },
      ],
    },
  } as LoginMutation);

export const loginHandler = graphql.mutation<
  LoginMutation,
  LoginMutationVariables
>("login", (req, res, ctx) => {
  const { email, password } = req.variables;

  if (email === TEST_AUTH_EMAIL && password === TEST_AUTH_PASSWORD) {
    return res(ctx.data(login()));
  }

  return res(ctx.data(loginError()));
});
