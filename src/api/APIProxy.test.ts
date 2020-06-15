import { InMemoryCache } from "apollo-cache-inmemory";
import { BatchHttpLink } from "apollo-link-batch-http";
import ApolloClient from "apollo-client";
import { setupPolly } from "setup-polly-jest";
import { Polly } from "@pollyjs/core";
import fetch from "node-fetch";
import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import FSPersister from "@pollyjs/persister-fs";
import path from "path";
import APIProxy from "./APIProxy";

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);
setupPolly({
  adapterOptions: {
    fetch: {
      context: global,
    },
  },
  adapters: ["node-http"],
  persister: "fs",
  persisterOptions: {
    fs: {
      recordingsDir: path.resolve(__dirname, "../recordings"),
    },
  },
  recordIfMissing: true,
});
const cache = new InMemoryCache();
const link = new BatchHttpLink({
  // @ts-ignore
  fetch,
  uri: "http://localhost:8000/graphql/",
});
const apolloClient = new ApolloClient({
  cache,
  link,
});
const proxy = new APIProxy(apolloClient);
test("Can log in", () => {
  return proxy
    .signIn({
      email: "admin@example.com",
      password: "admin",
    })
    .then(data => {
      expect(data.data?.token?.length).toBe(252);
      expect(data.data?.errors.length).toBe(0);
    });
});
