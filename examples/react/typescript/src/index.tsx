import React from "react";
import ReactDOM from "react-dom";
import { SaleorProvider } from "@saleor/sdk/react";
import { createSaleorClient } from "@saleor/sdk";
import { authLink, invalidTokenLinkWithTokenHandler } from "@saleor/sdk/auth";
import { defaultDataIdFromObject, InMemoryCache } from "apollo-cache-inmemory";

import "./index.css";
import App from "./App";

const cache = new InMemoryCache({
  dataIdFromObject: (obj) => {
    if (obj.__typename === "Shop") {
      return "shop";
    }
    return defaultDataIdFromObject(obj);
  },
});

const { link } = invalidTokenLinkWithTokenHandler(() =>
  console.log("Logged out")
);

const apolloClient = createSaleorClient(
  "http://localhost:8000/graphql/",
  link,
  authLink,
  cache
);

ReactDOM.render(
  <React.StrictMode>
    <SaleorProvider client={apolloClient}>
      <App />
    </SaleorProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
