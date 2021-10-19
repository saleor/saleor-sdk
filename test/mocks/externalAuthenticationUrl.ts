import { ExternalAuthenticationUrlMutation } from "../../src/apollo/types";

export const mockExternalAuthenticationUrl = () =>
  ({
    externalAuthenticationUrl: {
      __typename: "ExternalAuthenticationUrl",
      authenticationData: JSON.stringify({
        redirect: "https://example.com/auth",
      }),
      errors: [],
    },
  } as ExternalAuthenticationUrlMutation);

export const mockExternalAuthenticationUrlError = () =>
  ({
    externalAuthenticationUrl: {
      __typename: "ExternalAuthenticationUrl",
      errors: [
        {
          message: "Invalid code or state",
          code: "INVALID",
        },
      ],
    },
  } as ExternalAuthenticationUrlMutation);
