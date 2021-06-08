import React from "react";
import { Core } from "../core";
import { Config } from "../core/types";
import { ApolloClient } from "@apollo/client";

export type SaleorContextType = { api: Core; config: Config };

export const SaleorContext = React.createContext<{
  api: Core;
  client: ApolloClient<any>;
} | null>(null);
