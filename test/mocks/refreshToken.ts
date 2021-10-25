import { graphql } from "msw";
import {
  RefreshTokenMutation,
  RefreshTokenMutationVariables,
} from "../../src/apollo/types";
import { createTestToken } from "../utils";

const refreshToken = () =>
  ({
    tokenRefresh: {
      __typename: "RefreshToken",
      token: createTestToken(),
      errors: [],
    },
  } as RefreshTokenMutation);

const refreshTokenError = () =>
  ({
    tokenRefresh: {
      __typename: "RefreshToken",
      token: null,
      errors: [
        {
          message: "Token cannot be refreshed",
          code: "GRAPHQL_ERROR",
          field: null,
        },
      ],
    },
  } as RefreshTokenMutation);

export const refreshTokenHandler = graphql.mutation<
  RefreshTokenMutation,
  RefreshTokenMutationVariables
>("refreshToken", (req, res, ctx) => {
  const { csrfToken } = req.variables;

  if (!!csrfToken) {
    return res(ctx.data(refreshToken()));
  }

  return res(ctx.data(refreshTokenError()));
});
