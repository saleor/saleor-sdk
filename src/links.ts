import { BatchHttpLink } from "apollo-link-batch-http";
import { RetryLink } from "apollo-link-retry";

import { authLink, invalidTokenLinkWithTokenHandler } from "./auth";

interface SaleorLinksConfig {
  /**
   * Url of the Saleor GraphQL API.
   */
  apiUrl: string;
  /**
   * Callback called when token expiration error occured in Saleor API response.
   */
  tokenExpirationCallback: () => void;
}

/**
 * Creates list of links for Apollo client.
 * @param linksConfig Configuration for created links.
 */
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
    new BatchHttpLink({ credentials: "include", uri: apiUrl }),
  ];
};
