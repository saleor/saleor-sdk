import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setupPolly } from "setup-polly-jest";
import { Polly } from "@pollyjs/core";
import fetch from "cross-fetch";
import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import FSPersister from "@pollyjs/persister-fs";
import path from "path";

import { SaleorSDK } from "../src/core";
import { API_URI } from "../config";

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

export const setupRecording = () =>
  setupPolly({
    adapterOptions: {
      fetch: {
        context: global,
      },
    },
    adapters: ["node-http"],
    matchRequestsBy: {
      headers: {
        exclude: ["authorization", "host"],
      },
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
      body(body, req) {
        if (req.recordingName === "auth api/can register") {
          // Custom rule which prevents polly recording on every run due to
          // changing email address.
          const json = JSON.parse(body);
          delete json.variables.email;
          return JSON.stringify(json);
        }
        return body;
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

export const setupAPI = () => {
  const httpLink = new HttpLink({
    fetch,
    uri: API_URI,
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
  });
  const saleor = SaleorSDK(client);

  return { apiUrl: API_URI, client, saleor };
};
