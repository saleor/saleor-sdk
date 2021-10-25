import { graphql } from "msw";
import {
  RegisterMutation,
  RegisterMutationVariables,
} from "../../src/apollo/types";

const register = () =>
  ({
    accountRegister: {
      __typename: "AccountRegister",
      requiresConfirmation: true,
      errors: [],
    },
  } as RegisterMutation);

const registerError = () =>
  ({
    accountRegister: {
      __typename: "CreateToken",
      requiresConfirmation: null,
      errors: [
        {
          message: "Unable to register",
          code: "GRAPHQL_ERROR",
          field: null,
        },
      ],
    },
  } as RegisterMutation);

export const registerHandler = graphql.mutation<
  RegisterMutation,
  RegisterMutationVariables
>("register", (req, res, ctx) => {
  const { input } = req.variables;

  if (!!input.email && !!input.password) {
    return res(ctx.data(register()));
  }

  return res(ctx.data(registerError()));
});
