import React from "react";
import { Core } from "../core";
import { Config } from "../core/types";

export type SaleorContextType = { api: Core; config: Config };

export const SaleorContext = React.createContext<SaleorContextType | null>(
  null
);
