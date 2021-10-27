import { accountUpdateHandler } from "./accountUpdate";
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

export interface MockHandlersOpts {
  tokenRefreshTime?: number;
}

export const mockHandlers = ({ tokenRefreshTime }: MockHandlersOpts = {}) => [
  // Auth - Internal login
  loginHandler(tokenRefreshTime),
  refreshTokenHandler(tokenRefreshTime),
  verifyTokenHandler,
  requestPasswordResetHandler,
  passwordChangeHandler,
  registerHandler,

  // Auth - External login
  externalAuthenticationUrlHandler,
  externalObtainAccessTokensHandler(tokenRefreshTime),
  externalRefreshHandler(tokenRefreshTime),
  externalVerifyHandler,

  // User
  accountUpdateHandler,
];
