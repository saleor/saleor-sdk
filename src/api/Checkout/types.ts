import { Checkout_shippingMethods } from "../../fragments/gqlTypes/Checkout";
import { Payment_total } from "../../fragments/gqlTypes/Payment";
import {
  ICheckoutModelPrice,
  ICheckoutModelPriceValue,
  IPaymentCreditCard,
} from "../../helpers/LocalStorageHandler";

export type IPrice = ICheckoutModelPrice | null | undefined;
export type IPriceValue = ICheckoutModelPriceValue | null | undefined;

export interface IAddress {
  id?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  streetAddress1?: string;
  streetAddress2?: string;
  city?: string;
  postalCode?: string;
  countryArea?: string;
  phone?: string | null;
  country?: {
    code?: string;
    country?: string;
  };
}

export type IShippingMethods = Checkout_shippingMethods[];

export interface IShippingMethod {
  id: string;
  name: string;
  active: boolean;
  message?: string | null;
  price?: IPriceValue | null;
}

export interface IPromoCodeDiscount {
  voucherCode?: string | null;
  discountName?: string | null;
}

export type ICreditCard = IPaymentCreditCard;

export interface IPayment {
  id?: string;
  token?: string;
  gateway?: string;
  creditCard?: ICreditCard | null;
  total?: Payment_total | null;
}

export interface ICheckout {
  id?: string;
  token: any;
  email?: string;
  shippingAddress?: IAddress | null;
  shippingMethod?: IShippingMethod | null;
  billingAddress?: IAddress | null;
}

export enum FunctionErrorCheckoutTypes {
  "SHIPPING_ADDRESS_NOT_SET",
  "ITEMS_NOT_ADDED_TO_CART",
  "EMAIL_NOT_SET",
}
export enum DataErrorCheckoutTypes {
  "SET_SHIPPING_ADDRESS",
  "SET_BILLING_ADDRESS",
  "SET_SHIPPING_METHOD",
  "ADD_PROMO_CODE",
  "REMOVE_PROMO_CODE",
  "CREATE_PAYMENT",
  "COMPLETE_CHECKOUT",
  "GET_CHECKOUT",
  "GET_PAYMENT_GATEWAYS",
}

export interface CreatePaymentInput {
  gateway: string;
  token?: string;
  creditCard?: ICreditCard;
  returnUrl?: string;
}

export interface CompleteCheckoutInput {
  paymentData?: object;
  redirectUrl?: string;
  storeSource?: boolean;
}
