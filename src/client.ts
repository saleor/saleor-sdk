import { ApolloCache } from "apollo-cache";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";

export function createSaleorClient(
  cache: ApolloCache<any>,
  links: ApolloLink[]
) {
  return new ApolloClient({
    cache,
    link: ApolloLink.from(links),
  });
}
