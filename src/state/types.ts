import {
  ICheckoutModelPrice,
  ICheckoutModelPriceValue,
} from "../helpers/LocalStorageHandler";

export enum StateItems {
  LOADED,
  USER,
  SIGN_IN_TOKEN,
  SIGN_IN_TOKEN_REFRESHING,
  SIGN_IN_TOKEN_VERIFYING,
  CHECKOUT,
  SUMMARY_PRICES,
  PROMO_CODE,
  PAYMENT,
}

export interface ISaleorStateSummeryPrices {
  shippingPrice?: ICheckoutModelPriceValue;
  subtotalPrice?: ICheckoutModelPrice;
  totalPrice?: ICheckoutModelPrice;
  discount?: ICheckoutModelPriceValue;
}
