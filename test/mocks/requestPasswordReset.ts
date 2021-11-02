import { graphql } from "msw";
import {
  RequestPasswordResetMutation,
  RequestPasswordResetMutationVariables,
} from "../../src/apollo/types";
import { TEST_AUTH_EMAIL, TEST_AUTH_SECOND_EMAIL } from "../../src/config";

const requestPasswordReset = () =>
  ({
    requestPasswordReset: {
      __typename: "RequestPasswordReset",
      errors: [],
    },
  } as RequestPasswordResetMutation);

const requestPasswordResetError = () =>
  ({
    requestPasswordReset: {
      __typename: "RequestPasswordReset",
      errors: [
        {
          message: "Unable to reset password",
          code: "GRAPHQL_ERROR",
          field: null,
        },
      ],
    },
  } as RequestPasswordResetMutation);

export const requestPasswordResetHandler = graphql.mutation<
  RequestPasswordResetMutation,
  RequestPasswordResetMutationVariables
>("requestPasswordReset", (req, res, ctx) => {
  const { email } = req.variables;

  if (email === TEST_AUTH_EMAIL || email === TEST_AUTH_SECOND_EMAIL) {
    return res(ctx.data(requestPasswordReset()));
  }

  return res(ctx.data(requestPasswordResetError()));
});
