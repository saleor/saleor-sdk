/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetShop
// ====================================================

export interface GetShop_shop_defaultCountry {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface GetShop_shop_countries {
  __typename: "CountryDisplay";
  /**
   * Country name.
   */
  country: string;
  /**
   * Country code.
   */
  code: string;
}

export interface GetShop_shop {
  __typename: "Shop";
  /**
   * Display prices with tax in store.
   */
  displayGrossPrices: boolean;
  /**
   * Shop's default country.
   */
  defaultCountry: GetShop_shop_defaultCountry | null;
  /**
   * List of countries available in the shop.
   */
  countries: GetShop_shop_countries[];
}

export interface GetShop {
  /**
   * Return information about the shop.
   */
  shop: GetShop_shop;
}
