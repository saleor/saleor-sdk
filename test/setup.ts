import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { Context, setupPolly } from "setup-polly-jest";
import { Polly } from "@pollyjs/core";
import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import FSPersister from "@pollyjs/persister-fs";
import path from "path";

import { API_URI } from "../src/config";
import { SaleorClient, createSaleorClient } from "../src/core";
import { removeBlacklistedVariables } from "./utils";

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

export const setupRecording = (): Context =>
  setupPolly({
    adapterOptions: {
      fetch: {
        context: global,
      },
    },
    adapters: ["node-http"],
    matchRequestsBy: {
      headers: {
        exclude: ["authorization", "host", "content-length"],
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
      body(body): string {
        const json = JSON.parse(body);
        const filteredJson = removeBlacklistedVariables(json);

        return JSON.stringify(filteredJson);
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

export const setupAPI = (): {
  apiUrl: string;
  client: ApolloClient<NormalizedCacheObject>;
  saleor: SaleorClient;
} => {
  const saleor = createSaleorClient({
    apiUrl: API_URI,
    channel: "default-channel",
  });

  return { apiUrl: API_URI, client: saleor._internal.apolloClient, saleor };
};
