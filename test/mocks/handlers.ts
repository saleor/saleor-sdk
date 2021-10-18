import { graphql } from "msw";
import {
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_CODE,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_STATE,
} from "../../src/config";

export const handlers = [
  graphql.mutation("ExternalObtainAccessTokens", (req, res, ctx) => {
    const { pluginId, input } = req.variables;

    const parsedInput = JSON.parse(input);

    if (
      pluginId === TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID &&
      parsedInput.code === TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_CODE &&
      parsedInput.state === TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_STATE
    ) {
      return res(
        ctx.data({
          externalObtainAccessTokens: {
            __typename: "ExternalObtainAccessTokens",
            token: "accessToken",
            csrfToken: "refreshToken",
            user: {
              __typename: "User",
              id: "BUby6vruu6fwfs",
              email: "adamsmith@example.com",
              firstName: "Adam",
              lastName: "Smith",
              isStaff: false,
              userPermissions: [],
              avatar: null,
            },
            errors: [],
          },
        })
      );
    }

    return res(
      ctx.errors([
        {
          message: "Invalid code or state",
          locations: [{ line: 1, column: 1 }],
          path: ["externalObtainAccessTokens"],
        },
      ])
    );

    // const originalResponse = await ctx.fetch(req);
    // const originalResponseData = await originalResponse.json();
    // return res(ctx.data(originalResponseData));
  }),
];
