import {
  ICheckoutModel,
  IJobsModel,
  IPaymentModel,
  LocalStorageItems,
} from "./types";
import LocalStorageHandlerProxy from "./Proxy";

export class LocalStorageHandler extends LocalStorageHandlerProxy {
  static getCheckout(): ICheckoutModel | null {
    return LocalStorageHandlerProxy.retrieveObject(LocalStorageItems.CHECKOUT);
  }

  static getPayment(): IPaymentModel | null {
    return LocalStorageHandlerProxy.retrieveObject(LocalStorageItems.PAYMENT);
  }

  static getJobs(): IJobsModel | null {
    return LocalStorageHandlerProxy.retrieveObject(
      LocalStorageItems.JOB_QUEUE_CHECKOUT
    );
  }

  static getSignInToken(): string | null {
    return LocalStorageHandlerProxy.retrieveItem(LocalStorageItems.TOKEN);
  }

  static getCsrfToken(): string | null {
    return LocalStorageHandlerProxy.retrieveItem(LocalStorageItems.CSRF_TOKEN);
  }

  setSignInToken(token: string | null): void {
    this.saveItem(LocalStorageItems.TOKEN, token);
  }

  setCsrfToken(csrfToken: string | null): void {
    this.saveItem(LocalStorageItems.CSRF_TOKEN, csrfToken);
  }

  setCheckout(checkout: ICheckoutModel | null): void {
    this.saveObject(LocalStorageItems.CHECKOUT, checkout);
  }

  setPayment(payment: IPaymentModel | null): void {
    this.saveObject(LocalStorageItems.PAYMENT, payment);
  }

  setJobs(jobs: IJobsModel | null): void {
    return this.saveObject(LocalStorageItems.JOB_QUEUE_CHECKOUT, jobs);
  }

  clear(): void {
    this.clearStorage();
  }
}
