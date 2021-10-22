import { LoginMutation } from "../../src/apollo/types";
import { createToken, testCsrfToken } from "../utils";

export const mockLogin = () =>
  ({
    tokenCreate: {
      __typename: "CreateToken",
      token: createToken(),
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
  } as LoginMutation);

export const mockLoginError = () =>
  ({
    tokenCreate: {
      __typename: "CreateToken",
      errors: [
        {
          message: "Unable to login",
          code: "GRAPHQL_ERROR",
        },
      ],
    },
  } as LoginMutation);
