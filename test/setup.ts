import { Context, setupPolly } from "setup-polly-jest";
import { Polly, PollyServer } from "@pollyjs/core";
import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import FSPersister from "@pollyjs/persister-fs";
import path from "path";

import { API_URI } from "../src/config";
import { SaleorClient, createSaleorClient } from "../src/core";
import { removeBlacklistedVariables } from "./utils";

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

export const setupPollyMiddleware = (server: PollyServer): void => {
  server.any().on("beforePersist", (_, recording) => {
    const requestJson = JSON.parse(recording.request.postData.text);
    const responseHeaders = recording.response.headers.filter(
      (el: Record<string, string>) =>
        !["authorization-bearer", "set-cookie"].includes(el.name)
    );
    const requestHeaders = recording.request.headers.filter(
      (el: Record<string, string>) =>
        !["authorization-bearer", "set-cookie"].includes(el.name)
    );

    const filteredRequestJson = removeBlacklistedVariables(requestJson);

    const responseJson = JSON.parse(recording.response.content.text);
    const filteredResponseJson = removeBlacklistedVariables(responseJson);

    recording.request.postData.text = JSON.stringify(filteredRequestJson);
    recording.request.headers = requestHeaders;
    recording.response.cookies = [];
    recording.response.content.text = JSON.stringify(filteredResponseJson);
    recording.response.headers = responseHeaders;
  });
};
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
        exclude: ["authorization-bearer", "host", "content-length"],
      },
      url: false,
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

export const setupSaleorClient = (): SaleorClient => {
  const saleor = createSaleorClient({
    apiUrl: API_URI,
    channel: "default-channel",
  });

  return saleor;
};
