import { graphql } from "msw";
import {
  PasswordChangeMutation,
  PasswordChangeMutationVariables,
} from "../../src/apollo/types";
import { TEST_AUTH_PASSWORD } from "../../src/config";

const passwordChange = () =>
  ({
    passwordChange: {
      __typename: "PasswordChange",
      errors: [],
    },
  } as PasswordChangeMutation);

const passwordChangeError = () =>
  ({
    passwordChange: {
      __typename: "PasswordChange",
      errors: [
        {
          message: "Unable to change password",
          code: "GRAPHQL_ERROR",
          field: null,
        },
      ],
    },
  } as PasswordChangeMutation);

export const passwordChangeHandler = graphql.mutation<
  PasswordChangeMutation,
  PasswordChangeMutationVariables
>("passwordChange", (req, res, ctx) => {
  const { oldPassword } = req.variables;

  if (oldPassword === TEST_AUTH_PASSWORD) {
    return res(ctx.data(passwordChange()));
  }

  return res(ctx.data(passwordChangeError()));
});
