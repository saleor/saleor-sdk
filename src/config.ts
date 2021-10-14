export const API_URI = process.env.API_URI || "http://localhost:8000/graphql/";
export const TEST_AUTH_EMAIL = process.env.TEST_AUTH_EMAIL || "";
export const TEST_AUTH_PASSWORD = process.env.TEST_AUTH_PASSWORD || "";
export const TEST_AUTH_EXTERNAL_LOGIN_CALLBACK =
  "https://localhost:9000/login/callback/";
export const TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID =
  "mirumee.authentication.openidconnect";
