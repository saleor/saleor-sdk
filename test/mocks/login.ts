import { graphql } from "msw";
import {
  LoginMutation,
  LoginMutationVariables,
  LoginWithoutDetailsMutation,
  LoginWithoutDetailsMutationVariables,
} from "../../src/apollo/types";
import {
  TEST_AUTH_EMAIL,
  TEST_AUTH_PASSWORD,
  TEST_AUTH_SECOND_EMAIL,
  TEST_AUTH_SECOND_PASSWORD,
} from "../../src/config";
import { createTestToken, testRefreshToken } from "../utils";

const login = (tokenExpirationPeriodInSeconds?: number, email?: string) =>
  ({
    tokenCreate: {
      __typename: "CreateToken",
      token: createTestToken(tokenExpirationPeriodInSeconds),
      refreshToken: testRefreshToken,
      user: {
        id: "VXNlcjoxMDMz",
        email: email,
        firstName: "",
        lastName: "",
        isStaff: true,
        metadata: [],
        addresses: [],
        accessibleChannels: [],
        restrictedAccessToChannels: false,
        defaultBillingAddress: null,
        defaultShippingAddress: null,
        __typename: "User",
      },
      errors: [],
    },
  } as LoginMutation);

const loginWithoutDetails = (
  tokenExpirationPeriodInSeconds?: number,
  email?: string
) =>
  ({
    tokenCreate: {
      __typename: "CreateToken",
      token: createTestToken(tokenExpirationPeriodInSeconds),
      refreshToken: testRefreshToken,
      user: {
        id: "VXNlcjoxMDMz",
        email: email,
        firstName: "",
        lastName: "",
        isStaff: true,
        __typename: "User",
      },
      errors: [],
    },
  } as LoginWithoutDetailsMutation);

const loginError = () =>
  ({
    tokenCreate: {
      __typename: "RefreshToken",
      refreshToken: null,
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

export const loginHandler = (tokenExpirationPeriodInSeconds?: number) =>
  graphql.mutation<LoginMutation, LoginMutationVariables>(
    "login",
    (req, res, ctx) => {
      const { email, password } = req.variables;

      if (email === TEST_AUTH_EMAIL && password === TEST_AUTH_PASSWORD) {
        return res(
          ctx.data(login(tokenExpirationPeriodInSeconds, TEST_AUTH_EMAIL))
        );
      }
      if (
        email === TEST_AUTH_SECOND_EMAIL &&
        password === TEST_AUTH_SECOND_PASSWORD
      ) {
        return res(
          ctx.data(
            login(tokenExpirationPeriodInSeconds, TEST_AUTH_SECOND_EMAIL)
          )
        );
      }

      return res(ctx.data(loginError()));
    }
  );

export const loginHandlerWithoutDetails = (
  tokenExpirationPeriodInSeconds?: number
) =>
  graphql.mutation<
    LoginWithoutDetailsMutation,
    LoginWithoutDetailsMutationVariables
  >("loginWithoutDetails", (req, res, ctx) => {
    const { email, password } = req.variables;

    if (email === TEST_AUTH_EMAIL && password === TEST_AUTH_PASSWORD) {
      return res(
        ctx.data(
          loginWithoutDetails(tokenExpirationPeriodInSeconds, TEST_AUTH_EMAIL)
        )
      );
    }
    if (
      email === TEST_AUTH_SECOND_EMAIL &&
      password === TEST_AUTH_SECOND_PASSWORD
    ) {
      return res(
        ctx.data(
          loginWithoutDetails(
            tokenExpirationPeriodInSeconds,
            TEST_AUTH_SECOND_EMAIL
          )
        )
      );
    }

    return res(ctx.data(loginError()));
  });
