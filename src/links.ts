import { BatchHttpLink } from "apollo-link-batch-http";
import { RetryLink } from "apollo-link-retry";

import { authLink, invalidTokenLinkWithTokenHandler } from "./auth";

interface SaleorLinksConfig {
  apiUrl: string;
  tokenExpirationCallback: () => void;
}

export const createSaleorLinks = ({
  apiUrl,
  tokenExpirationCallback,
}: SaleorLinksConfig) => {
  const invalidTokenLink = invalidTokenLinkWithTokenHandler(
    tokenExpirationCallback
  );

  return [
    invalidTokenLink,
    authLink,
    new RetryLink(),
    new BatchHttpLink({ uri: apiUrl }),
  ];
};
