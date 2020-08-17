import { BatchHttpLink } from "apollo-link-batch-http";
// import ApolloClient from "apollo-client";
// eslint-disable-next-line import/no-extraneous-dependencies
import { setupPolly } from "setup-polly-jest";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Polly } from "@pollyjs/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import fetch from "node-fetch";
// eslint-disable-next-line import/no-extraneous-dependencies
import NodeHttpAdapter from "@pollyjs/adapter-node-http";
// eslint-disable-next-line import/no-extraneous-dependencies
import FSPersister from "@pollyjs/persister-fs";
import path from "path";
import { RetryLink } from "apollo-link-retry";
import {
  createSaleorCache,
  createSaleorClient,
  invalidTokenLinkWithTokenHandler,
  authLink,
} from "../src/index";

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

async function setupAPI() {
  setupPolly({
    adapterOptions: {
      fetch: {
        context: global,
      },
    },
    adapters: ["node-http"],
    matchRequestsBy: {
      headers: false,
      url: {
        hash: false,
        hostname: false,
        password: false,
        pathname: false,
        port: false,
        protocol: false,
        query: false,
        username: false,
      },
    },
    persister: "fs",
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, "../recordings"),
      },
    },
    recordIfMissing: true,
  });

  const cache = await createSaleorCache({ persistCache: true });
  const apiUrl = process.env.API_URL || "http://localhost:8000/graphql/";
  const invalidTokenLink = invalidTokenLinkWithTokenHandler(() => null);
  const links = [
    invalidTokenLink,
    authLink,
    new RetryLink(),
    new BatchHttpLink({
      // @ts-ignore
      fetch,
      uri: apiUrl,
    }),
  ];
  const client = createSaleorClient(cache, links);

  return { apiUrl, cache, client };
}

export default setupAPI;
