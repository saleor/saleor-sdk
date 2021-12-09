import { accountUpdateHandler } from "./accountUpdate";
import { externalAuthenticationUrlHandler } from "./externalAuthenticationUrl";
import { externalLogoutHandler } from "./externalLogout";
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
  tokenExpirationPeriod?: number;
}

export const mockHandlers = ({
  tokenExpirationPeriod,
}: MockHandlersOpts = {}) => [
  // Auth - Internal login
  loginHandler(tokenExpirationPeriod),
  refreshTokenHandler(tokenExpirationPeriod),
  verifyTokenHandler,
  requestPasswordResetHandler,
  passwordChangeHandler,
  registerHandler,

  // Auth - External login
  externalAuthenticationUrlHandler,
  externalObtainAccessTokensHandler(tokenExpirationPeriod),
  externalRefreshHandler(tokenExpirationPeriod),
  externalVerifyHandler,
  externalLogoutHandler,

  // User
  accountUpdateHandler,
];
