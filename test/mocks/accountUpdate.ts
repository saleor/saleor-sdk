import { graphql } from "msw";
import {
  AccountUpdateMutation,
  AccountUpdateMutationVariables,
} from "../../src/apollo/types";
import { TEST_AUTH_EMAIL } from "../../src/config";
import { verifyAuthorization } from "../utils";

const accountUpdate = () =>
  ({
    accountUpdate: {
      __typename: "AccountUpdate",
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
  } as AccountUpdateMutation);

const accountUpdateError = () =>
  ({
    accountUpdate: {
      __typename: "AccountUpdate",
      user: null,
      errors: [
        {
          message: "Account cannot be updated",
          code: "GRAPHQL_ERROR",
          field: null,
        },
      ],
    },
  } as AccountUpdateMutation);

export const accountUpdateHandler = graphql.mutation<
  AccountUpdateMutation,
  AccountUpdateMutationVariables
>("accountUpdate", (req, res, ctx) => {
  const { input } = req.variables;

  const isAuthorised = verifyAuthorization(req);

  if (!!input && isAuthorised) {
    return res(ctx.data(accountUpdate()));
  }

  return res(ctx.data(accountUpdateError()));
});
