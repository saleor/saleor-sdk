import React from "react";

import { SaleorAPI } from "../api";
import { ConfigInput } from "../types";

export type SaleorContextType = { api: SaleorAPI; config: ConfigInput };

export const SaleorContext = React.createContext<SaleorContextType | null>(
  null
);
