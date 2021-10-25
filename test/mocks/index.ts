import { externalAuthenticationUrlHandler } from "./externalAuthenticationUrl";
import { externalObtainAccessTokensHandler } from "./externalObtainAccessTokens";
import { externalRefreshHandler } from "./externalRefresh";
import { externalVerifyHandler } from "./externalVerify";
import { loginHandler } from "./login";
import { passwordChangeHandler } from "./passwordChange";
import { refreshTokenHandler } from "./refreshToken";
import { registerHandler } from "./register";
import { requestPasswordResetHandler } from "./requestPasswordReset";
import { verifyTokenHandler } from "./verifyToken";

export const mockHandlers = [
  // Internal login
  loginHandler,
  refreshTokenHandler,
  verifyTokenHandler,
  requestPasswordResetHandler,
  passwordChangeHandler,
  registerHandler,

  // External login
  externalAuthenticationUrlHandler,
  externalObtainAccessTokensHandler,
  externalRefreshHandler,
  externalVerifyHandler,
];
