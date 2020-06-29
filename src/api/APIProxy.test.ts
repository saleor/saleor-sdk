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
    .then(result => {
      expect(result?.data?.token?.length).toBeGreaterThan(1);
      expect(result?.data?.errors.length).toBe(0);
    });
});

test("Returns error if credentials are invalid", () => {
  return proxy
    .signIn({
      email: "admin@example.com",
      password: "admin1",
    })
    .catch(error => {
      expect(error?.extraInfo.userInputErrors.length).toBe(1);
    });
});

test("Does not cache mutations", done => {
  proxy
    .signIn({
      email: "admin@example.com",
      password: "admin",
    })
    .then(() =>
      proxy.setPassword({
        email: "admin@example.com",
        password: "admin12345678",
        token: "5hr-73a06b70fd6ad8ab3913",
      })
    )
    .catch(() =>
      proxy.setPasswordChange({
        newPassword: "admin12345678",
        oldPassword: "admin12345678",
      })
    )
    .catch(() => {
      const extractedCache = cache.extract();
      expect(extractedCache.ROOT_MUTATION).toBeUndefined();

      done();
    });
});
