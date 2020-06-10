import { LocalStorageManager } from "../../data";
import { ApolloClientManager } from "../../data/ApolloClientManager";
import { ErrorListener } from "../../helpers";
import { ICheckoutModel } from "../../helpers/LocalStorageHandler";
import { JobsManager } from "../../jobs";
import { ErrorCartTypes } from "../../jobs/Cart";
import { SaleorState } from "../../state";
import { ISaleorStateSummeryPrices, StateItems } from "../../state/types";
import { sortCheckoutLines } from "./utils";

import {
  IDiscount,
  IItems,
  ISaleorCartAPI,
  IShippingPrice,
  ISubtotalPrice,
  ITotalPrice,
} from "./types";

export class SaleorCartAPI extends ErrorListener implements ISaleorCartAPI {
  loaded: boolean;

  items: IItems;

  totalPrice: ITotalPrice;

  subtotalPrice: ISubtotalPrice;

  shippingPrice: IShippingPrice;

  discount?: IDiscount;

  private apolloClientManager: ApolloClientManager;

  private checkoutLoaded: boolean;

  private jobsManager: JobsManager;

  private localStorageManager: LocalStorageManager;

  private saleorState: SaleorState;

  private summaryPricesLoaded: boolean;

  constructor(
    localStorageManager: LocalStorageManager,
    apolloClientManager: ApolloClientManager,
    saleorState: SaleorState,
    loadOnStart: boolean,
    jobsManager: JobsManager
  ) {
    super();
    this.saleorState = saleorState;
    this.localStorageManager = localStorageManager;
    this.apolloClientManager = apolloClientManager;
    this.jobsManager = jobsManager;

    this.loaded = false;
    this.checkoutLoaded = false;
    this.summaryPricesLoaded = false;

    this.jobsManager.attachErrorListener("cart", this.fireError);

    this.saleorState.subscribeToChange(
      StateItems.CHECKOUT,
      ({ lines }: ICheckoutModel) => {
        this.items = lines
          ?.filter(line => line.quantity > 0)
          .sort(sortCheckoutLines);
        this.checkoutLoaded = true;
        this.loaded = this.checkoutLoaded && this.summaryPricesLoaded;
      }
    );
    this.saleorState.subscribeToChange(
      StateItems.SUMMARY_PRICES,
      ({
        totalPrice,
        subtotalPrice,
        shippingPrice,
        discount,
      }: ISaleorStateSummeryPrices) => {
        this.totalPrice = totalPrice;
        this.subtotalPrice = subtotalPrice;
        this.shippingPrice = shippingPrice;
        this.discount = discount;
        this.summaryPricesLoaded = true;
        this.loaded = this.summaryPricesLoaded && this.checkoutLoaded;
      }
    );

    if (loadOnStart) {
      this.load();
    }
  }

  load = async () => {
    await this.saleorState.provideCheckout(this.fireError, true);
    return {
      pending: false,
    };
  };

  addItem = async (variantId: string, quantity: number) => {
    await this.saleorState.provideCheckout(this.fireError);

    // 1. save in local storage
    this.localStorageManager.addItemToCart(variantId, quantity);

    // 2. save online if possible (if checkout id available)
    if (this.saleorState.checkout?.lines) {
      const {
        data,
        error,
      } = await this.apolloClientManager.getRefreshedCheckoutLines(
        this.saleorState.checkout.lines
      );

      if (error) {
        this.fireError(error, ErrorCartTypes.SET_CART_ITEM);
      } else {
        this.localStorageManager.getHandler().setCheckout({
          ...this.saleorState.checkout,
          lines: data,
        });
      }
    }
    if (this.saleorState.checkout?.id) {
      this.jobsManager.addToQueue("cart", "setCartItem");
      return {
        pending: true,
      };
    }
    return {
      pending: false,
    };
  };

  removeItem = async (variantId: string) => {
    await this.saleorState.provideCheckout(this.fireError);

    // 1. save in local storage
    this.localStorageManager.removeItemFromCart(variantId);
    // 2. save online if possible (if checkout id available)
    if (this.saleorState.checkout?.lines) {
      const {
        data,
        error,
      } = await this.apolloClientManager.getRefreshedCheckoutLines(
        this.saleorState.checkout.lines
      );

      if (error) {
        this.fireError(error, ErrorCartTypes.SET_CART_ITEM);
      } else {
        this.localStorageManager.getHandler().setCheckout({
          ...this.saleorState.checkout,
          lines: data,
        });
      }
    }
    if (this.saleorState.checkout?.id) {
      this.jobsManager.addToQueue("cart", "setCartItem");
      return {
        pending: true,
      };
    }
    return {
      pending: false,
    };
  };

  subtractItem = async (variantId: string) => {
    await this.saleorState.provideCheckout(this.fireError);

    // 1. save in local storage
    this.localStorageManager.subtractItemFromCart(variantId);

    // 2. save online if possible (if checkout id available)
    if (this.saleorState.checkout?.lines) {
      const {
        data,
        error,
      } = await this.apolloClientManager.getRefreshedCheckoutLines(
        this.saleorState.checkout.lines
      );

      if (error) {
        this.fireError(error, ErrorCartTypes.SET_CART_ITEM);
      } else {
        this.localStorageManager.getHandler().setCheckout({
          ...this.saleorState.checkout,
          lines: data,
        });
      }
    }
    if (this.saleorState.checkout?.id) {
      this.jobsManager.addToQueue("cart", "setCartItem");
      return {
        pending: true,
      };
    }
    return {
      pending: false,
    };
  };

  updateItem = async (variantId: string, quantity: number) => {
    await this.saleorState.provideCheckout(this.fireError);

    // 1. save in local storage
    this.localStorageManager.updateItemInCart(variantId, quantity);

    // 2. save online if possible (if checkout id available)
    if (this.saleorState.checkout?.lines) {
      const {
        data,
        error,
      } = await this.apolloClientManager.getRefreshedCheckoutLines(
        this.saleorState.checkout.lines
      );

      if (error) {
        this.fireError(error, ErrorCartTypes.SET_CART_ITEM);
      } else {
        this.localStorageManager.getHandler().setCheckout({
          ...this.saleorState.checkout,
          lines: data,
        });
      }
    }
    if (this.saleorState.checkout?.id) {
      this.jobsManager.addToQueue("cart", "setCartItem");
      return {
        pending: true,
      };
    }
    return {
      pending: false,
    };
  };
}
