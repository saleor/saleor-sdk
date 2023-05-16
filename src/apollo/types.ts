export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * Custom Decimal implementation.
   *
   * Returns Decimal as a float in the API,
   * parses float to the Decimal on the way back.
   */
  Decimal: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
  JSON: any;
  JSONString: any;
  /**
   * Metadata is a map of key-value pairs, both keys and values are `String`.
   *
   * Example:
   * ```
   * {
   *     "key1": "value1",
   *     "key2": "value2"
   * }
   * ```
   */
  Metadata: any;
  /** The `Minute` scalar type represents number of minutes by integer value. */
  Minute: any;
  /**
   * Nonnegative Decimal scalar implementation.
   *
   * Should be used in places where value must be nonnegative (0 or greater).
   */
  PositiveDecimal: any;
  UUID: any;
  /** Variables of this type must be set to null in mutations. They will be replaced with a filename from a following multipart part containing a binary file. See: https://github.com/jaydenseric/graphql-multipart-request-spec. */
  Upload: any;
  WeightScalar: any;
  /** _Any value scalar as defined by Federation spec. */
  _Any: any;
};


/**
 * Create a new address for the customer.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountAddressCreate = {
  /** A user instance for which the address was created. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  address: Maybe<Address>;
};

/** Delete an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
export type AccountAddressDelete = {
  /** A user instance for which the address was deleted. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  address: Maybe<Address>;
};

/** Updates an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
export type AccountAddressUpdate = {
  /** A user object for which the address was edited. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  address: Maybe<Address>;
};

/**
 * Remove user account.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user: Maybe<User>;
};

/** Represents errors in account mutations. */
export type AccountError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: AccountErrorCode;
  /** A type of address that causes the error. */
  addressType: Maybe<AddressTypeEnum>;
};

/** An enumeration. */
export type AccountErrorCode =
  | 'ACTIVATE_OWN_ACCOUNT'
  | 'ACTIVATE_SUPERUSER_ACCOUNT'
  | 'DUPLICATED_INPUT_ITEM'
  | 'DEACTIVATE_OWN_ACCOUNT'
  | 'DEACTIVATE_SUPERUSER_ACCOUNT'
  | 'DELETE_NON_STAFF_USER'
  | 'DELETE_OWN_ACCOUNT'
  | 'DELETE_STAFF_ACCOUNT'
  | 'DELETE_SUPERUSER_ACCOUNT'
  | 'GRAPHQL_ERROR'
  | 'INACTIVE'
  | 'INVALID'
  | 'INVALID_PASSWORD'
  | 'LEFT_NOT_MANAGEABLE_PERMISSION'
  | 'INVALID_CREDENTIALS'
  | 'NOT_FOUND'
  | 'OUT_OF_SCOPE_USER'
  | 'OUT_OF_SCOPE_GROUP'
  | 'OUT_OF_SCOPE_PERMISSION'
  | 'PASSWORD_ENTIRELY_NUMERIC'
  | 'PASSWORD_TOO_COMMON'
  | 'PASSWORD_TOO_SHORT'
  | 'PASSWORD_TOO_SIMILAR'
  | 'PASSWORD_RESET_ALREADY_REQUESTED'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'JWT_SIGNATURE_EXPIRED'
  | 'JWT_INVALID_TOKEN'
  | 'JWT_DECODE_ERROR'
  | 'JWT_MISSING_TOKEN'
  | 'JWT_INVALID_CSRF_TOKEN'
  | 'CHANNEL_INACTIVE'
  | 'MISSING_CHANNEL_SLUG'
  | 'ACCOUNT_NOT_CONFIRMED';

/** Fields required to update the user. */
export type AccountInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** User language code. */
  languageCode?: Maybe<LanguageCodeEnum>;
  /** Billing address of the customer. */
  defaultBillingAddress?: Maybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: Maybe<AddressInput>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: Maybe<Array<MetadataInput>>;
};

/** Register a new user. */
export type AccountRegister = {
  /** Informs whether users need to confirm their email address. */
  requiresConfirmation: Maybe<Scalars['Boolean']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user: Maybe<User>;
};

/** Fields required to create a user. */
export type AccountRegisterInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** User language code. */
  languageCode?: Maybe<LanguageCodeEnum>;
  /** The email address of the user. */
  email: Scalars['String'];
  /** Password. */
  password: Scalars['String'];
  /** Base of frontend URL that will be needed to create confirmation URL. */
  redirectUrl?: Maybe<Scalars['String']>;
  /** User public metadata. */
  metadata?: Maybe<Array<MetadataInput>>;
  /** Slug of a channel which will be used to notify users. Optional when only one channel exists. */
  channel?: Maybe<Scalars['String']>;
};

/**
 * Sends an email with the account removal link for the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountRequestDeletion = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/**
 * Sets a default address for the authenticated user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountSetDefaultAddress = {
  /** An updated user instance. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/**
 * Updates the account of the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user: Maybe<User>;
};

/** Represents user address data. */
export type Address = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /**
   * List of private metadata items. Requires staff permissions to access.
   *
   * Added in Saleor 3.10.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.10.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.10.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /**
   * List of public metadata items. Can be accessed without permissions.
   *
   * Added in Saleor 3.10.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.10.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.10.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  companyName: Scalars['String'];
  streetAddress1: Scalars['String'];
  streetAddress2: Scalars['String'];
  city: Scalars['String'];
  cityArea: Scalars['String'];
  postalCode: Scalars['String'];
  /** Shop's default country. */
  country: CountryDisplay;
  countryArea: Scalars['String'];
  phone: Maybe<Scalars['String']>;
  /** Address is user's default shipping address. */
  isDefaultShippingAddress: Maybe<Scalars['Boolean']>;
  /** Address is user's default billing address. */
  isDefaultBillingAddress: Maybe<Scalars['Boolean']>;
};


/** Represents user address data. */
export type AddressPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents user address data. */
export type AddressPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents user address data. */
export type AddressMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents user address data. */
export type AddressMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};

/**
 * Creates user address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type AddressCreate = {
  /** A user instance for which the address was created. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  address: Maybe<Address>;
};

/**
 * Event sent when new address is created.
 *
 * Added in Saleor 3.5.
 */
export type AddressCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The address the event relates to. */
  address: Maybe<Address>;
};

/**
 * Deletes an address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type AddressDelete = {
  /** A user instance for which the address was deleted. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  address: Maybe<Address>;
};

/**
 * Event sent when address is deleted.
 *
 * Added in Saleor 3.5.
 */
export type AddressDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The address the event relates to. */
  address: Maybe<Address>;
};

export type AddressInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** Company or organization. */
  companyName?: Maybe<Scalars['String']>;
  /** Address. */
  streetAddress1?: Maybe<Scalars['String']>;
  /** Address. */
  streetAddress2?: Maybe<Scalars['String']>;
  /** City. */
  city?: Maybe<Scalars['String']>;
  /** District. */
  cityArea?: Maybe<Scalars['String']>;
  /** Postal code. */
  postalCode?: Maybe<Scalars['String']>;
  /** Country. */
  country?: Maybe<CountryCode>;
  /** State or province. */
  countryArea?: Maybe<Scalars['String']>;
  /** Phone number. */
  phone?: Maybe<Scalars['String']>;
};

/**
 * Sets a default address for the given user.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type AddressSetDefault = {
  /** An updated user instance. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/** An enumeration. */
export type AddressTypeEnum =
  | 'BILLING'
  | 'SHIPPING';

/**
 * Updates an address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type AddressUpdate = {
  /** A user object for which the address was edited. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  address: Maybe<Address>;
};

/**
 * Event sent when address is updated.
 *
 * Added in Saleor 3.5.
 */
export type AddressUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The address the event relates to. */
  address: Maybe<Address>;
};

/** Represents address validation rules for a country. */
export type AddressValidationData = {
  countryCode: Scalars['String'];
  countryName: Scalars['String'];
  addressFormat: Scalars['String'];
  addressLatinFormat: Scalars['String'];
  allowedFields: Array<Scalars['String']>;
  requiredFields: Array<Scalars['String']>;
  upperFields: Array<Scalars['String']>;
  countryAreaType: Scalars['String'];
  countryAreaChoices: Array<ChoiceValue>;
  cityType: Scalars['String'];
  cityChoices: Array<ChoiceValue>;
  cityAreaType: Scalars['String'];
  cityAreaChoices: Array<ChoiceValue>;
  postalCodeType: Scalars['String'];
  postalCodeMatchers: Array<Scalars['String']>;
  postalCodeExamples: Array<Scalars['String']>;
  postalCodePrefix: Scalars['String'];
};

/** Represents allocation. */
export type Allocation = Node & {
  id: Scalars['ID'];
  /**
   * Quantity allocated for orders.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  quantity: Scalars['Int'];
  /**
   * The warehouse were items were allocated.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  warehouse: Warehouse;
};

/**
 * Determine the allocation strategy for the channel.
 *
 *     PRIORITIZE_SORTING_ORDER - allocate stocks according to the warehouses' order
 *     within the channel
 *
 *     PRIORITIZE_HIGH_STOCK - allocate stock in a warehouse with the most stock
 */
export type AllocationStrategyEnum =
  | 'PRIORITIZE_SORTING_ORDER'
  | 'PRIORITIZE_HIGH_STOCK';

/** Represents app data. */
export type App = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  /** List of the app's permissions. */
  permissions: Maybe<Array<Permission>>;
  /** The date and time when the app was created. */
  created: Maybe<Scalars['DateTime']>;
  /** Determine if app will be set active or not. */
  isActive: Maybe<Scalars['Boolean']>;
  /** Name of the app. */
  name: Maybe<Scalars['String']>;
  /** Type of the app. */
  type: Maybe<AppTypeEnum>;
  /**
   * Last 4 characters of the tokens.
   *
   * Requires one of the following permissions: MANAGE_APPS, OWNER.
   */
  tokens: Maybe<Array<AppToken>>;
  /**
   * List of webhooks assigned to this app.
   *
   * Requires one of the following permissions: MANAGE_APPS, OWNER.
   */
  webhooks: Maybe<Array<Webhook>>;
  /** Description of this app. */
  aboutApp: Maybe<Scalars['String']>;
  /**
   * Description of the data privacy defined for this app.
   * @deprecated This field will be removed in Saleor 4.0. Use `dataPrivacyUrl` instead.
   */
  dataPrivacy: Maybe<Scalars['String']>;
  /** URL to details about the privacy policy on the app owner page. */
  dataPrivacyUrl: Maybe<Scalars['String']>;
  /** Homepage of the app. */
  homepageUrl: Maybe<Scalars['String']>;
  /** Support page for the app. */
  supportUrl: Maybe<Scalars['String']>;
  /**
   * URL to iframe with the configuration for the app.
   * @deprecated This field will be removed in Saleor 4.0. Use `appUrl` instead.
   */
  configurationUrl: Maybe<Scalars['String']>;
  /** URL to iframe with the app. */
  appUrl: Maybe<Scalars['String']>;
  /**
   * URL to manifest used during app's installation.
   *
   * Added in Saleor 3.5.
   */
  manifestUrl: Maybe<Scalars['String']>;
  /** Version number of the app. */
  version: Maybe<Scalars['String']>;
  /** JWT token used to authenticate by thridparty app. */
  accessToken: Maybe<Scalars['String']>;
  /**
   * The App's author name.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  author: Maybe<Scalars['String']>;
  /**
   * App's dashboard extensions.
   *
   * Added in Saleor 3.1.
   */
  extensions: Array<AppExtension>;
};


/** Represents app data. */
export type AppPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents app data. */
export type AppPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents app data. */
export type AppMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents app data. */
export type AppMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};

/**
 * Activate the app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppActivate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  app: Maybe<App>;
};

export type AppCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<AppCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type AppCountableEdge = {
  /** The item at the end of the edge. */
  node: App;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates a new app. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
export type AppCreate = {
  /** The newly created authentication token. */
  authToken: Maybe<Scalars['String']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  app: Maybe<App>;
};

/**
 * Deactivate the app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppDeactivate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  app: Maybe<App>;
};

/**
 * Deletes an app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  app: Maybe<App>;
};

/**
 * Delete failed installation.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppDeleteFailedInstallation = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  appInstallation: Maybe<AppInstallation>;
};

/**
 * Event sent when app is deleted.
 *
 * Added in Saleor 3.4.
 */
export type AppDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The application the event relates to. */
  app: Maybe<App>;
};

export type AppError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: AppErrorCode;
  /** List of permissions which causes the error. */
  permissions: Maybe<Array<PermissionEnum>>;
};

/** An enumeration. */
export type AppErrorCode =
  | 'FORBIDDEN'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_STATUS'
  | 'INVALID_PERMISSION'
  | 'INVALID_URL_FORMAT'
  | 'INVALID_MANIFEST_FORMAT'
  | 'INVALID_CUSTOM_HEADERS'
  | 'MANIFEST_URL_CANT_CONNECT'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'OUT_OF_SCOPE_APP'
  | 'OUT_OF_SCOPE_PERMISSION'
  | 'UNSUPPORTED_SALEOR_VERSION';

/** Represents app data. */
export type AppExtension = Node & {
  id: Scalars['ID'];
  /** List of the app extension's permissions. */
  permissions: Array<Permission>;
  /** Label of the extension to show in the dashboard. */
  label: Scalars['String'];
  /** URL of a view where extension's iframe is placed. */
  url: Scalars['String'];
  /** Place where given extension will be mounted. */
  mount: AppExtensionMountEnum;
  /** Type of way how app extension will be opened. */
  target: AppExtensionTargetEnum;
  app: App;
  /** JWT token used to authenticate by thridparty app extension. */
  accessToken: Maybe<Scalars['String']>;
};

export type AppExtensionCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<AppExtensionCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type AppExtensionCountableEdge = {
  /** The item at the end of the edge. */
  node: AppExtension;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type AppExtensionFilterInput = {
  mount?: Maybe<Array<AppExtensionMountEnum>>;
  target?: Maybe<AppExtensionTargetEnum>;
};

/** All places where app extension can be mounted. */
export type AppExtensionMountEnum =
  | 'CUSTOMER_OVERVIEW_CREATE'
  | 'CUSTOMER_OVERVIEW_MORE_ACTIONS'
  | 'CUSTOMER_DETAILS_MORE_ACTIONS'
  | 'PRODUCT_OVERVIEW_CREATE'
  | 'PRODUCT_OVERVIEW_MORE_ACTIONS'
  | 'PRODUCT_DETAILS_MORE_ACTIONS'
  | 'NAVIGATION_CATALOG'
  | 'NAVIGATION_ORDERS'
  | 'NAVIGATION_CUSTOMERS'
  | 'NAVIGATION_DISCOUNTS'
  | 'NAVIGATION_TRANSLATIONS'
  | 'NAVIGATION_PAGES'
  | 'ORDER_DETAILS_MORE_ACTIONS'
  | 'ORDER_OVERVIEW_CREATE'
  | 'ORDER_OVERVIEW_MORE_ACTIONS';

/**
 * All available ways of opening an app extension.
 *
 *     POPUP - app's extension will be mounted as a popup window
 *     APP_PAGE - redirect to app's page
 */
export type AppExtensionTargetEnum =
  | 'POPUP'
  | 'APP_PAGE';

/**
 * Fetch and validate manifest.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppFetchManifest = {
  manifest: Maybe<Manifest>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

export type AppFilterInput = {
  search?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  type?: Maybe<AppTypeEnum>;
};

export type AppInput = {
  /** Name of the app. */
  name?: Maybe<Scalars['String']>;
  /** List of permission code names to assign to this app. */
  permissions?: Maybe<Array<PermissionEnum>>;
};

/** Install new app by using app manifest. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
export type AppInstall = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  appInstallation: Maybe<AppInstallation>;
};

export type AppInstallInput = {
  /** Name of the app to install. */
  appName?: Maybe<Scalars['String']>;
  /** Url to app's manifest in JSON format. */
  manifestUrl?: Maybe<Scalars['String']>;
  /** Determine if app will be set active or not. */
  activateAfterInstallation?: Maybe<Scalars['Boolean']>;
  /** List of permission code names to assign to this app. */
  permissions?: Maybe<Array<PermissionEnum>>;
};

/** Represents ongoing installation of app. */
export type AppInstallation = Node & Job & {
  id: Scalars['ID'];
  /** Job status. */
  status: JobStatusEnum;
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime'];
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime'];
  /** Job message. */
  message: Maybe<Scalars['String']>;
  appName: Scalars['String'];
  manifestUrl: Scalars['String'];
};

/**
 * Event sent when new app is installed.
 *
 * Added in Saleor 3.4.
 */
export type AppInstalled = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The application the event relates to. */
  app: Maybe<App>;
};

export type AppManifestExtension = {
  /** List of the app extension's permissions. */
  permissions: Array<Permission>;
  /** Label of the extension to show in the dashboard. */
  label: Scalars['String'];
  /** URL of a view where extension's iframe is placed. */
  url: Scalars['String'];
  /** Place where given extension will be mounted. */
  mount: AppExtensionMountEnum;
  /** Type of way how app extension will be opened. */
  target: AppExtensionTargetEnum;
};

export type AppManifestRequiredSaleorVersion = {
  /**
   * Required Saleor version as semver range.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  constraint: Scalars['String'];
  /**
   * Informs if the Saleor version matches the required one.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  satisfied: Scalars['Boolean'];
};

export type AppManifestWebhook = {
  /** The name of the webhook. */
  name: Scalars['String'];
  /** The asynchronous events that webhook wants to subscribe. */
  asyncEvents: Maybe<Array<WebhookEventTypeAsyncEnum>>;
  /** The synchronous events that webhook wants to subscribe. */
  syncEvents: Maybe<Array<WebhookEventTypeSyncEnum>>;
  /** Subscription query of a webhook */
  query: Scalars['String'];
  /** The url to receive the payload. */
  targetUrl: Scalars['String'];
};

/**
 * Retry failed installation of new app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppRetryInstall = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  appInstallation: Maybe<AppInstallation>;
};

export type AppSortField =
  /** Sort apps by name. */
  | 'NAME'
  /** Sort apps by creation date. */
  | 'CREATION_DATE';

export type AppSortingInput = {
  /** Specifies the direction in which to sort apps. */
  direction: OrderDirection;
  /** Sort apps by the selected field. */
  field: AppSortField;
};

/**
 * Event sent when app status has changed.
 *
 * Added in Saleor 3.4.
 */
export type AppStatusChanged = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The application the event relates to. */
  app: Maybe<App>;
};

/** Represents token data. */
export type AppToken = Node & {
  id: Scalars['ID'];
  /** Name of the authenticated token. */
  name: Maybe<Scalars['String']>;
  /** Last 4 characters of the token. */
  authToken: Maybe<Scalars['String']>;
};

/**
 * Creates a new token.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppTokenCreate = {
  /** The newly created authentication token. */
  authToken: Maybe<Scalars['String']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  appToken: Maybe<AppToken>;
};

/**
 * Deletes an authentication token assigned to app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppTokenDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  appToken: Maybe<AppToken>;
};

export type AppTokenInput = {
  /** Name of the token. */
  name?: Maybe<Scalars['String']>;
  /** ID of app. */
  app: Scalars['ID'];
};

/** Verify provided app token. */
export type AppTokenVerify = {
  /** Determine if token is valid or not. */
  valid: Scalars['Boolean'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

/** Enum determining type of your App. */
export type AppTypeEnum =
  /** Local Saleor App. The app is fully manageable from dashboard. You can change assigned permissions, add webhooks, or authentication token */
  | 'LOCAL'
  /** Third party external App. Installation is fully automated. Saleor uses a defined App manifest to gather all required information. */
  | 'THIRDPARTY';

/**
 * Updates an existing app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  app: Maybe<App>;
};

/**
 * Event sent when app is updated.
 *
 * Added in Saleor 3.4.
 */
export type AppUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The application the event relates to. */
  app: Maybe<App>;
};

/** An enumeration. */
export type AreaUnitsEnum =
  | 'SQ_CM'
  | 'SQ_M'
  | 'SQ_KM'
  | 'SQ_FT'
  | 'SQ_YD'
  | 'SQ_INCH';

/**
 * Assigns storefront's navigation menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS, MANAGE_SETTINGS.
 */
export type AssignNavigation = {
  /** Assigned navigation menu. */
  menu: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  errors: Array<MenuError>;
};

/**
 * Represents assigned attribute to variant with variant selection attached.
 *
 * Added in Saleor 3.1.
 */
export type AssignedVariantAttribute = {
  /** Attribute assigned to variant. */
  attribute: Attribute;
  /** Determines, whether assigned attribute is allowed for variant selection. Supported variant types for variant selection are: ['dropdown', 'boolean', 'swatch', 'numeric'] */
  variantSelection: Scalars['Boolean'];
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type Attribute = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  /** The input type to use for entering attribute values in the dashboard. */
  inputType: Maybe<AttributeInputTypeEnum>;
  /** The entity type which can be used as a reference. */
  entityType: Maybe<AttributeEntityTypeEnum>;
  /** Name of an attribute displayed in the interface. */
  name: Maybe<Scalars['String']>;
  /** Internal representation of an attribute name. */
  slug: Maybe<Scalars['String']>;
  /** The attribute type. */
  type: Maybe<AttributeTypeEnum>;
  /** The unit of attribute values. */
  unit: Maybe<MeasurementUnitsEnum>;
  /** List of attribute's values. */
  choices: Maybe<AttributeValueCountableConnection>;
  /** Whether the attribute requires values to be passed or not. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  valueRequired: Scalars['Boolean'];
  /** Whether the attribute should be visible or not in storefront. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  visibleInStorefront: Scalars['Boolean'];
  /**
   * Whether the attribute can be filtered in storefront. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  filterableInStorefront: Scalars['Boolean'];
  /** Whether the attribute can be filtered in dashboard. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  filterableInDashboard: Scalars['Boolean'];
  /**
   * Whether the attribute can be displayed in the admin product list. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  availableInGrid: Scalars['Boolean'];
  /**
   * The position of the attribute in the storefront navigation (0 by default). Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  storefrontSearchPosition: Scalars['Int'];
  /** Returns translated attribute fields for the given language code. */
  translation: Maybe<AttributeTranslation>;
  /** Flag indicating that attribute has predefined choices. */
  withChoices: Scalars['Boolean'];
  productTypes: ProductTypeCountableConnection;
  productVariantTypes: ProductTypeCountableConnection;
  /**
   * External ID of this attribute.
   *
   * Added in Saleor 3.10.
   */
  externalReference: Maybe<Scalars['String']>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributePrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeMetafieldArgs = {
  key: Scalars['String'];
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeChoicesArgs = {
  sortBy?: Maybe<AttributeChoicesSortingInput>;
  filter?: Maybe<AttributeValueFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeTranslationArgs = {
  languageCode: LanguageCodeEnum;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductTypesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductVariantTypesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/**
 * Deletes attributes.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type AttributeBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

export type AttributeChoicesSortField =
  /** Sort attribute choice by name. */
  | 'NAME'
  /** Sort attribute choice by slug. */
  | 'SLUG';

export type AttributeChoicesSortingInput = {
  /** Specifies the direction in which to sort attribute choices. */
  direction: OrderDirection;
  /** Sort attribute choices by the selected field. */
  field: AttributeChoicesSortField;
};

export type AttributeCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<AttributeCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type AttributeCountableEdge = {
  /** The item at the end of the edge. */
  node: Attribute;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates an attribute. */
export type AttributeCreate = {
  attribute: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

export type AttributeCreateInput = {
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: Maybe<AttributeInputTypeEnum>;
  /** The entity type which can be used as a reference. */
  entityType?: Maybe<AttributeEntityTypeEnum>;
  /** Name of an attribute displayed in the interface. */
  name: Scalars['String'];
  /** Internal representation of an attribute name. */
  slug?: Maybe<Scalars['String']>;
  /** The attribute type. */
  type: AttributeTypeEnum;
  /** The unit of attribute values. */
  unit?: Maybe<MeasurementUnitsEnum>;
  /** List of attribute's values. */
  values?: Maybe<Array<AttributeValueCreateInput>>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute is for variants only. */
  isVariantOnly?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the attribute can be filtered in storefront.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  filterableInStorefront?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: Maybe<Scalars['Boolean']>;
  /**
   * The position of the attribute in the storefront navigation (0 by default).
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  storefrontSearchPosition?: Maybe<Scalars['Int']>;
  /**
   * Whether the attribute can be displayed in the admin product list.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  availableInGrid?: Maybe<Scalars['Boolean']>;
  /**
   * External ID of this attribute.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']>;
};

/**
 * Event sent when new attribute is created.
 *
 * Added in Saleor 3.5.
 */
export type AttributeCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The attribute the event relates to. */
  attribute: Maybe<Attribute>;
};

/**
 * Deletes an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
  attribute: Maybe<Attribute>;
};

/**
 * Event sent when attribute is deleted.
 *
 * Added in Saleor 3.5.
 */
export type AttributeDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The attribute the event relates to. */
  attribute: Maybe<Attribute>;
};

/** An enumeration. */
export type AttributeEntityTypeEnum =
  | 'PAGE'
  | 'PRODUCT'
  | 'PRODUCT_VARIANT';

export type AttributeEntityTypeEnumFilterInput = {
  /** The value equal to. */
  eq?: Maybe<AttributeEntityTypeEnum>;
  /** The value included in. */
  oneOf?: Maybe<Array<AttributeEntityTypeEnum>>;
};

export type AttributeError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: AttributeErrorCode;
};

/** An enumeration. */
export type AttributeErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type AttributeFilterInput = {
  valueRequired?: Maybe<Scalars['Boolean']>;
  isVariantOnly?: Maybe<Scalars['Boolean']>;
  visibleInStorefront?: Maybe<Scalars['Boolean']>;
  filterableInStorefront?: Maybe<Scalars['Boolean']>;
  filterableInDashboard?: Maybe<Scalars['Boolean']>;
  availableInGrid?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Array<MetadataFilter>>;
  search?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Scalars['ID']>>;
  type?: Maybe<AttributeTypeEnum>;
  inCollection?: Maybe<Scalars['ID']>;
  inCategory?: Maybe<Scalars['ID']>;
  slugs?: Maybe<Array<Scalars['String']>>;
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: Maybe<Scalars['String']>;
};

export type AttributeInput = {
  /** Internal representation of an attribute name. */
  slug: Scalars['String'];
  /** Internal representation of a value (unique per attribute). */
  values?: Maybe<Array<Scalars['String']>>;
  /** The range that the returned values should be in. */
  valuesRange?: Maybe<IntRangeInput>;
  /** The date/time range that the returned values should be in. */
  dateTime?: Maybe<DateTimeRangeInput>;
  /** The date range that the returned values should be in. In case of date/time attributes, the UTC midnight of the given date is used. */
  date?: Maybe<DateRangeInput>;
  /** The boolean value of the attribute. */
  boolean?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export type AttributeInputTypeEnum =
  | 'DROPDOWN'
  | 'MULTISELECT'
  | 'FILE'
  | 'REFERENCE'
  | 'NUMERIC'
  | 'RICH_TEXT'
  | 'PLAIN_TEXT'
  | 'SWATCH'
  | 'BOOLEAN'
  | 'DATE'
  | 'DATE_TIME';

export type AttributeInputTypeEnumFilterInput = {
  /** The value equal to. */
  eq?: Maybe<AttributeInputTypeEnum>;
  /** The value included in. */
  oneOf?: Maybe<Array<AttributeInputTypeEnum>>;
};

/**
 * Reorder the values of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeReorderValues = {
  /** Attribute from which values are reordered. */
  attribute: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

export type AttributeSortField =
  /** Sort attributes by name */
  | 'NAME'
  /** Sort attributes by slug */
  | 'SLUG'
  /** Sort attributes by the value required flag */
  | 'VALUE_REQUIRED'
  /** Sort attributes by the variant only flag */
  | 'IS_VARIANT_ONLY'
  /** Sort attributes by visibility in the storefront */
  | 'VISIBLE_IN_STOREFRONT'
  /** Sort attributes by the filterable in storefront flag */
  | 'FILTERABLE_IN_STOREFRONT'
  /** Sort attributes by the filterable in dashboard flag */
  | 'FILTERABLE_IN_DASHBOARD'
  /** Sort attributes by their position in storefront */
  | 'STOREFRONT_SEARCH_POSITION'
  /** Sort attributes based on whether they can be displayed or not in a product grid. */
  | 'AVAILABLE_IN_GRID';

export type AttributeSortingInput = {
  /** Specifies the direction in which to sort attributes. */
  direction: OrderDirection;
  /** Sort attributes by the selected field. */
  field: AttributeSortField;
};

export type AttributeTranslatableContent = Node & {
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Returns translated attribute fields for the given language code. */
  translation: Maybe<AttributeTranslation>;
  /**
   * Custom attribute of a product.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  attribute: Maybe<Attribute>;
};


export type AttributeTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for an attribute.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type AttributeTranslate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
  errors: Array<TranslationError>;
  attribute: Maybe<Attribute>;
};

export type AttributeTranslation = Node & {
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String'];
};

/** An enumeration. */
export type AttributeTypeEnum =
  | 'PRODUCT_TYPE'
  | 'PAGE_TYPE';

export type AttributeTypeEnumFilterInput = {
  /** The value equal to. */
  eq?: Maybe<AttributeTypeEnum>;
  /** The value included in. */
  oneOf?: Maybe<Array<AttributeTypeEnum>>;
};

/**
 * Updates attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeUpdate = {
  attribute: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

export type AttributeUpdateInput = {
  /** Name of an attribute displayed in the interface. */
  name?: Maybe<Scalars['String']>;
  /** Internal representation of an attribute name. */
  slug?: Maybe<Scalars['String']>;
  /** The unit of attribute values. */
  unit?: Maybe<MeasurementUnitsEnum>;
  /** IDs of values to be removed from this attribute. */
  removeValues?: Maybe<Array<Scalars['ID']>>;
  /** New values to be created for this attribute. */
  addValues?: Maybe<Array<AttributeValueUpdateInput>>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute is for variants only. */
  isVariantOnly?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the attribute can be filtered in storefront.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  filterableInStorefront?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: Maybe<Scalars['Boolean']>;
  /**
   * The position of the attribute in the storefront navigation (0 by default).
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  storefrontSearchPosition?: Maybe<Scalars['Int']>;
  /**
   * Whether the attribute can be displayed in the admin product list.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  availableInGrid?: Maybe<Scalars['Boolean']>;
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']>;
};

/**
 * Event sent when attribute is updated.
 *
 * Added in Saleor 3.5.
 */
export type AttributeUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The attribute the event relates to. */
  attribute: Maybe<Attribute>;
};

/** Represents a value of an attribute. */
export type AttributeValue = Node & {
  id: Scalars['ID'];
  /** Name of a value displayed in the interface. */
  name: Maybe<Scalars['String']>;
  /** Internal representation of a value (unique per attribute). */
  slug: Maybe<Scalars['String']>;
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value: Maybe<Scalars['String']>;
  /** Returns translated attribute value fields for the given language code. */
  translation: Maybe<AttributeValueTranslation>;
  /** The input type to use for entering attribute values in the dashboard. */
  inputType: Maybe<AttributeInputTypeEnum>;
  /** The ID of the attribute reference. */
  reference: Maybe<Scalars['ID']>;
  /** Represents file URL and content type (if attribute value is a file). */
  file: Maybe<File>;
  /**
   * Represents the text of the attribute value, includes formatting.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText: Maybe<Scalars['JSONString']>;
  /** Represents the text of the attribute value, plain text without formating. */
  plainText: Maybe<Scalars['String']>;
  /** Represents the boolean value of the attribute value. */
  boolean: Maybe<Scalars['Boolean']>;
  /** Represents the date value of the attribute value. */
  date: Maybe<Scalars['Date']>;
  /** Represents the date/time value of the attribute value. */
  dateTime: Maybe<Scalars['DateTime']>;
  /**
   * External ID of this attribute value.
   *
   * Added in Saleor 3.10.
   */
  externalReference: Maybe<Scalars['String']>;
};


/** Represents a value of an attribute. */
export type AttributeValueTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Deletes values of attributes.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type AttributeValueBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

export type AttributeValueCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<AttributeValueCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type AttributeValueCountableEdge = {
  /** The item at the end of the edge. */
  node: AttributeValue;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Creates a value for an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type AttributeValueCreate = {
  /** The updated attribute. */
  attribute: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
  attributeValue: Maybe<AttributeValue>;
};

export type AttributeValueCreateInput = {
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value?: Maybe<Scalars['String']>;
  /**
   * Represents the text of the attribute value, includes formatting.
   *
   * Rich text format. For reference see https://editorjs.io/
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.The rich text attribute hasn't got predefined value, so can be specified only from instance that supports the given attribute.
   */
  richText?: Maybe<Scalars['JSONString']>;
  /**
   * Represents the text of the attribute value, plain text without formating.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.The plain text attribute hasn't got predefined value, so can be specified only from instance that supports the given attribute.
   */
  plainText?: Maybe<Scalars['String']>;
  /** URL of the file attribute. Every time, a new value is created. */
  fileUrl?: Maybe<Scalars['String']>;
  /** File content type. */
  contentType?: Maybe<Scalars['String']>;
  /**
   * External ID of this attribute value.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']>;
  /** Name of a value displayed in the interface. */
  name: Scalars['String'];
};

/**
 * Event sent when new attribute value is created.
 *
 * Added in Saleor 3.5.
 */
export type AttributeValueCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The attribute value the event relates to. */
  attributeValue: Maybe<AttributeValue>;
};

/**
 * Deletes a value of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeValueDelete = {
  /** The updated attribute. */
  attribute: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
  attributeValue: Maybe<AttributeValue>;
};

/**
 * Event sent when attribute value is deleted.
 *
 * Added in Saleor 3.5.
 */
export type AttributeValueDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The attribute value the event relates to. */
  attributeValue: Maybe<AttributeValue>;
};

export type AttributeValueFilterInput = {
  search?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type AttributeValueInput = {
  /** ID of the selected attribute. */
  id?: Maybe<Scalars['ID']>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. This field will be removed in Saleor 4.0. */
  values?: Maybe<Array<Scalars['String']>>;
  /**
   * Attribute value ID.
   *
   * Added in Saleor 3.9.
   */
  dropdown?: Maybe<AttributeValueSelectableTypeInput>;
  /**
   * Attribute value ID.
   *
   * Added in Saleor 3.9.
   */
  swatch?: Maybe<AttributeValueSelectableTypeInput>;
  /**
   * List of attribute value IDs.
   *
   * Added in Saleor 3.9.
   */
  multiselect?: Maybe<Array<AttributeValueSelectableTypeInput>>;
  /**
   * Numeric value of an attribute.
   *
   * Added in Saleor 3.9.
   */
  numeric?: Maybe<Scalars['String']>;
  /** URL of the file attribute. Every time, a new value is created. */
  file?: Maybe<Scalars['String']>;
  /** File content type. */
  contentType?: Maybe<Scalars['String']>;
  /** List of entity IDs that will be used as references. */
  references?: Maybe<Array<Scalars['ID']>>;
  /** Text content in JSON format. */
  richText?: Maybe<Scalars['JSONString']>;
  /** Plain text content. */
  plainText?: Maybe<Scalars['String']>;
  /** Represents the boolean value of the attribute value. */
  boolean?: Maybe<Scalars['Boolean']>;
  /** Represents the date value of the attribute value. */
  date?: Maybe<Scalars['Date']>;
  /** Represents the date/time value of the attribute value. */
  dateTime?: Maybe<Scalars['DateTime']>;
};

/**
 * Represents attribute value. If no ID provided, value will be resolved.
 *
 * Added in Saleor 3.9.
 */
export type AttributeValueSelectableTypeInput = {
  /** ID of an attribute value. */
  id?: Maybe<Scalars['ID']>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
  value?: Maybe<Scalars['String']>;
};

export type AttributeValueTranslatableContent = Node & {
  id: Scalars['ID'];
  name: Scalars['String'];
  /**
   * Attribute value.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText: Maybe<Scalars['JSONString']>;
  /** Attribute plain text value. */
  plainText: Maybe<Scalars['String']>;
  /** Returns translated attribute value fields for the given language code. */
  translation: Maybe<AttributeValueTranslation>;
  /**
   * Represents a value of an attribute.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  attributeValue: Maybe<AttributeValue>;
  /**
   * Associated attribute that can be translated.
   *
   * Added in Saleor 3.9.
   */
  attribute: Maybe<AttributeTranslatableContent>;
};


export type AttributeValueTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for an attribute value.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type AttributeValueTranslate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
  errors: Array<TranslationError>;
  attributeValue: Maybe<AttributeValue>;
};

export type AttributeValueTranslation = Node & {
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String'];
  /**
   * Attribute value.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText: Maybe<Scalars['JSONString']>;
  /** Attribute plain text value. */
  plainText: Maybe<Scalars['String']>;
};

export type AttributeValueTranslationInput = {
  name?: Maybe<Scalars['String']>;
  /**
   * Translated text.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText?: Maybe<Scalars['JSONString']>;
  /** Translated text. */
  plainText?: Maybe<Scalars['String']>;
};

/**
 * Updates value of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeValueUpdate = {
  /** The updated attribute. */
  attribute: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
  attributeValue: Maybe<AttributeValue>;
};

export type AttributeValueUpdateInput = {
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value?: Maybe<Scalars['String']>;
  /**
   * Represents the text of the attribute value, includes formatting.
   *
   * Rich text format. For reference see https://editorjs.io/
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.The rich text attribute hasn't got predefined value, so can be specified only from instance that supports the given attribute.
   */
  richText?: Maybe<Scalars['JSONString']>;
  /**
   * Represents the text of the attribute value, plain text without formating.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.The plain text attribute hasn't got predefined value, so can be specified only from instance that supports the given attribute.
   */
  plainText?: Maybe<Scalars['String']>;
  /** URL of the file attribute. Every time, a new value is created. */
  fileUrl?: Maybe<Scalars['String']>;
  /** File content type. */
  contentType?: Maybe<Scalars['String']>;
  /**
   * External ID of this attribute value.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']>;
  /** Name of a value displayed in the interface. */
  name?: Maybe<Scalars['String']>;
};

/**
 * Event sent when attribute value is updated.
 *
 * Added in Saleor 3.5.
 */
export type AttributeValueUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The attribute value the event relates to. */
  attributeValue: Maybe<AttributeValue>;
};

/**
 * Where filtering options.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type AttributeWhereInput = {
  valueRequired?: Maybe<Scalars['Boolean']>;
  visibleInStorefront?: Maybe<Scalars['Boolean']>;
  filterableInDashboard?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Array<MetadataFilter>>;
  ids?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<StringFilterInput>;
  slug?: Maybe<StringFilterInput>;
  withChoices?: Maybe<Scalars['Boolean']>;
  inputType?: Maybe<AttributeInputTypeEnumFilterInput>;
  entityType?: Maybe<AttributeEntityTypeEnumFilterInput>;
  type?: Maybe<AttributeTypeEnumFilterInput>;
  unit?: Maybe<MeasurementUnitsEnumFilterInput>;
  inCollection?: Maybe<Scalars['ID']>;
  inCategory?: Maybe<Scalars['ID']>;
  /** List of conditions that must be met. */
  AND?: Maybe<Array<AttributeWhereInput>>;
  /** A list of conditions of which at least one must be met. */
  OR?: Maybe<Array<AttributeWhereInput>>;
};

export type BulkAttributeValueInput = {
  /** ID of the selected attribute. */
  id?: Maybe<Scalars['ID']>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created.This field will be removed in Saleor 4.0. */
  values?: Maybe<Array<Scalars['String']>>;
  /**
   * Attribute value ID.
   *
   * Added in Saleor 3.12.
   */
  dropdown?: Maybe<AttributeValueSelectableTypeInput>;
  /**
   * Attribute value ID.
   *
   * Added in Saleor 3.12.
   */
  swatch?: Maybe<AttributeValueSelectableTypeInput>;
  /**
   * List of attribute value IDs.
   *
   * Added in Saleor 3.12.
   */
  multiselect?: Maybe<Array<AttributeValueSelectableTypeInput>>;
  /**
   * Numeric value of an attribute.
   *
   * Added in Saleor 3.12.
   */
  numeric?: Maybe<Scalars['String']>;
  /**
   * URL of the file attribute. Every time, a new value is created.
   *
   * Added in Saleor 3.12.
   */
  file?: Maybe<Scalars['String']>;
  /**
   * File content type.
   *
   * Added in Saleor 3.12.
   */
  contentType?: Maybe<Scalars['String']>;
  /**
   * List of entity IDs that will be used as references.
   *
   * Added in Saleor 3.12.
   */
  references?: Maybe<Array<Scalars['ID']>>;
  /**
   * Text content in JSON format.
   *
   * Added in Saleor 3.12.
   */
  richText?: Maybe<Scalars['JSONString']>;
  /**
   * Plain text content.
   *
   * Added in Saleor 3.12.
   */
  plainText?: Maybe<Scalars['String']>;
  /** The boolean value of an attribute to resolve. If the passed value is non-existent, it will be created. */
  boolean?: Maybe<Scalars['Boolean']>;
  /**
   * Represents the date value of the attribute value.
   *
   * Added in Saleor 3.12.
   */
  date?: Maybe<Scalars['Date']>;
  /**
   * Represents the date/time value of the attribute value.
   *
   * Added in Saleor 3.12.
   */
  dateTime?: Maybe<Scalars['DateTime']>;
};

export type BulkProductError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ProductErrorCode;
  /** List of attributes IDs which causes the error. */
  attributes: Maybe<Array<Scalars['ID']>>;
  /** List of attribute values IDs which causes the error. */
  values: Maybe<Array<Scalars['ID']>>;
  /** Index of an input list item that caused the error. */
  index: Maybe<Scalars['Int']>;
  /** List of warehouse IDs which causes the error. */
  warehouses: Maybe<Array<Scalars['ID']>>;
  /** List of channel IDs which causes the error. */
  channels: Maybe<Array<Scalars['ID']>>;
};

export type BulkStockError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ProductErrorCode;
  /** List of attributes IDs which causes the error. */
  attributes: Maybe<Array<Scalars['ID']>>;
  /** List of attribute values IDs which causes the error. */
  values: Maybe<Array<Scalars['ID']>>;
  /** Index of an input list item that caused the error. */
  index: Maybe<Scalars['Int']>;
};

/**
 * Synchronous webhook for calculating checkout/order taxes.
 *
 * Added in Saleor 3.7.
 */
export type CalculateTaxes = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  taxBase: TaxableObject;
};

export type CardInput = {
  /** Payment method nonce, a token returned by the appropriate provider's SDK. */
  code: Scalars['String'];
  /** Card security code. */
  cvc?: Maybe<Scalars['String']>;
  /** Information about currency and amount. */
  money: MoneyInput;
};

export type CatalogueInput = {
  /** Products related to the discount. */
  products?: Maybe<Array<Scalars['ID']>>;
  /** Categories related to the discount. */
  categories?: Maybe<Array<Scalars['ID']>>;
  /** Collections related to the discount. */
  collections?: Maybe<Array<Scalars['ID']>>;
  /**
   * Product variant related to the discount.
   *
   * Added in Saleor 3.1.
   */
  variants?: Maybe<Array<Scalars['ID']>>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type Category = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /**
   * Description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description: Maybe<Scalars['JSONString']>;
  slug: Scalars['String'];
  parent: Maybe<Category>;
  level: Scalars['Int'];
  /**
   * Description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson: Maybe<Scalars['JSONString']>;
  /** List of ancestors of the category. */
  ancestors: Maybe<CategoryCountableConnection>;
  /** List of products in the category. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  products: Maybe<ProductCountableConnection>;
  /** List of children of the category. */
  children: Maybe<CategoryCountableConnection>;
  backgroundImage: Maybe<Image>;
  /** Returns translated category fields for the given language code. */
  translation: Maybe<CategoryTranslation>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryAncestorsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryProductsArgs = {
  filter?: Maybe<ProductFilterInput>;
  sortBy?: Maybe<ProductOrder>;
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryChildrenArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryBackgroundImageArgs = {
  size?: Maybe<Scalars['Int']>;
  format?: Maybe<ThumbnailFormatEnum>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Deletes categories.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

export type CategoryCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<CategoryCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type CategoryCountableEdge = {
  /** The item at the end of the edge. */
  node: Category;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Creates a new category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
  category: Maybe<Category>;
};

/**
 * Event sent when new category is created.
 *
 * Added in Saleor 3.2.
 */
export type CategoryCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The category the event relates to. */
  category: Maybe<Category>;
};

/**
 * Deletes a category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
  category: Maybe<Category>;
};

/**
 * Event sent when category is deleted.
 *
 * Added in Saleor 3.2.
 */
export type CategoryDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The category the event relates to. */
  category: Maybe<Category>;
};

export type CategoryFilterInput = {
  search?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataFilter>>;
  ids?: Maybe<Array<Scalars['ID']>>;
  slugs?: Maybe<Array<Scalars['String']>>;
};

export type CategoryInput = {
  /**
   * Category description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']>;
  /** Category name. */
  name?: Maybe<Scalars['String']>;
  /** Category slug. */
  slug?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /** Background image file. */
  backgroundImage?: Maybe<Scalars['Upload']>;
  /** Alt text for a product media. */
  backgroundImageAlt?: Maybe<Scalars['String']>;
  /**
   * Fields required to update the category metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: Maybe<Array<MetadataInput>>;
  /**
   * Fields required to update the category private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: Maybe<Array<MetadataInput>>;
};

export type CategorySortField =
  /** Sort categories by name. */
  | 'NAME'
  /** Sort categories by product count. */
  | 'PRODUCT_COUNT'
  /** Sort categories by subcategory count. */
  | 'SUBCATEGORY_COUNT';

export type CategorySortingInput = {
  /** Specifies the direction in which to sort categories. */
  direction: OrderDirection;
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: Maybe<Scalars['String']>;
  /** Sort categories by the selected field. */
  field: CategorySortField;
};

export type CategoryTranslatableContent = Node & {
  id: Scalars['ID'];
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /**
   * Description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description: Maybe<Scalars['JSONString']>;
  /**
   * Description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson: Maybe<Scalars['JSONString']>;
  /** Returns translated category fields for the given language code. */
  translation: Maybe<CategoryTranslation>;
  /**
   * Represents a single category of products.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  category: Maybe<Category>;
};


export type CategoryTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a category.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type CategoryTranslate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
  errors: Array<TranslationError>;
  category: Maybe<Category>;
};

export type CategoryTranslation = Node & {
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  /**
   * Translated description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description: Maybe<Scalars['JSONString']>;
  /**
   * Translated description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson: Maybe<Scalars['JSONString']>;
};

/**
 * Updates a category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
  category: Maybe<Category>;
};

/**
 * Event sent when category is updated.
 *
 * Added in Saleor 3.2.
 */
export type CategoryUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The category the event relates to. */
  category: Maybe<Category>;
};

/** Represents channel. */
export type Channel = Node & {
  id: Scalars['ID'];
  /** Slug of the channel. */
  slug: Scalars['String'];
  /**
   * Name of the channel.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  name: Scalars['String'];
  /**
   * Whether the channel is active.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  isActive: Scalars['Boolean'];
  /**
   * A currency that is assigned to the channel.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  currencyCode: Scalars['String'];
  /**
   * Whether a channel has associated orders.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  hasOrders: Scalars['Boolean'];
  /**
   * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  defaultCountry: CountryDisplay;
  /**
   * List of warehouses assigned to this channel.
   *
   * Added in Saleor 3.5.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  warehouses: Array<Warehouse>;
  /**
   * List of shippable countries for the channel.
   *
   * Added in Saleor 3.6.
   */
  countries: Maybe<Array<CountryDisplay>>;
  /**
   * Shipping methods that are available for the channel.
   *
   * Added in Saleor 3.6.
   */
  availableShippingMethodsPerCountry: Maybe<Array<ShippingMethodsPerCountry>>;
  /**
   * Define the stock setting for this channel.
   *
   * Added in Saleor 3.7.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  stockSettings: StockSettings;
  /**
   * Channel-specific order settings.
   *
   * Added in Saleor 3.12.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS, MANAGE_ORDERS.
   */
  orderSettings: OrderSettings;
};


/** Represents channel. */
export type ChannelAvailableShippingMethodsPerCountryArgs = {
  countries?: Maybe<Array<CountryCode>>;
};

/**
 * Activate a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelActivate = {
  /** Activated channel. */
  channel: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

/**
 * Creates new channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
  channel: Maybe<Channel>;
};

export type ChannelCreateInput = {
  /** isActive flag. */
  isActive?: Maybe<Scalars['Boolean']>;
  /**
   * The channel stock settings.
   *
   * Added in Saleor 3.7.
   */
  stockSettings?: Maybe<StockSettingsInput>;
  /** List of shipping zones to assign to the channel. */
  addShippingZones?: Maybe<Array<Scalars['ID']>>;
  /**
   * List of warehouses to assign to the channel.
   *
   * Added in Saleor 3.5.
   */
  addWarehouses?: Maybe<Array<Scalars['ID']>>;
  /**
   * The channel order settings
   *
   * Added in Saleor 3.12.
   */
  orderSettings?: Maybe<OrderSettingsInput>;
  /** Name of the channel. */
  name: Scalars['String'];
  /** Slug of the channel. */
  slug: Scalars['String'];
  /** Currency of the channel. */
  currencyCode: Scalars['String'];
  /**
   * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
   *
   * Added in Saleor 3.1.
   */
  defaultCountry: CountryCode;
};

/**
 * Event sent when new channel is created.
 *
 * Added in Saleor 3.2.
 */
export type ChannelCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The channel the event relates to. */
  channel: Maybe<Channel>;
};

/**
 * Deactivate a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelDeactivate = {
  /** Deactivated channel. */
  channel: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

/**
 * Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
  channel: Maybe<Channel>;
};

export type ChannelDeleteInput = {
  /** ID of channel to migrate orders from origin channel. */
  channelId: Scalars['ID'];
};

/**
 * Event sent when channel is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ChannelDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The channel the event relates to. */
  channel: Maybe<Channel>;
};

export type ChannelError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ChannelErrorCode;
  /** List of shipping zone IDs which causes the error. */
  shippingZones: Maybe<Array<Scalars['ID']>>;
  /** List of warehouses IDs which causes the error. */
  warehouses: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export type ChannelErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'CHANNELS_CURRENCY_MUST_BE_THE_SAME'
  | 'CHANNEL_WITH_ORDERS'
  | 'DUPLICATED_INPUT_ITEM';

export type ChannelListingUpdateInput = {
  /** ID of a channel listing. */
  channelListing: Scalars['ID'];
  /** Price of the particular variant in channel. */
  price?: Maybe<Scalars['PositiveDecimal']>;
  /** Cost price of the variant in channel. */
  costPrice?: Maybe<Scalars['PositiveDecimal']>;
  /** The threshold for preorder variant in channel. */
  preorderThreshold?: Maybe<Scalars['Int']>;
};

/**
 * Reorder the warehouses of a channel.
 *
 * Added in Saleor 3.7.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelReorderWarehouses = {
  /** Channel within the warehouses are reordered. */
  channel: Maybe<Channel>;
  errors: Array<ChannelError>;
};

/**
 * Event sent when channel status has changed.
 *
 * Added in Saleor 3.2.
 */
export type ChannelStatusChanged = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The channel the event relates to. */
  channel: Maybe<Channel>;
};

/**
 * Update a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 * Requires one of the following permissions when updating only orderSettings field: MANAGE_CHANNELS, MANAGE_ORDERS.
 */
export type ChannelUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
  channel: Maybe<Channel>;
};

export type ChannelUpdateInput = {
  /** isActive flag. */
  isActive?: Maybe<Scalars['Boolean']>;
  /**
   * The channel stock settings.
   *
   * Added in Saleor 3.7.
   */
  stockSettings?: Maybe<StockSettingsInput>;
  /** List of shipping zones to assign to the channel. */
  addShippingZones?: Maybe<Array<Scalars['ID']>>;
  /**
   * List of warehouses to assign to the channel.
   *
   * Added in Saleor 3.5.
   */
  addWarehouses?: Maybe<Array<Scalars['ID']>>;
  /**
   * The channel order settings
   *
   * Added in Saleor 3.12.
   */
  orderSettings?: Maybe<OrderSettingsInput>;
  /** Name of the channel. */
  name?: Maybe<Scalars['String']>;
  /** Slug of the channel. */
  slug?: Maybe<Scalars['String']>;
  /**
   * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
   *
   * Added in Saleor 3.1.
   */
  defaultCountry?: Maybe<CountryCode>;
  /** List of shipping zones to unassign from the channel. */
  removeShippingZones?: Maybe<Array<Scalars['ID']>>;
  /**
   * List of warehouses to unassign from the channel.
   *
   * Added in Saleor 3.5.
   */
  removeWarehouses?: Maybe<Array<Scalars['ID']>>;
};

/**
 * Event sent when channel is updated.
 *
 * Added in Saleor 3.2.
 */
export type ChannelUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The channel the event relates to. */
  channel: Maybe<Channel>;
};

/** Checkout object. */
export type Checkout = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  created: Scalars['DateTime'];
  /**
   * Time of last modification of the given checkout.
   *
   * Added in Saleor 3.13.
   */
  updatedAt: Scalars['DateTime'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `updatedAt` instead. */
  lastChange: Scalars['DateTime'];
  user: Maybe<User>;
  channel: Channel;
  billingAddress: Maybe<Address>;
  shippingAddress: Maybe<Address>;
  note: Scalars['String'];
  discount: Maybe<Money>;
  discountName: Maybe<Scalars['String']>;
  translatedDiscountName: Maybe<Scalars['String']>;
  voucherCode: Maybe<Scalars['String']>;
  /**
   * Shipping methods that can be used with this checkout.
   * @deprecated This field will be removed in Saleor 4.0. Use `shippingMethods` instead.
   */
  availableShippingMethods: Array<ShippingMethod>;
  /** Shipping methods that can be used with this checkout. */
  shippingMethods: Array<ShippingMethod>;
  /**
   * Collection points that can be used for this order.
   *
   * Added in Saleor 3.1.
   */
  availableCollectionPoints: Array<Warehouse>;
  /** List of available payment gateways. */
  availablePaymentGateways: Array<PaymentGateway>;
  /** Email of a customer. */
  email: Maybe<Scalars['String']>;
  /** List of gift cards associated with this checkout. */
  giftCards: Array<GiftCard>;
  /** Returns True, if checkout requires shipping. */
  isShippingRequired: Scalars['Boolean'];
  /** The number of items purchased. */
  quantity: Scalars['Int'];
  /**
   * Date when oldest stock reservation for this checkout expires or null if no stock is reserved.
   *
   * Added in Saleor 3.1.
   */
  stockReservationExpires: Maybe<Scalars['DateTime']>;
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines: Array<CheckoutLine>;
  /** The price of the shipping, with all the taxes included. */
  shippingPrice: TaxedMoney;
  /**
   * The shipping method related with checkout.
   * @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead.
   */
  shippingMethod: Maybe<ShippingMethod>;
  /**
   * The delivery method selected for this checkout.
   *
   * Added in Saleor 3.1.
   */
  deliveryMethod: Maybe<DeliveryMethod>;
  /** The price of the checkout before shipping, with taxes included. */
  subtotalPrice: TaxedMoney;
  /**
   * Returns True if checkout has to be exempt from taxes.
   *
   * Added in Saleor 3.8.
   */
  taxExemption: Scalars['Boolean'];
  /** The checkout's token. */
  token: Scalars['UUID'];
  /** The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included. */
  totalPrice: TaxedMoney;
  /**
   * The difference between the paid and the checkout total amount.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  totalBalance: Money;
  /** Checkout language code. */
  languageCode: LanguageCodeEnum;
  /**
   * List of transactions for the checkout. Requires one of the following permissions: MANAGE_CHECKOUTS, HANDLE_PAYMENTS.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  transactions: Maybe<Array<TransactionItem>>;
  /**
   * Determines whether checkout prices should include taxes when displayed in a storefront.
   *
   * Added in Saleor 3.9.
   */
  displayGrossPrices: Scalars['Boolean'];
  /**
   * The authorize status of the checkout.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  authorizeStatus: CheckoutAuthorizeStatusEnum;
  /**
   * The charge status of the checkout.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  chargeStatus: CheckoutChargeStatusEnum;
};


/** Checkout object. */
export type CheckoutPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Checkout object. */
export type CheckoutPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Checkout object. */
export type CheckoutMetafieldArgs = {
  key: Scalars['String'];
};


/** Checkout object. */
export type CheckoutMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};

/** Adds a gift card or a voucher to a checkout. */
export type CheckoutAddPromoCode = {
  /** The checkout with the added gift card or voucher. */
  checkout: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutAddressValidationRules = {
  /** Determines if an error should be raised when the provided address doesn't have all the required fields. The list of required fields is dynamic and depends on the country code (use the `addressValidationRules` query to fetch them). Note: country code is mandatory for all addresses regardless of the rules provided in this input. */
  checkRequiredFields?: Maybe<Scalars['Boolean']>;
  /** Determines if an error should be raised when the provided address doesn't match the expected format. Example: using letters for postal code when the numbers are expected. */
  checkFieldsFormat?: Maybe<Scalars['Boolean']>;
  /** Determines if Saleor should apply normalization on address fields. Example: converting city field to uppercase letters. */
  enableFieldsNormalization?: Maybe<Scalars['Boolean']>;
};

/**
 * Determine a current authorize status for checkout.
 *
 *     We treat the checkout as fully authorized when the sum of authorized and charged
 *     funds cover the checkout.total.
 *     We treat the checkout as partially authorized when the sum of authorized and charged
 *     funds covers only part of the checkout.total
 *     We treat the checkout as not authorized when the sum of authorized and charged funds
 *     is 0.
 *
 *     NONE - the funds are not authorized
 *     PARTIAL - the cover funds don't cover fully the checkout's total
 *     FULL - the cover funds covers the checkout's total
 */
export type CheckoutAuthorizeStatusEnum =
  | 'NONE'
  | 'PARTIAL'
  | 'FULL';

/** Update billing address in the existing checkout. */
export type CheckoutBillingAddressUpdate = {
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/**
 * Determine the current charge status for the checkout.
 *
 *     The checkout is considered overcharged when the sum of the transactionItem's charge
 *     amounts exceeds the value of `checkout.total`.
 *     If the sum of the transactionItem's charge amounts equals
 *     `checkout.total`, we consider the checkout to be fully charged.
 *     If the sum of the transactionItem's charge amounts covers a part of the
 *     `checkout.total`, we treat the checkout as partially charged.
 *
 *
 *     NONE - the funds are not charged.
 *     PARTIAL - the funds that are charged don't cover the checkout's total
 *     FULL - the funds that are charged fully cover the checkout's total
 *     OVERCHARGED - the charged funds are bigger than checkout's total
 */
export type CheckoutChargeStatusEnum =
  | 'NONE'
  | 'PARTIAL'
  | 'FULL'
  | 'OVERCHARGED';

/** Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
export type CheckoutComplete = {
  /** Placed order. */
  order: Maybe<Order>;
  /** Set to true if payment needs to be confirmed before checkout is complete. */
  confirmationNeeded: Scalars['Boolean'];
  /** Confirmation data used to process additional authorization steps. */
  confirmationData: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<CheckoutCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type CheckoutCountableEdge = {
  /** The item at the end of the edge. */
  node: Checkout;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Create a new checkout. */
export type CheckoutCreate = {
  /**
   * Whether the checkout was created or the current active one was returned. Refer to checkoutLinesAdd and checkoutLinesUpdate to merge a cart with an active checkout.
   * @deprecated This field will be removed in Saleor 4.0. Always returns `true`.
   */
  created: Maybe<Scalars['Boolean']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
  checkout: Maybe<Checkout>;
};

/**
 * Create new checkout from existing order.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type CheckoutCreateFromOrder = {
  /** Variants that were not attached to the checkout. */
  unavailableVariants: Maybe<Array<CheckoutCreateFromOrderUnavailableVariant>>;
  /** Created checkout. */
  checkout: Maybe<Checkout>;
  errors: Array<CheckoutCreateFromOrderError>;
};

export type CheckoutCreateFromOrderError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: CheckoutCreateFromOrderErrorCode;
};

/** An enumeration. */
export type CheckoutCreateFromOrderErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'ORDER_NOT_FOUND'
  | 'CHANNEL_INACTIVE'
  | 'TAX_ERROR';

export type CheckoutCreateFromOrderUnavailableVariant = {
  /** The error message. */
  message: Scalars['String'];
  /** The error code. */
  code: CheckoutCreateFromOrderUnavailableVariantErrorCode;
  /** Variant ID that is unavailable. */
  variantId: Scalars['ID'];
  /** Order line ID that is unavailable. */
  lineId: Scalars['ID'];
};

/** An enumeration. */
export type CheckoutCreateFromOrderUnavailableVariantErrorCode =
  | 'NOT_FOUND'
  | 'PRODUCT_UNAVAILABLE_FOR_PURCHASE'
  | 'UNAVAILABLE_VARIANT_IN_CHANNEL'
  | 'PRODUCT_NOT_PUBLISHED'
  | 'QUANTITY_GREATER_THAN_LIMIT'
  | 'INSUFFICIENT_STOCK';

export type CheckoutCreateInput = {
  /** Slug of a channel in which to create a checkout. */
  channel?: Maybe<Scalars['String']>;
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines: Array<CheckoutLineInput>;
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>;
  /** The mailing address to where the checkout will be shipped. Note: the address will be ignored if the checkout doesn't contain shippable items. */
  shippingAddress?: Maybe<AddressInput>;
  /** Billing address of the customer. */
  billingAddress?: Maybe<AddressInput>;
  /** Checkout language code. */
  languageCode?: Maybe<LanguageCodeEnum>;
  /**
   * The checkout validation rules that can be changed.
   *
   * Added in Saleor 3.5.
   */
  validationRules?: Maybe<CheckoutValidationRules>;
};

/**
 * Event sent when new checkout is created.
 *
 * Added in Saleor 3.2.
 */
export type CheckoutCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The checkout the event relates to. */
  checkout: Maybe<Checkout>;
};

/**
 * Sets the customer as the owner of the checkout.
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
 */
export type CheckoutCustomerAttach = {
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/**
 * Removes the user assigned as the owner of the checkout.
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
 */
export type CheckoutCustomerDetach = {
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/**
 * Updates the delivery method (shipping method or pick up point) of the checkout.
 *
 * Added in Saleor 3.1.
 */
export type CheckoutDeliveryMethodUpdate = {
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  errors: Array<CheckoutError>;
};

/** Updates email address in the existing checkout object. */
export type CheckoutEmailUpdate = {
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: CheckoutErrorCode;
  /** List of varint IDs which causes the error. */
  variants: Maybe<Array<Scalars['ID']>>;
  /** List of line Ids which cause the error. */
  lines: Maybe<Array<Scalars['ID']>>;
  /** A type of address that causes the error. */
  addressType: Maybe<AddressTypeEnum>;
};

/** An enumeration. */
export type CheckoutErrorCode =
  | 'BILLING_ADDRESS_NOT_SET'
  | 'CHECKOUT_NOT_FULLY_PAID'
  | 'GRAPHQL_ERROR'
  | 'PRODUCT_NOT_PUBLISHED'
  | 'PRODUCT_UNAVAILABLE_FOR_PURCHASE'
  | 'INSUFFICIENT_STOCK'
  | 'INVALID'
  | 'INVALID_SHIPPING_METHOD'
  | 'NOT_FOUND'
  | 'PAYMENT_ERROR'
  | 'QUANTITY_GREATER_THAN_LIMIT'
  | 'REQUIRED'
  | 'SHIPPING_ADDRESS_NOT_SET'
  | 'SHIPPING_METHOD_NOT_APPLICABLE'
  | 'DELIVERY_METHOD_NOT_APPLICABLE'
  | 'SHIPPING_METHOD_NOT_SET'
  | 'SHIPPING_NOT_REQUIRED'
  | 'TAX_ERROR'
  | 'UNIQUE'
  | 'VOUCHER_NOT_APPLICABLE'
  | 'GIFT_CARD_NOT_APPLICABLE'
  | 'ZERO_QUANTITY'
  | 'MISSING_CHANNEL_SLUG'
  | 'CHANNEL_INACTIVE'
  | 'UNAVAILABLE_VARIANT_IN_CHANNEL'
  | 'EMAIL_NOT_SET'
  | 'NO_LINES'
  | 'INACTIVE_PAYMENT';

export type CheckoutFilterInput = {
  customer?: Maybe<Scalars['String']>;
  created?: Maybe<DateRangeInput>;
  search?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataFilter>>;
  channels?: Maybe<Array<Scalars['ID']>>;
  updatedAt?: Maybe<DateRangeInput>;
  authorizeStatus?: Maybe<Array<CheckoutAuthorizeStatusEnum>>;
  chargeStatus?: Maybe<Array<CheckoutChargeStatusEnum>>;
};

/**
 * Filter shipping methods for checkout.
 *
 * Added in Saleor 3.6.
 */
export type CheckoutFilterShippingMethods = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The checkout the event relates to. */
  checkout: Maybe<Checkout>;
  /**
   * Shipping methods that can be used with this checkout.
   *
   * Added in Saleor 3.6.
   */
  shippingMethods: Maybe<Array<ShippingMethod>>;
};

/**
 * Event sent when checkout is fully paid with transactions.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type CheckoutFullyPaid = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The checkout the event relates to. */
  checkout: Maybe<Checkout>;
};

/** Update language code in the existing checkout. */
export type CheckoutLanguageCodeUpdate = {
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Represents an item in the checkout. */
export type CheckoutLine = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /**
   * List of private metadata items. Requires staff permissions to access.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /**
   * List of public metadata items. Can be accessed without permissions.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  variant: ProductVariant;
  quantity: Scalars['Int'];
  /** The unit price of the checkout line, with taxes and discounts. */
  unitPrice: TaxedMoney;
  /** The unit price of the checkout line, without discounts. */
  undiscountedUnitPrice: Money;
  /** The sum of the checkout line price, taxes and discounts. */
  totalPrice: TaxedMoney;
  /** The sum of the checkout line price, without discounts. */
  undiscountedTotalPrice: Money;
  /** Indicates whether the item need to be delivered. */
  requiresShipping: Scalars['Boolean'];
};


/** Represents an item in the checkout. */
export type CheckoutLinePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents an item in the checkout. */
export type CheckoutLinePrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents an item in the checkout. */
export type CheckoutLineMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents an item in the checkout. */
export type CheckoutLineMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};

export type CheckoutLineCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<CheckoutLineCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type CheckoutLineCountableEdge = {
  /** The item at the end of the edge. */
  node: CheckoutLine;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Deletes a CheckoutLine. */
export type CheckoutLineDelete = {
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutLineInput = {
  /** The number of items purchased. */
  quantity: Scalars['Int'];
  /** ID of the product variant. */
  variantId: Scalars['ID'];
  /**
   * Custom price of the item. Can be set only by apps with `HANDLE_CHECKOUTS` permission. When the line with the same variant will be provided multiple times, the last price will be used.
   *
   * Added in Saleor 3.1.
   */
  price?: Maybe<Scalars['PositiveDecimal']>;
  /**
   * Flag that allow force splitting the same variant into multiple lines by skipping the matching logic.
   *
   * Added in Saleor 3.6.
   */
  forceNewLine?: Maybe<Scalars['Boolean']>;
  /**
   * Fields required to update the object's metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: Maybe<Array<MetadataInput>>;
};

export type CheckoutLineUpdateInput = {
  /**
   * ID of the product variant.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `lineId` instead.
   */
  variantId?: Maybe<Scalars['ID']>;
  /** The number of items purchased. Optional for apps, required for any other users. */
  quantity?: Maybe<Scalars['Int']>;
  /**
   * Custom price of the item. Can be set only by apps with `HANDLE_CHECKOUTS` permission. When the line with the same variant will be provided multiple times, the last price will be used.
   *
   * Added in Saleor 3.1.
   */
  price?: Maybe<Scalars['PositiveDecimal']>;
  /**
   * ID of the line.
   *
   * Added in Saleor 3.6.
   */
  lineId?: Maybe<Scalars['ID']>;
};

/** Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased. */
export type CheckoutLinesAdd = {
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Deletes checkout lines. */
export type CheckoutLinesDelete = {
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  errors: Array<CheckoutError>;
};

/** Updates checkout line in the existing checkout. */
export type CheckoutLinesUpdate = {
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/**
 * Event sent when checkout metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type CheckoutMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The checkout the event relates to. */
  checkout: Maybe<Checkout>;
};

/** Create a new payment for given checkout. */
export type CheckoutPaymentCreate = {
  /** Related checkout object. */
  checkout: Maybe<Checkout>;
  /** A newly created payment. */
  payment: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
  errors: Array<PaymentError>;
};

/** Remove a gift card or a voucher from a checkout. */
export type CheckoutRemovePromoCode = {
  /** The checkout with the removed gift card or voucher. */
  checkout: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Update shipping address in the existing checkout. */
export type CheckoutShippingAddressUpdate = {
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Updates the shipping method of the checkout. */
export type CheckoutShippingMethodUpdate = {
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutSortField =
  /** Sort checkouts by creation date. */
  | 'CREATION_DATE'
  /** Sort checkouts by customer. */
  | 'CUSTOMER'
  /** Sort checkouts by payment. */
  | 'PAYMENT';

export type CheckoutSortingInput = {
  /** Specifies the direction in which to sort checkouts. */
  direction: OrderDirection;
  /** Sort checkouts by the selected field. */
  field: CheckoutSortField;
};

/**
 * Event sent when checkout is updated.
 *
 * Added in Saleor 3.2.
 */
export type CheckoutUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The checkout the event relates to. */
  checkout: Maybe<Checkout>;
};

export type CheckoutValidationRules = {
  /** The validation rules that can be applied to provided shipping address data. */
  shippingAddress?: Maybe<CheckoutAddressValidationRules>;
  /** The validation rules that can be applied to provided billing address data. */
  billingAddress?: Maybe<CheckoutAddressValidationRules>;
};

export type ChoiceValue = {
  raw: Maybe<Scalars['String']>;
  verbose: Maybe<Scalars['String']>;
};

/** Represents a collection of products. */
export type Collection = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description: Maybe<Scalars['JSONString']>;
  slug: Scalars['String'];
  /** Channel given to retrieve this collection. Also used by federation gateway to resolve this object in a federated query. */
  channel: Maybe<Scalars['String']>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson: Maybe<Scalars['JSONString']>;
  /** List of products in this collection. */
  products: Maybe<ProductCountableConnection>;
  backgroundImage: Maybe<Image>;
  /** Returns translated collection fields for the given language code. */
  translation: Maybe<CollectionTranslation>;
  /**
   * List of channels in which the collection is available.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  channelListings: Maybe<Array<CollectionChannelListing>>;
};


/** Represents a collection of products. */
export type CollectionPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a collection of products. */
export type CollectionPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents a collection of products. */
export type CollectionMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a collection of products. */
export type CollectionMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents a collection of products. */
export type CollectionProductsArgs = {
  filter?: Maybe<ProductFilterInput>;
  sortBy?: Maybe<ProductOrder>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a collection of products. */
export type CollectionBackgroundImageArgs = {
  size?: Maybe<Scalars['Int']>;
  format?: Maybe<ThumbnailFormatEnum>;
};


/** Represents a collection of products. */
export type CollectionTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Adds products to a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionAddProducts = {
  /** Collection to which products will be added. */
  collection: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

/**
 * Deletes collections.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

/** Represents collection channel listing. */
export type CollectionChannelListing = Node & {
  id: Scalars['ID'];
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  publicationDate: Maybe<Scalars['Date']>;
  /**
   * The collection publication date.
   *
   * Added in Saleor 3.3.
   */
  publishedAt: Maybe<Scalars['DateTime']>;
  isPublished: Scalars['Boolean'];
  channel: Channel;
};

export type CollectionChannelListingError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ProductErrorCode;
  /** List of attributes IDs which causes the error. */
  attributes: Maybe<Array<Scalars['ID']>>;
  /** List of attribute values IDs which causes the error. */
  values: Maybe<Array<Scalars['ID']>>;
  /** List of channels IDs which causes the error. */
  channels: Maybe<Array<Scalars['ID']>>;
};

/**
 * Manage collection's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionChannelListingUpdate = {
  /** An updated collection instance. */
  collection: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionChannelListingErrors: Array<CollectionChannelListingError>;
  errors: Array<CollectionChannelListingError>;
};

export type CollectionChannelListingUpdateInput = {
  /** List of channels to which the collection should be assigned. */
  addChannels?: Maybe<Array<PublishableChannelListingInput>>;
  /** List of channels from which the collection should be unassigned. */
  removeChannels?: Maybe<Array<Scalars['ID']>>;
};

export type CollectionCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<CollectionCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type CollectionCountableEdge = {
  /** The item at the end of the edge. */
  node: Collection;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Creates a new collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
  collection: Maybe<Collection>;
};

export type CollectionCreateInput = {
  /** Informs whether a collection is published. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /** Name of the collection. */
  name?: Maybe<Scalars['String']>;
  /** Slug of the collection. */
  slug?: Maybe<Scalars['String']>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']>;
  /** Background image file. */
  backgroundImage?: Maybe<Scalars['Upload']>;
  /** Alt text for an image. */
  backgroundImageAlt?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  publicationDate?: Maybe<Scalars['Date']>;
  /**
   * Fields required to update the collection metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: Maybe<Array<MetadataInput>>;
  /**
   * Fields required to update the collection private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: Maybe<Array<MetadataInput>>;
  /** List of products to be added to the collection. */
  products?: Maybe<Array<Scalars['ID']>>;
};

/**
 * Event sent when new collection is created.
 *
 * Added in Saleor 3.2.
 */
export type CollectionCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The collection the event relates to. */
  collection: Maybe<Collection>;
};


/**
 * Event sent when new collection is created.
 *
 * Added in Saleor 3.2.
 */
export type CollectionCreatedCollectionArgs = {
  channel?: Maybe<Scalars['String']>;
};

/**
 * Deletes a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
  collection: Maybe<Collection>;
};

/**
 * Event sent when collection is deleted.
 *
 * Added in Saleor 3.2.
 */
export type CollectionDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The collection the event relates to. */
  collection: Maybe<Collection>;
};


/**
 * Event sent when collection is deleted.
 *
 * Added in Saleor 3.2.
 */
export type CollectionDeletedCollectionArgs = {
  channel?: Maybe<Scalars['String']>;
};

export type CollectionError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** List of products IDs which causes the error. */
  products: Maybe<Array<Scalars['ID']>>;
  /** The error code. */
  code: CollectionErrorCode;
};

/** An enumeration. */
export type CollectionErrorCode =
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT';

export type CollectionFilterInput = {
  published?: Maybe<CollectionPublished>;
  search?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataFilter>>;
  ids?: Maybe<Array<Scalars['ID']>>;
  slugs?: Maybe<Array<Scalars['String']>>;
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: Maybe<Scalars['String']>;
};

export type CollectionInput = {
  /** Informs whether a collection is published. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /** Name of the collection. */
  name?: Maybe<Scalars['String']>;
  /** Slug of the collection. */
  slug?: Maybe<Scalars['String']>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']>;
  /** Background image file. */
  backgroundImage?: Maybe<Scalars['Upload']>;
  /** Alt text for an image. */
  backgroundImageAlt?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  publicationDate?: Maybe<Scalars['Date']>;
  /**
   * Fields required to update the collection metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: Maybe<Array<MetadataInput>>;
  /**
   * Fields required to update the collection private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: Maybe<Array<MetadataInput>>;
};

/**
 * Event sent when collection metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type CollectionMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The collection the event relates to. */
  collection: Maybe<Collection>;
};


/**
 * Event sent when collection metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type CollectionMetadataUpdatedCollectionArgs = {
  channel?: Maybe<Scalars['String']>;
};

export type CollectionPublished =
  | 'PUBLISHED'
  | 'HIDDEN';

/**
 * Remove products from a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionRemoveProducts = {
  /** Collection from which products will be removed. */
  collection: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

/**
 * Reorder the products of a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionReorderProducts = {
  /** Collection from which products are reordered. */
  collection: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

export type CollectionSortField =
  /** Sort collections by name. */
  | 'NAME'
  /**
   * Sort collections by availability.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'AVAILABILITY'
  /** Sort collections by product count. */
  | 'PRODUCT_COUNT'
  /**
   * Sort collections by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PUBLICATION_DATE'
  /**
   * Sort collections by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PUBLISHED_AT';

export type CollectionSortingInput = {
  /** Specifies the direction in which to sort collections. */
  direction: OrderDirection;
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: Maybe<Scalars['String']>;
  /** Sort collections by the selected field. */
  field: CollectionSortField;
};

export type CollectionTranslatableContent = Node & {
  id: Scalars['ID'];
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description: Maybe<Scalars['JSONString']>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson: Maybe<Scalars['JSONString']>;
  /** Returns translated collection fields for the given language code. */
  translation: Maybe<CollectionTranslation>;
  /**
   * Represents a collection of products.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  collection: Maybe<Collection>;
};


export type CollectionTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a collection.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type CollectionTranslate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
  errors: Array<TranslationError>;
  collection: Maybe<Collection>;
};

export type CollectionTranslation = Node & {
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  /**
   * Translated description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description: Maybe<Scalars['JSONString']>;
  /**
   * Translated description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson: Maybe<Scalars['JSONString']>;
};

/**
 * Updates a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
  collection: Maybe<Collection>;
};

/**
 * Event sent when collection is updated.
 *
 * Added in Saleor 3.2.
 */
export type CollectionUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The collection the event relates to. */
  collection: Maybe<Collection>;
};


/**
 * Event sent when collection is updated.
 *
 * Added in Saleor 3.2.
 */
export type CollectionUpdatedCollectionArgs = {
  channel?: Maybe<Scalars['String']>;
};

/** Stores information about a single configuration field. */
export type ConfigurationItem = {
  /** Name of the field. */
  name: Scalars['String'];
  /** Current value of the field. */
  value: Maybe<Scalars['String']>;
  /** Type of the field. */
  type: Maybe<ConfigurationTypeFieldEnum>;
  /** Help text for the field. */
  helpText: Maybe<Scalars['String']>;
  /** Label for the field. */
  label: Maybe<Scalars['String']>;
};

export type ConfigurationItemInput = {
  /** Name of the field to update. */
  name: Scalars['String'];
  /** Value of the given field to update. */
  value?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export type ConfigurationTypeFieldEnum =
  | 'STRING'
  | 'MULTILINE'
  | 'BOOLEAN'
  | 'SECRET'
  | 'PASSWORD'
  | 'SECRETMULTILINE'
  | 'OUTPUT';

/** Confirm user account with token sent by email during registration. */
export type ConfirmAccount = {
  /** An activated user account. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/**
 * Confirm the email change of the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type ConfirmEmailChange = {
  /** A user instance with a new email. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/** An enumeration. */
export type CountryCode =
  | 'AF'
  | 'AX'
  | 'AL'
  | 'DZ'
  | 'AS'
  | 'AD'
  | 'AO'
  | 'AI'
  | 'AQ'
  | 'AG'
  | 'AR'
  | 'AM'
  | 'AW'
  | 'AU'
  | 'AT'
  | 'AZ'
  | 'BS'
  | 'BH'
  | 'BD'
  | 'BB'
  | 'BY'
  | 'BE'
  | 'BZ'
  | 'BJ'
  | 'BM'
  | 'BT'
  | 'BO'
  | 'BQ'
  | 'BA'
  | 'BW'
  | 'BV'
  | 'BR'
  | 'IO'
  | 'BN'
  | 'BG'
  | 'BF'
  | 'BI'
  | 'CV'
  | 'KH'
  | 'CM'
  | 'CA'
  | 'KY'
  | 'CF'
  | 'TD'
  | 'CL'
  | 'CN'
  | 'CX'
  | 'CC'
  | 'CO'
  | 'KM'
  | 'CG'
  | 'CD'
  | 'CK'
  | 'CR'
  | 'CI'
  | 'HR'
  | 'CU'
  | 'CW'
  | 'CY'
  | 'CZ'
  | 'DK'
  | 'DJ'
  | 'DM'
  | 'DO'
  | 'EC'
  | 'EG'
  | 'SV'
  | 'GQ'
  | 'ER'
  | 'EE'
  | 'SZ'
  | 'ET'
  | 'EU'
  | 'FK'
  | 'FO'
  | 'FJ'
  | 'FI'
  | 'FR'
  | 'GF'
  | 'PF'
  | 'TF'
  | 'GA'
  | 'GM'
  | 'GE'
  | 'DE'
  | 'GH'
  | 'GI'
  | 'GR'
  | 'GL'
  | 'GD'
  | 'GP'
  | 'GU'
  | 'GT'
  | 'GG'
  | 'GN'
  | 'GW'
  | 'GY'
  | 'HT'
  | 'HM'
  | 'VA'
  | 'HN'
  | 'HK'
  | 'HU'
  | 'IS'
  | 'IN'
  | 'ID'
  | 'IR'
  | 'IQ'
  | 'IE'
  | 'IM'
  | 'IL'
  | 'IT'
  | 'JM'
  | 'JP'
  | 'JE'
  | 'JO'
  | 'KZ'
  | 'KE'
  | 'KI'
  | 'KW'
  | 'KG'
  | 'LA'
  | 'LV'
  | 'LB'
  | 'LS'
  | 'LR'
  | 'LY'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MO'
  | 'MG'
  | 'MW'
  | 'MY'
  | 'MV'
  | 'ML'
  | 'MT'
  | 'MH'
  | 'MQ'
  | 'MR'
  | 'MU'
  | 'YT'
  | 'MX'
  | 'FM'
  | 'MD'
  | 'MC'
  | 'MN'
  | 'ME'
  | 'MS'
  | 'MA'
  | 'MZ'
  | 'MM'
  | 'NA'
  | 'NR'
  | 'NP'
  | 'NL'
  | 'NC'
  | 'NZ'
  | 'NI'
  | 'NE'
  | 'NG'
  | 'NU'
  | 'NF'
  | 'KP'
  | 'MK'
  | 'MP'
  | 'NO'
  | 'OM'
  | 'PK'
  | 'PW'
  | 'PS'
  | 'PA'
  | 'PG'
  | 'PY'
  | 'PE'
  | 'PH'
  | 'PN'
  | 'PL'
  | 'PT'
  | 'PR'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'BL'
  | 'SH'
  | 'KN'
  | 'LC'
  | 'MF'
  | 'PM'
  | 'VC'
  | 'WS'
  | 'SM'
  | 'ST'
  | 'SA'
  | 'SN'
  | 'RS'
  | 'SC'
  | 'SL'
  | 'SG'
  | 'SX'
  | 'SK'
  | 'SI'
  | 'SB'
  | 'SO'
  | 'ZA'
  | 'GS'
  | 'KR'
  | 'SS'
  | 'ES'
  | 'LK'
  | 'SD'
  | 'SR'
  | 'SJ'
  | 'SE'
  | 'CH'
  | 'SY'
  | 'TW'
  | 'TJ'
  | 'TZ'
  | 'TH'
  | 'TL'
  | 'TG'
  | 'TK'
  | 'TO'
  | 'TT'
  | 'TN'
  | 'TR'
  | 'TM'
  | 'TC'
  | 'TV'
  | 'UG'
  | 'UA'
  | 'AE'
  | 'GB'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VU'
  | 'VE'
  | 'VN'
  | 'VG'
  | 'VI'
  | 'WF'
  | 'EH'
  | 'YE'
  | 'ZM'
  | 'ZW';

export type CountryDisplay = {
  /** Country code. */
  code: Scalars['String'];
  /** Country name. */
  country: Scalars['String'];
  /**
   * Country tax.
   * @deprecated This field will be removed in Saleor 4.0. Use `TaxClassCountryRate` type to manage tax rates per country.
   */
  vat: Maybe<Vat>;
};

export type CountryFilterInput = {
  /** Boolean for filtering countries by having shipping zone assigned.If 'true', return countries with shipping zone assigned.If 'false', return countries without any shipping zone assigned.If the argument is not provided (null), return all countries. */
  attachedToShippingZones?: Maybe<Scalars['Boolean']>;
};

export type CountryRateInput = {
  /** Country in which this rate applies. */
  countryCode: CountryCode;
  /** Tax rate value provided as percentage. Example: provide `23` to represent `23%` tax rate. */
  rate: Scalars['Float'];
};

export type CountryRateUpdateInput = {
  /** Country in which this rate applies. */
  countryCode: CountryCode;
  /** Tax rate value provided as percentage. Example: provide `23` to represent `23%` tax rate. Provide `null` to remove the particular rate. */
  rate?: Maybe<Scalars['Float']>;
};

/** Create JWT token. */
export type CreateToken = {
  /** JWT token, required to authenticate. */
  token: Maybe<Scalars['String']>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken: Maybe<Scalars['String']>;
  /** CSRF token required to re-generate access token. */
  csrfToken: Maybe<Scalars['String']>;
  /** A user instance. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

export type CreditCard = {
  /** Card brand. */
  brand: Scalars['String'];
  /** First 4 digits of the card number. */
  firstDigits: Maybe<Scalars['String']>;
  /** Last 4 digits of the card number. */
  lastDigits: Scalars['String'];
  /** Two-digit number representing the card’s expiration month. */
  expMonth: Maybe<Scalars['Int']>;
  /** Four-digit number representing the card’s expiration year. */
  expYear: Maybe<Scalars['Int']>;
};

/**
 * Deletes customers.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

export type CustomerBulkResult = {
  /** Customer data. */
  customer: Maybe<User>;
  /** List of errors that occurred during the update attempt. */
  errors: Maybe<Array<CustomerBulkUpdateError>>;
};

/**
 * Updates customers.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerBulkUpdate = {
  /** Returns how many objects were created. */
  count: Scalars['Int'];
  /** List of the updated customers. */
  results: Array<CustomerBulkResult>;
  errors: Array<CustomerBulkUpdateError>;
};

export type CustomerBulkUpdateError = {
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: CustomerBulkUpdateErrorCode;
};

/** An enumeration. */
export type CustomerBulkUpdateErrorCode =
  | 'BLANK'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'NOT_FOUND'
  | 'MAX_LENGTH';

export type CustomerBulkUpdateInput = {
  /** ID of a customer to update. */
  id?: Maybe<Scalars['ID']>;
  /** External ID of a customer to update. */
  externalReference?: Maybe<Scalars['String']>;
  /** Fields required to update a customer. */
  input: CustomerInput;
};

/**
 * Creates a new customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user: Maybe<User>;
};

/**
 * Event sent when new customer user is created.
 *
 * Added in Saleor 3.2.
 */
export type CustomerCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The user the event relates to. */
  user: Maybe<User>;
};

/**
 * Deletes a customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user: Maybe<User>;
};

/** History log of the customer. */
export type CustomerEvent = Node & {
  id: Scalars['ID'];
  /** Date when event happened at in ISO 8601 format. */
  date: Maybe<Scalars['DateTime']>;
  /** Customer event type. */
  type: Maybe<CustomerEventsEnum>;
  /** User who performed the action. */
  user: Maybe<User>;
  /** App that performed the action. */
  app: Maybe<App>;
  /** Content of the event. */
  message: Maybe<Scalars['String']>;
  /** Number of objects concerned by the event. */
  count: Maybe<Scalars['Int']>;
  /** The concerned order. */
  order: Maybe<Order>;
  /** The concerned order line. */
  orderLine: Maybe<OrderLine>;
};

/** An enumeration. */
export type CustomerEventsEnum =
  | 'ACCOUNT_CREATED'
  | 'ACCOUNT_ACTIVATED'
  | 'ACCOUNT_DEACTIVATED'
  | 'PASSWORD_RESET_LINK_SENT'
  | 'PASSWORD_RESET'
  | 'EMAIL_CHANGED_REQUEST'
  | 'PASSWORD_CHANGED'
  | 'EMAIL_CHANGED'
  | 'PLACED_ORDER'
  | 'NOTE_ADDED_TO_ORDER'
  | 'DIGITAL_LINK_DOWNLOADED'
  | 'CUSTOMER_DELETED'
  | 'NAME_ASSIGNED'
  | 'EMAIL_ASSIGNED'
  | 'NOTE_ADDED';

export type CustomerFilterInput = {
  dateJoined?: Maybe<DateRangeInput>;
  numberOfOrders?: Maybe<IntRangeInput>;
  placedOrders?: Maybe<DateRangeInput>;
  search?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataFilter>>;
  /**
   * Filter by ids.
   *
   * Added in Saleor 3.8.
   */
  ids?: Maybe<Array<Scalars['ID']>>;
  updatedAt?: Maybe<DateTimeRangeInput>;
};

export type CustomerInput = {
  /** Billing address of the customer. */
  defaultBillingAddress?: Maybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: Maybe<AddressInput>;
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** The unique email address of the user. */
  email?: Maybe<Scalars['String']>;
  /** User account is active. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** A note about the user. */
  note?: Maybe<Scalars['String']>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: Maybe<Array<MetadataInput>>;
  /**
   * Fields required to update the user private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: Maybe<Array<MetadataInput>>;
  /** User language code. */
  languageCode?: Maybe<LanguageCodeEnum>;
  /**
   * External ID of the customer.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']>;
};

/**
 * Event sent when customer user metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type CustomerMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The user the event relates to. */
  user: Maybe<User>;
};

/**
 * Updates an existing customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user: Maybe<User>;
};

/**
 * Event sent when customer user is updated.
 *
 * Added in Saleor 3.2.
 */
export type CustomerUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The user the event relates to. */
  user: Maybe<User>;
};


export type DateRangeInput = {
  /** Start date. */
  gte?: Maybe<Scalars['Date']>;
  /** End date. */
  lte?: Maybe<Scalars['Date']>;
};


export type DateTimeRangeInput = {
  /** Start date. */
  gte?: Maybe<Scalars['DateTime']>;
  /** End date. */
  lte?: Maybe<Scalars['DateTime']>;
};

/**
 * Deactivate all JWT tokens of the currently authenticated user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type DeactivateAllUserTokens = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};


/** Delete metadata of an object. To use it, you need to have access to the modified object. */
export type DeleteMetadata = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
  errors: Array<MetadataError>;
  item: Maybe<ObjectWithMetadata>;
};

/** Delete object's private metadata. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
export type DeletePrivateMetadata = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
  errors: Array<MetadataError>;
  item: Maybe<ObjectWithMetadata>;
};

/**
 * Represents a delivery method chosen for the checkout. `Warehouse` type is used when checkout is marked as "click and collect" and `ShippingMethod` otherwise.
 *
 * Added in Saleor 3.1.
 */
export type DeliveryMethod = Warehouse | ShippingMethod;

export type DigitalContent = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  useDefaultSettings: Scalars['Boolean'];
  automaticFulfillment: Scalars['Boolean'];
  contentFile: Scalars['String'];
  maxDownloads: Maybe<Scalars['Int']>;
  urlValidDays: Maybe<Scalars['Int']>;
  /** List of URLs for the digital variant. */
  urls: Maybe<Array<DigitalContentUrl>>;
  /** Product variant assigned to digital content. */
  productVariant: ProductVariant;
};


export type DigitalContentPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type DigitalContentPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


export type DigitalContentMetafieldArgs = {
  key: Scalars['String'];
};


export type DigitalContentMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};

export type DigitalContentCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<DigitalContentCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type DigitalContentCountableEdge = {
  /** The item at the end of the edge. */
  node: DigitalContent;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentCreate = {
  variant: Maybe<ProductVariant>;
  content: Maybe<DigitalContent>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

/**
 * Remove digital content assigned to given variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentDelete = {
  variant: Maybe<ProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

export type DigitalContentInput = {
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars['Boolean'];
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: Maybe<Scalars['Int']>;
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: Maybe<Scalars['Int']>;
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: Maybe<Scalars['Boolean']>;
  /**
   * Fields required to update the digital content metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: Maybe<Array<MetadataInput>>;
  /**
   * Fields required to update the digital content private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: Maybe<Array<MetadataInput>>;
};

/**
 * Update digital content.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentUpdate = {
  variant: Maybe<ProductVariant>;
  content: Maybe<DigitalContent>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

export type DigitalContentUploadInput = {
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars['Boolean'];
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: Maybe<Scalars['Int']>;
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: Maybe<Scalars['Int']>;
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: Maybe<Scalars['Boolean']>;
  /**
   * Fields required to update the digital content metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: Maybe<Array<MetadataInput>>;
  /**
   * Fields required to update the digital content private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: Maybe<Array<MetadataInput>>;
  /** Represents an file in a multipart request. */
  contentFile: Scalars['Upload'];
};

export type DigitalContentUrl = Node & {
  id: Scalars['ID'];
  content: DigitalContent;
  created: Scalars['DateTime'];
  downloadNum: Scalars['Int'];
  /** URL for digital content. */
  url: Maybe<Scalars['String']>;
  /** UUID of digital content. */
  token: Scalars['UUID'];
};

/**
 * Generate new URL to digital content.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentUrlCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
  digitalContentUrl: Maybe<DigitalContentUrl>;
};

export type DigitalContentUrlCreateInput = {
  /** Digital content ID which URL will belong to. */
  content: Scalars['ID'];
};

export type DiscountError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** List of products IDs which causes the error. */
  products: Maybe<Array<Scalars['ID']>>;
  /** The error code. */
  code: DiscountErrorCode;
  /** List of channels IDs which causes the error. */
  channels: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export type DiscountErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT'
  | 'DUPLICATED_INPUT_ITEM';

export type DiscountStatusEnum =
  | 'ACTIVE'
  | 'EXPIRED'
  | 'SCHEDULED';

export type DiscountValueTypeEnum =
  | 'FIXED'
  | 'PERCENTAGE';

/** An enumeration. */
export type DistanceUnitsEnum =
  | 'CM'
  | 'M'
  | 'KM'
  | 'FT'
  | 'YD'
  | 'INCH';

/** Represents shop's domain. */
export type Domain = {
  /** The host name of the domain. */
  host: Scalars['String'];
  /** Inform if SSL is enabled. */
  sslEnabled: Scalars['Boolean'];
  /** Shop's absolute URL. */
  url: Scalars['String'];
};

/**
 * Deletes draft orders.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

/**
 * Completes creating an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderComplete = {
  /** Completed order. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

/**
 * Creates a new draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
  order: Maybe<Order>;
};

export type DraftOrderCreateInput = {
  /** Billing address of the customer. */
  billingAddress?: Maybe<AddressInput>;
  /** Customer associated with the draft order. */
  user?: Maybe<Scalars['ID']>;
  /** Email address of the customer. */
  userEmail?: Maybe<Scalars['String']>;
  /** Discount amount for the order. */
  discount?: Maybe<Scalars['PositiveDecimal']>;
  /** Shipping address of the customer. */
  shippingAddress?: Maybe<AddressInput>;
  /** ID of a selected shipping method. */
  shippingMethod?: Maybe<Scalars['ID']>;
  /** ID of the voucher associated with the order. */
  voucher?: Maybe<Scalars['ID']>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: Maybe<Scalars['String']>;
  /** ID of the channel associated with the order. */
  channelId?: Maybe<Scalars['ID']>;
  /** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
  redirectUrl?: Maybe<Scalars['String']>;
  /**
   * External ID of this order.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']>;
  /** Variant line input consisting of variant ID and quantity of products. */
  lines?: Maybe<Array<OrderLineCreateInput>>;
};

/**
 * Event sent when new draft order is created.
 *
 * Added in Saleor 3.2.
 */
export type DraftOrderCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The order the event relates to. */
  order: Maybe<Order>;
};

/**
 * Deletes a draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
  order: Maybe<Order>;
};

/**
 * Event sent when draft order is deleted.
 *
 * Added in Saleor 3.2.
 */
export type DraftOrderDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The order the event relates to. */
  order: Maybe<Order>;
};

export type DraftOrderInput = {
  /** Billing address of the customer. */
  billingAddress?: Maybe<AddressInput>;
  /** Customer associated with the draft order. */
  user?: Maybe<Scalars['ID']>;
  /** Email address of the customer. */
  userEmail?: Maybe<Scalars['String']>;
  /** Discount amount for the order. */
  discount?: Maybe<Scalars['PositiveDecimal']>;
  /** Shipping address of the customer. */
  shippingAddress?: Maybe<AddressInput>;
  /** ID of a selected shipping method. */
  shippingMethod?: Maybe<Scalars['ID']>;
  /** ID of the voucher associated with the order. */
  voucher?: Maybe<Scalars['ID']>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: Maybe<Scalars['String']>;
  /** ID of the channel associated with the order. */
  channelId?: Maybe<Scalars['ID']>;
  /** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
  redirectUrl?: Maybe<Scalars['String']>;
  /**
   * External ID of this order.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']>;
};

/**
 * Deletes order lines.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderLinesBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

/**
 * Updates a draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
  order: Maybe<Order>;
};

/**
 * Event sent when draft order is updated.
 *
 * Added in Saleor 3.2.
 */
export type DraftOrderUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The order the event relates to. */
  order: Maybe<Order>;
};

export type ErrorPolicyEnum =
  /** Save what is possible within a single row. If there are errors in an input data row, try to save it partially and skip the invalid part. */
  | 'IGNORE_FAILED'
  /** Reject all rows if there is at least one error in any of them. */
  | 'REJECT_EVERYTHING'
  /** Reject rows with errors. */
  | 'REJECT_FAILED_ROWS';

export type Event = {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
};

/** Event delivery. */
export type EventDelivery = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  /** Event delivery status. */
  status: EventDeliveryStatusEnum;
  /** Webhook event type. */
  eventType: WebhookEventTypeEnum;
  /** Event delivery attempts. */
  attempts: Maybe<EventDeliveryAttemptCountableConnection>;
  /** Event payload. */
  payload: Maybe<Scalars['String']>;
};


/** Event delivery. */
export type EventDeliveryAttemptsArgs = {
  sortBy?: Maybe<EventDeliveryAttemptSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Event delivery attempts. */
export type EventDeliveryAttempt = Node & {
  id: Scalars['ID'];
  /** Event delivery creation date and time. */
  createdAt: Scalars['DateTime'];
  /** Task id for delivery attempt. */
  taskId: Maybe<Scalars['String']>;
  /** Delivery attempt duration. */
  duration: Maybe<Scalars['Float']>;
  /** Delivery attempt response content. */
  response: Maybe<Scalars['String']>;
  /** Response headers for delivery attempt. */
  responseHeaders: Maybe<Scalars['String']>;
  /** Delivery attempt response status code. */
  responseStatusCode: Maybe<Scalars['Int']>;
  /** Request headers for delivery attempt. */
  requestHeaders: Maybe<Scalars['String']>;
  /** Event delivery status. */
  status: EventDeliveryStatusEnum;
};

export type EventDeliveryAttemptCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<EventDeliveryAttemptCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type EventDeliveryAttemptCountableEdge = {
  /** The item at the end of the edge. */
  node: EventDeliveryAttempt;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type EventDeliveryAttemptSortField =
  /** Sort event delivery attempts by created at. */
  | 'CREATED_AT';

export type EventDeliveryAttemptSortingInput = {
  /** Specifies the direction in which to sort attempts. */
  direction: OrderDirection;
  /** Sort attempts by the selected field. */
  field: EventDeliveryAttemptSortField;
};

export type EventDeliveryCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<EventDeliveryCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type EventDeliveryCountableEdge = {
  /** The item at the end of the edge. */
  node: EventDelivery;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type EventDeliveryFilterInput = {
  status?: Maybe<EventDeliveryStatusEnum>;
  eventType?: Maybe<WebhookEventTypeEnum>;
};

/**
 * Retries event delivery.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type EventDeliveryRetry = {
  /** Event delivery. */
  delivery: Maybe<EventDelivery>;
  errors: Array<WebhookError>;
};

export type EventDeliverySortField =
  /** Sort event deliveries by created at. */
  | 'CREATED_AT';

export type EventDeliverySortingInput = {
  /** Specifies the direction in which to sort deliveries. */
  direction: OrderDirection;
  /** Sort deliveries by the selected field. */
  field: EventDeliverySortField;
};

export type EventDeliveryStatusEnum =
  | 'PENDING'
  | 'SUCCESS'
  | 'FAILED';

export type ExportError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ExportErrorCode;
};

/** An enumeration. */
export type ExportErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED';

/** History log of export file. */
export type ExportEvent = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Date when event happened at in ISO 8601 format. */
  date: Scalars['DateTime'];
  /** Export event type. */
  type: ExportEventsEnum;
  /** User who performed the action. Requires one of the following permissions: OWNER, MANAGE_STAFF. */
  user: Maybe<User>;
  /** App which performed the action. Requires one of the following permissions: OWNER, MANAGE_APPS. */
  app: Maybe<App>;
  /** Content of the event. */
  message: Scalars['String'];
};

/** An enumeration. */
export type ExportEventsEnum =
  | 'EXPORT_PENDING'
  | 'EXPORT_SUCCESS'
  | 'EXPORT_FAILED'
  | 'EXPORT_DELETED'
  | 'EXPORTED_FILE_SENT'
  | 'EXPORT_FAILED_INFO_SENT';

/** Represents a job data of exported file. */
export type ExportFile = Node & Job & {
  id: Scalars['ID'];
  /** Job status. */
  status: JobStatusEnum;
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime'];
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime'];
  /** Job message. */
  message: Maybe<Scalars['String']>;
  /** The URL of field to download. */
  url: Maybe<Scalars['String']>;
  /** List of events associated with the export. */
  events: Maybe<Array<ExportEvent>>;
  user: Maybe<User>;
  app: Maybe<App>;
};

export type ExportFileCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<ExportFileCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type ExportFileCountableEdge = {
  /** The item at the end of the edge. */
  node: ExportFile;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type ExportFileFilterInput = {
  createdAt?: Maybe<DateTimeRangeInput>;
  updatedAt?: Maybe<DateTimeRangeInput>;
  status?: Maybe<JobStatusEnum>;
  user?: Maybe<Scalars['String']>;
  app?: Maybe<Scalars['String']>;
};

export type ExportFileSortField =
  | 'STATUS'
  | 'CREATED_AT'
  | 'UPDATED_AT'
  | 'LAST_MODIFIED_AT';

export type ExportFileSortingInput = {
  /** Specifies the direction in which to sort export file. */
  direction: OrderDirection;
  /** Sort export file by the selected field. */
  field: ExportFileSortField;
};

/**
 * Export gift cards to csv file.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type ExportGiftCards = {
  /** The newly created export file job which is responsible for export data. */
  exportFile: Maybe<ExportFile>;
  errors: Array<ExportError>;
};

export type ExportGiftCardsInput = {
  /** Determine which gift cards should be exported. */
  scope: ExportScope;
  /** Filtering options for gift cards. */
  filter?: Maybe<GiftCardFilterInput>;
  /** List of gift cards IDs to export. */
  ids?: Maybe<Array<Scalars['ID']>>;
  /** Type of exported file. */
  fileType: FileTypesEnum;
};

export type ExportInfoInput = {
  /** List of attribute ids witch should be exported. */
  attributes?: Maybe<Array<Scalars['ID']>>;
  /** List of warehouse ids witch should be exported. */
  warehouses?: Maybe<Array<Scalars['ID']>>;
  /** List of channels ids which should be exported. */
  channels?: Maybe<Array<Scalars['ID']>>;
  /** List of product fields witch should be exported. */
  fields?: Maybe<Array<ProductFieldEnum>>;
};

/**
 * Export products to csv file.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ExportProducts = {
  /** The newly created export file job which is responsible for export data. */
  exportFile: Maybe<ExportFile>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  exportErrors: Array<ExportError>;
  errors: Array<ExportError>;
};

export type ExportProductsInput = {
  /** Determine which products should be exported. */
  scope: ExportScope;
  /** Filtering options for products. */
  filter?: Maybe<ProductFilterInput>;
  /** List of products IDs to export. */
  ids?: Maybe<Array<Scalars['ID']>>;
  /** Input with info about fields which should be exported. */
  exportInfo?: Maybe<ExportInfoInput>;
  /** Type of exported file. */
  fileType: FileTypesEnum;
};

export type ExportScope =
  /** Export all products. */
  | 'ALL'
  /** Export products with given ids. */
  | 'IDS'
  /** Export the filtered products. */
  | 'FILTER';

export type ExternalAuthentication = {
  /** ID of external authentication plugin. */
  id: Scalars['String'];
  /** Name of external authentication plugin. */
  name: Maybe<Scalars['String']>;
};

/** Prepare external authentication URL for user by custom plugin. */
export type ExternalAuthenticationUrl = {
  /** The data returned by authentication plugin. */
  authenticationData: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/** Logout user by custom plugin. */
export type ExternalLogout = {
  /** The data returned by authentication plugin. */
  logoutData: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

export type ExternalNotificationError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ExternalNotificationErrorCodes;
};

/** An enumeration. */
export type ExternalNotificationErrorCodes =
  | 'REQUIRED'
  | 'INVALID_MODEL_TYPE'
  | 'NOT_FOUND'
  | 'CHANNEL_INACTIVE';

/**
 * Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload.
 *
 * Added in Saleor 3.1.
 */
export type ExternalNotificationTrigger = {
  errors: Array<ExternalNotificationError>;
};

export type ExternalNotificationTriggerInput = {
  /** The list of customers or orders node IDs that will be serialized and included in the notification payload. */
  ids: Array<Scalars['ID']>;
  /** Additional payload that will be merged with the one based on the bussines object ID. */
  extraPayload?: Maybe<Scalars['JSONString']>;
  /** External event type. This field is passed to a plugin as an event type. */
  externalEventType: Scalars['String'];
};

/** Obtain external access tokens for user by custom plugin. */
export type ExternalObtainAccessTokens = {
  /** The token, required to authenticate. */
  token: Maybe<Scalars['String']>;
  /** The refresh token, required to re-generate external access token. */
  refreshToken: Maybe<Scalars['String']>;
  /** CSRF token required to re-generate external access token. */
  csrfToken: Maybe<Scalars['String']>;
  /** A user instance. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/** Refresh user's access by custom plugin. */
export type ExternalRefresh = {
  /** The token, required to authenticate. */
  token: Maybe<Scalars['String']>;
  /** The refresh token, required to re-generate external access token. */
  refreshToken: Maybe<Scalars['String']>;
  /** CSRF token required to re-generate external access token. */
  csrfToken: Maybe<Scalars['String']>;
  /** A user instance. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/** Verify external authentication data by plugin. */
export type ExternalVerify = {
  /** User assigned to data. */
  user: Maybe<User>;
  /** Determine if authentication data is valid or not. */
  isValid: Scalars['Boolean'];
  /** External data. */
  verifyData: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

export type File = {
  /** The URL of the file. */
  url: Scalars['String'];
  /** Content type of the file. */
  contentType: Maybe<Scalars['String']>;
};

/** An enumeration. */
export type FileTypesEnum =
  | 'CSV'
  | 'XLSX';

/**
 * Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
 */
export type FileUpload = {
  uploadedFile: Maybe<File>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  uploadErrors: Array<UploadError>;
  errors: Array<UploadError>;
};

/** Represents order fulfillment. */
export type Fulfillment = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  fulfillmentOrder: Scalars['Int'];
  status: FulfillmentStatus;
  trackingNumber: Scalars['String'];
  created: Scalars['DateTime'];
  /** List of lines for the fulfillment. */
  lines: Maybe<Array<FulfillmentLine>>;
  /** User-friendly fulfillment status. */
  statusDisplay: Maybe<Scalars['String']>;
  /** Warehouse from fulfillment was fulfilled. */
  warehouse: Maybe<Warehouse>;
};


/** Represents order fulfillment. */
export type FulfillmentPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents order fulfillment. */
export type FulfillmentPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents order fulfillment. */
export type FulfillmentMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents order fulfillment. */
export type FulfillmentMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};

/**
 * Approve existing fulfillment.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentApprove = {
  /** An approved fulfillment. */
  fulfillment: Maybe<Fulfillment>;
  /** Order which fulfillment was approved. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

/**
 * Event sent when fulfillment is approved.
 *
 * Added in Saleor 3.7.
 */
export type FulfillmentApproved = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The fulfillment the event relates to. */
  fulfillment: Maybe<Fulfillment>;
  /** The order the fulfillment belongs to. */
  order: Maybe<Order>;
};

/**
 * Cancels existing fulfillment and optionally restocks items.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentCancel = {
  /** A canceled fulfillment. */
  fulfillment: Maybe<Fulfillment>;
  /** Order which fulfillment was cancelled. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

export type FulfillmentCancelInput = {
  /** ID of a warehouse where items will be restocked. Optional when fulfillment is in WAITING_FOR_APPROVAL state. */
  warehouseId?: Maybe<Scalars['ID']>;
};

/**
 * Event sent when fulfillment is canceled.
 *
 * Added in Saleor 3.4.
 */
export type FulfillmentCanceled = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The fulfillment the event relates to. */
  fulfillment: Maybe<Fulfillment>;
  /** The order the fulfillment belongs to. */
  order: Maybe<Order>;
};

/**
 * Event sent when new fulfillment is created.
 *
 * Added in Saleor 3.4.
 */
export type FulfillmentCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The fulfillment the event relates to. */
  fulfillment: Maybe<Fulfillment>;
  /** The order the fulfillment belongs to. */
  order: Maybe<Order>;
};

/** Represents line of the fulfillment. */
export type FulfillmentLine = Node & {
  id: Scalars['ID'];
  quantity: Scalars['Int'];
  orderLine: Maybe<OrderLine>;
};

/**
 * Event sent when fulfillment metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type FulfillmentMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The fulfillment the event relates to. */
  fulfillment: Maybe<Fulfillment>;
  /** The order the fulfillment belongs to. */
  order: Maybe<Order>;
};

/**
 * Refund products.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentRefundProducts = {
  /** A refunded fulfillment. */
  fulfillment: Maybe<Fulfillment>;
  /** Order which fulfillment was refunded. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

/**
 * Return products.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentReturnProducts = {
  /** A return fulfillment. */
  returnFulfillment: Maybe<Fulfillment>;
  /** A replace fulfillment. */
  replaceFulfillment: Maybe<Fulfillment>;
  /** Order which fulfillment was returned. */
  order: Maybe<Order>;
  /** A draft order which was created for products with replace flag. */
  replaceOrder: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

/** An enumeration. */
export type FulfillmentStatus =
  | 'FULFILLED'
  | 'REFUNDED'
  | 'RETURNED'
  | 'REPLACED'
  | 'REFUNDED_AND_RETURNED'
  | 'CANCELED'
  | 'WAITING_FOR_APPROVAL';

/**
 * Updates a fulfillment for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentUpdateTracking = {
  /** A fulfillment with updated tracking. */
  fulfillment: Maybe<Fulfillment>;
  /** Order for which fulfillment was updated. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

export type FulfillmentUpdateTrackingInput = {
  /** Fulfillment tracking number. */
  trackingNumber?: Maybe<Scalars['String']>;
  /** If true, send an email notification to the customer. */
  notifyCustomer?: Maybe<Scalars['Boolean']>;
};

/** Payment gateway client configuration key and value pair. */
export type GatewayConfigLine = {
  /** Gateway config key. */
  field: Scalars['String'];
  /** Gateway config value for key. */
  value: Maybe<Scalars['String']>;
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCard = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  /** Code in format which allows displaying in a user interface. */
  displayCode: Scalars['String'];
  /** Last 4 characters of gift card code. */
  last4CodeChars: Scalars['String'];
  /** Gift card code. Can be fetched by a staff member with MANAGE_GIFT_CARD when gift card wasn't yet used and by the gift card owner. */
  code: Scalars['String'];
  created: Scalars['DateTime'];
  /**
   * The user who bought or issued a gift card.
   *
   * Added in Saleor 3.1.
   */
  createdBy: Maybe<User>;
  /**
   * The customer who used a gift card.
   *
   * Added in Saleor 3.1.
   */
  usedBy: Maybe<User>;
  /**
   * Email address of the user who bought or issued gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_USERS, OWNER.
   */
  createdByEmail: Maybe<Scalars['String']>;
  /**
   * Email address of the customer who used a gift card.
   *
   * Added in Saleor 3.1.
   */
  usedByEmail: Maybe<Scalars['String']>;
  lastUsedOn: Maybe<Scalars['DateTime']>;
  expiryDate: Maybe<Scalars['Date']>;
  /**
   * App which created the gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_APPS, OWNER.
   */
  app: Maybe<App>;
  /**
   * Related gift card product.
   *
   * Added in Saleor 3.1.
   */
  product: Maybe<Product>;
  /**
   * List of events associated with the gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  events: Array<GiftCardEvent>;
  /**
   * The gift card tag.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  tags: Array<GiftCardTag>;
  /**
   * Slug of the channel where the gift card was bought.
   *
   * Added in Saleor 3.1.
   */
  boughtInChannel: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  initialBalance: Money;
  currentBalance: Money;
  /**
   * The customer who bought a gift card.
   * @deprecated This field will be removed in Saleor 4.0. Use `createdBy` field instead.
   */
  user: Maybe<User>;
  /**
   * End date of gift card.
   * @deprecated This field will be removed in Saleor 4.0. Use `expiryDate` field instead.
   */
  endDate: Maybe<Scalars['DateTime']>;
  /**
   * Start date of gift card.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  startDate: Maybe<Scalars['DateTime']>;
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardMetafieldArgs = {
  key: Scalars['String'];
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardEventsArgs = {
  filter?: Maybe<GiftCardEventFilterInput>;
};

/**
 * Activate a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardActivate = {
  /** Activated gift card. */
  giftCard: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
  errors: Array<GiftCardError>;
};

/**
 * Adds note to the gift card.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardAddNote = {
  /** Gift card with the note added. */
  giftCard: Maybe<GiftCard>;
  /** Gift card note created. */
  event: Maybe<GiftCardEvent>;
  errors: Array<GiftCardError>;
};

export type GiftCardAddNoteInput = {
  /** Note message. */
  message: Scalars['String'];
};

/**
 * Activate gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardBulkActivate = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<GiftCardError>;
};

/**
 * Create gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardBulkCreate = {
  /** Returns how many objects were created. */
  count: Scalars['Int'];
  /** List of created gift cards. */
  giftCards: Array<GiftCard>;
  errors: Array<GiftCardError>;
};

export type GiftCardBulkCreateInput = {
  /** The number of cards to issue. */
  count: Scalars['Int'];
  /** Balance of the gift card. */
  balance: PriceInput;
  /** The gift card tags. */
  tags?: Maybe<Array<Scalars['String']>>;
  /** The gift card expiry date. */
  expiryDate?: Maybe<Scalars['Date']>;
  /** Determine if gift card is active. */
  isActive: Scalars['Boolean'];
};

/**
 * Deactivate gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardBulkDeactivate = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<GiftCardError>;
};

/**
 * Delete gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  errors: Array<GiftCardError>;
};

export type GiftCardCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<GiftCardCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type GiftCardCountableEdge = {
  /** The item at the end of the edge. */
  node: GiftCard;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Creates a new gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
  errors: Array<GiftCardError>;
  giftCard: Maybe<GiftCard>;
};

export type GiftCardCreateInput = {
  /**
   * The gift card tags to add.
   *
   * Added in Saleor 3.1.
   */
  addTags?: Maybe<Array<Scalars['String']>>;
  /**
   * The gift card expiry date.
   *
   * Added in Saleor 3.1.
   */
  expiryDate?: Maybe<Scalars['Date']>;
  /**
   * Start date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  startDate?: Maybe<Scalars['Date']>;
  /**
   * End date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead.
   */
  endDate?: Maybe<Scalars['Date']>;
  /** Balance of the gift card. */
  balance: PriceInput;
  /** Email of the customer to whom gift card will be sent. */
  userEmail?: Maybe<Scalars['String']>;
  /**
   * Slug of a channel from which the email should be sent.
   *
   * Added in Saleor 3.1.
   */
  channel?: Maybe<Scalars['String']>;
  /**
   * Determine if gift card is active.
   *
   * Added in Saleor 3.1.
   */
  isActive: Scalars['Boolean'];
  /**
   * Code to use the gift card.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. The code is now auto generated.
   */
  code?: Maybe<Scalars['String']>;
  /**
   * The gift card note from the staff member.
   *
   * Added in Saleor 3.1.
   */
  note?: Maybe<Scalars['String']>;
};

/**
 * Event sent when new gift card is created.
 *
 * Added in Saleor 3.2.
 */
export type GiftCardCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The gift card the event relates to. */
  giftCard: Maybe<GiftCard>;
};

/**
 * Deactivate a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardDeactivate = {
  /** Deactivated gift card. */
  giftCard: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
  errors: Array<GiftCardError>;
};

/**
 * Delete gift card.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
  errors: Array<GiftCardError>;
  giftCard: Maybe<GiftCard>;
};

/**
 * Event sent when gift card is deleted.
 *
 * Added in Saleor 3.2.
 */
export type GiftCardDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The gift card the event relates to. */
  giftCard: Maybe<GiftCard>;
};

export type GiftCardError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: GiftCardErrorCode;
  /** List of tag values that cause the error. */
  tags: Maybe<Array<Scalars['String']>>;
};

/** An enumeration. */
export type GiftCardErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'EXPIRED_GIFT_CARD'
  | 'DUPLICATED_INPUT_ITEM';

/**
 * History log of the gift card.
 *
 * Added in Saleor 3.1.
 */
export type GiftCardEvent = Node & {
  id: Scalars['ID'];
  /** Date when event happened at in ISO 8601 format. */
  date: Maybe<Scalars['DateTime']>;
  /** Gift card event type. */
  type: Maybe<GiftCardEventsEnum>;
  /** User who performed the action. Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF, OWNER. */
  user: Maybe<User>;
  /** App that performed the action. Requires one of the following permissions: MANAGE_APPS, OWNER. */
  app: Maybe<App>;
  /** Content of the event. */
  message: Maybe<Scalars['String']>;
  /** Email of the customer. */
  email: Maybe<Scalars['String']>;
  /** The order ID where gift card was used or bought. */
  orderId: Maybe<Scalars['ID']>;
  /** User-friendly number of an order where gift card was used or bought. */
  orderNumber: Maybe<Scalars['String']>;
  /** The list of gift card tags. */
  tags: Maybe<Array<Scalars['String']>>;
  /** The list of old gift card tags. */
  oldTags: Maybe<Array<Scalars['String']>>;
  /** The gift card balance. */
  balance: Maybe<GiftCardEventBalance>;
  /** The gift card expiry date. */
  expiryDate: Maybe<Scalars['Date']>;
  /** Previous gift card expiry date. */
  oldExpiryDate: Maybe<Scalars['Date']>;
};

export type GiftCardEventBalance = {
  /** Initial balance of the gift card. */
  initialBalance: Maybe<Money>;
  /** Current balance of the gift card. */
  currentBalance: Money;
  /** Previous initial balance of the gift card. */
  oldInitialBalance: Maybe<Money>;
  /** Previous current balance of the gift card. */
  oldCurrentBalance: Maybe<Money>;
};

export type GiftCardEventFilterInput = {
  type?: Maybe<GiftCardEventsEnum>;
  orders?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export type GiftCardEventsEnum =
  | 'ISSUED'
  | 'BOUGHT'
  | 'UPDATED'
  | 'ACTIVATED'
  | 'DEACTIVATED'
  | 'BALANCE_RESET'
  | 'EXPIRY_DATE_UPDATED'
  | 'TAGS_UPDATED'
  | 'SENT_TO_CUSTOMER'
  | 'RESENT'
  | 'NOTE_ADDED'
  | 'USED_IN_ORDER';

export type GiftCardFilterInput = {
  isActive?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Array<MetadataFilter>>;
  tags?: Maybe<Array<Scalars['String']>>;
  products?: Maybe<Array<Scalars['ID']>>;
  usedBy?: Maybe<Array<Scalars['ID']>>;
  used?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  currentBalance?: Maybe<PriceRangeInput>;
  initialBalance?: Maybe<PriceRangeInput>;
  code?: Maybe<Scalars['String']>;
};

/**
 * Event sent when gift card metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type GiftCardMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The gift card the event relates to. */
  giftCard: Maybe<GiftCard>;
};

/**
 * Resend a gift card.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardResend = {
  /** Gift card which has been sent. */
  giftCard: Maybe<GiftCard>;
  errors: Array<GiftCardError>;
};

export type GiftCardResendInput = {
  /** ID of a gift card to resend. */
  id: Scalars['ID'];
  /** Email to which gift card should be send. */
  email?: Maybe<Scalars['String']>;
  /** Slug of a channel from which the email should be sent. */
  channel: Scalars['String'];
};

/**
 * Event sent when gift card is e-mailed.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type GiftCardSent = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The gift card the event relates to. */
  giftCard: Maybe<GiftCard>;
  /** Slug of a channel for which this gift card email was sent. */
  channel: Maybe<Scalars['String']>;
  /** E-mail address to which gift card was sent. */
  sentToEmail: Maybe<Scalars['String']>;
};

/** Gift card related settings from site settings. */
export type GiftCardSettings = {
  /** The gift card expiry type settings. */
  expiryType: GiftCardSettingsExpiryTypeEnum;
  /** The gift card expiry period settings. */
  expiryPeriod: Maybe<TimePeriod>;
};

export type GiftCardSettingsError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: GiftCardSettingsErrorCode;
};

/** An enumeration. */
export type GiftCardSettingsErrorCode =
  | 'INVALID'
  | 'REQUIRED'
  | 'GRAPHQL_ERROR';

/** An enumeration. */
export type GiftCardSettingsExpiryTypeEnum =
  | 'NEVER_EXPIRE'
  | 'EXPIRY_PERIOD';

/**
 * Update gift card settings.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardSettingsUpdate = {
  /** Gift card settings. */
  giftCardSettings: Maybe<GiftCardSettings>;
  errors: Array<GiftCardSettingsError>;
};

export type GiftCardSettingsUpdateInput = {
  /** Defines gift card default expiry settings. */
  expiryType?: Maybe<GiftCardSettingsExpiryTypeEnum>;
  /** Defines gift card expiry period. */
  expiryPeriod?: Maybe<TimePeriodInputType>;
};

export type GiftCardSortField =
  /** Sort gift cards by product. */
  | 'PRODUCT'
  /** Sort gift cards by used by. */
  | 'USED_BY'
  /** Sort gift cards by current balance. */
  | 'CURRENT_BALANCE'
  /**
   * Sort gift cards by created at.
   *
   * Added in Saleor 3.8.
   */
  | 'CREATED_AT';

export type GiftCardSortingInput = {
  /** Specifies the direction in which to sort gift cards. */
  direction: OrderDirection;
  /** Sort gift cards by the selected field. */
  field: GiftCardSortField;
};

/**
 * Event sent when gift card status has changed.
 *
 * Added in Saleor 3.2.
 */
export type GiftCardStatusChanged = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The gift card the event relates to. */
  giftCard: Maybe<GiftCard>;
};

/**
 * The gift card tag.
 *
 * Added in Saleor 3.1.
 */
export type GiftCardTag = Node & {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type GiftCardTagCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<GiftCardTagCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type GiftCardTagCountableEdge = {
  /** The item at the end of the edge. */
  node: GiftCardTag;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type GiftCardTagFilterInput = {
  search?: Maybe<Scalars['String']>;
};

/**
 * Update a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
  errors: Array<GiftCardError>;
  giftCard: Maybe<GiftCard>;
};

export type GiftCardUpdateInput = {
  /**
   * The gift card tags to add.
   *
   * Added in Saleor 3.1.
   */
  addTags?: Maybe<Array<Scalars['String']>>;
  /**
   * The gift card expiry date.
   *
   * Added in Saleor 3.1.
   */
  expiryDate?: Maybe<Scalars['Date']>;
  /**
   * Start date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  startDate?: Maybe<Scalars['Date']>;
  /**
   * End date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead.
   */
  endDate?: Maybe<Scalars['Date']>;
  /**
   * The gift card tags to remove.
   *
   * Added in Saleor 3.1.
   */
  removeTags?: Maybe<Array<Scalars['String']>>;
  /**
   * The gift card balance amount.
   *
   * Added in Saleor 3.1.
   */
  balanceAmount?: Maybe<Scalars['PositiveDecimal']>;
};

/**
 * Event sent when gift card is updated.
 *
 * Added in Saleor 3.2.
 */
export type GiftCardUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The gift card the event relates to. */
  giftCard: Maybe<GiftCard>;
};

/** Represents permission group data. */
export type Group = Node & {
  id: Scalars['ID'];
  name: Scalars['String'];
  /**
   * List of group users
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  users: Maybe<Array<User>>;
  /** List of group permissions */
  permissions: Maybe<Array<Permission>>;
  /** True, if the currently authenticated user has rights to manage a group. */
  userCanManage: Scalars['Boolean'];
  /**
   * List of channels the group has access to.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  accessibleChannels: Maybe<Array<Channel>>;
  /**
   * Determine if the group have restricted access to channels.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  restrictedAccessToChannels: Scalars['Boolean'];
};

export type GroupCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<GroupCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type GroupCountableEdge = {
  /** The item at the end of the edge. */
  node: Group;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Represents an image. */
export type Image = {
  /** The URL of the image. */
  url: Scalars['String'];
  /** Alt text for an image. */
  alt: Maybe<Scalars['String']>;
};

export type IntRangeInput = {
  /** Value greater than or equal to. */
  gte?: Maybe<Scalars['Int']>;
  /** Value less than or equal to. */
  lte?: Maybe<Scalars['Int']>;
};

/** Represents an Invoice. */
export type Invoice = ObjectWithMetadata & Job & Node & {
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  /** Job status. */
  status: JobStatusEnum;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  message: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  number: Maybe<Scalars['String']>;
  externalUrl: Maybe<Scalars['String']>;
  /** URL to download an invoice. */
  url: Maybe<Scalars['String']>;
  /**
   * Order related to the invoice.
   *
   * Added in Saleor 3.10.
   */
  order: Maybe<Order>;
};


/** Represents an Invoice. */
export type InvoicePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents an Invoice. */
export type InvoicePrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents an Invoice. */
export type InvoiceMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents an Invoice. */
export type InvoiceMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};

/**
 * Creates a ready to send invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
  errors: Array<InvoiceError>;
  invoice: Maybe<Invoice>;
};

export type InvoiceCreateInput = {
  /** Invoice number. */
  number: Scalars['String'];
  /** URL of an invoice to download. */
  url: Scalars['String'];
  /**
   * Fields required to update the invoice metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: Maybe<Array<MetadataInput>>;
  /**
   * Fields required to update the invoice private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: Maybe<Array<MetadataInput>>;
};

/**
 * Deletes an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
  errors: Array<InvoiceError>;
  invoice: Maybe<Invoice>;
};

/**
 * Event sent when invoice is deleted.
 *
 * Added in Saleor 3.2.
 */
export type InvoiceDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The invoice the event relates to. */
  invoice: Maybe<Invoice>;
  /**
   * Order related to the invoice.
   *
   * Added in Saleor 3.10.
   */
  order: Maybe<Order>;
};

export type InvoiceError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: InvoiceErrorCode;
};

/** An enumeration. */
export type InvoiceErrorCode =
  | 'REQUIRED'
  | 'NOT_READY'
  | 'URL_NOT_SET'
  | 'EMAIL_NOT_SET'
  | 'NUMBER_NOT_SET'
  | 'NOT_FOUND'
  | 'INVALID_STATUS'
  | 'NO_INVOICE_PLUGIN';

/**
 * Request an invoice for the order using plugin.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceRequest = {
  /** Order related to an invoice. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
  errors: Array<InvoiceError>;
  invoice: Maybe<Invoice>;
};

/**
 * Requests deletion of an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceRequestDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
  errors: Array<InvoiceError>;
  invoice: Maybe<Invoice>;
};

/**
 * Event sent when invoice is requested.
 *
 * Added in Saleor 3.2.
 */
export type InvoiceRequested = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The invoice the event relates to. */
  invoice: Maybe<Invoice>;
  /**
   * Order related to the invoice.
   *
   * Added in Saleor 3.10.
   */
  order: Order;
};

/**
 * Send an invoice notification to the customer.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceSendNotification = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
  errors: Array<InvoiceError>;
  invoice: Maybe<Invoice>;
};

/**
 * Event sent when invoice is sent.
 *
 * Added in Saleor 3.2.
 */
export type InvoiceSent = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The invoice the event relates to. */
  invoice: Maybe<Invoice>;
  /**
   * Order related to the invoice.
   *
   * Added in Saleor 3.10.
   */
  order: Maybe<Order>;
};

/**
 * Updates an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
  errors: Array<InvoiceError>;
  invoice: Maybe<Invoice>;
};

export type IssuingPrincipal = App | User;



export type Job = {
  /** Job status. */
  status: JobStatusEnum;
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime'];
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime'];
  /** Job message. */
  message: Maybe<Scalars['String']>;
};

/** An enumeration. */
export type JobStatusEnum =
  | 'PENDING'
  | 'SUCCESS'
  | 'FAILED'
  | 'DELETED';

/** An enumeration. */
export type LanguageCodeEnum =
  | 'AF'
  | 'AF_NA'
  | 'AF_ZA'
  | 'AGQ'
  | 'AGQ_CM'
  | 'AK'
  | 'AK_GH'
  | 'AM'
  | 'AM_ET'
  | 'AR'
  | 'AR_AE'
  | 'AR_BH'
  | 'AR_DJ'
  | 'AR_DZ'
  | 'AR_EG'
  | 'AR_EH'
  | 'AR_ER'
  | 'AR_IL'
  | 'AR_IQ'
  | 'AR_JO'
  | 'AR_KM'
  | 'AR_KW'
  | 'AR_LB'
  | 'AR_LY'
  | 'AR_MA'
  | 'AR_MR'
  | 'AR_OM'
  | 'AR_PS'
  | 'AR_QA'
  | 'AR_SA'
  | 'AR_SD'
  | 'AR_SO'
  | 'AR_SS'
  | 'AR_SY'
  | 'AR_TD'
  | 'AR_TN'
  | 'AR_YE'
  | 'AS'
  | 'AS_IN'
  | 'ASA'
  | 'ASA_TZ'
  | 'AST'
  | 'AST_ES'
  | 'AZ'
  | 'AZ_CYRL'
  | 'AZ_CYRL_AZ'
  | 'AZ_LATN'
  | 'AZ_LATN_AZ'
  | 'BAS'
  | 'BAS_CM'
  | 'BE'
  | 'BE_BY'
  | 'BEM'
  | 'BEM_ZM'
  | 'BEZ'
  | 'BEZ_TZ'
  | 'BG'
  | 'BG_BG'
  | 'BM'
  | 'BM_ML'
  | 'BN'
  | 'BN_BD'
  | 'BN_IN'
  | 'BO'
  | 'BO_CN'
  | 'BO_IN'
  | 'BR'
  | 'BR_FR'
  | 'BRX'
  | 'BRX_IN'
  | 'BS'
  | 'BS_CYRL'
  | 'BS_CYRL_BA'
  | 'BS_LATN'
  | 'BS_LATN_BA'
  | 'CA'
  | 'CA_AD'
  | 'CA_ES'
  | 'CA_ES_VALENCIA'
  | 'CA_FR'
  | 'CA_IT'
  | 'CCP'
  | 'CCP_BD'
  | 'CCP_IN'
  | 'CE'
  | 'CE_RU'
  | 'CEB'
  | 'CEB_PH'
  | 'CGG'
  | 'CGG_UG'
  | 'CHR'
  | 'CHR_US'
  | 'CKB'
  | 'CKB_IQ'
  | 'CKB_IR'
  | 'CS'
  | 'CS_CZ'
  | 'CU'
  | 'CU_RU'
  | 'CY'
  | 'CY_GB'
  | 'DA'
  | 'DA_DK'
  | 'DA_GL'
  | 'DAV'
  | 'DAV_KE'
  | 'DE'
  | 'DE_AT'
  | 'DE_BE'
  | 'DE_CH'
  | 'DE_DE'
  | 'DE_IT'
  | 'DE_LI'
  | 'DE_LU'
  | 'DJE'
  | 'DJE_NE'
  | 'DSB'
  | 'DSB_DE'
  | 'DUA'
  | 'DUA_CM'
  | 'DYO'
  | 'DYO_SN'
  | 'DZ'
  | 'DZ_BT'
  | 'EBU'
  | 'EBU_KE'
  | 'EE'
  | 'EE_GH'
  | 'EE_TG'
  | 'EL'
  | 'EL_CY'
  | 'EL_GR'
  | 'EN'
  | 'EN_AE'
  | 'EN_AG'
  | 'EN_AI'
  | 'EN_AS'
  | 'EN_AT'
  | 'EN_AU'
  | 'EN_BB'
  | 'EN_BE'
  | 'EN_BI'
  | 'EN_BM'
  | 'EN_BS'
  | 'EN_BW'
  | 'EN_BZ'
  | 'EN_CA'
  | 'EN_CC'
  | 'EN_CH'
  | 'EN_CK'
  | 'EN_CM'
  | 'EN_CX'
  | 'EN_CY'
  | 'EN_DE'
  | 'EN_DG'
  | 'EN_DK'
  | 'EN_DM'
  | 'EN_ER'
  | 'EN_FI'
  | 'EN_FJ'
  | 'EN_FK'
  | 'EN_FM'
  | 'EN_GB'
  | 'EN_GD'
  | 'EN_GG'
  | 'EN_GH'
  | 'EN_GI'
  | 'EN_GM'
  | 'EN_GU'
  | 'EN_GY'
  | 'EN_HK'
  | 'EN_IE'
  | 'EN_IL'
  | 'EN_IM'
  | 'EN_IN'
  | 'EN_IO'
  | 'EN_JE'
  | 'EN_JM'
  | 'EN_KE'
  | 'EN_KI'
  | 'EN_KN'
  | 'EN_KY'
  | 'EN_LC'
  | 'EN_LR'
  | 'EN_LS'
  | 'EN_MG'
  | 'EN_MH'
  | 'EN_MO'
  | 'EN_MP'
  | 'EN_MS'
  | 'EN_MT'
  | 'EN_MU'
  | 'EN_MW'
  | 'EN_MY'
  | 'EN_NA'
  | 'EN_NF'
  | 'EN_NG'
  | 'EN_NL'
  | 'EN_NR'
  | 'EN_NU'
  | 'EN_NZ'
  | 'EN_PG'
  | 'EN_PH'
  | 'EN_PK'
  | 'EN_PN'
  | 'EN_PR'
  | 'EN_PW'
  | 'EN_RW'
  | 'EN_SB'
  | 'EN_SC'
  | 'EN_SD'
  | 'EN_SE'
  | 'EN_SG'
  | 'EN_SH'
  | 'EN_SI'
  | 'EN_SL'
  | 'EN_SS'
  | 'EN_SX'
  | 'EN_SZ'
  | 'EN_TC'
  | 'EN_TK'
  | 'EN_TO'
  | 'EN_TT'
  | 'EN_TV'
  | 'EN_TZ'
  | 'EN_UG'
  | 'EN_UM'
  | 'EN_US'
  | 'EN_VC'
  | 'EN_VG'
  | 'EN_VI'
  | 'EN_VU'
  | 'EN_WS'
  | 'EN_ZA'
  | 'EN_ZM'
  | 'EN_ZW'
  | 'EO'
  | 'ES'
  | 'ES_AR'
  | 'ES_BO'
  | 'ES_BR'
  | 'ES_BZ'
  | 'ES_CL'
  | 'ES_CO'
  | 'ES_CR'
  | 'ES_CU'
  | 'ES_DO'
  | 'ES_EA'
  | 'ES_EC'
  | 'ES_ES'
  | 'ES_GQ'
  | 'ES_GT'
  | 'ES_HN'
  | 'ES_IC'
  | 'ES_MX'
  | 'ES_NI'
  | 'ES_PA'
  | 'ES_PE'
  | 'ES_PH'
  | 'ES_PR'
  | 'ES_PY'
  | 'ES_SV'
  | 'ES_US'
  | 'ES_UY'
  | 'ES_VE'
  | 'ET'
  | 'ET_EE'
  | 'EU'
  | 'EU_ES'
  | 'EWO'
  | 'EWO_CM'
  | 'FA'
  | 'FA_AF'
  | 'FA_IR'
  | 'FF'
  | 'FF_ADLM'
  | 'FF_ADLM_BF'
  | 'FF_ADLM_CM'
  | 'FF_ADLM_GH'
  | 'FF_ADLM_GM'
  | 'FF_ADLM_GN'
  | 'FF_ADLM_GW'
  | 'FF_ADLM_LR'
  | 'FF_ADLM_MR'
  | 'FF_ADLM_NE'
  | 'FF_ADLM_NG'
  | 'FF_ADLM_SL'
  | 'FF_ADLM_SN'
  | 'FF_LATN'
  | 'FF_LATN_BF'
  | 'FF_LATN_CM'
  | 'FF_LATN_GH'
  | 'FF_LATN_GM'
  | 'FF_LATN_GN'
  | 'FF_LATN_GW'
  | 'FF_LATN_LR'
  | 'FF_LATN_MR'
  | 'FF_LATN_NE'
  | 'FF_LATN_NG'
  | 'FF_LATN_SL'
  | 'FF_LATN_SN'
  | 'FI'
  | 'FI_FI'
  | 'FIL'
  | 'FIL_PH'
  | 'FO'
  | 'FO_DK'
  | 'FO_FO'
  | 'FR'
  | 'FR_BE'
  | 'FR_BF'
  | 'FR_BI'
  | 'FR_BJ'
  | 'FR_BL'
  | 'FR_CA'
  | 'FR_CD'
  | 'FR_CF'
  | 'FR_CG'
  | 'FR_CH'
  | 'FR_CI'
  | 'FR_CM'
  | 'FR_DJ'
  | 'FR_DZ'
  | 'FR_FR'
  | 'FR_GA'
  | 'FR_GF'
  | 'FR_GN'
  | 'FR_GP'
  | 'FR_GQ'
  | 'FR_HT'
  | 'FR_KM'
  | 'FR_LU'
  | 'FR_MA'
  | 'FR_MC'
  | 'FR_MF'
  | 'FR_MG'
  | 'FR_ML'
  | 'FR_MQ'
  | 'FR_MR'
  | 'FR_MU'
  | 'FR_NC'
  | 'FR_NE'
  | 'FR_PF'
  | 'FR_PM'
  | 'FR_RE'
  | 'FR_RW'
  | 'FR_SC'
  | 'FR_SN'
  | 'FR_SY'
  | 'FR_TD'
  | 'FR_TG'
  | 'FR_TN'
  | 'FR_VU'
  | 'FR_WF'
  | 'FR_YT'
  | 'FUR'
  | 'FUR_IT'
  | 'FY'
  | 'FY_NL'
  | 'GA'
  | 'GA_GB'
  | 'GA_IE'
  | 'GD'
  | 'GD_GB'
  | 'GL'
  | 'GL_ES'
  | 'GSW'
  | 'GSW_CH'
  | 'GSW_FR'
  | 'GSW_LI'
  | 'GU'
  | 'GU_IN'
  | 'GUZ'
  | 'GUZ_KE'
  | 'GV'
  | 'GV_IM'
  | 'HA'
  | 'HA_GH'
  | 'HA_NE'
  | 'HA_NG'
  | 'HAW'
  | 'HAW_US'
  | 'HE'
  | 'HE_IL'
  | 'HI'
  | 'HI_IN'
  | 'HR'
  | 'HR_BA'
  | 'HR_HR'
  | 'HSB'
  | 'HSB_DE'
  | 'HU'
  | 'HU_HU'
  | 'HY'
  | 'HY_AM'
  | 'IA'
  | 'ID'
  | 'ID_ID'
  | 'IG'
  | 'IG_NG'
  | 'II'
  | 'II_CN'
  | 'IS'
  | 'IS_IS'
  | 'IT'
  | 'IT_CH'
  | 'IT_IT'
  | 'IT_SM'
  | 'IT_VA'
  | 'JA'
  | 'JA_JP'
  | 'JGO'
  | 'JGO_CM'
  | 'JMC'
  | 'JMC_TZ'
  | 'JV'
  | 'JV_ID'
  | 'KA'
  | 'KA_GE'
  | 'KAB'
  | 'KAB_DZ'
  | 'KAM'
  | 'KAM_KE'
  | 'KDE'
  | 'KDE_TZ'
  | 'KEA'
  | 'KEA_CV'
  | 'KHQ'
  | 'KHQ_ML'
  | 'KI'
  | 'KI_KE'
  | 'KK'
  | 'KK_KZ'
  | 'KKJ'
  | 'KKJ_CM'
  | 'KL'
  | 'KL_GL'
  | 'KLN'
  | 'KLN_KE'
  | 'KM'
  | 'KM_KH'
  | 'KN'
  | 'KN_IN'
  | 'KO'
  | 'KO_KP'
  | 'KO_KR'
  | 'KOK'
  | 'KOK_IN'
  | 'KS'
  | 'KS_ARAB'
  | 'KS_ARAB_IN'
  | 'KSB'
  | 'KSB_TZ'
  | 'KSF'
  | 'KSF_CM'
  | 'KSH'
  | 'KSH_DE'
  | 'KU'
  | 'KU_TR'
  | 'KW'
  | 'KW_GB'
  | 'KY'
  | 'KY_KG'
  | 'LAG'
  | 'LAG_TZ'
  | 'LB'
  | 'LB_LU'
  | 'LG'
  | 'LG_UG'
  | 'LKT'
  | 'LKT_US'
  | 'LN'
  | 'LN_AO'
  | 'LN_CD'
  | 'LN_CF'
  | 'LN_CG'
  | 'LO'
  | 'LO_LA'
  | 'LRC'
  | 'LRC_IQ'
  | 'LRC_IR'
  | 'LT'
  | 'LT_LT'
  | 'LU'
  | 'LU_CD'
  | 'LUO'
  | 'LUO_KE'
  | 'LUY'
  | 'LUY_KE'
  | 'LV'
  | 'LV_LV'
  | 'MAI'
  | 'MAI_IN'
  | 'MAS'
  | 'MAS_KE'
  | 'MAS_TZ'
  | 'MER'
  | 'MER_KE'
  | 'MFE'
  | 'MFE_MU'
  | 'MG'
  | 'MG_MG'
  | 'MGH'
  | 'MGH_MZ'
  | 'MGO'
  | 'MGO_CM'
  | 'MI'
  | 'MI_NZ'
  | 'MK'
  | 'MK_MK'
  | 'ML'
  | 'ML_IN'
  | 'MN'
  | 'MN_MN'
  | 'MNI'
  | 'MNI_BENG'
  | 'MNI_BENG_IN'
  | 'MR'
  | 'MR_IN'
  | 'MS'
  | 'MS_BN'
  | 'MS_ID'
  | 'MS_MY'
  | 'MS_SG'
  | 'MT'
  | 'MT_MT'
  | 'MUA'
  | 'MUA_CM'
  | 'MY'
  | 'MY_MM'
  | 'MZN'
  | 'MZN_IR'
  | 'NAQ'
  | 'NAQ_NA'
  | 'NB'
  | 'NB_NO'
  | 'NB_SJ'
  | 'ND'
  | 'ND_ZW'
  | 'NDS'
  | 'NDS_DE'
  | 'NDS_NL'
  | 'NE'
  | 'NE_IN'
  | 'NE_NP'
  | 'NL'
  | 'NL_AW'
  | 'NL_BE'
  | 'NL_BQ'
  | 'NL_CW'
  | 'NL_NL'
  | 'NL_SR'
  | 'NL_SX'
  | 'NMG'
  | 'NMG_CM'
  | 'NN'
  | 'NN_NO'
  | 'NNH'
  | 'NNH_CM'
  | 'NUS'
  | 'NUS_SS'
  | 'NYN'
  | 'NYN_UG'
  | 'OM'
  | 'OM_ET'
  | 'OM_KE'
  | 'OR'
  | 'OR_IN'
  | 'OS'
  | 'OS_GE'
  | 'OS_RU'
  | 'PA'
  | 'PA_ARAB'
  | 'PA_ARAB_PK'
  | 'PA_GURU'
  | 'PA_GURU_IN'
  | 'PCM'
  | 'PCM_NG'
  | 'PL'
  | 'PL_PL'
  | 'PRG'
  | 'PS'
  | 'PS_AF'
  | 'PS_PK'
  | 'PT'
  | 'PT_AO'
  | 'PT_BR'
  | 'PT_CH'
  | 'PT_CV'
  | 'PT_GQ'
  | 'PT_GW'
  | 'PT_LU'
  | 'PT_MO'
  | 'PT_MZ'
  | 'PT_PT'
  | 'PT_ST'
  | 'PT_TL'
  | 'QU'
  | 'QU_BO'
  | 'QU_EC'
  | 'QU_PE'
  | 'RM'
  | 'RM_CH'
  | 'RN'
  | 'RN_BI'
  | 'RO'
  | 'RO_MD'
  | 'RO_RO'
  | 'ROF'
  | 'ROF_TZ'
  | 'RU'
  | 'RU_BY'
  | 'RU_KG'
  | 'RU_KZ'
  | 'RU_MD'
  | 'RU_RU'
  | 'RU_UA'
  | 'RW'
  | 'RW_RW'
  | 'RWK'
  | 'RWK_TZ'
  | 'SAH'
  | 'SAH_RU'
  | 'SAQ'
  | 'SAQ_KE'
  | 'SAT'
  | 'SAT_OLCK'
  | 'SAT_OLCK_IN'
  | 'SBP'
  | 'SBP_TZ'
  | 'SD'
  | 'SD_ARAB'
  | 'SD_ARAB_PK'
  | 'SD_DEVA'
  | 'SD_DEVA_IN'
  | 'SE'
  | 'SE_FI'
  | 'SE_NO'
  | 'SE_SE'
  | 'SEH'
  | 'SEH_MZ'
  | 'SES'
  | 'SES_ML'
  | 'SG'
  | 'SG_CF'
  | 'SHI'
  | 'SHI_LATN'
  | 'SHI_LATN_MA'
  | 'SHI_TFNG'
  | 'SHI_TFNG_MA'
  | 'SI'
  | 'SI_LK'
  | 'SK'
  | 'SK_SK'
  | 'SL'
  | 'SL_SI'
  | 'SMN'
  | 'SMN_FI'
  | 'SN'
  | 'SN_ZW'
  | 'SO'
  | 'SO_DJ'
  | 'SO_ET'
  | 'SO_KE'
  | 'SO_SO'
  | 'SQ'
  | 'SQ_AL'
  | 'SQ_MK'
  | 'SQ_XK'
  | 'SR'
  | 'SR_CYRL'
  | 'SR_CYRL_BA'
  | 'SR_CYRL_ME'
  | 'SR_CYRL_RS'
  | 'SR_CYRL_XK'
  | 'SR_LATN'
  | 'SR_LATN_BA'
  | 'SR_LATN_ME'
  | 'SR_LATN_RS'
  | 'SR_LATN_XK'
  | 'SU'
  | 'SU_LATN'
  | 'SU_LATN_ID'
  | 'SV'
  | 'SV_AX'
  | 'SV_FI'
  | 'SV_SE'
  | 'SW'
  | 'SW_CD'
  | 'SW_KE'
  | 'SW_TZ'
  | 'SW_UG'
  | 'TA'
  | 'TA_IN'
  | 'TA_LK'
  | 'TA_MY'
  | 'TA_SG'
  | 'TE'
  | 'TE_IN'
  | 'TEO'
  | 'TEO_KE'
  | 'TEO_UG'
  | 'TG'
  | 'TG_TJ'
  | 'TH'
  | 'TH_TH'
  | 'TI'
  | 'TI_ER'
  | 'TI_ET'
  | 'TK'
  | 'TK_TM'
  | 'TO'
  | 'TO_TO'
  | 'TR'
  | 'TR_CY'
  | 'TR_TR'
  | 'TT'
  | 'TT_RU'
  | 'TWQ'
  | 'TWQ_NE'
  | 'TZM'
  | 'TZM_MA'
  | 'UG'
  | 'UG_CN'
  | 'UK'
  | 'UK_UA'
  | 'UR'
  | 'UR_IN'
  | 'UR_PK'
  | 'UZ'
  | 'UZ_ARAB'
  | 'UZ_ARAB_AF'
  | 'UZ_CYRL'
  | 'UZ_CYRL_UZ'
  | 'UZ_LATN'
  | 'UZ_LATN_UZ'
  | 'VAI'
  | 'VAI_LATN'
  | 'VAI_LATN_LR'
  | 'VAI_VAII'
  | 'VAI_VAII_LR'
  | 'VI'
  | 'VI_VN'
  | 'VO'
  | 'VUN'
  | 'VUN_TZ'
  | 'WAE'
  | 'WAE_CH'
  | 'WO'
  | 'WO_SN'
  | 'XH'
  | 'XH_ZA'
  | 'XOG'
  | 'XOG_UG'
  | 'YAV'
  | 'YAV_CM'
  | 'YI'
  | 'YO'
  | 'YO_BJ'
  | 'YO_NG'
  | 'YUE'
  | 'YUE_HANS'
  | 'YUE_HANS_CN'
  | 'YUE_HANT'
  | 'YUE_HANT_HK'
  | 'ZGH'
  | 'ZGH_MA'
  | 'ZH'
  | 'ZH_HANS'
  | 'ZH_HANS_CN'
  | 'ZH_HANS_HK'
  | 'ZH_HANS_MO'
  | 'ZH_HANS_SG'
  | 'ZH_HANT'
  | 'ZH_HANT_HK'
  | 'ZH_HANT_MO'
  | 'ZH_HANT_TW'
  | 'ZU'
  | 'ZU_ZA';

export type LanguageDisplay = {
  /** ISO 639 representation of the language name. */
  code: LanguageCodeEnum;
  /** Full name of the language. */
  language: Scalars['String'];
};

export type LimitInfo = {
  /** Defines the current resource usage. */
  currentUsage: Limits;
  /** Defines the allowed maximum resource usage, null means unlimited. */
  allowedUsage: Limits;
};

export type Limits = {
  channels: Maybe<Scalars['Int']>;
  orders: Maybe<Scalars['Int']>;
  productVariants: Maybe<Scalars['Int']>;
  staffUsers: Maybe<Scalars['Int']>;
  warehouses: Maybe<Scalars['Int']>;
};

/** The manifest definition. */
export type Manifest = {
  identifier: Scalars['String'];
  version: Scalars['String'];
  name: Scalars['String'];
  about: Maybe<Scalars['String']>;
  permissions: Maybe<Array<Permission>>;
  appUrl: Maybe<Scalars['String']>;
  /**
   * URL to iframe with the configuration for the app.
   * @deprecated This field will be removed in Saleor 4.0. Use `appUrl` instead.
   */
  configurationUrl: Maybe<Scalars['String']>;
  tokenTargetUrl: Maybe<Scalars['String']>;
  /**
   * Description of the data privacy defined for this app.
   * @deprecated This field will be removed in Saleor 4.0. Use `dataPrivacyUrl` instead.
   */
  dataPrivacy: Maybe<Scalars['String']>;
  dataPrivacyUrl: Maybe<Scalars['String']>;
  homepageUrl: Maybe<Scalars['String']>;
  supportUrl: Maybe<Scalars['String']>;
  extensions: Array<AppManifestExtension>;
  /**
   * List of the app's webhooks.
   *
   * Added in Saleor 3.5.
   */
  webhooks: Array<AppManifestWebhook>;
  /**
   * The audience that will be included in all JWT tokens for the app.
   *
   * Added in Saleor 3.8.
   */
  audience: Maybe<Scalars['String']>;
  /**
   * Determines the app's required Saleor version as semver range.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  requiredSaleorVersion: Maybe<AppManifestRequiredSaleorVersion>;
  /**
   * The App's author name.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  author: Maybe<Scalars['String']>;
};

export type Margin = {
  start: Maybe<Scalars['Int']>;
  stop: Maybe<Scalars['Int']>;
};

/**
 * Determine the mark as paid strategy for the channel.
 *
 *     TRANSACTION_FLOW - new orders marked as paid will receive a
 *     `TransactionItem` object, that will cover the `order.total`.
 *
 *     PAYMENT_FLOW - new orders marked as paid will receive a
 *     `Payment` object, that will cover the `order.total`.
 */
export type MarkAsPaidStrategyEnum =
  | 'TRANSACTION_FLOW'
  | 'PAYMENT_FLOW';

/** An enumeration. */
export type MeasurementUnitsEnum =
  | 'CM'
  | 'M'
  | 'KM'
  | 'FT'
  | 'YD'
  | 'INCH'
  | 'SQ_CM'
  | 'SQ_M'
  | 'SQ_KM'
  | 'SQ_FT'
  | 'SQ_YD'
  | 'SQ_INCH'
  | 'CUBIC_MILLIMETER'
  | 'CUBIC_CENTIMETER'
  | 'CUBIC_DECIMETER'
  | 'CUBIC_METER'
  | 'LITER'
  | 'CUBIC_FOOT'
  | 'CUBIC_INCH'
  | 'CUBIC_YARD'
  | 'QT'
  | 'PINT'
  | 'FL_OZ'
  | 'ACRE_IN'
  | 'ACRE_FT'
  | 'G'
  | 'LB'
  | 'OZ'
  | 'KG'
  | 'TONNE';

export type MeasurementUnitsEnumFilterInput = {
  /** The value equal to. */
  eq?: Maybe<MeasurementUnitsEnum>;
  /** The value included in. */
  oneOf?: Maybe<Array<MeasurementUnitsEnum>>;
};

export type MediaChoicesSortField =
  /** Sort media by ID. */
  | 'ID';

export type MediaInput = {
  /** Alt text for a product media. */
  alt?: Maybe<Scalars['String']>;
  /** Represents an image file in a multipart request. */
  image?: Maybe<Scalars['Upload']>;
  /** Represents an URL to an external media. */
  mediaUrl?: Maybe<Scalars['String']>;
};

export type MediaSortingInput = {
  /** Specifies the direction in which to sort media. */
  direction: OrderDirection;
  /** Sort media by the selected field. */
  field: MediaChoicesSortField;
};

/** Represents a single menu - an object that is used to help navigate through the store. */
export type Menu = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  items: Maybe<Array<MenuItem>>;
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};

/**
 * Deletes menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  errors: Array<MenuError>;
};

export type MenuCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<MenuCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type MenuCountableEdge = {
  /** The item at the end of the edge. */
  node: Menu;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Creates a new Menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  errors: Array<MenuError>;
  menu: Maybe<Menu>;
};

export type MenuCreateInput = {
  /** Name of the menu. */
  name: Scalars['String'];
  /** Slug of the menu. Will be generated if not provided. */
  slug?: Maybe<Scalars['String']>;
  /** List of menu items. */
  items?: Maybe<Array<MenuItemInput>>;
};

/**
 * Event sent when new menu is created.
 *
 * Added in Saleor 3.4.
 */
export type MenuCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The menu the event relates to. */
  menu: Maybe<Menu>;
};


/**
 * Event sent when new menu is created.
 *
 * Added in Saleor 3.4.
 */
export type MenuCreatedMenuArgs = {
  channel?: Maybe<Scalars['String']>;
};

/**
 * Deletes a menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  errors: Array<MenuError>;
  menu: Maybe<Menu>;
};

/**
 * Event sent when menu is deleted.
 *
 * Added in Saleor 3.4.
 */
export type MenuDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The menu the event relates to. */
  menu: Maybe<Menu>;
};


/**
 * Event sent when menu is deleted.
 *
 * Added in Saleor 3.4.
 */
export type MenuDeletedMenuArgs = {
  channel?: Maybe<Scalars['String']>;
};

export type MenuError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: MenuErrorCode;
};

/** An enumeration. */
export type MenuErrorCode =
  | 'CANNOT_ASSIGN_NODE'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_MENU_ITEM'
  | 'NO_MENU_ITEM_PROVIDED'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'TOO_MANY_MENU_ITEMS'
  | 'UNIQUE';

export type MenuFilterInput = {
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Scalars['String']>>;
  metadata?: Maybe<Array<MetadataFilter>>;
  slugs?: Maybe<Array<Scalars['String']>>;
};

export type MenuInput = {
  /** Name of the menu. */
  name?: Maybe<Scalars['String']>;
  /** Slug of the menu. */
  slug?: Maybe<Scalars['String']>;
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItem = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  menu: Menu;
  parent: Maybe<MenuItem>;
  category: Maybe<Category>;
  /** A collection associated with this menu item. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collection: Maybe<Collection>;
  /** A page associated with this menu item. Requires one of the following permissions to include unpublished items: MANAGE_PAGES. */
  page: Maybe<Page>;
  level: Scalars['Int'];
  children: Maybe<Array<MenuItem>>;
  /** URL to the menu item. */
  url: Maybe<Scalars['String']>;
  /** Returns translated menu item fields for the given language code. */
  translation: Maybe<MenuItemTranslation>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Deletes menu items.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  errors: Array<MenuError>;
};

export type MenuItemCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<MenuItemCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type MenuItemCountableEdge = {
  /** The item at the end of the edge. */
  node: MenuItem;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Creates a new menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  errors: Array<MenuError>;
  menuItem: Maybe<MenuItem>;
};

export type MenuItemCreateInput = {
  /** Name of the menu item. */
  name: Scalars['String'];
  /** URL of the pointed item. */
  url?: Maybe<Scalars['String']>;
  /** Category to which item points. */
  category?: Maybe<Scalars['ID']>;
  /** Collection to which item points. */
  collection?: Maybe<Scalars['ID']>;
  /** Page to which item points. */
  page?: Maybe<Scalars['ID']>;
  /** Menu to which item belongs. */
  menu: Scalars['ID'];
  /** ID of the parent menu. If empty, menu will be top level menu. */
  parent?: Maybe<Scalars['ID']>;
};

/**
 * Event sent when new menu item is created.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The menu item the event relates to. */
  menuItem: Maybe<MenuItem>;
};


/**
 * Event sent when new menu item is created.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemCreatedMenuItemArgs = {
  channel?: Maybe<Scalars['String']>;
};

/**
 * Deletes a menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  errors: Array<MenuError>;
  menuItem: Maybe<MenuItem>;
};

/**
 * Event sent when menu item is deleted.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The menu item the event relates to. */
  menuItem: Maybe<MenuItem>;
};


/**
 * Event sent when menu item is deleted.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemDeletedMenuItemArgs = {
  channel?: Maybe<Scalars['String']>;
};

export type MenuItemFilterInput = {
  search?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataFilter>>;
};

export type MenuItemInput = {
  /** Name of the menu item. */
  name?: Maybe<Scalars['String']>;
  /** URL of the pointed item. */
  url?: Maybe<Scalars['String']>;
  /** Category to which item points. */
  category?: Maybe<Scalars['ID']>;
  /** Collection to which item points. */
  collection?: Maybe<Scalars['ID']>;
  /** Page to which item points. */
  page?: Maybe<Scalars['ID']>;
};

/**
 * Moves items of menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemMove = {
  /** Assigned menu to move within. */
  menu: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  errors: Array<MenuError>;
};

export type MenuItemMoveInput = {
  /** The menu item ID to move. */
  itemId: Scalars['ID'];
  /** ID of the parent menu. If empty, menu will be top level menu. */
  parentId?: Maybe<Scalars['ID']>;
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type MenuItemSortingInput = {
  /** Specifies the direction in which to sort menu items. */
  direction: OrderDirection;
  /** Sort menu items by the selected field. */
  field: MenuItemsSortField;
};

export type MenuItemTranslatableContent = Node & {
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Returns translated menu item fields for the given language code. */
  translation: Maybe<MenuItemTranslation>;
  /**
   * Represents a single item of the related menu. Can store categories, collection or pages.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  menuItem: Maybe<MenuItem>;
};


export type MenuItemTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a menu item.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type MenuItemTranslate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
  errors: Array<TranslationError>;
  menuItem: Maybe<MenuItem>;
};

export type MenuItemTranslation = Node & {
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String'];
};

/**
 * Updates a menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  errors: Array<MenuError>;
  menuItem: Maybe<MenuItem>;
};

/**
 * Event sent when menu item is updated.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The menu item the event relates to. */
  menuItem: Maybe<MenuItem>;
};


/**
 * Event sent when menu item is updated.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemUpdatedMenuItemArgs = {
  channel?: Maybe<Scalars['String']>;
};

export type MenuItemsSortField =
  /** Sort menu items by name. */
  | 'NAME';

export type MenuSortField =
  /** Sort menus by name. */
  | 'NAME'
  /** Sort menus by items count. */
  | 'ITEMS_COUNT';

export type MenuSortingInput = {
  /** Specifies the direction in which to sort menus. */
  direction: OrderDirection;
  /** Sort menus by the selected field. */
  field: MenuSortField;
};

/**
 * Updates a menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  errors: Array<MenuError>;
  menu: Maybe<Menu>;
};

/**
 * Event sent when menu is updated.
 *
 * Added in Saleor 3.4.
 */
export type MenuUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The menu the event relates to. */
  menu: Maybe<Menu>;
};


/**
 * Event sent when menu is updated.
 *
 * Added in Saleor 3.4.
 */
export type MenuUpdatedMenuArgs = {
  channel?: Maybe<Scalars['String']>;
};


export type MetadataError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: MetadataErrorCode;
};

/** An enumeration. */
export type MetadataErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'NOT_UPDATED';

export type MetadataFilter = {
  /** Key of a metadata item. */
  key: Scalars['String'];
  /** Value of a metadata item. */
  value?: Maybe<Scalars['String']>;
};

export type MetadataInput = {
  /** Key of a metadata item. */
  key: Scalars['String'];
  /** Value of a metadata item. */
  value: Scalars['String'];
};

export type MetadataItem = {
  /** Key of a metadata item. */
  key: Scalars['String'];
  /** Value of a metadata item. */
  value: Scalars['String'];
};


/** Represents amount of money in specific currency. */
export type Money = {
  /** Currency code. */
  currency: Scalars['String'];
  /** Amount of money. */
  amount: Scalars['Float'];
};

export type MoneyInput = {
  /** Currency code. */
  currency: Scalars['String'];
  /** Amount of money. */
  amount: Scalars['PositiveDecimal'];
};

/** Represents a range of amounts of money. */
export type MoneyRange = {
  /** Lower bound of a price range. */
  start: Maybe<Money>;
  /** Upper bound of a price range. */
  stop: Maybe<Money>;
};

export type MoveProductInput = {
  /** The ID of the product to move. */
  productId: Scalars['ID'];
  /** The relative sorting position of the product (from -inf to +inf) starting from the first given product's actual position.1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  /**
   * Creates a new webhook subscription.
   *
   * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
   */
  webhookCreate: Maybe<WebhookCreate>;
  /**
   * Delete a webhook. Before the deletion, the webhook is deactivated to pause any deliveries that are already scheduled. The deletion might fail if delivery is in progress. In such a case, the webhook is not deleted but remains deactivated.
   *
   * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
   */
  webhookDelete: Maybe<WebhookDelete>;
  /**
   * Updates a webhook subscription.
   *
   * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
   */
  webhookUpdate: Maybe<WebhookUpdate>;
  /**
   * Retries event delivery.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  eventDeliveryRetry: Maybe<EventDeliveryRetry>;
  /**
   * Performs a dry run of a webhook event. Supports a single event (the first, if multiple provided in the `query`). Requires permission relevant to processed event.
   *
   * Added in Saleor 3.11.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  webhookDryRun: Maybe<WebhookDryRun>;
  /**
   * Trigger a webhook event. Supports a single event (the first, if multiple provided in the `webhook.subscription_query`). Requires permission relevant to processed event. Successfully delivered webhook returns `delivery` with status='PENDING' and empty payload.
   *
   * Added in Saleor 3.11.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  webhookTrigger: Maybe<WebhookTrigger>;
  /**
   * Creates new warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  createWarehouse: Maybe<WarehouseCreate>;
  /**
   * Updates given warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  updateWarehouse: Maybe<WarehouseUpdate>;
  /**
   * Deletes selected warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  deleteWarehouse: Maybe<WarehouseDelete>;
  /**
   * Add shipping zone to given warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  assignWarehouseShippingZone: Maybe<WarehouseShippingZoneAssign>;
  /**
   * Remove shipping zone from given warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  unassignWarehouseShippingZone: Maybe<WarehouseShippingZoneUnassign>;
  /**
   * Create a tax class.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxClassCreate: Maybe<TaxClassCreate>;
  /**
   * Delete a tax class. After deleting the tax class any products, product types or shipping methods using it are updated to use the default tax class.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxClassDelete: Maybe<TaxClassDelete>;
  /**
   * Update a tax class.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxClassUpdate: Maybe<TaxClassUpdate>;
  /**
   * Update tax configuration for a channel.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxConfigurationUpdate: Maybe<TaxConfigurationUpdate>;
  /**
   * Update tax class rates for a specific country.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxCountryConfigurationUpdate: Maybe<TaxCountryConfigurationUpdate>;
  /**
   * Remove all tax class rates for a specific country.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxCountryConfigurationDelete: Maybe<TaxCountryConfigurationDelete>;
  /**
   * Exempt checkout or order from charging the taxes. When tax exemption is enabled, taxes won't be charged for the checkout or order. Taxes may still be calculated in cases when product prices are entered with the tax included and the net price needs to be known.
   *
   * Added in Saleor 3.8.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxExemptionManage: Maybe<TaxExemptionManage>;
  /**
   * Updates stocks for a given variant and warehouse.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  stockBulkUpdate: Maybe<StockBulkUpdate>;
  /**
   * Creates a new staff notification recipient.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  staffNotificationRecipientCreate: Maybe<StaffNotificationRecipientCreate>;
  /**
   * Updates a staff notification recipient.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  staffNotificationRecipientUpdate: Maybe<StaffNotificationRecipientUpdate>;
  /**
   * Delete staff notification recipient.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  staffNotificationRecipientDelete: Maybe<StaffNotificationRecipientDelete>;
  /**
   * Updates site domain of the shop.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  shopDomainUpdate: Maybe<ShopDomainUpdate>;
  /**
   * Updates shop settings.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  shopSettingsUpdate: Maybe<ShopSettingsUpdate>;
  /**
   * Fetch tax rates.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   * @deprecated
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0.
   */
  shopFetchTaxRates: Maybe<ShopFetchTaxRates>;
  /**
   * Creates/updates translations for shop settings.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  shopSettingsTranslate: Maybe<ShopSettingsTranslate>;
  /**
   * Update the shop's address. If the `null` value is passed, the currently selected address will be deleted.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  shopAddressUpdate: Maybe<ShopAddressUpdate>;
  /**
   * Update shop order settings across all channels. Returns `orderSettings` for the first `channel` in alphabetical order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   * @deprecated
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `channelUpdate` mutation instead.
   */
  orderSettingsUpdate: Maybe<OrderSettingsUpdate>;
  /**
   * Update gift card settings.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardSettingsUpdate: Maybe<GiftCardSettingsUpdate>;
  /**
   * Manage shipping method's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingMethodChannelListingUpdate: Maybe<ShippingMethodChannelListingUpdate>;
  /**
   * Creates a new shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceCreate: Maybe<ShippingPriceCreate>;
  /**
   * Deletes a shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceDelete: Maybe<ShippingPriceDelete>;
  /**
   * Deletes shipping prices.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceBulkDelete: Maybe<ShippingPriceBulkDelete>;
  /**
   * Updates a new shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceUpdate: Maybe<ShippingPriceUpdate>;
  /**
   * Creates/updates translations for a shipping method.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  shippingPriceTranslate: Maybe<ShippingPriceTranslate>;
  /**
   * Exclude products from shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceExcludeProducts: Maybe<ShippingPriceExcludeProducts>;
  /**
   * Remove product from excluded list for shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceRemoveProductFromExclude: Maybe<ShippingPriceRemoveProductFromExclude>;
  /**
   * Creates a new shipping zone.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZoneCreate: Maybe<ShippingZoneCreate>;
  /**
   * Deletes a shipping zone.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZoneDelete: Maybe<ShippingZoneDelete>;
  /**
   * Deletes shipping zones.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZoneBulkDelete: Maybe<ShippingZoneBulkDelete>;
  /**
   * Updates a new shipping zone.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZoneUpdate: Maybe<ShippingZoneUpdate>;
  /**
   * Assign attributes to a given product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productAttributeAssign: Maybe<ProductAttributeAssign>;
  /**
   * Update attributes assigned to product variant for given product type.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productAttributeAssignmentUpdate: Maybe<ProductAttributeAssignmentUpdate>;
  /**
   * Un-assign attributes from a given product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productAttributeUnassign: Maybe<ProductAttributeUnassign>;
  /**
   * Creates a new category.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  categoryCreate: Maybe<CategoryCreate>;
  /**
   * Deletes a category.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  categoryDelete: Maybe<CategoryDelete>;
  /**
   * Deletes categories.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  categoryBulkDelete: Maybe<CategoryBulkDelete>;
  /**
   * Updates a category.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  categoryUpdate: Maybe<CategoryUpdate>;
  /**
   * Creates/updates translations for a category.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  categoryTranslate: Maybe<CategoryTranslate>;
  /**
   * Adds products to a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionAddProducts: Maybe<CollectionAddProducts>;
  /**
   * Creates a new collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionCreate: Maybe<CollectionCreate>;
  /**
   * Deletes a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionDelete: Maybe<CollectionDelete>;
  /**
   * Reorder the products of a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionReorderProducts: Maybe<CollectionReorderProducts>;
  /**
   * Deletes collections.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionBulkDelete: Maybe<CollectionBulkDelete>;
  /**
   * Remove products from a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionRemoveProducts: Maybe<CollectionRemoveProducts>;
  /**
   * Updates a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionUpdate: Maybe<CollectionUpdate>;
  /**
   * Creates/updates translations for a collection.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  collectionTranslate: Maybe<CollectionTranslate>;
  /**
   * Manage collection's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionChannelListingUpdate: Maybe<CollectionChannelListingUpdate>;
  /**
   * Creates a new product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productCreate: Maybe<ProductCreate>;
  /**
   * Deletes a product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productDelete: Maybe<ProductDelete>;
  /**
   * Creates products.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productBulkCreate: Maybe<ProductBulkCreate>;
  /**
   * Deletes products.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productBulkDelete: Maybe<ProductBulkDelete>;
  /**
   * Updates an existing product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productUpdate: Maybe<ProductUpdate>;
  /**
   * Creates/updates translations for a product.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  productTranslate: Maybe<ProductTranslate>;
  /**
   * Manage product's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productChannelListingUpdate: Maybe<ProductChannelListingUpdate>;
  /**
   * Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaCreate: Maybe<ProductMediaCreate>;
  /**
   * Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantReorder: Maybe<ProductVariantReorder>;
  /**
   * Deletes a product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaDelete: Maybe<ProductMediaDelete>;
  /**
   * Deletes product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaBulkDelete: Maybe<ProductMediaBulkDelete>;
  /**
   * Changes ordering of the product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaReorder: Maybe<ProductMediaReorder>;
  /**
   * Updates a product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaUpdate: Maybe<ProductMediaUpdate>;
  /**
   * Creates a new product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeCreate: Maybe<ProductTypeCreate>;
  /**
   * Deletes a product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeDelete: Maybe<ProductTypeDelete>;
  /**
   * Deletes product types.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeBulkDelete: Maybe<ProductTypeBulkDelete>;
  /**
   * Updates an existing product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeUpdate: Maybe<ProductTypeUpdate>;
  /**
   * Reorder the attributes of a product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeReorderAttributes: Maybe<ProductTypeReorderAttributes>;
  /**
   * Reorder product attribute values.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productReorderAttributeValues: Maybe<ProductReorderAttributeValues>;
  /**
   * Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContentCreate: Maybe<DigitalContentCreate>;
  /**
   * Remove digital content assigned to given variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContentDelete: Maybe<DigitalContentDelete>;
  /**
   * Update digital content.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContentUpdate: Maybe<DigitalContentUpdate>;
  /**
   * Generate new URL to digital content.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContentUrlCreate: Maybe<DigitalContentUrlCreate>;
  /**
   * Creates a new variant for a product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantCreate: Maybe<ProductVariantCreate>;
  /**
   * Deletes a product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantDelete: Maybe<ProductVariantDelete>;
  /**
   * Creates product variants for a given product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantBulkCreate: Maybe<ProductVariantBulkCreate>;
  /**
   * Update multiple product variants.
   *
   * Added in Saleor 3.11.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantBulkUpdate: Maybe<ProductVariantBulkUpdate>;
  /**
   * Deletes product variants.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantBulkDelete: Maybe<ProductVariantBulkDelete>;
  /**
   * Creates stocks for product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantStocksCreate: Maybe<ProductVariantStocksCreate>;
  /**
   * Delete stocks from product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantStocksDelete: Maybe<ProductVariantStocksDelete>;
  /**
   * Update stocks for product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantStocksUpdate: Maybe<ProductVariantStocksUpdate>;
  /**
   * Updates an existing variant for product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantUpdate: Maybe<ProductVariantUpdate>;
  /**
   * Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantSetDefault: Maybe<ProductVariantSetDefault>;
  /**
   * Creates/updates translations for a product variant.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  productVariantTranslate: Maybe<ProductVariantTranslate>;
  /**
   * Manage product variant prices in channels.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantChannelListingUpdate: Maybe<ProductVariantChannelListingUpdate>;
  /**
   * Reorder product variant attribute values.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantReorderAttributeValues: Maybe<ProductVariantReorderAttributeValues>;
  /**
   * Deactivates product variant preorder. It changes all preorder allocation into regular allocation.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantPreorderDeactivate: Maybe<ProductVariantPreorderDeactivate>;
  /**
   * Assign an media to a product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  variantMediaAssign: Maybe<VariantMediaAssign>;
  /**
   * Unassign an media from a product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  variantMediaUnassign: Maybe<VariantMediaUnassign>;
  /**
   * Captures the authorized payment amount.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  paymentCapture: Maybe<PaymentCapture>;
  /**
   * Refunds the captured payment amount.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  paymentRefund: Maybe<PaymentRefund>;
  /**
   * Voids the authorized payment.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  paymentVoid: Maybe<PaymentVoid>;
  /** Initializes payment process when it is required by gateway. */
  paymentInitialize: Maybe<PaymentInitialize>;
  /** Check payment balance. */
  paymentCheckBalance: Maybe<PaymentCheckBalance>;
  /**
   * Create transaction for checkout or order.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: HANDLE_PAYMENTS.
   */
  transactionCreate: Maybe<TransactionCreate>;
  /**
   * Create transaction for checkout or order.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires the following permissions: OWNER and HANDLE_PAYMENTS.
   */
  transactionUpdate: Maybe<TransactionUpdate>;
  /**
   * Request an action for payment transaction.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: HANDLE_PAYMENTS.
   */
  transactionRequestAction: Maybe<TransactionRequestAction>;
  /**
   * Report the event for the transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires the following permissions: OWNER and HANDLE_PAYMENTS.
   */
  transactionEventReport: Maybe<TransactionEventReport>;
  /**
   * Initializes a payment gateway session. It triggers the webhook `PAYMENT_GATEWAY_INITIALIZE_SESSION`, to the requested `paymentGateways`. If `paymentGateways` is not provided, the webhook will be send to all subscribed payment gateways.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  paymentGatewayInitialize: Maybe<PaymentGatewayInitialize>;
  /**
   * Initializes a transaction session. It triggers the webhook `TRANSACTION_INITIALIZE_SESSION`, to the requested `paymentGateways`.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  transactionInitialize: Maybe<TransactionInitialize>;
  /**
   * Processes a transaction session. It triggers the webhook `TRANSACTION_PROCESS_SESSION`, to the assigned `paymentGateways`.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  transactionProcess: Maybe<TransactionProcess>;
  /**
   * Creates a new page.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageCreate: Maybe<PageCreate>;
  /**
   * Deletes a page.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageDelete: Maybe<PageDelete>;
  /**
   * Deletes pages.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageBulkDelete: Maybe<PageBulkDelete>;
  /**
   * Publish pages.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageBulkPublish: Maybe<PageBulkPublish>;
  /**
   * Updates an existing page.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageUpdate: Maybe<PageUpdate>;
  /**
   * Creates/updates translations for a page.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  pageTranslate: Maybe<PageTranslate>;
  /**
   * Create a new page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeCreate: Maybe<PageTypeCreate>;
  /**
   * Update page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeUpdate: Maybe<PageTypeUpdate>;
  /**
   * Delete a page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeDelete: Maybe<PageTypeDelete>;
  /**
   * Delete page types.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeBulkDelete: Maybe<PageTypeBulkDelete>;
  /**
   * Assign attributes to a given page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageAttributeAssign: Maybe<PageAttributeAssign>;
  /**
   * Unassign attributes from a given page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageAttributeUnassign: Maybe<PageAttributeUnassign>;
  /**
   * Reorder the attributes of a page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeReorderAttributes: Maybe<PageTypeReorderAttributes>;
  /**
   * Reorder page attribute values.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageReorderAttributeValues: Maybe<PageReorderAttributeValues>;
  /**
   * Completes creating an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderComplete: Maybe<DraftOrderComplete>;
  /**
   * Creates a new draft order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderCreate: Maybe<DraftOrderCreate>;
  /**
   * Deletes a draft order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderDelete: Maybe<DraftOrderDelete>;
  /**
   * Deletes draft orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderBulkDelete: Maybe<DraftOrderBulkDelete>;
  /**
   * Deletes order lines.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  draftOrderLinesBulkDelete: Maybe<DraftOrderLinesBulkDelete>;
  /**
   * Updates a draft order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderUpdate: Maybe<DraftOrderUpdate>;
  /**
   * Adds note to the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderAddNote: Maybe<OrderAddNote>;
  /**
   * Cancel an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderCancel: Maybe<OrderCancel>;
  /**
   * Capture an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderCapture: Maybe<OrderCapture>;
  /**
   * Confirms an unconfirmed order by changing status to unfulfilled.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderConfirm: Maybe<OrderConfirm>;
  /**
   * Creates new fulfillments for an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfill: Maybe<OrderFulfill>;
  /**
   * Cancels existing fulfillment and optionally restocks items.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentCancel: Maybe<FulfillmentCancel>;
  /**
   * Approve existing fulfillment.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentApprove: Maybe<FulfillmentApprove>;
  /**
   * Updates a fulfillment for an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentUpdateTracking: Maybe<FulfillmentUpdateTracking>;
  /**
   * Refund products.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentRefundProducts: Maybe<FulfillmentRefundProducts>;
  /**
   * Return products.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentReturnProducts: Maybe<FulfillmentReturnProducts>;
  /**
   * Adds granted refund to the order.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderGrantRefundCreate: Maybe<OrderGrantRefundCreate>;
  /**
   * Updates granted refund.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderGrantRefundUpdate: Maybe<OrderGrantRefundUpdate>;
  /**
   * Create order lines for an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLinesCreate: Maybe<OrderLinesCreate>;
  /**
   * Deletes an order line from an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLineDelete: Maybe<OrderLineDelete>;
  /**
   * Updates an order line of an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLineUpdate: Maybe<OrderLineUpdate>;
  /**
   * Adds discount to the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderDiscountAdd: Maybe<OrderDiscountAdd>;
  /**
   * Update discount for the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderDiscountUpdate: Maybe<OrderDiscountUpdate>;
  /**
   * Remove discount from the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderDiscountDelete: Maybe<OrderDiscountDelete>;
  /**
   * Update discount for the order line.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLineDiscountUpdate: Maybe<OrderLineDiscountUpdate>;
  /**
   * Remove discount applied to the order line.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLineDiscountRemove: Maybe<OrderLineDiscountRemove>;
  /**
   * Mark order as manually paid.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderMarkAsPaid: Maybe<OrderMarkAsPaid>;
  /**
   * Refund an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderRefund: Maybe<OrderRefund>;
  /**
   * Updates an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderUpdate: Maybe<OrderUpdate>;
  /**
   * Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderUpdateShipping: Maybe<OrderUpdateShipping>;
  /**
   * Void an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderVoid: Maybe<OrderVoid>;
  /**
   * Cancels orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderBulkCancel: Maybe<OrderBulkCancel>;
  /** Delete metadata of an object. To use it, you need to have access to the modified object. */
  deleteMetadata: Maybe<DeleteMetadata>;
  /** Delete object's private metadata. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
  deletePrivateMetadata: Maybe<DeletePrivateMetadata>;
  /** Updates metadata of an object. To use it, you need to have access to the modified object. */
  updateMetadata: Maybe<UpdateMetadata>;
  /** Updates private metadata of an object. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
  updatePrivateMetadata: Maybe<UpdatePrivateMetadata>;
  /**
   * Assigns storefront's navigation menus.
   *
   * Requires one of the following permissions: MANAGE_MENUS, MANAGE_SETTINGS.
   */
  assignNavigation: Maybe<AssignNavigation>;
  /**
   * Creates a new Menu.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuCreate: Maybe<MenuCreate>;
  /**
   * Deletes a menu.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuDelete: Maybe<MenuDelete>;
  /**
   * Deletes menus.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuBulkDelete: Maybe<MenuBulkDelete>;
  /**
   * Updates a menu.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuUpdate: Maybe<MenuUpdate>;
  /**
   * Creates a new menu item.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuItemCreate: Maybe<MenuItemCreate>;
  /**
   * Deletes a menu item.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuItemDelete: Maybe<MenuItemDelete>;
  /**
   * Deletes menu items.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuItemBulkDelete: Maybe<MenuItemBulkDelete>;
  /**
   * Updates a menu item.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuItemUpdate: Maybe<MenuItemUpdate>;
  /**
   * Creates/updates translations for a menu item.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  menuItemTranslate: Maybe<MenuItemTranslate>;
  /**
   * Moves items of menus.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuItemMove: Maybe<MenuItemMove>;
  /**
   * Request an invoice for the order using plugin.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceRequest: Maybe<InvoiceRequest>;
  /**
   * Requests deletion of an invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceRequestDelete: Maybe<InvoiceRequestDelete>;
  /**
   * Creates a ready to send invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceCreate: Maybe<InvoiceCreate>;
  /**
   * Deletes an invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceDelete: Maybe<InvoiceDelete>;
  /**
   * Updates an invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceUpdate: Maybe<InvoiceUpdate>;
  /**
   * Send an invoice notification to the customer.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceSendNotification: Maybe<InvoiceSendNotification>;
  /**
   * Activate a gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardActivate: Maybe<GiftCardActivate>;
  /**
   * Creates a new gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardCreate: Maybe<GiftCardCreate>;
  /**
   * Delete gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardDelete: Maybe<GiftCardDelete>;
  /**
   * Deactivate a gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardDeactivate: Maybe<GiftCardDeactivate>;
  /**
   * Update a gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardUpdate: Maybe<GiftCardUpdate>;
  /**
   * Resend a gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardResend: Maybe<GiftCardResend>;
  /**
   * Adds note to the gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardAddNote: Maybe<GiftCardAddNote>;
  /**
   * Create gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardBulkCreate: Maybe<GiftCardBulkCreate>;
  /**
   * Delete gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardBulkDelete: Maybe<GiftCardBulkDelete>;
  /**
   * Activate gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardBulkActivate: Maybe<GiftCardBulkActivate>;
  /**
   * Deactivate gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardBulkDeactivate: Maybe<GiftCardBulkDeactivate>;
  /**
   * Update plugin configuration.
   *
   * Requires one of the following permissions: MANAGE_PLUGINS.
   */
  pluginUpdate: Maybe<PluginUpdate>;
  /**
   * Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload.
   *
   * Added in Saleor 3.1.
   */
  externalNotificationTrigger: Maybe<ExternalNotificationTrigger>;
  /**
   * Creates a new sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  saleCreate: Maybe<SaleCreate>;
  /**
   * Deletes a sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  saleDelete: Maybe<SaleDelete>;
  /**
   * Deletes sales.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  saleBulkDelete: Maybe<SaleBulkDelete>;
  /**
   * Updates a sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  saleUpdate: Maybe<SaleUpdate>;
  /**
   * Adds products, categories, collections to a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  saleCataloguesAdd: Maybe<SaleAddCatalogues>;
  /**
   * Removes products, categories, collections from a sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  saleCataloguesRemove: Maybe<SaleRemoveCatalogues>;
  /**
   * Creates/updates translations for a sale.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  saleTranslate: Maybe<SaleTranslate>;
  /**
   * Manage sale's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  saleChannelListingUpdate: Maybe<SaleChannelListingUpdate>;
  /**
   * Creates a new voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucherCreate: Maybe<VoucherCreate>;
  /**
   * Deletes a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucherDelete: Maybe<VoucherDelete>;
  /**
   * Deletes vouchers.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucherBulkDelete: Maybe<VoucherBulkDelete>;
  /**
   * Updates a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucherUpdate: Maybe<VoucherUpdate>;
  /**
   * Adds products, categories, collections to a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucherCataloguesAdd: Maybe<VoucherAddCatalogues>;
  /**
   * Removes products, categories, collections from a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucherCataloguesRemove: Maybe<VoucherRemoveCatalogues>;
  /**
   * Creates/updates translations for a voucher.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  voucherTranslate: Maybe<VoucherTranslate>;
  /**
   * Manage voucher's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucherChannelListingUpdate: Maybe<VoucherChannelListingUpdate>;
  /**
   * Export products to csv file.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  exportProducts: Maybe<ExportProducts>;
  /**
   * Export gift cards to csv file.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  exportGiftCards: Maybe<ExportGiftCards>;
  /**
   * Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  fileUpload: Maybe<FileUpload>;
  /** Adds a gift card or a voucher to a checkout. */
  checkoutAddPromoCode: Maybe<CheckoutAddPromoCode>;
  /** Update billing address in the existing checkout. */
  checkoutBillingAddressUpdate: Maybe<CheckoutBillingAddressUpdate>;
  /** Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
  checkoutComplete: Maybe<CheckoutComplete>;
  /** Create a new checkout. */
  checkoutCreate: Maybe<CheckoutCreate>;
  /**
   * Create new checkout from existing order.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  checkoutCreateFromOrder: Maybe<CheckoutCreateFromOrder>;
  /**
   * Sets the customer as the owner of the checkout.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
   */
  checkoutCustomerAttach: Maybe<CheckoutCustomerAttach>;
  /**
   * Removes the user assigned as the owner of the checkout.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
   */
  checkoutCustomerDetach: Maybe<CheckoutCustomerDetach>;
  /** Updates email address in the existing checkout object. */
  checkoutEmailUpdate: Maybe<CheckoutEmailUpdate>;
  /**
   * Deletes a CheckoutLine.
   * @deprecated This field will be removed in Saleor 4.0. Use `checkoutLinesDelete` instead.
   */
  checkoutLineDelete: Maybe<CheckoutLineDelete>;
  /** Deletes checkout lines. */
  checkoutLinesDelete: Maybe<CheckoutLinesDelete>;
  /** Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased. */
  checkoutLinesAdd: Maybe<CheckoutLinesAdd>;
  /** Updates checkout line in the existing checkout. */
  checkoutLinesUpdate: Maybe<CheckoutLinesUpdate>;
  /** Remove a gift card or a voucher from a checkout. */
  checkoutRemovePromoCode: Maybe<CheckoutRemovePromoCode>;
  /** Create a new payment for given checkout. */
  checkoutPaymentCreate: Maybe<CheckoutPaymentCreate>;
  /** Update shipping address in the existing checkout. */
  checkoutShippingAddressUpdate: Maybe<CheckoutShippingAddressUpdate>;
  /**
   * Updates the shipping method of the checkout.
   * @deprecated This field will be removed in Saleor 4.0. Use `checkoutDeliveryMethodUpdate` instead.
   */
  checkoutShippingMethodUpdate: Maybe<CheckoutShippingMethodUpdate>;
  /**
   * Updates the delivery method (shipping method or pick up point) of the checkout.
   *
   * Added in Saleor 3.1.
   */
  checkoutDeliveryMethodUpdate: Maybe<CheckoutDeliveryMethodUpdate>;
  /** Update language code in the existing checkout. */
  checkoutLanguageCodeUpdate: Maybe<CheckoutLanguageCodeUpdate>;
  /**
   * Create new order from existing checkout. Requires the following permissions: AUTHENTICATED_APP and HANDLE_CHECKOUTS.
   *
   * Added in Saleor 3.2.
   */
  orderCreateFromCheckout: Maybe<OrderCreateFromCheckout>;
  /**
   * Creates new channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  channelCreate: Maybe<ChannelCreate>;
  /**
   * Update a channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   * Requires one of the following permissions when updating only orderSettings field: MANAGE_CHANNELS, MANAGE_ORDERS.
   */
  channelUpdate: Maybe<ChannelUpdate>;
  /**
   * Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  channelDelete: Maybe<ChannelDelete>;
  /**
   * Activate a channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  channelActivate: Maybe<ChannelActivate>;
  /**
   * Deactivate a channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  channelDeactivate: Maybe<ChannelDeactivate>;
  /**
   * Reorder the warehouses of a channel.
   *
   * Added in Saleor 3.7.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  channelReorderWarehouses: Maybe<ChannelReorderWarehouses>;
  /** Creates an attribute. */
  attributeCreate: Maybe<AttributeCreate>;
  /**
   * Deletes an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  attributeDelete: Maybe<AttributeDelete>;
  /**
   * Updates attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  attributeUpdate: Maybe<AttributeUpdate>;
  /**
   * Creates/updates translations for an attribute.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  attributeTranslate: Maybe<AttributeTranslate>;
  /**
   * Deletes attributes.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  attributeBulkDelete: Maybe<AttributeBulkDelete>;
  /**
   * Deletes values of attributes.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  attributeValueBulkDelete: Maybe<AttributeValueBulkDelete>;
  /**
   * Creates a value for an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  attributeValueCreate: Maybe<AttributeValueCreate>;
  /**
   * Deletes a value of an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  attributeValueDelete: Maybe<AttributeValueDelete>;
  /**
   * Updates value of an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  attributeValueUpdate: Maybe<AttributeValueUpdate>;
  /**
   * Creates/updates translations for an attribute value.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  attributeValueTranslate: Maybe<AttributeValueTranslate>;
  /**
   * Reorder the values of an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  attributeReorderValues: Maybe<AttributeReorderValues>;
  /** Creates a new app. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
  appCreate: Maybe<AppCreate>;
  /**
   * Updates an existing app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appUpdate: Maybe<AppUpdate>;
  /**
   * Deletes an app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appDelete: Maybe<AppDelete>;
  /**
   * Creates a new token.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appTokenCreate: Maybe<AppTokenCreate>;
  /**
   * Deletes an authentication token assigned to app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appTokenDelete: Maybe<AppTokenDelete>;
  /** Verify provided app token. */
  appTokenVerify: Maybe<AppTokenVerify>;
  /** Install new app by using app manifest. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
  appInstall: Maybe<AppInstall>;
  /**
   * Retry failed installation of new app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appRetryInstall: Maybe<AppRetryInstall>;
  /**
   * Delete failed installation.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appDeleteFailedInstallation: Maybe<AppDeleteFailedInstallation>;
  /**
   * Fetch and validate manifest.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appFetchManifest: Maybe<AppFetchManifest>;
  /**
   * Activate the app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appActivate: Maybe<AppActivate>;
  /**
   * Deactivate the app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appDeactivate: Maybe<AppDeactivate>;
  /** Create JWT token. */
  tokenCreate: Maybe<CreateToken>;
  /** Refresh JWT token. Mutation tries to take refreshToken from the input. If it fails it will try to take `refreshToken` from the http-only cookie `refreshToken`. `csrfToken` is required when `refreshToken` is provided as a cookie. */
  tokenRefresh: Maybe<RefreshToken>;
  /** Verify JWT token. */
  tokenVerify: Maybe<VerifyToken>;
  /**
   * Deactivate all JWT tokens of the currently authenticated user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  tokensDeactivateAll: Maybe<DeactivateAllUserTokens>;
  /** Prepare external authentication URL for user by custom plugin. */
  externalAuthenticationUrl: Maybe<ExternalAuthenticationUrl>;
  /** Obtain external access tokens for user by custom plugin. */
  externalObtainAccessTokens: Maybe<ExternalObtainAccessTokens>;
  /** Refresh user's access by custom plugin. */
  externalRefresh: Maybe<ExternalRefresh>;
  /** Logout user by custom plugin. */
  externalLogout: Maybe<ExternalLogout>;
  /** Verify external authentication data by plugin. */
  externalVerify: Maybe<ExternalVerify>;
  /** Sends an email with the account password modification link. */
  requestPasswordReset: Maybe<RequestPasswordReset>;
  /** Confirm user account with token sent by email during registration. */
  confirmAccount: Maybe<ConfirmAccount>;
  /** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
  setPassword: Maybe<SetPassword>;
  /**
   * Change the password of the logged in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  passwordChange: Maybe<PasswordChange>;
  /**
   * Request email change of the logged in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  requestEmailChange: Maybe<RequestEmailChange>;
  /**
   * Confirm the email change of the logged-in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  confirmEmailChange: Maybe<ConfirmEmailChange>;
  /**
   * Create a new address for the customer.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  accountAddressCreate: Maybe<AccountAddressCreate>;
  /** Updates an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
  accountAddressUpdate: Maybe<AccountAddressUpdate>;
  /** Delete an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
  accountAddressDelete: Maybe<AccountAddressDelete>;
  /**
   * Sets a default address for the authenticated user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  accountSetDefaultAddress: Maybe<AccountSetDefaultAddress>;
  /** Register a new user. */
  accountRegister: Maybe<AccountRegister>;
  /**
   * Updates the account of the logged-in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  accountUpdate: Maybe<AccountUpdate>;
  /**
   * Sends an email with the account removal link for the logged-in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  accountRequestDeletion: Maybe<AccountRequestDeletion>;
  /**
   * Remove user account.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  accountDelete: Maybe<AccountDelete>;
  /**
   * Creates user address.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  addressCreate: Maybe<AddressCreate>;
  /**
   * Updates an address.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  addressUpdate: Maybe<AddressUpdate>;
  /**
   * Deletes an address.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  addressDelete: Maybe<AddressDelete>;
  /**
   * Sets a default address for the given user.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  addressSetDefault: Maybe<AddressSetDefault>;
  /**
   * Creates a new customer.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  customerCreate: Maybe<CustomerCreate>;
  /**
   * Updates an existing customer.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  customerUpdate: Maybe<CustomerUpdate>;
  /**
   * Deletes a customer.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  customerDelete: Maybe<CustomerDelete>;
  /**
   * Deletes customers.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  customerBulkDelete: Maybe<CustomerBulkDelete>;
  /**
   * Updates customers.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  customerBulkUpdate: Maybe<CustomerBulkUpdate>;
  /**
   * Creates a new staff user. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  staffCreate: Maybe<StaffCreate>;
  /**
   * Updates an existing staff user. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  staffUpdate: Maybe<StaffUpdate>;
  /**
   * Deletes a staff user. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  staffDelete: Maybe<StaffDelete>;
  /**
   * Deletes staff users. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  staffBulkDelete: Maybe<StaffBulkDelete>;
  /**
   * Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  userAvatarUpdate: Maybe<UserAvatarUpdate>;
  /**
   * Deletes a user avatar. Only for staff members.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  userAvatarDelete: Maybe<UserAvatarDelete>;
  /**
   * Activate or deactivate users.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  userBulkSetActive: Maybe<UserBulkSetActive>;
  /**
   * Create new permission group. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  permissionGroupCreate: Maybe<PermissionGroupCreate>;
  /**
   * Update permission group. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  permissionGroupUpdate: Maybe<PermissionGroupUpdate>;
  /**
   * Delete permission group. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  permissionGroupDelete: Maybe<PermissionGroupDelete>;
};


export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput;
};


export type MutationWebhookDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationWebhookUpdateArgs = {
  id: Scalars['ID'];
  input: WebhookUpdateInput;
};


export type MutationEventDeliveryRetryArgs = {
  id: Scalars['ID'];
};


export type MutationWebhookDryRunArgs = {
  objectId: Scalars['ID'];
  query: Scalars['String'];
};


export type MutationWebhookTriggerArgs = {
  objectId: Scalars['ID'];
  webhookId: Scalars['ID'];
};


export type MutationCreateWarehouseArgs = {
  input: WarehouseCreateInput;
};


export type MutationUpdateWarehouseArgs = {
  id: Scalars['ID'];
  input: WarehouseUpdateInput;
};


export type MutationDeleteWarehouseArgs = {
  id: Scalars['ID'];
};


export type MutationAssignWarehouseShippingZoneArgs = {
  id: Scalars['ID'];
  shippingZoneIds: Array<Scalars['ID']>;
};


export type MutationUnassignWarehouseShippingZoneArgs = {
  id: Scalars['ID'];
  shippingZoneIds: Array<Scalars['ID']>;
};


export type MutationTaxClassCreateArgs = {
  input: TaxClassCreateInput;
};


export type MutationTaxClassDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationTaxClassUpdateArgs = {
  id: Scalars['ID'];
  input: TaxClassUpdateInput;
};


export type MutationTaxConfigurationUpdateArgs = {
  id: Scalars['ID'];
  input: TaxConfigurationUpdateInput;
};


export type MutationTaxCountryConfigurationUpdateArgs = {
  countryCode: CountryCode;
  updateTaxClassRates: Array<TaxClassRateInput>;
};


export type MutationTaxCountryConfigurationDeleteArgs = {
  countryCode: CountryCode;
};


export type MutationTaxExemptionManageArgs = {
  id: Scalars['ID'];
  taxExemption: Scalars['Boolean'];
};


export type MutationStockBulkUpdateArgs = {
  errorPolicy?: Maybe<ErrorPolicyEnum>;
  stocks: Array<StockBulkUpdateInput>;
};


export type MutationStaffNotificationRecipientCreateArgs = {
  input: StaffNotificationRecipientInput;
};


export type MutationStaffNotificationRecipientUpdateArgs = {
  id: Scalars['ID'];
  input: StaffNotificationRecipientInput;
};


export type MutationStaffNotificationRecipientDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationShopDomainUpdateArgs = {
  input?: Maybe<SiteDomainInput>;
};


export type MutationShopSettingsUpdateArgs = {
  input: ShopSettingsInput;
};


export type MutationShopSettingsTranslateArgs = {
  input: ShopSettingsTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShopAddressUpdateArgs = {
  input?: Maybe<AddressInput>;
};


export type MutationOrderSettingsUpdateArgs = {
  input: OrderSettingsUpdateInput;
};


export type MutationGiftCardSettingsUpdateArgs = {
  input: GiftCardSettingsUpdateInput;
};


export type MutationShippingMethodChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: ShippingMethodChannelListingInput;
};


export type MutationShippingPriceCreateArgs = {
  input: ShippingPriceInput;
};


export type MutationShippingPriceDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationShippingPriceBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationShippingPriceUpdateArgs = {
  id: Scalars['ID'];
  input: ShippingPriceInput;
};


export type MutationShippingPriceTranslateArgs = {
  id: Scalars['ID'];
  input: ShippingPriceTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShippingPriceExcludeProductsArgs = {
  id: Scalars['ID'];
  input: ShippingPriceExcludeProductsInput;
};


export type MutationShippingPriceRemoveProductFromExcludeArgs = {
  id: Scalars['ID'];
  products: Array<Scalars['ID']>;
};


export type MutationShippingZoneCreateArgs = {
  input: ShippingZoneCreateInput;
};


export type MutationShippingZoneDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationShippingZoneBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationShippingZoneUpdateArgs = {
  id: Scalars['ID'];
  input: ShippingZoneUpdateInput;
};


export type MutationProductAttributeAssignArgs = {
  operations: Array<ProductAttributeAssignInput>;
  productTypeId: Scalars['ID'];
};


export type MutationProductAttributeAssignmentUpdateArgs = {
  operations: Array<ProductAttributeAssignmentUpdateInput>;
  productTypeId: Scalars['ID'];
};


export type MutationProductAttributeUnassignArgs = {
  attributeIds: Array<Scalars['ID']>;
  productTypeId: Scalars['ID'];
};


export type MutationCategoryCreateArgs = {
  input: CategoryInput;
  parent?: Maybe<Scalars['ID']>;
};


export type MutationCategoryDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCategoryBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationCategoryUpdateArgs = {
  id: Scalars['ID'];
  input: CategoryInput;
};


export type MutationCategoryTranslateArgs = {
  id: Scalars['ID'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCollectionAddProductsArgs = {
  collectionId: Scalars['ID'];
  products: Array<Scalars['ID']>;
};


export type MutationCollectionCreateArgs = {
  input: CollectionCreateInput;
};


export type MutationCollectionDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCollectionReorderProductsArgs = {
  collectionId: Scalars['ID'];
  moves: Array<MoveProductInput>;
};


export type MutationCollectionBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationCollectionRemoveProductsArgs = {
  collectionId: Scalars['ID'];
  products: Array<Scalars['ID']>;
};


export type MutationCollectionUpdateArgs = {
  id: Scalars['ID'];
  input: CollectionInput;
};


export type MutationCollectionTranslateArgs = {
  id: Scalars['ID'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCollectionChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: CollectionChannelListingUpdateInput;
};


export type MutationProductCreateArgs = {
  input: ProductCreateInput;
};


export type MutationProductDeleteArgs = {
  externalReference?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};


export type MutationProductBulkCreateArgs = {
  errorPolicy?: Maybe<ErrorPolicyEnum>;
  products: Array<ProductBulkCreateInput>;
};


export type MutationProductBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationProductUpdateArgs = {
  externalReference?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  input: ProductInput;
};


export type MutationProductTranslateArgs = {
  id: Scalars['ID'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: ProductChannelListingUpdateInput;
};


export type MutationProductMediaCreateArgs = {
  input: ProductMediaCreateInput;
};


export type MutationProductVariantReorderArgs = {
  moves: Array<ReorderInput>;
  productId: Scalars['ID'];
};


export type MutationProductMediaDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductMediaBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationProductMediaReorderArgs = {
  mediaIds: Array<Scalars['ID']>;
  productId: Scalars['ID'];
};


export type MutationProductMediaUpdateArgs = {
  id: Scalars['ID'];
  input: ProductMediaUpdateInput;
};


export type MutationProductTypeCreateArgs = {
  input: ProductTypeInput;
};


export type MutationProductTypeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductTypeBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationProductTypeUpdateArgs = {
  id: Scalars['ID'];
  input: ProductTypeInput;
};


export type MutationProductTypeReorderAttributesArgs = {
  moves: Array<ReorderInput>;
  productTypeId: Scalars['ID'];
  type: ProductAttributeType;
};


export type MutationProductReorderAttributeValuesArgs = {
  attributeId: Scalars['ID'];
  moves: Array<ReorderInput>;
  productId: Scalars['ID'];
};


export type MutationDigitalContentCreateArgs = {
  input: DigitalContentUploadInput;
  variantId: Scalars['ID'];
};


export type MutationDigitalContentDeleteArgs = {
  variantId: Scalars['ID'];
};


export type MutationDigitalContentUpdateArgs = {
  input: DigitalContentInput;
  variantId: Scalars['ID'];
};


export type MutationDigitalContentUrlCreateArgs = {
  input: DigitalContentUrlCreateInput;
};


export type MutationProductVariantCreateArgs = {
  input: ProductVariantCreateInput;
};


export type MutationProductVariantDeleteArgs = {
  externalReference?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  sku?: Maybe<Scalars['String']>;
};


export type MutationProductVariantBulkCreateArgs = {
  errorPolicy?: Maybe<ErrorPolicyEnum>;
  product: Scalars['ID'];
  variants: Array<ProductVariantBulkCreateInput>;
};


export type MutationProductVariantBulkUpdateArgs = {
  errorPolicy?: Maybe<ErrorPolicyEnum>;
  product: Scalars['ID'];
  variants: Array<ProductVariantBulkUpdateInput>;
};


export type MutationProductVariantBulkDeleteArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
  skus?: Maybe<Array<Scalars['String']>>;
};


export type MutationProductVariantStocksCreateArgs = {
  stocks: Array<StockInput>;
  variantId: Scalars['ID'];
};


export type MutationProductVariantStocksDeleteArgs = {
  sku?: Maybe<Scalars['String']>;
  variantId?: Maybe<Scalars['ID']>;
  warehouseIds?: Maybe<Array<Scalars['ID']>>;
};


export type MutationProductVariantStocksUpdateArgs = {
  sku?: Maybe<Scalars['String']>;
  stocks: Array<StockInput>;
  variantId?: Maybe<Scalars['ID']>;
};


export type MutationProductVariantUpdateArgs = {
  externalReference?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  input: ProductVariantInput;
  sku?: Maybe<Scalars['String']>;
};


export type MutationProductVariantSetDefaultArgs = {
  productId: Scalars['ID'];
  variantId: Scalars['ID'];
};


export type MutationProductVariantTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductVariantChannelListingUpdateArgs = {
  id?: Maybe<Scalars['ID']>;
  input: Array<ProductVariantChannelListingAddInput>;
  sku?: Maybe<Scalars['String']>;
};


export type MutationProductVariantReorderAttributeValuesArgs = {
  attributeId: Scalars['ID'];
  moves: Array<ReorderInput>;
  variantId: Scalars['ID'];
};


export type MutationProductVariantPreorderDeactivateArgs = {
  id: Scalars['ID'];
};


export type MutationVariantMediaAssignArgs = {
  mediaId: Scalars['ID'];
  variantId: Scalars['ID'];
};


export type MutationVariantMediaUnassignArgs = {
  mediaId: Scalars['ID'];
  variantId: Scalars['ID'];
};


export type MutationPaymentCaptureArgs = {
  amount?: Maybe<Scalars['PositiveDecimal']>;
  paymentId: Scalars['ID'];
};


export type MutationPaymentRefundArgs = {
  amount?: Maybe<Scalars['PositiveDecimal']>;
  paymentId: Scalars['ID'];
};


export type MutationPaymentVoidArgs = {
  paymentId: Scalars['ID'];
};


export type MutationPaymentInitializeArgs = {
  channel?: Maybe<Scalars['String']>;
  gateway: Scalars['String'];
  paymentData?: Maybe<Scalars['JSONString']>;
};


export type MutationPaymentCheckBalanceArgs = {
  input: PaymentCheckBalanceInput;
};


export type MutationTransactionCreateArgs = {
  id: Scalars['ID'];
  transaction: TransactionCreateInput;
  transactionEvent?: Maybe<TransactionEventInput>;
};


export type MutationTransactionUpdateArgs = {
  id: Scalars['ID'];
  transaction?: Maybe<TransactionUpdateInput>;
  transactionEvent?: Maybe<TransactionEventInput>;
};


export type MutationTransactionRequestActionArgs = {
  actionType: TransactionActionEnum;
  amount?: Maybe<Scalars['PositiveDecimal']>;
  id: Scalars['ID'];
};


export type MutationTransactionEventReportArgs = {
  amount: Scalars['PositiveDecimal'];
  availableActions?: Maybe<Array<TransactionActionEnum>>;
  externalUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  pspReference: Scalars['String'];
  time?: Maybe<Scalars['DateTime']>;
  type: TransactionEventTypeEnum;
};


export type MutationPaymentGatewayInitializeArgs = {
  amount?: Maybe<Scalars['PositiveDecimal']>;
  id: Scalars['ID'];
  paymentGateways?: Maybe<Array<PaymentGatewayToInitialize>>;
};


export type MutationTransactionInitializeArgs = {
  action?: Maybe<TransactionFlowStrategyEnum>;
  amount?: Maybe<Scalars['PositiveDecimal']>;
  id: Scalars['ID'];
  paymentGateway: PaymentGatewayToInitialize;
};


export type MutationTransactionProcessArgs = {
  data?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
};


export type MutationPageCreateArgs = {
  input: PageCreateInput;
};


export type MutationPageDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPageBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationPageBulkPublishArgs = {
  ids: Array<Scalars['ID']>;
  isPublished: Scalars['Boolean'];
};


export type MutationPageUpdateArgs = {
  id: Scalars['ID'];
  input: PageInput;
};


export type MutationPageTranslateArgs = {
  id: Scalars['ID'];
  input: PageTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationPageTypeCreateArgs = {
  input: PageTypeCreateInput;
};


export type MutationPageTypeUpdateArgs = {
  id?: Maybe<Scalars['ID']>;
  input: PageTypeUpdateInput;
};


export type MutationPageTypeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPageTypeBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationPageAttributeAssignArgs = {
  attributeIds: Array<Scalars['ID']>;
  pageTypeId: Scalars['ID'];
};


export type MutationPageAttributeUnassignArgs = {
  attributeIds: Array<Scalars['ID']>;
  pageTypeId: Scalars['ID'];
};


export type MutationPageTypeReorderAttributesArgs = {
  moves: Array<ReorderInput>;
  pageTypeId: Scalars['ID'];
};


export type MutationPageReorderAttributeValuesArgs = {
  attributeId: Scalars['ID'];
  moves: Array<ReorderInput>;
  pageId: Scalars['ID'];
};


export type MutationDraftOrderCompleteArgs = {
  id: Scalars['ID'];
};


export type MutationDraftOrderCreateArgs = {
  input: DraftOrderCreateInput;
};


export type MutationDraftOrderDeleteArgs = {
  externalReference?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};


export type MutationDraftOrderBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDraftOrderLinesBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDraftOrderUpdateArgs = {
  externalReference?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  input: DraftOrderInput;
};


export type MutationOrderAddNoteArgs = {
  order: Scalars['ID'];
  input: OrderAddNoteInput;
};


export type MutationOrderCancelArgs = {
  id: Scalars['ID'];
};


export type MutationOrderCaptureArgs = {
  amount: Scalars['PositiveDecimal'];
  id: Scalars['ID'];
};


export type MutationOrderConfirmArgs = {
  id: Scalars['ID'];
};


export type MutationOrderFulfillArgs = {
  input: OrderFulfillInput;
  order?: Maybe<Scalars['ID']>;
};


export type MutationOrderFulfillmentCancelArgs = {
  id: Scalars['ID'];
  input?: Maybe<FulfillmentCancelInput>;
};


export type MutationOrderFulfillmentApproveArgs = {
  allowStockToBeExceeded?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  notifyCustomer: Scalars['Boolean'];
};


export type MutationOrderFulfillmentUpdateTrackingArgs = {
  id: Scalars['ID'];
  input: FulfillmentUpdateTrackingInput;
};


export type MutationOrderFulfillmentRefundProductsArgs = {
  input: OrderRefundProductsInput;
  order: Scalars['ID'];
};


export type MutationOrderFulfillmentReturnProductsArgs = {
  input: OrderReturnProductsInput;
  order: Scalars['ID'];
};


export type MutationOrderGrantRefundCreateArgs = {
  id: Scalars['ID'];
  input: OrderGrantRefundCreateInput;
};


export type MutationOrderGrantRefundUpdateArgs = {
  id: Scalars['ID'];
  input: OrderGrantRefundUpdateInput;
};


export type MutationOrderLinesCreateArgs = {
  id: Scalars['ID'];
  input: Array<OrderLineCreateInput>;
};


export type MutationOrderLineDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationOrderLineUpdateArgs = {
  id: Scalars['ID'];
  input: OrderLineInput;
};


export type MutationOrderDiscountAddArgs = {
  input: OrderDiscountCommonInput;
  orderId: Scalars['ID'];
};


export type MutationOrderDiscountUpdateArgs = {
  discountId: Scalars['ID'];
  input: OrderDiscountCommonInput;
};


export type MutationOrderDiscountDeleteArgs = {
  discountId: Scalars['ID'];
};


export type MutationOrderLineDiscountUpdateArgs = {
  input: OrderDiscountCommonInput;
  orderLineId: Scalars['ID'];
};


export type MutationOrderLineDiscountRemoveArgs = {
  orderLineId: Scalars['ID'];
};


export type MutationOrderMarkAsPaidArgs = {
  id: Scalars['ID'];
  transactionReference?: Maybe<Scalars['String']>;
};


export type MutationOrderRefundArgs = {
  amount: Scalars['PositiveDecimal'];
  id: Scalars['ID'];
};


export type MutationOrderUpdateArgs = {
  externalReference?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  input: OrderUpdateInput;
};


export type MutationOrderUpdateShippingArgs = {
  order: Scalars['ID'];
  input: OrderUpdateShippingInput;
};


export type MutationOrderVoidArgs = {
  id: Scalars['ID'];
};


export type MutationOrderBulkCancelArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteMetadataArgs = {
  id: Scalars['ID'];
  keys: Array<Scalars['String']>;
};


export type MutationDeletePrivateMetadataArgs = {
  id: Scalars['ID'];
  keys: Array<Scalars['String']>;
};


export type MutationUpdateMetadataArgs = {
  id: Scalars['ID'];
  input: Array<MetadataInput>;
};


export type MutationUpdatePrivateMetadataArgs = {
  id: Scalars['ID'];
  input: Array<MetadataInput>;
};


export type MutationAssignNavigationArgs = {
  menu?: Maybe<Scalars['ID']>;
  navigationType: NavigationType;
};


export type MutationMenuCreateArgs = {
  input: MenuCreateInput;
};


export type MutationMenuDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationMenuBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationMenuUpdateArgs = {
  id: Scalars['ID'];
  input: MenuInput;
};


export type MutationMenuItemCreateArgs = {
  input: MenuItemCreateInput;
};


export type MutationMenuItemDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationMenuItemBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationMenuItemUpdateArgs = {
  id: Scalars['ID'];
  input: MenuItemInput;
};


export type MutationMenuItemTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationMenuItemMoveArgs = {
  menu: Scalars['ID'];
  moves: Array<MenuItemMoveInput>;
};


export type MutationInvoiceRequestArgs = {
  number?: Maybe<Scalars['String']>;
  orderId: Scalars['ID'];
};


export type MutationInvoiceRequestDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationInvoiceCreateArgs = {
  input: InvoiceCreateInput;
  orderId: Scalars['ID'];
};


export type MutationInvoiceDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationInvoiceUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateInvoiceInput;
};


export type MutationInvoiceSendNotificationArgs = {
  id: Scalars['ID'];
};


export type MutationGiftCardActivateArgs = {
  id: Scalars['ID'];
};


export type MutationGiftCardCreateArgs = {
  input: GiftCardCreateInput;
};


export type MutationGiftCardDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationGiftCardDeactivateArgs = {
  id: Scalars['ID'];
};


export type MutationGiftCardUpdateArgs = {
  id: Scalars['ID'];
  input: GiftCardUpdateInput;
};


export type MutationGiftCardResendArgs = {
  input: GiftCardResendInput;
};


export type MutationGiftCardAddNoteArgs = {
  id: Scalars['ID'];
  input: GiftCardAddNoteInput;
};


export type MutationGiftCardBulkCreateArgs = {
  input: GiftCardBulkCreateInput;
};


export type MutationGiftCardBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationGiftCardBulkActivateArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationGiftCardBulkDeactivateArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationPluginUpdateArgs = {
  channelId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  input: PluginUpdateInput;
};


export type MutationExternalNotificationTriggerArgs = {
  channel: Scalars['String'];
  input: ExternalNotificationTriggerInput;
  pluginId?: Maybe<Scalars['String']>;
};


export type MutationSaleCreateArgs = {
  input: SaleInput;
};


export type MutationSaleDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationSaleBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationSaleUpdateArgs = {
  id: Scalars['ID'];
  input: SaleInput;
};


export type MutationSaleCataloguesAddArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationSaleCataloguesRemoveArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationSaleTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationSaleChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: SaleChannelListingInput;
};


export type MutationVoucherCreateArgs = {
  input: VoucherInput;
};


export type MutationVoucherDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationVoucherBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationVoucherUpdateArgs = {
  id: Scalars['ID'];
  input: VoucherInput;
};


export type MutationVoucherCataloguesAddArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationVoucherCataloguesRemoveArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationVoucherTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationVoucherChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: VoucherChannelListingInput;
};


export type MutationExportProductsArgs = {
  input: ExportProductsInput;
};


export type MutationExportGiftCardsArgs = {
  input: ExportGiftCardsInput;
};


export type MutationFileUploadArgs = {
  file: Scalars['Upload'];
};


export type MutationCheckoutAddPromoCodeArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  promoCode: Scalars['String'];
  token?: Maybe<Scalars['UUID']>;
};


export type MutationCheckoutBillingAddressUpdateArgs = {
  billingAddress: AddressInput;
  checkoutId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['UUID']>;
  validationRules?: Maybe<CheckoutAddressValidationRules>;
};


export type MutationCheckoutCompleteArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  metadata?: Maybe<Array<MetadataInput>>;
  paymentData?: Maybe<Scalars['JSONString']>;
  redirectUrl?: Maybe<Scalars['String']>;
  storeSource?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['UUID']>;
};


export type MutationCheckoutCreateArgs = {
  input: CheckoutCreateInput;
};


export type MutationCheckoutCreateFromOrderArgs = {
  id: Scalars['ID'];
};


export type MutationCheckoutCustomerAttachArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  customerId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['UUID']>;
};


export type MutationCheckoutCustomerDetachArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['UUID']>;
};


export type MutationCheckoutEmailUpdateArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['UUID']>;
};


export type MutationCheckoutLineDeleteArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  lineId?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['UUID']>;
};


export type MutationCheckoutLinesDeleteArgs = {
  id?: Maybe<Scalars['ID']>;
  linesIds: Array<Scalars['ID']>;
  token?: Maybe<Scalars['UUID']>;
};


export type MutationCheckoutLinesAddArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  lines: Array<CheckoutLineInput>;
  token?: Maybe<Scalars['UUID']>;
};


export type MutationCheckoutLinesUpdateArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  lines: Array<CheckoutLineUpdateInput>;
  token?: Maybe<Scalars['UUID']>;
};


export type MutationCheckoutRemovePromoCodeArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  promoCode?: Maybe<Scalars['String']>;
  promoCodeId?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['UUID']>;
};


export type MutationCheckoutPaymentCreateArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  input: PaymentInput;
  token?: Maybe<Scalars['UUID']>;
};


export type MutationCheckoutShippingAddressUpdateArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  shippingAddress: AddressInput;
  token?: Maybe<Scalars['UUID']>;
  validationRules?: Maybe<CheckoutAddressValidationRules>;
};


export type MutationCheckoutShippingMethodUpdateArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  shippingMethodId: Scalars['ID'];
  token?: Maybe<Scalars['UUID']>;
};


export type MutationCheckoutDeliveryMethodUpdateArgs = {
  deliveryMethodId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['UUID']>;
};


export type MutationCheckoutLanguageCodeUpdateArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  languageCode: LanguageCodeEnum;
  token?: Maybe<Scalars['UUID']>;
};


export type MutationOrderCreateFromCheckoutArgs = {
  id: Scalars['ID'];
  metadata?: Maybe<Array<MetadataInput>>;
  privateMetadata?: Maybe<Array<MetadataInput>>;
  removeCheckout?: Maybe<Scalars['Boolean']>;
};


export type MutationChannelCreateArgs = {
  input: ChannelCreateInput;
};


export type MutationChannelUpdateArgs = {
  id: Scalars['ID'];
  input: ChannelUpdateInput;
};


export type MutationChannelDeleteArgs = {
  id: Scalars['ID'];
  input?: Maybe<ChannelDeleteInput>;
};


export type MutationChannelActivateArgs = {
  id: Scalars['ID'];
};


export type MutationChannelDeactivateArgs = {
  id: Scalars['ID'];
};


export type MutationChannelReorderWarehousesArgs = {
  channelId: Scalars['ID'];
  moves: Array<ReorderInput>;
};


export type MutationAttributeCreateArgs = {
  input: AttributeCreateInput;
};


export type MutationAttributeDeleteArgs = {
  externalReference?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};


export type MutationAttributeUpdateArgs = {
  externalReference?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  input: AttributeUpdateInput;
};


export type MutationAttributeTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationAttributeValueBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationAttributeValueCreateArgs = {
  attribute: Scalars['ID'];
  input: AttributeValueCreateInput;
};


export type MutationAttributeValueDeleteArgs = {
  externalReference?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};


export type MutationAttributeValueUpdateArgs = {
  externalReference?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  input: AttributeValueUpdateInput;
};


export type MutationAttributeValueTranslateArgs = {
  id: Scalars['ID'];
  input: AttributeValueTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeReorderValuesArgs = {
  attributeId: Scalars['ID'];
  moves: Array<ReorderInput>;
};


export type MutationAppCreateArgs = {
  input: AppInput;
};


export type MutationAppUpdateArgs = {
  id: Scalars['ID'];
  input: AppInput;
};


export type MutationAppDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAppTokenCreateArgs = {
  input: AppTokenInput;
};


export type MutationAppTokenDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAppTokenVerifyArgs = {
  token: Scalars['String'];
};


export type MutationAppInstallArgs = {
  input: AppInstallInput;
};


export type MutationAppRetryInstallArgs = {
  activateAfterInstallation?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type MutationAppDeleteFailedInstallationArgs = {
  id: Scalars['ID'];
};


export type MutationAppFetchManifestArgs = {
  manifestUrl: Scalars['String'];
};


export type MutationAppActivateArgs = {
  id: Scalars['ID'];
};


export type MutationAppDeactivateArgs = {
  id: Scalars['ID'];
};


export type MutationTokenCreateArgs = {
  audience?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationTokenRefreshArgs = {
  csrfToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};


export type MutationTokenVerifyArgs = {
  token: Scalars['String'];
};


export type MutationExternalAuthenticationUrlArgs = {
  input: Scalars['JSONString'];
  pluginId: Scalars['String'];
};


export type MutationExternalObtainAccessTokensArgs = {
  input: Scalars['JSONString'];
  pluginId: Scalars['String'];
};


export type MutationExternalRefreshArgs = {
  input: Scalars['JSONString'];
  pluginId: Scalars['String'];
};


export type MutationExternalLogoutArgs = {
  input: Scalars['JSONString'];
  pluginId: Scalars['String'];
};


export type MutationExternalVerifyArgs = {
  input: Scalars['JSONString'];
  pluginId: Scalars['String'];
};


export type MutationRequestPasswordResetArgs = {
  channel?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  redirectUrl: Scalars['String'];
};


export type MutationConfirmAccountArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSetPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationPasswordChangeArgs = {
  newPassword: Scalars['String'];
  oldPassword?: Maybe<Scalars['String']>;
};


export type MutationRequestEmailChangeArgs = {
  channel?: Maybe<Scalars['String']>;
  newEmail: Scalars['String'];
  password: Scalars['String'];
  redirectUrl: Scalars['String'];
};


export type MutationConfirmEmailChangeArgs = {
  channel?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};


export type MutationAccountAddressCreateArgs = {
  input: AddressInput;
  type?: Maybe<AddressTypeEnum>;
};


export type MutationAccountAddressUpdateArgs = {
  id: Scalars['ID'];
  input: AddressInput;
};


export type MutationAccountAddressDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAccountSetDefaultAddressArgs = {
  id: Scalars['ID'];
  type: AddressTypeEnum;
};


export type MutationAccountRegisterArgs = {
  input: AccountRegisterInput;
};


export type MutationAccountUpdateArgs = {
  input: AccountInput;
};


export type MutationAccountRequestDeletionArgs = {
  channel?: Maybe<Scalars['String']>;
  redirectUrl: Scalars['String'];
};


export type MutationAccountDeleteArgs = {
  token: Scalars['String'];
};


export type MutationAddressCreateArgs = {
  input: AddressInput;
  userId: Scalars['ID'];
};


export type MutationAddressUpdateArgs = {
  id: Scalars['ID'];
  input: AddressInput;
};


export type MutationAddressDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAddressSetDefaultArgs = {
  addressId: Scalars['ID'];
  type: AddressTypeEnum;
  userId: Scalars['ID'];
};


export type MutationCustomerCreateArgs = {
  input: UserCreateInput;
};


export type MutationCustomerUpdateArgs = {
  externalReference?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  input: CustomerInput;
};


export type MutationCustomerDeleteArgs = {
  externalReference?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};


export type MutationCustomerBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationCustomerBulkUpdateArgs = {
  customers: Array<CustomerBulkUpdateInput>;
  errorPolicy?: Maybe<ErrorPolicyEnum>;
};


export type MutationStaffCreateArgs = {
  input: StaffCreateInput;
};


export type MutationStaffUpdateArgs = {
  id: Scalars['ID'];
  input: StaffUpdateInput;
};


export type MutationStaffDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationStaffBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationUserAvatarUpdateArgs = {
  image: Scalars['Upload'];
};


export type MutationUserBulkSetActiveArgs = {
  ids: Array<Scalars['ID']>;
  isActive: Scalars['Boolean'];
};


export type MutationPermissionGroupCreateArgs = {
  input: PermissionGroupCreateInput;
};


export type MutationPermissionGroupUpdateArgs = {
  id: Scalars['ID'];
  input: PermissionGroupUpdateInput;
};


export type MutationPermissionGroupDeleteArgs = {
  id: Scalars['ID'];
};

export type NameTranslationInput = {
  name?: Maybe<Scalars['String']>;
};

export type NavigationType =
  /** Main storefront navigation. */
  | 'MAIN'
  /** Secondary storefront navigation. */
  | 'SECONDARY';

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type ObjectWithMetadata = {
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /** Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything. */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  metafield: Maybe<Scalars['String']>;
  /** Public metadata. Use `keys` to control which fields you want to include. The default is to include everything. */
  metafields: Maybe<Scalars['Metadata']>;
};


export type ObjectWithMetadataPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type ObjectWithMetadataPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


export type ObjectWithMetadataMetafieldArgs = {
  key: Scalars['String'];
};


export type ObjectWithMetadataMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};

/** Represents an order in the shop. */
export type Order = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  created: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: OrderStatus;
  /** User who placed the order. This field is set only for orders placed by authenticated users. Can be fetched for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_USERS, MANAGE_ORDERS, OWNER. */
  user: Maybe<User>;
  trackingClientId: Scalars['String'];
  /** Billing address. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
  billingAddress: Maybe<Address>;
  /** Shipping address. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
  shippingAddress: Maybe<Address>;
  shippingMethodName: Maybe<Scalars['String']>;
  collectionPointName: Maybe<Scalars['String']>;
  channel: Channel;
  /** List of shipments for the order. */
  fulfillments: Array<Fulfillment>;
  /** List of order lines. */
  lines: Array<OrderLine>;
  /** List of actions that can be performed in the current state of an order. */
  actions: Array<OrderAction>;
  /**
   * Shipping methods that can be used with this order.
   * @deprecated Use `shippingMethods`, this field will be removed in 4.0
   */
  availableShippingMethods: Maybe<Array<ShippingMethod>>;
  /** Shipping methods related to this order. */
  shippingMethods: Array<ShippingMethod>;
  /**
   * Collection points that can be used for this order.
   *
   * Added in Saleor 3.1.
   */
  availableCollectionPoints: Array<Warehouse>;
  /** List of order invoices. Can be fetched for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
  invoices: Array<Invoice>;
  /** User-friendly number of an order. */
  number: Scalars['String'];
  /** The ID of the order that was the base for this order. */
  original: Maybe<Scalars['ID']>;
  /** The order origin. */
  origin: OrderOriginEnum;
  /** Informs if an order is fully paid. */
  isPaid: Scalars['Boolean'];
  /** Internal payment status. */
  paymentStatus: PaymentChargeStatusEnum;
  /** User-friendly payment status. */
  paymentStatusDisplay: Scalars['String'];
  /**
   * The authorize status of the order.
   *
   * Added in Saleor 3.4.
   */
  authorizeStatus: OrderAuthorizeStatusEnum;
  /**
   * The charge status of the order.
   *
   * Added in Saleor 3.4.
   */
  chargeStatus: OrderChargeStatusEnum;
  /**
   * Returns True if order has to be exempt from taxes.
   *
   * Added in Saleor 3.8.
   */
  taxExemption: Scalars['Boolean'];
  /**
   * List of transactions for the order. Requires one of the following permissions: MANAGE_ORDERS, HANDLE_PAYMENTS.
   *
   * Added in Saleor 3.4.
   */
  transactions: Array<TransactionItem>;
  /** List of payments for the order. */
  payments: Array<Payment>;
  /** Total amount of the order. */
  total: TaxedMoney;
  /** Undiscounted total amount of the order. */
  undiscountedTotal: TaxedMoney;
  /**
   * Shipping method for this order.
   * @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead.
   */
  shippingMethod: Maybe<ShippingMethod>;
  /** Total price of shipping. */
  shippingPrice: TaxedMoney;
  /** The shipping tax rate value. */
  shippingTaxRate: Scalars['Float'];
  /**
   * Denormalized tax class assigned to the shipping method.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  shippingTaxClass: Maybe<TaxClass>;
  /**
   * Denormalized name of the tax class assigned to the shipping method.
   *
   * Added in Saleor 3.9.
   */
  shippingTaxClassName: Maybe<Scalars['String']>;
  /**
   * Denormalized public metadata of the shipping method's tax class.
   *
   * Added in Saleor 3.9.
   */
  shippingTaxClassMetadata: Array<MetadataItem>;
  /**
   * Denormalized private metadata of the shipping method's tax class. Requires staff permissions to access.
   *
   * Added in Saleor 3.9.
   */
  shippingTaxClassPrivateMetadata: Array<MetadataItem>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `id` instead. */
  token: Scalars['String'];
  voucher: Maybe<Voucher>;
  /** List of user gift cards. */
  giftCards: Array<GiftCard>;
  customerNote: Scalars['String'];
  weight: Weight;
  redirectUrl: Maybe<Scalars['String']>;
  /** The sum of line prices not including shipping. */
  subtotal: TaxedMoney;
  /** User-friendly order status. */
  statusDisplay: Scalars['String'];
  /** Informs whether a draft order can be finalized(turned into a regular order). */
  canFinalize: Scalars['Boolean'];
  /** Amount authorized for the order. */
  totalAuthorized: Money;
  /**
   * Amount captured for the order.
   * @deprecated This field will be removed in Saleor 4.0. Use `totalCharged` instead.
   */
  totalCaptured: Money;
  /**
   * Amount charged for the order.
   *
   * Added in Saleor 3.13.
   */
  totalCharged: Money;
  /**
   * Amount canceled for the order.
   *
   * Added in Saleor 3.13.
   */
  totalCanceled: Money;
  /**
   * List of events associated with the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  events: Array<OrderEvent>;
  /** The difference between the paid and the order total amount. */
  totalBalance: Money;
  /** Email address of the customer. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
  userEmail: Maybe<Scalars['String']>;
  /** Returns True, if order requires shipping. */
  isShippingRequired: Scalars['Boolean'];
  /**
   * The delivery method selected for this order.
   *
   * Added in Saleor 3.1.
   */
  deliveryMethod: Maybe<DeliveryMethod>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `languageCodeEnum` field to fetch the language code.  */
  languageCode: Scalars['String'];
  /** Order language code. */
  languageCodeEnum: LanguageCodeEnum;
  /**
   * Returns applied discount.
   * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
   */
  discount: Maybe<Money>;
  /**
   * Discount name.
   * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
   */
  discountName: Maybe<Scalars['String']>;
  /**
   * Translated discount name.
   * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
   */
  translatedDiscountName: Maybe<Scalars['String']>;
  /** List of all discounts assigned to the order. */
  discounts: Array<OrderDiscount>;
  /** List of errors that occurred during order validation. */
  errors: Array<OrderError>;
  /**
   * Determines whether checkout prices should include taxes when displayed in a storefront.
   *
   * Added in Saleor 3.9.
   */
  displayGrossPrices: Scalars['Boolean'];
  /**
   * External ID of this order.
   *
   * Added in Saleor 3.10.
   */
  externalReference: Maybe<Scalars['String']>;
  /**
   * ID of the checkout that the order was created from.
   *
   * Added in Saleor 3.11.
   */
  checkoutId: Maybe<Scalars['ID']>;
  /**
   * List of granted refunds.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  grantedRefunds: Array<OrderGrantedRefund>;
  /**
   * Total amount of granted refund.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  totalGrantedRefund: Money;
  /**
   * Total refund amount for the order.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  totalRefunded: Money;
  /**
   * Total amount of ongoing refund requests for the order's transactions.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  totalRefundPending: Money;
  /**
   * Total amount of ongoing authorize requests for the order's transactions.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  totalAuthorizePending: Money;
  /**
   * Total amount of ongoing charge requests for the order's transactions.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  totalChargePending: Money;
  /**
   * Total amount of ongoing cancel requests for the order's transactions.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  totalCancelPending: Money;
  /**
   * The difference amount between granted refund and the amounts that are pending and refunded.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  totalRemainingGrant: Money;
};


/** Represents an order in the shop. */
export type OrderPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents an order in the shop. */
export type OrderPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents an order in the shop. */
export type OrderMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents an order in the shop. */
export type OrderMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};

export type OrderAction =
  /** Represents the capture action. */
  | 'CAPTURE'
  /** Represents a mark-as-paid action. */
  | 'MARK_AS_PAID'
  /** Represents a refund action. */
  | 'REFUND'
  /** Represents a void action. */
  | 'VOID';

/**
 * Adds note to the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderAddNote = {
  /** Order with the note added. */
  order: Maybe<Order>;
  /** Order note created. */
  event: Maybe<OrderEvent>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

export type OrderAddNoteInput = {
  /** Note message. */
  message: Scalars['String'];
};

/**
 * Determine a current authorize status for order.
 *
 *     We treat the order as fully authorized when the sum of authorized and charged funds
 *     cover the `order.total`-`order.totalGrantedRefund`.
 *     We treat the order as partially authorized when the sum of authorized and charged
 *     funds covers only part of the `order.total`-`order.totalGrantedRefund`.
 *     We treat the order as not authorized when the sum of authorized and charged funds is
 *     0.
 *
 *     NONE - the funds are not authorized
 *     PARTIAL - the funds that are authorized and charged don't cover fully the
 *     `order.total`-`order.totalGrantedRefund`
 *     FULL - the funds that are authorized and charged fully cover the
 *     `order.total`-`order.totalGrantedRefund`
 */
export type OrderAuthorizeStatusEnum =
  | 'NONE'
  | 'PARTIAL'
  | 'FULL';

/**
 * Cancels orders.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderBulkCancel = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

/**
 * Cancel an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderCancel = {
  /** Canceled order. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

/**
 * Event sent when order is canceled.
 *
 * Added in Saleor 3.2.
 */
export type OrderCancelled = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The order the event relates to. */
  order: Maybe<Order>;
};

/**
 * Capture an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderCapture = {
  /** Captured order. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

/**
 * Determine the current charge status for the order.
 *
 *     An order is considered overcharged when the sum of the
 *     transactionItem's charge amounts exceeds the value of
 *     `order.total` - `order.totalGrantedRefund`.
 *     If the sum of the transactionItem's charge amounts equals
 *     `order.total` - `order.totalGrantedRefund`, we consider the order to be fully
 *     charged.
 *     If the sum of the transactionItem's charge amounts covers a part of the
 *     `order.total` - `order.totalGrantedRefund`, we treat the order as partially charged.
 *
 *     NONE - the funds are not charged.
 *     PARTIAL - the funds that are charged don't cover the
 *     `order.total`-`order.totalGrantedRefund`
 *     FULL - the funds that are charged fully cover the
 *     `order.total`-`order.totalGrantedRefund`
 *     OVERCHARGED - the charged funds are bigger than the
 *     `order.total`-`order.totalGrantedRefund`
 */
export type OrderChargeStatusEnum =
  | 'NONE'
  | 'PARTIAL'
  | 'FULL'
  | 'OVERCHARGED';

/**
 * Confirms an unconfirmed order by changing status to unfulfilled.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderConfirm = {
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

/**
 * Event sent when order is confirmed.
 *
 * Added in Saleor 3.2.
 */
export type OrderConfirmed = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The order the event relates to. */
  order: Maybe<Order>;
};

export type OrderCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<OrderCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type OrderCountableEdge = {
  /** The item at the end of the edge. */
  node: Order;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Create new order from existing checkout. Requires the following permissions: AUTHENTICATED_APP and HANDLE_CHECKOUTS.
 *
 * Added in Saleor 3.2.
 */
export type OrderCreateFromCheckout = {
  /** Placed order. */
  order: Maybe<Order>;
  errors: Array<OrderCreateFromCheckoutError>;
};

export type OrderCreateFromCheckoutError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: OrderCreateFromCheckoutErrorCode;
  /** List of variant IDs which causes the error. */
  variants: Maybe<Array<Scalars['ID']>>;
  /** List of line Ids which cause the error. */
  lines: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export type OrderCreateFromCheckoutErrorCode =
  | 'GRAPHQL_ERROR'
  | 'CHECKOUT_NOT_FOUND'
  | 'CHANNEL_INACTIVE'
  | 'INSUFFICIENT_STOCK'
  | 'VOUCHER_NOT_APPLICABLE'
  | 'GIFT_CARD_NOT_APPLICABLE'
  | 'TAX_ERROR'
  | 'SHIPPING_METHOD_NOT_SET'
  | 'BILLING_ADDRESS_NOT_SET'
  | 'SHIPPING_ADDRESS_NOT_SET'
  | 'INVALID_SHIPPING_METHOD'
  | 'NO_LINES'
  | 'EMAIL_NOT_SET'
  | 'UNAVAILABLE_VARIANT_IN_CHANNEL';

/**
 * Event sent when new order is created.
 *
 * Added in Saleor 3.2.
 */
export type OrderCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The order the event relates to. */
  order: Maybe<Order>;
};

export type OrderDirection =
  /** Specifies an ascending sort order. */
  | 'ASC'
  /** Specifies a descending sort order. */
  | 'DESC';

/** Contains all details related to the applied discount to the order. */
export type OrderDiscount = Node & {
  id: Scalars['ID'];
  type: OrderDiscountType;
  name: Maybe<Scalars['String']>;
  translatedName: Maybe<Scalars['String']>;
  /** Type of the discount: fixed or percent */
  valueType: DiscountValueTypeEnum;
  /** Value of the discount. Can store fixed value or percent value */
  value: Scalars['PositiveDecimal'];
  /**
   * Explanation for the applied discount.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  reason: Maybe<Scalars['String']>;
  /** Returns amount of discount. */
  amount: Money;
};

/**
 * Adds discount to the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderDiscountAdd = {
  /** Order which has been discounted. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

export type OrderDiscountCommonInput = {
  /** Type of the discount: fixed or percent */
  valueType: DiscountValueTypeEnum;
  /** Value of the discount. Can store fixed value or percent value */
  value: Scalars['PositiveDecimal'];
  /** Explanation for the applied discount. */
  reason?: Maybe<Scalars['String']>;
};

/**
 * Remove discount from the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderDiscountDelete = {
  /** Order which has removed discount. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

/** An enumeration. */
export type OrderDiscountType =
  | 'SALE'
  | 'VOUCHER'
  | 'MANUAL';

/**
 * Update discount for the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderDiscountUpdate = {
  /** Order which has been discounted. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

export type OrderDraftFilterInput = {
  customer?: Maybe<Scalars['String']>;
  created?: Maybe<DateRangeInput>;
  search?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataFilter>>;
  channels?: Maybe<Array<Scalars['ID']>>;
};

export type OrderError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: OrderErrorCode;
  /** Warehouse ID which causes the error. */
  warehouse: Maybe<Scalars['ID']>;
  /** List of order line IDs that cause the error. */
  orderLines: Maybe<Array<Scalars['ID']>>;
  /** List of product variants that are associated with the error */
  variants: Maybe<Array<Scalars['ID']>>;
  /** A type of address that causes the error. */
  addressType: Maybe<AddressTypeEnum>;
};

/** An enumeration. */
export type OrderErrorCode =
  | 'BILLING_ADDRESS_NOT_SET'
  | 'CANNOT_CANCEL_FULFILLMENT'
  | 'CANNOT_CANCEL_ORDER'
  | 'CANNOT_DELETE'
  | 'CANNOT_DISCOUNT'
  | 'CANNOT_REFUND'
  | 'CANNOT_FULFILL_UNPAID_ORDER'
  | 'CAPTURE_INACTIVE_PAYMENT'
  | 'GIFT_CARD_LINE'
  | 'NOT_EDITABLE'
  | 'FULFILL_ORDER_LINE'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'PRODUCT_NOT_PUBLISHED'
  | 'PRODUCT_UNAVAILABLE_FOR_PURCHASE'
  | 'NOT_FOUND'
  | 'ORDER_NO_SHIPPING_ADDRESS'
  | 'PAYMENT_ERROR'
  | 'PAYMENT_MISSING'
  | 'TRANSACTION_ERROR'
  | 'REQUIRED'
  | 'SHIPPING_METHOD_NOT_APPLICABLE'
  | 'SHIPPING_METHOD_REQUIRED'
  | 'TAX_ERROR'
  | 'UNIQUE'
  | 'VOID_INACTIVE_PAYMENT'
  | 'ZERO_QUANTITY'
  | 'INVALID_QUANTITY'
  | 'INSUFFICIENT_STOCK'
  | 'DUPLICATED_INPUT_ITEM'
  | 'NOT_AVAILABLE_IN_CHANNEL'
  | 'CHANNEL_INACTIVE';

/** History log of the order. */
export type OrderEvent = Node & {
  id: Scalars['ID'];
  /** Date when event happened at in ISO 8601 format. */
  date: Maybe<Scalars['DateTime']>;
  /** Order event type. */
  type: Maybe<OrderEventsEnum>;
  /** User who performed the action. */
  user: Maybe<User>;
  /** App that performed the action. Requires of of the following permissions: MANAGE_APPS, MANAGE_ORDERS, OWNER. */
  app: Maybe<App>;
  /** Content of the event. */
  message: Maybe<Scalars['String']>;
  /** Email of the customer. */
  email: Maybe<Scalars['String']>;
  /** Type of an email sent to the customer. */
  emailType: Maybe<OrderEventsEmailsEnum>;
  /** Amount of money. */
  amount: Maybe<Scalars['Float']>;
  /** The payment reference from the payment provider. */
  paymentId: Maybe<Scalars['String']>;
  /** The payment gateway of the payment. */
  paymentGateway: Maybe<Scalars['String']>;
  /** Number of items. */
  quantity: Maybe<Scalars['Int']>;
  /** Composed ID of the Fulfillment. */
  composedId: Maybe<Scalars['String']>;
  /** User-friendly number of an order. */
  orderNumber: Maybe<Scalars['String']>;
  /** Number of an invoice related to the order. */
  invoiceNumber: Maybe<Scalars['String']>;
  /** List of oversold lines names. */
  oversoldItems: Maybe<Array<Scalars['String']>>;
  /** The concerned lines. */
  lines: Maybe<Array<OrderEventOrderLineObject>>;
  /** The lines fulfilled. */
  fulfilledItems: Maybe<Array<FulfillmentLine>>;
  /** The warehouse were items were restocked. */
  warehouse: Maybe<Warehouse>;
  /** The transaction reference of captured payment. */
  transactionReference: Maybe<Scalars['String']>;
  /** Define if shipping costs were included to the refund. */
  shippingCostsIncluded: Maybe<Scalars['Boolean']>;
  /** The order which is related to this order. */
  relatedOrder: Maybe<Order>;
  /** The discount applied to the order. */
  discount: Maybe<OrderEventDiscountObject>;
  /**
   * The status of payment's transaction.
   * @deprecated This field will be removed in Saleor 3.14 (Preview Feature).Use `TransactionEvent` to track the status of `TransactionItem`.
   */
  status: Maybe<TransactionStatus>;
  /** The reference of payment's transaction. */
  reference: Maybe<Scalars['String']>;
};

export type OrderEventCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<OrderEventCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type OrderEventCountableEdge = {
  /** The item at the end of the edge. */
  node: OrderEvent;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type OrderEventDiscountObject = {
  /** Type of the discount: fixed or percent. */
  valueType: DiscountValueTypeEnum;
  /** Value of the discount. Can store fixed value or percent value. */
  value: Scalars['PositiveDecimal'];
  /** Explanation for the applied discount. */
  reason: Maybe<Scalars['String']>;
  /** Returns amount of discount. */
  amount: Maybe<Money>;
  /** Type of the discount: fixed or percent. */
  oldValueType: Maybe<DiscountValueTypeEnum>;
  /** Value of the discount. Can store fixed value or percent value. */
  oldValue: Maybe<Scalars['PositiveDecimal']>;
  /** Returns amount of discount. */
  oldAmount: Maybe<Money>;
};

export type OrderEventOrderLineObject = {
  /** The variant quantity. */
  quantity: Maybe<Scalars['Int']>;
  /** The order line. */
  orderLine: Maybe<OrderLine>;
  /** The variant name. */
  itemName: Maybe<Scalars['String']>;
  /** The discount applied to the order line. */
  discount: Maybe<OrderEventDiscountObject>;
};

/** An enumeration. */
export type OrderEventsEmailsEnum =
  | 'PAYMENT_CONFIRMATION'
  | 'CONFIRMED'
  | 'SHIPPING_CONFIRMATION'
  | 'TRACKING_UPDATED'
  | 'ORDER_CONFIRMATION'
  | 'ORDER_CANCEL'
  | 'ORDER_REFUND'
  | 'FULFILLMENT_CONFIRMATION'
  | 'DIGITAL_LINKS';

/** The different order event types.  */
export type OrderEventsEnum =
  | 'DRAFT_CREATED'
  | 'DRAFT_CREATED_FROM_REPLACE'
  | 'ADDED_PRODUCTS'
  | 'REMOVED_PRODUCTS'
  | 'PLACED'
  | 'PLACED_FROM_DRAFT'
  | 'OVERSOLD_ITEMS'
  | 'CANCELED'
  | 'EXPIRED'
  | 'ORDER_MARKED_AS_PAID'
  | 'ORDER_FULLY_PAID'
  | 'ORDER_REPLACEMENT_CREATED'
  | 'ORDER_DISCOUNT_ADDED'
  | 'ORDER_DISCOUNT_AUTOMATICALLY_UPDATED'
  | 'ORDER_DISCOUNT_UPDATED'
  | 'ORDER_DISCOUNT_DELETED'
  | 'ORDER_LINE_DISCOUNT_UPDATED'
  | 'ORDER_LINE_DISCOUNT_REMOVED'
  | 'ORDER_LINE_PRODUCT_DELETED'
  | 'ORDER_LINE_VARIANT_DELETED'
  | 'UPDATED_ADDRESS'
  | 'EMAIL_SENT'
  | 'CONFIRMED'
  | 'PAYMENT_AUTHORIZED'
  | 'PAYMENT_CAPTURED'
  | 'EXTERNAL_SERVICE_NOTIFICATION'
  | 'PAYMENT_REFUNDED'
  | 'PAYMENT_VOIDED'
  | 'PAYMENT_FAILED'
  | 'TRANSACTION_EVENT'
  | 'TRANSACTION_CHARGE_REQUESTED'
  /** This field will be removed in Saleor 3.14 (Preview Feature). Use `TRANSACTION_CHARGE_REQUESTED` instead. */
  | 'TRANSACTION_CAPTURE_REQUESTED'
  | 'TRANSACTION_REFUND_REQUESTED'
  /** This field will be removed in Saleor 3.14 (Preview Feature). Use `TRANSACTION_CANCEL_REQUESTED` instead. */
  | 'TRANSACTION_VOID_REQUESTED'
  | 'TRANSACTION_CANCEL_REQUESTED'
  | 'TRANSACTION_MARK_AS_PAID_FAILED'
  | 'INVOICE_REQUESTED'
  | 'INVOICE_GENERATED'
  | 'INVOICE_UPDATED'
  | 'INVOICE_SENT'
  | 'FULFILLMENT_CANCELED'
  | 'FULFILLMENT_RESTOCKED_ITEMS'
  | 'FULFILLMENT_FULFILLED_ITEMS'
  | 'FULFILLMENT_REFUNDED'
  | 'FULFILLMENT_RETURNED'
  | 'FULFILLMENT_REPLACED'
  | 'FULFILLMENT_AWAITS_APPROVAL'
  | 'TRACKING_UPDATED'
  | 'NOTE_ADDED'
  | 'OTHER';

/**
 * Event sent when order becomes expired.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderExpired = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The order the event relates to. */
  order: Maybe<Order>;
};

export type OrderFilterInput = {
  paymentStatus?: Maybe<Array<PaymentChargeStatusEnum>>;
  status?: Maybe<Array<OrderStatusFilter>>;
  customer?: Maybe<Scalars['String']>;
  created?: Maybe<DateRangeInput>;
  search?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataFilter>>;
  channels?: Maybe<Array<Scalars['ID']>>;
  authorizeStatus?: Maybe<Array<OrderAuthorizeStatusEnum>>;
  chargeStatus?: Maybe<Array<OrderChargeStatusEnum>>;
  updatedAt?: Maybe<DateTimeRangeInput>;
  isClickAndCollect?: Maybe<Scalars['Boolean']>;
  isPreorder?: Maybe<Scalars['Boolean']>;
  ids?: Maybe<Array<Scalars['ID']>>;
  giftCardUsed?: Maybe<Scalars['Boolean']>;
  giftCardBought?: Maybe<Scalars['Boolean']>;
  numbers?: Maybe<Array<Scalars['String']>>;
  checkoutIds?: Maybe<Array<Scalars['ID']>>;
};

/**
 * Filter shipping methods for order.
 *
 * Added in Saleor 3.6.
 */
export type OrderFilterShippingMethods = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The order the event relates to. */
  order: Maybe<Order>;
  /**
   * Shipping methods that can be used with this checkout.
   *
   * Added in Saleor 3.6.
   */
  shippingMethods: Maybe<Array<ShippingMethod>>;
};

/**
 * Creates new fulfillments for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderFulfill = {
  /** List of created fulfillments. */
  fulfillments: Maybe<Array<Fulfillment>>;
  /** Fulfilled order. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

export type OrderFulfillInput = {
  /** List of items informing how to fulfill the order. */
  lines: Array<OrderFulfillLineInput>;
  /** If true, send an email notification to the customer. */
  notifyCustomer?: Maybe<Scalars['Boolean']>;
  /** If true, then allow proceed fulfillment when stock is exceeded. */
  allowStockToBeExceeded?: Maybe<Scalars['Boolean']>;
  /**
   * Fulfillment tracking number.
   *
   * Added in Saleor 3.6.
   */
  trackingNumber?: Maybe<Scalars['String']>;
};

export type OrderFulfillLineInput = {
  /** The ID of the order line. */
  orderLineId?: Maybe<Scalars['ID']>;
  /** List of stock items to create. */
  stocks: Array<OrderFulfillStockInput>;
};

export type OrderFulfillStockInput = {
  /** The number of line items to be fulfilled from given warehouse. */
  quantity: Scalars['Int'];
  /** ID of the warehouse from which the item will be fulfilled. */
  warehouse: Scalars['ID'];
};

/**
 * Event sent when order is fulfilled.
 *
 * Added in Saleor 3.2.
 */
export type OrderFulfilled = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The order the event relates to. */
  order: Maybe<Order>;
};

/**
 * Event sent when order is fully paid.
 *
 * Added in Saleor 3.2.
 */
export type OrderFullyPaid = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The order the event relates to. */
  order: Maybe<Order>;
};

/**
 * The order is fully refunded.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderFullyRefunded = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The order the event relates to. */
  order: Maybe<Order>;
};

/**
 * Adds granted refund to the order.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderGrantRefundCreate = {
  /** Order which has assigned new grant refund. */
  order: Maybe<Order>;
  /** Created granted refund. */
  grantedRefund: Maybe<OrderGrantedRefund>;
  errors: Array<OrderGrantRefundCreateError>;
};

export type OrderGrantRefundCreateError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: OrderGrantRefundCreateErrorCode;
};

/** An enumeration. */
export type OrderGrantRefundCreateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'NOT_FOUND';

export type OrderGrantRefundCreateInput = {
  /** Amount of the granted refund. */
  amount: Scalars['Decimal'];
  /** Reason of the granted refund. */
  reason?: Maybe<Scalars['String']>;
};

/**
 * Updates granted refund.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderGrantRefundUpdate = {
  /** Order which has assigned updated grant refund. */
  order: Maybe<Order>;
  /** Created granted refund. */
  grantedRefund: Maybe<OrderGrantedRefund>;
  errors: Array<OrderGrantRefundUpdateError>;
  orderGrantedRefund: Maybe<OrderGrantedRefund>;
};

export type OrderGrantRefundUpdateError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: OrderGrantRefundUpdateErrorCode;
};

/** An enumeration. */
export type OrderGrantRefundUpdateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'NOT_FOUND'
  | 'REQUIRED';

export type OrderGrantRefundUpdateInput = {
  /** Amount of the granted refund. */
  amount?: Maybe<Scalars['Decimal']>;
  /** Reason of the granted refund. */
  reason?: Maybe<Scalars['String']>;
};

/**
 * The details of granted refund.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderGrantedRefund = {
  id: Scalars['ID'];
  /** Time of creation. */
  createdAt: Scalars['DateTime'];
  /** Time of last update. */
  updatedAt: Scalars['DateTime'];
  /** Refund amount. */
  amount: Money;
  /** Reason of the refund. */
  reason: Maybe<Scalars['String']>;
  /** User who performed the action. Requires of of the following permissions: MANAGE_USERS, MANAGE_STAFF, OWNER. */
  user: Maybe<User>;
  /** App that performed the action. */
  app: Maybe<App>;
};

/** Represents order line of particular order. */
export type OrderLine = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /**
   * List of private metadata items. Requires staff permissions to access.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /**
   * List of public metadata items. Can be accessed without permissions.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.5.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  productName: Scalars['String'];
  variantName: Scalars['String'];
  productSku: Maybe<Scalars['String']>;
  productVariantId: Maybe<Scalars['String']>;
  isShippingRequired: Scalars['Boolean'];
  quantity: Scalars['Int'];
  quantityFulfilled: Scalars['Int'];
  unitDiscountReason: Maybe<Scalars['String']>;
  taxRate: Scalars['Float'];
  digitalContentUrl: Maybe<DigitalContentUrl>;
  thumbnail: Maybe<Image>;
  /** Price of the single item in the order line. */
  unitPrice: TaxedMoney;
  /** Price of the single item in the order line without applied an order line discount. */
  undiscountedUnitPrice: TaxedMoney;
  /** The discount applied to the single order line. */
  unitDiscount: Money;
  /** Value of the discount. Can store fixed value or percent value */
  unitDiscountValue: Scalars['PositiveDecimal'];
  /** Price of the order line. */
  totalPrice: TaxedMoney;
  /** A purchased product variant. Note: this field may be null if the variant has been removed from stock at all. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  variant: Maybe<ProductVariant>;
  /** Product name in the customer's language */
  translatedProductName: Scalars['String'];
  /** Variant name in the customer's language */
  translatedVariantName: Scalars['String'];
  /**
   * List of allocations across warehouses.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  allocations: Maybe<Array<Allocation>>;
  /**
   * A quantity of items remaining to be fulfilled.
   *
   * Added in Saleor 3.1.
   */
  quantityToFulfill: Scalars['Int'];
  /** Type of the discount: fixed or percent */
  unitDiscountType: Maybe<DiscountValueTypeEnum>;
  /**
   * Denormalized tax class of the product in this order line.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxClass: Maybe<TaxClass>;
  /**
   * Denormalized name of the tax class.
   *
   * Added in Saleor 3.9.
   */
  taxClassName: Maybe<Scalars['String']>;
  /**
   * Denormalized public metadata of the tax class.
   *
   * Added in Saleor 3.9.
   */
  taxClassMetadata: Array<MetadataItem>;
  /**
   * Denormalized private metadata of the tax class. Requires staff permissions to access.
   *
   * Added in Saleor 3.9.
   */
  taxClassPrivateMetadata: Array<MetadataItem>;
};


/** Represents order line of particular order. */
export type OrderLinePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents order line of particular order. */
export type OrderLinePrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents order line of particular order. */
export type OrderLineMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents order line of particular order. */
export type OrderLineMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents order line of particular order. */
export type OrderLineThumbnailArgs = {
  size?: Maybe<Scalars['Int']>;
  format?: Maybe<ThumbnailFormatEnum>;
};

export type OrderLineCreateInput = {
  /** Number of variant items ordered. */
  quantity: Scalars['Int'];
  /** Product variant ID. */
  variantId: Scalars['ID'];
  /**
   * Flag that allow force splitting the same variant into multiple lines by skipping the matching logic.
   *
   * Added in Saleor 3.6.
   */
  forceNewLine?: Maybe<Scalars['Boolean']>;
};

/**
 * Deletes an order line from an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineDelete = {
  /** A related order. */
  order: Maybe<Order>;
  /** An order line that was deleted. */
  orderLine: Maybe<OrderLine>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

/**
 * Remove discount applied to the order line.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineDiscountRemove = {
  /** Order line which has removed discount. */
  orderLine: Maybe<OrderLine>;
  /** Order which is related to line which has removed discount. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

/**
 * Update discount for the order line.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineDiscountUpdate = {
  /** Order line which has been discounted. */
  orderLine: Maybe<OrderLine>;
  /** Order which is related to the discounted line. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

export type OrderLineInput = {
  /** Number of variant items ordered. */
  quantity: Scalars['Int'];
};

/**
 * Updates an order line of an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineUpdate = {
  /** Related order. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
  orderLine: Maybe<OrderLine>;
};

/**
 * Create order lines for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLinesCreate = {
  /** Related order. */
  order: Maybe<Order>;
  /** List of added order lines. */
  orderLines: Maybe<Array<OrderLine>>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

/**
 * Mark order as manually paid.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderMarkAsPaid = {
  /** Order marked as paid. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

/**
 * Event sent when order metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type OrderMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The order the event relates to. */
  order: Maybe<Order>;
};

export type OrderOrCheckout = Checkout | Order;

/** An enumeration. */
export type OrderOriginEnum =
  | 'CHECKOUT'
  | 'DRAFT'
  | 'REISSUE';

/**
 * Payment has been made. The order may be partially or fully paid.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderPaid = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The order the event relates to. */
  order: Maybe<Order>;
};

/**
 * Refund an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderRefund = {
  /** A refunded order. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

export type OrderRefundFulfillmentLineInput = {
  /** The ID of the fulfillment line to refund. */
  fulfillmentLineId: Scalars['ID'];
  /** The number of items to be refunded. */
  quantity: Scalars['Int'];
};

export type OrderRefundLineInput = {
  /** The ID of the order line to refund. */
  orderLineId: Scalars['ID'];
  /** The number of items to be refunded. */
  quantity: Scalars['Int'];
};

export type OrderRefundProductsInput = {
  /** List of unfulfilled lines to refund. */
  orderLines?: Maybe<Array<OrderRefundLineInput>>;
  /** List of fulfilled lines to refund. */
  fulfillmentLines?: Maybe<Array<OrderRefundFulfillmentLineInput>>;
  /** The total amount of refund when the value is provided manually. */
  amountToRefund?: Maybe<Scalars['PositiveDecimal']>;
  /** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
  includeShippingCosts?: Maybe<Scalars['Boolean']>;
};

/**
 * The order received a refund. The order may be partially or fully refunded.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderRefunded = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The order the event relates to. */
  order: Maybe<Order>;
};

export type OrderReturnFulfillmentLineInput = {
  /** The ID of the fulfillment line to return. */
  fulfillmentLineId: Scalars['ID'];
  /** The number of items to be returned. */
  quantity: Scalars['Int'];
  /** Determines, if the line should be added to replace order. */
  replace?: Maybe<Scalars['Boolean']>;
};

export type OrderReturnLineInput = {
  /** The ID of the order line to return. */
  orderLineId: Scalars['ID'];
  /** The number of items to be returned. */
  quantity: Scalars['Int'];
  /** Determines, if the line should be added to replace order. */
  replace?: Maybe<Scalars['Boolean']>;
};

export type OrderReturnProductsInput = {
  /** List of unfulfilled lines to return. */
  orderLines?: Maybe<Array<OrderReturnLineInput>>;
  /** List of fulfilled lines to return. */
  fulfillmentLines?: Maybe<Array<OrderReturnFulfillmentLineInput>>;
  /** The total amount of refund when the value is provided manually. */
  amountToRefund?: Maybe<Scalars['PositiveDecimal']>;
  /** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
  includeShippingCosts?: Maybe<Scalars['Boolean']>;
  /** If true, Saleor will call refund action for all lines. */
  refund?: Maybe<Scalars['Boolean']>;
};

/** Represents the channel-specific order settings. */
export type OrderSettings = {
  /** When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. */
  automaticallyConfirmAllNewOrders: Scalars['Boolean'];
  /** When enabled, all non-shippable gift card orders will be fulfilled automatically. */
  automaticallyFulfillNonShippableGiftCard: Scalars['Boolean'];
  /**
   * Expiration time in minutes. Default null - means do not expire any orders.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  expireOrdersAfter: Maybe<Scalars['Minute']>;
  /**
   * Determine what strategy will be used to mark the order as paid. Based on the chosen option, the proper object will be created and attached to the order when it's manually marked as paid.
   * `PAYMENT_FLOW` - [default option] creates the `Payment` object.
   * `TRANSACTION_FLOW` - creates the `TransactionItem` object.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  markAsPaidStrategy: MarkAsPaidStrategyEnum;
  /**
   * Determine the transaction flow strategy to be used. Include the selected option in the payload sent to the payment app, as a requested action for the transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  defaultTransactionFlowStrategy: TransactionFlowStrategyEnum;
};

export type OrderSettingsError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: OrderSettingsErrorCode;
};

/** An enumeration. */
export type OrderSettingsErrorCode =
  | 'INVALID';

export type OrderSettingsInput = {
  /** When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. By default set to True */
  automaticallyConfirmAllNewOrders?: Maybe<Scalars['Boolean']>;
  /** When enabled, all non-shippable gift card orders will be fulfilled automatically. By defualt set to True. */
  automaticallyFulfillNonShippableGiftCard?: Maybe<Scalars['Boolean']>;
  /**
   * Expiration time in minutes. Default null - means do not expire any orders. Enter 0 or null to disable.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  expireOrdersAfter?: Maybe<Scalars['Minute']>;
  /**
   * Determine what strategy will be used to mark the order as paid. Based on the chosen option, the proper object will be created and attached to the order when it's manually marked as paid.
   * `PAYMENT_FLOW` - [default option] creates the `Payment` object.
   * `TRANSACTION_FLOW` - creates the `TransactionItem` object.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  markAsPaidStrategy?: Maybe<MarkAsPaidStrategyEnum>;
  /**
   * Determine the transaction flow strategy to be used. Include the selected option in the payload sent to the payment app, as a requested action for the transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  defaultTransactionFlowStrategy?: Maybe<TransactionFlowStrategyEnum>;
};

/**
 * Update shop order settings across all channels. Returns `orderSettings` for the first `channel` in alphabetical order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderSettingsUpdate = {
  /** Order settings. */
  orderSettings: Maybe<OrderSettings>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderSettingsErrors: Array<OrderSettingsError>;
  errors: Array<OrderSettingsError>;
};

export type OrderSettingsUpdateInput = {
  /** When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. By default set to True */
  automaticallyConfirmAllNewOrders?: Maybe<Scalars['Boolean']>;
  /** When enabled, all non-shippable gift card orders will be fulfilled automatically. By defualt set to True. */
  automaticallyFulfillNonShippableGiftCard?: Maybe<Scalars['Boolean']>;
};

export type OrderSortField =
  /** Sort orders by number. */
  | 'NUMBER'
  /** Sort orders by rank. Note: This option is available only with the `search` filter. */
  | 'RANK'
  /**
   * Sort orders by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | 'CREATION_DATE'
  /**
   * Sort orders by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | 'CREATED_AT'
  /** Sort orders by last modified at. */
  | 'LAST_MODIFIED_AT'
  /** Sort orders by customer. */
  | 'CUSTOMER'
  /** Sort orders by payment. */
  | 'PAYMENT'
  /** Sort orders by fulfillment status. */
  | 'FULFILLMENT_STATUS';

export type OrderSortingInput = {
  /** Specifies the direction in which to sort orders. */
  direction: OrderDirection;
  /** Sort orders by the selected field. */
  field: OrderSortField;
};

/** An enumeration. */
export type OrderStatus =
  | 'DRAFT'
  | 'UNCONFIRMED'
  | 'UNFULFILLED'
  | 'PARTIALLY_FULFILLED'
  | 'PARTIALLY_RETURNED'
  | 'RETURNED'
  | 'FULFILLED'
  | 'CANCELED'
  | 'EXPIRED';

export type OrderStatusFilter =
  | 'READY_TO_FULFILL'
  | 'READY_TO_CAPTURE'
  | 'UNFULFILLED'
  | 'UNCONFIRMED'
  | 'PARTIALLY_FULFILLED'
  | 'FULFILLED'
  | 'CANCELED';

/**
 * Updates an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
  order: Maybe<Order>;
};

export type OrderUpdateInput = {
  /** Billing address of the customer. */
  billingAddress?: Maybe<AddressInput>;
  /** Email address of the customer. */
  userEmail?: Maybe<Scalars['String']>;
  /** Shipping address of the customer. */
  shippingAddress?: Maybe<AddressInput>;
  /**
   * External ID of this order.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']>;
};

/**
 * Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderUpdateShipping = {
  /** Order with updated shipping method. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

export type OrderUpdateShippingInput = {
  /** ID of the selected shipping method, pass null to remove currently assigned shipping method. */
  shippingMethod?: Maybe<Scalars['ID']>;
};

/**
 * Event sent when order is updated.
 *
 * Added in Saleor 3.2.
 */
export type OrderUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The order the event relates to. */
  order: Maybe<Order>;
};

/**
 * Void an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderVoid = {
  /** A voided order. */
  order: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  errors: Array<OrderError>;
};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type Page = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  title: Scalars['String'];
  /**
   * Content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  publicationDate: Maybe<Scalars['Date']>;
  /**
   * The page publication date.
   *
   * Added in Saleor 3.3.
   */
  publishedAt: Maybe<Scalars['DateTime']>;
  isPublished: Scalars['Boolean'];
  slug: Scalars['String'];
  pageType: PageType;
  created: Scalars['DateTime'];
  /**
   * Content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson: Scalars['JSONString'];
  /** Returns translated page fields for the given language code. */
  translation: Maybe<PageTranslation>;
  /** List of attributes assigned to this product. */
  attributes: Array<SelectedAttribute>;
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PagePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PagePrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageMetafieldArgs = {
  key: Scalars['String'];
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Assign attributes to a given page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageAttributeAssign = {
  /** The updated page type. */
  pageType: Maybe<PageType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  errors: Array<PageError>;
};

/**
 * Unassign attributes from a given page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageAttributeUnassign = {
  /** The updated page type. */
  pageType: Maybe<PageType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  errors: Array<PageError>;
};

/**
 * Deletes pages.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  errors: Array<PageError>;
};

/**
 * Publish pages.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageBulkPublish = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  errors: Array<PageError>;
};

export type PageCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<PageCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type PageCountableEdge = {
  /** The item at the end of the edge. */
  node: Page;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Creates a new page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  errors: Array<PageError>;
  page: Maybe<Page>;
};

export type PageCreateInput = {
  /** Page internal name. */
  slug?: Maybe<Scalars['String']>;
  /** Page title. */
  title?: Maybe<Scalars['String']>;
  /**
   * Page content.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: Maybe<Scalars['JSONString']>;
  /** List of attributes. */
  attributes?: Maybe<Array<AttributeValueInput>>;
  /** Determines if page is visible in the storefront. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: Maybe<Scalars['String']>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /** ID of the page type that page belongs to. */
  pageType: Scalars['ID'];
};

/**
 * Event sent when new page is created.
 *
 * Added in Saleor 3.2.
 */
export type PageCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The page the event relates to. */
  page: Maybe<Page>;
};

/**
 * Deletes a page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  errors: Array<PageError>;
  page: Maybe<Page>;
};

/**
 * Event sent when page is deleted.
 *
 * Added in Saleor 3.2.
 */
export type PageDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The page the event relates to. */
  page: Maybe<Page>;
};

export type PageError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: PageErrorCode;
  /** List of attributes IDs which causes the error. */
  attributes: Maybe<Array<Scalars['ID']>>;
  /** List of attribute values IDs which causes the error. */
  values: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export type PageErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'DUPLICATED_INPUT_ITEM'
  | 'ATTRIBUTE_ALREADY_ASSIGNED';

export type PageFilterInput = {
  search?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataFilter>>;
  pageTypes?: Maybe<Array<Scalars['ID']>>;
  ids?: Maybe<Array<Scalars['ID']>>;
  slugs?: Maybe<Array<Scalars['String']>>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']>;
};

export type PageInput = {
  /** Page internal name. */
  slug?: Maybe<Scalars['String']>;
  /** Page title. */
  title?: Maybe<Scalars['String']>;
  /**
   * Page content.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: Maybe<Scalars['JSONString']>;
  /** List of attributes. */
  attributes?: Maybe<Array<AttributeValueInput>>;
  /** Determines if page is visible in the storefront. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: Maybe<Scalars['String']>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
};

/**
 * Reorder page attribute values.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageReorderAttributeValues = {
  /** Page from which attribute values are reordered. */
  page: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  errors: Array<PageError>;
};

export type PageSortField =
  /** Sort pages by title. */
  | 'TITLE'
  /** Sort pages by slug. */
  | 'SLUG'
  /** Sort pages by visibility. */
  | 'VISIBILITY'
  /**
   * Sort pages by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | 'CREATION_DATE'
  /**
   * Sort pages by publication date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | 'PUBLICATION_DATE'
  /**
   * Sort pages by publication date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | 'PUBLISHED_AT'
  /**
   * Sort pages by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | 'CREATED_AT';

export type PageSortingInput = {
  /** Specifies the direction in which to sort pages. */
  direction: OrderDirection;
  /** Sort pages by the selected field. */
  field: PageSortField;
};

export type PageTranslatableContent = Node & {
  id: Scalars['ID'];
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  title: Scalars['String'];
  /**
   * Content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content: Maybe<Scalars['JSONString']>;
  /**
   * Content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson: Maybe<Scalars['JSONString']>;
  /** Returns translated page fields for the given language code. */
  translation: Maybe<PageTranslation>;
  /**
   * A static page that can be manually added by a shop operator through the dashboard.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  page: Maybe<Page>;
  /** List of page content attribute values that can be translated. */
  attributeValues: Array<AttributeValueTranslatableContent>;
};


export type PageTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a page.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type PageTranslate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
  errors: Array<TranslationError>;
  page: Maybe<PageTranslatableContent>;
};

export type PageTranslation = Node & {
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  /**
   * Translated content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content: Maybe<Scalars['JSONString']>;
  /**
   * Translated description of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson: Maybe<Scalars['JSONString']>;
};

export type PageTranslationInput = {
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /**
   * Translated page content.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: Maybe<Scalars['JSONString']>;
};

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageType = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  /** Page attributes of that page type. */
  attributes: Maybe<Array<Attribute>>;
  /**
   * Attributes that can be assigned to the page type.
   *
   * Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  availableAttributes: Maybe<AttributeCountableConnection>;
  /**
   * Whether page type has pages assigned.
   *
   * Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  hasPages: Maybe<Scalars['Boolean']>;
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypePrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeAvailableAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>;
  where?: Maybe<AttributeWhereInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/**
 * Delete page types.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  errors: Array<PageError>;
};

export type PageTypeCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<PageTypeCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type PageTypeCountableEdge = {
  /** The item at the end of the edge. */
  node: PageType;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Create a new page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  errors: Array<PageError>;
  pageType: Maybe<PageType>;
};

export type PageTypeCreateInput = {
  /** Name of the page type. */
  name?: Maybe<Scalars['String']>;
  /** Page type slug. */
  slug?: Maybe<Scalars['String']>;
  /** List of attribute IDs to be assigned to the page type. */
  addAttributes?: Maybe<Array<Scalars['ID']>>;
};

/**
 * Event sent when new page type is created.
 *
 * Added in Saleor 3.5.
 */
export type PageTypeCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The page type the event relates to. */
  pageType: Maybe<PageType>;
};

/**
 * Delete a page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  errors: Array<PageError>;
  pageType: Maybe<PageType>;
};

/**
 * Event sent when page type is deleted.
 *
 * Added in Saleor 3.5.
 */
export type PageTypeDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The page type the event relates to. */
  pageType: Maybe<PageType>;
};

export type PageTypeFilterInput = {
  search?: Maybe<Scalars['String']>;
  slugs?: Maybe<Array<Scalars['String']>>;
};

/**
 * Reorder the attributes of a page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeReorderAttributes = {
  /** Page type from which attributes are reordered. */
  pageType: Maybe<PageType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  errors: Array<PageError>;
};

export type PageTypeSortField =
  /** Sort page types by name. */
  | 'NAME'
  /** Sort page types by slug. */
  | 'SLUG';

export type PageTypeSortingInput = {
  /** Specifies the direction in which to sort page types. */
  direction: OrderDirection;
  /** Sort page types by the selected field. */
  field: PageTypeSortField;
};

/**
 * Update page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  errors: Array<PageError>;
  pageType: Maybe<PageType>;
};

export type PageTypeUpdateInput = {
  /** Name of the page type. */
  name?: Maybe<Scalars['String']>;
  /** Page type slug. */
  slug?: Maybe<Scalars['String']>;
  /** List of attribute IDs to be assigned to the page type. */
  addAttributes?: Maybe<Array<Scalars['ID']>>;
  /** List of attribute IDs to be assigned to the page type. */
  removeAttributes?: Maybe<Array<Scalars['ID']>>;
};

/**
 * Event sent when page type is updated.
 *
 * Added in Saleor 3.5.
 */
export type PageTypeUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The page type the event relates to. */
  pageType: Maybe<PageType>;
};

/**
 * Updates an existing page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  errors: Array<PageError>;
  page: Maybe<Page>;
};

/**
 * Event sent when page is updated.
 *
 * Added in Saleor 3.2.
 */
export type PageUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The page the event relates to. */
  page: Maybe<Page>;
};

/**
 * Change the password of the logged in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type PasswordChange = {
  /** A user instance with a new password. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/** Represents a payment of a given type. */
export type Payment = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  gateway: Scalars['String'];
  isActive: Scalars['Boolean'];
  created: Scalars['DateTime'];
  modified: Scalars['DateTime'];
  token: Scalars['String'];
  checkout: Maybe<Checkout>;
  order: Maybe<Order>;
  paymentMethodType: Scalars['String'];
  /**
   * IP address of the user who created the payment.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  customerIpAddress: Maybe<Scalars['String']>;
  /** Internal payment status. */
  chargeStatus: PaymentChargeStatusEnum;
  /**
   * List of actions that can be performed in the current state of a payment.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  actions: Array<OrderAction>;
  /** Total amount of the payment. */
  total: Maybe<Money>;
  /** Total amount captured for this payment. */
  capturedAmount: Maybe<Money>;
  /**
   * List of all transactions within this payment.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  transactions: Maybe<Array<Transaction>>;
  /**
   * Maximum amount of money that can be captured.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  availableCaptureAmount: Maybe<Money>;
  /**
   * Maximum amount of money that can be refunded.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  availableRefundAmount: Maybe<Money>;
  /** The details of the card used for this payment. */
  creditCard: Maybe<CreditCard>;
};


/** Represents a payment of a given type. */
export type PaymentPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a payment of a given type. */
export type PaymentPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents a payment of a given type. */
export type PaymentMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a payment of a given type. */
export type PaymentMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};

/**
 * Authorize payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentAuthorize = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** Look up a payment. */
  payment: Maybe<Payment>;
};

/**
 * Captures the authorized payment amount.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type PaymentCapture = {
  /** Updated payment. */
  payment: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
  errors: Array<PaymentError>;
};

/**
 * Capture payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentCaptureEvent = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** Look up a payment. */
  payment: Maybe<Payment>;
};

/** An enumeration. */
export type PaymentChargeStatusEnum =
  | 'NOT_CHARGED'
  | 'PENDING'
  | 'PARTIALLY_CHARGED'
  | 'FULLY_CHARGED'
  | 'PARTIALLY_REFUNDED'
  | 'FULLY_REFUNDED'
  | 'REFUSED'
  | 'CANCELLED';

/** Check payment balance. */
export type PaymentCheckBalance = {
  /** Response from the gateway. */
  data: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
  errors: Array<PaymentError>;
};

export type PaymentCheckBalanceInput = {
  /** An ID of a payment gateway to check. */
  gatewayId: Scalars['String'];
  /** Payment method name. */
  method: Scalars['String'];
  /** Slug of a channel for which the data should be returned. */
  channel: Scalars['String'];
  /** Information about card. */
  card: CardInput;
};

/**
 * Confirm payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentConfirmEvent = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** Look up a payment. */
  payment: Maybe<Payment>;
};

export type PaymentCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<PaymentCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type PaymentCountableEdge = {
  /** The item at the end of the edge. */
  node: Payment;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type PaymentError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: PaymentErrorCode;
  /** List of variant IDs which causes the error. */
  variants: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export type PaymentErrorCode =
  | 'BILLING_ADDRESS_NOT_SET'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'PARTIAL_PAYMENT_NOT_ALLOWED'
  | 'SHIPPING_ADDRESS_NOT_SET'
  | 'INVALID_SHIPPING_METHOD'
  | 'SHIPPING_METHOD_NOT_SET'
  | 'PAYMENT_ERROR'
  | 'NOT_SUPPORTED_GATEWAY'
  | 'CHANNEL_INACTIVE'
  | 'BALANCE_CHECK_ERROR'
  | 'CHECKOUT_EMAIL_NOT_SET'
  | 'UNAVAILABLE_VARIANT_IN_CHANNEL'
  | 'NO_CHECKOUT_LINES';

export type PaymentFilterInput = {
  /**
   * Filter by ids.
   *
   * Added in Saleor 3.8.
   */
  ids?: Maybe<Array<Scalars['ID']>>;
  checkouts?: Maybe<Array<Scalars['ID']>>;
};

/** Available payment gateway backend with configuration necessary to setup client. */
export type PaymentGateway = {
  /** Payment gateway name. */
  name: Scalars['String'];
  /** Payment gateway ID. */
  id: Scalars['ID'];
  /** Payment gateway client configuration. */
  config: Array<GatewayConfigLine>;
  /** Payment gateway supported currencies. */
  currencies: Array<Scalars['String']>;
};

export type PaymentGatewayConfig = {
  /** The app identifier. */
  id: Scalars['String'];
  /** The JSON data required to initialize the payment gateway. */
  data: Maybe<Scalars['JSON']>;
  errors: Maybe<Array<PaymentGatewayConfigError>>;
};

export type PaymentGatewayConfigError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: PaymentGatewayConfigErrorCode;
};

/** An enumeration. */
export type PaymentGatewayConfigErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

/**
 * Initializes a payment gateway session. It triggers the webhook `PAYMENT_GATEWAY_INITIALIZE_SESSION`, to the requested `paymentGateways`. If `paymentGateways` is not provided, the webhook will be send to all subscribed payment gateways.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PaymentGatewayInitialize = {
  gatewayConfigs: Maybe<Array<PaymentGatewayConfig>>;
  errors: Array<PaymentGatewayInitializeError>;
};

export type PaymentGatewayInitializeError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: PaymentGatewayInitializeErrorCode;
};

/** An enumeration. */
export type PaymentGatewayInitializeErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

/**
 * Event sent when user wants to initialize the payment gateway.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PaymentGatewayInitializeSession = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** Checkout or order */
  sourceObject: OrderOrCheckout;
  /** Payment gateway data in JSON format, recieved from storefront. */
  data: Maybe<Scalars['JSON']>;
  /** Amount requested for initializing the payment gateway. */
  amount: Maybe<Scalars['PositiveDecimal']>;
};

export type PaymentGatewayToInitialize = {
  /** The identifier of the payment gateway app to initialize. */
  id: Scalars['String'];
  /** The data that will be passed to the payment gateway. */
  data?: Maybe<Scalars['JSON']>;
};

/** Initializes payment process when it is required by gateway. */
export type PaymentInitialize = {
  initializedPayment: Maybe<PaymentInitialized>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
  errors: Array<PaymentError>;
};

/** Server-side data generated by a payment gateway. Optional step when the payment provider requires an additional action to initialize payment session. */
export type PaymentInitialized = {
  /** ID of a payment gateway. */
  gateway: Scalars['String'];
  /** Payment gateway name. */
  name: Scalars['String'];
  /** Initialized data by gateway. */
  data: Maybe<Scalars['JSONString']>;
};

export type PaymentInput = {
  /** A gateway to use with that payment. */
  gateway: Scalars['String'];
  /** Client-side generated payment token, representing customer's billing data in a secure manner. */
  token?: Maybe<Scalars['String']>;
  /** Total amount of the transaction, including all taxes and discounts. If no amount is provided, the checkout total will be used. */
  amount?: Maybe<Scalars['PositiveDecimal']>;
  /** URL of a storefront view where user should be redirected after requiring additional actions. Payment with additional actions will not be finished if this field is not provided. */
  returnUrl?: Maybe<Scalars['String']>;
  /**
   * Payment store type.
   *
   * Added in Saleor 3.1.
   */
  storePaymentMethod?: Maybe<StorePaymentMethodEnum>;
  /**
   * User public metadata.
   *
   * Added in Saleor 3.1.
   */
  metadata?: Maybe<Array<MetadataInput>>;
};

/**
 * List payment gateways.
 *
 * Added in Saleor 3.6.
 */
export type PaymentListGateways = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The checkout the event relates to. */
  checkout: Maybe<Checkout>;
};

/**
 * Process payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentProcessEvent = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** Look up a payment. */
  payment: Maybe<Payment>;
};

/**
 * Refunds the captured payment amount.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type PaymentRefund = {
  /** Updated payment. */
  payment: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
  errors: Array<PaymentError>;
};

/**
 * Refund payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentRefundEvent = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** Look up a payment. */
  payment: Maybe<Payment>;
};

/** Represents a payment source stored for user in payment gateway, such as credit card. */
export type PaymentSource = {
  /** Payment gateway name. */
  gateway: Scalars['String'];
  /** ID of stored payment method. */
  paymentMethodId: Maybe<Scalars['String']>;
  /** Stored credit card details if available. */
  creditCardInfo: Maybe<CreditCard>;
  /**
   * List of public metadata items.
   *
   * Added in Saleor 3.1.
   *
   * Can be accessed without permissions.
   */
  metadata: Array<MetadataItem>;
};

/**
 * Voids the authorized payment.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type PaymentVoid = {
  /** Updated payment. */
  payment: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
  errors: Array<PaymentError>;
};

/**
 * Void payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentVoidEvent = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** Look up a payment. */
  payment: Maybe<Payment>;
};

/** Represents a permission object in a friendly form. */
export type Permission = {
  /** Internal code for permission. */
  code: PermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  name: Scalars['String'];
};

/** An enumeration. */
export type PermissionEnum =
  | 'MANAGE_USERS'
  | 'MANAGE_STAFF'
  | 'IMPERSONATE_USER'
  | 'MANAGE_APPS'
  | 'MANAGE_OBSERVABILITY'
  | 'MANAGE_CHECKOUTS'
  | 'HANDLE_CHECKOUTS'
  | 'HANDLE_TAXES'
  | 'MANAGE_TAXES'
  | 'MANAGE_CHANNELS'
  | 'MANAGE_DISCOUNTS'
  | 'MANAGE_GIFT_CARD'
  | 'MANAGE_MENUS'
  | 'MANAGE_ORDERS'
  | 'MANAGE_PAGES'
  | 'MANAGE_PAGE_TYPES_AND_ATTRIBUTES'
  | 'HANDLE_PAYMENTS'
  | 'MANAGE_PLUGINS'
  | 'MANAGE_PRODUCTS'
  | 'MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES'
  | 'MANAGE_SHIPPING'
  | 'MANAGE_SETTINGS'
  | 'MANAGE_TRANSLATIONS';

/**
 * Create new permission group. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type PermissionGroupCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>;
  errors: Array<PermissionGroupError>;
  group: Maybe<Group>;
};

export type PermissionGroupCreateInput = {
  /** List of permission code names to assign to this group. */
  addPermissions?: Maybe<Array<PermissionEnum>>;
  /** List of users to assign to this group. */
  addUsers?: Maybe<Array<Scalars['ID']>>;
  /**
   * List of channels to assign to this group.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  addChannels?: Maybe<Array<Scalars['ID']>>;
  /** Group name. */
  name: Scalars['String'];
  /**
   * Determine if the group has restricted access to channels.  DEFAULT: False
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  restrictedAccessToChannels?: Maybe<Scalars['Boolean']>;
};

/**
 * Event sent when new permission group is created.
 *
 * Added in Saleor 3.6.
 */
export type PermissionGroupCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The permission group the event relates to. */
  permissionGroup: Maybe<Group>;
};

/**
 * Delete permission group. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type PermissionGroupDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>;
  errors: Array<PermissionGroupError>;
  group: Maybe<Group>;
};

/**
 * Event sent when permission group is deleted.
 *
 * Added in Saleor 3.6.
 */
export type PermissionGroupDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The permission group the event relates to. */
  permissionGroup: Maybe<Group>;
};

export type PermissionGroupError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: PermissionGroupErrorCode;
  /** List of permissions which causes the error. */
  permissions: Maybe<Array<PermissionEnum>>;
  /** List of user IDs which causes the error. */
  users: Maybe<Array<Scalars['ID']>>;
  /** List of chnnels IDs which causes the error. */
  channels: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export type PermissionGroupErrorCode =
  | 'REQUIRED'
  | 'UNIQUE'
  | 'ASSIGN_NON_STAFF_MEMBER'
  | 'DUPLICATED_INPUT_ITEM'
  | 'CANNOT_REMOVE_FROM_LAST_GROUP'
  | 'LEFT_NOT_MANAGEABLE_PERMISSION'
  | 'OUT_OF_SCOPE_PERMISSION'
  | 'OUT_OF_SCOPE_USER'
  | 'OUT_OF_SCOPE_CHANNEL';

export type PermissionGroupFilterInput = {
  search?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Scalars['ID']>>;
};

/** Sorting options for permission groups. */
export type PermissionGroupSortField =
  /** Sort permission group accounts by name. */
  | 'NAME';

export type PermissionGroupSortingInput = {
  /** Specifies the direction in which to sort permission group. */
  direction: OrderDirection;
  /** Sort permission group by the selected field. */
  field: PermissionGroupSortField;
};

/**
 * Update permission group. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type PermissionGroupUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>;
  errors: Array<PermissionGroupError>;
  group: Maybe<Group>;
};

export type PermissionGroupUpdateInput = {
  /** List of permission code names to assign to this group. */
  addPermissions?: Maybe<Array<PermissionEnum>>;
  /** List of users to assign to this group. */
  addUsers?: Maybe<Array<Scalars['ID']>>;
  /**
   * List of channels to assign to this group.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  addChannels?: Maybe<Array<Scalars['ID']>>;
  /** Group name. */
  name?: Maybe<Scalars['String']>;
  /** List of permission code names to unassign from this group. */
  removePermissions?: Maybe<Array<PermissionEnum>>;
  /** List of users to unassign from this group. */
  removeUsers?: Maybe<Array<Scalars['ID']>>;
  /**
   * List of channels to unassign from this group.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  removeChannels?: Maybe<Array<Scalars['ID']>>;
  /**
   * Determine if the group has restricted access to channels.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  restrictedAccessToChannels?: Maybe<Scalars['Boolean']>;
};

/**
 * Event sent when permission group is updated.
 *
 * Added in Saleor 3.6.
 */
export type PermissionGroupUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The permission group the event relates to. */
  permissionGroup: Maybe<Group>;
};

/** Plugin. */
export type Plugin = {
  /** Identifier of the plugin. */
  id: Scalars['ID'];
  /** Name of the plugin. */
  name: Scalars['String'];
  /** Description of the plugin. */
  description: Scalars['String'];
  /** Global configuration of the plugin (not channel-specific). */
  globalConfiguration: Maybe<PluginConfiguration>;
  /** Channel-specific plugin configuration. */
  channelConfigurations: Array<PluginConfiguration>;
};

/** Stores information about a configuration of plugin. */
export type PluginConfiguration = {
  /** Determines if plugin is active or not. */
  active: Scalars['Boolean'];
  /** The channel to which the plugin configuration is assigned to. */
  channel: Maybe<Channel>;
  /** Configuration of the plugin. */
  configuration: Maybe<Array<ConfigurationItem>>;
};

export type PluginConfigurationType =
  | 'PER_CHANNEL'
  | 'GLOBAL';

export type PluginCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<PluginCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type PluginCountableEdge = {
  /** The item at the end of the edge. */
  node: Plugin;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type PluginError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: PluginErrorCode;
};

/** An enumeration. */
export type PluginErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'PLUGIN_MISCONFIGURED'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type PluginFilterInput = {
  statusInChannels?: Maybe<PluginStatusInChannelsInput>;
  search?: Maybe<Scalars['String']>;
  type?: Maybe<PluginConfigurationType>;
};

export type PluginSortField =
  | 'NAME'
  | 'IS_ACTIVE';

export type PluginSortingInput = {
  /** Specifies the direction in which to sort plugins. */
  direction: OrderDirection;
  /** Sort plugins by the selected field. */
  field: PluginSortField;
};

export type PluginStatusInChannelsInput = {
  active: Scalars['Boolean'];
  channels: Array<Scalars['ID']>;
};

/**
 * Update plugin configuration.
 *
 * Requires one of the following permissions: MANAGE_PLUGINS.
 */
export type PluginUpdate = {
  plugin: Maybe<Plugin>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pluginsErrors: Array<PluginError>;
  errors: Array<PluginError>;
};

export type PluginUpdateInput = {
  /** Indicates whether the plugin should be enabled. */
  active?: Maybe<Scalars['Boolean']>;
  /** Configuration of the plugin. */
  configuration?: Maybe<Array<ConfigurationItemInput>>;
};


/** An enumeration. */
export type PostalCodeRuleInclusionTypeEnum =
  | 'INCLUDE'
  | 'EXCLUDE';

/** Represents preorder settings for product variant. */
export type PreorderData = {
  /**
   * The global preorder threshold for product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  globalThreshold: Maybe<Scalars['Int']>;
  /**
   * Total number of sold product variant during preorder.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  globalSoldUnits: Scalars['Int'];
  /** Preorder end date. */
  endDate: Maybe<Scalars['DateTime']>;
};

export type PreorderSettingsInput = {
  /** The global threshold for preorder variant. */
  globalThreshold?: Maybe<Scalars['Int']>;
  /** The end date for preorder. */
  endDate?: Maybe<Scalars['DateTime']>;
};

/** Represents preorder variant data for channel. */
export type PreorderThreshold = {
  /** Preorder threshold for product variant in this channel. */
  quantity: Maybe<Scalars['Int']>;
  /** Number of sold product variant in this channel. */
  soldUnits: Scalars['Int'];
};

export type PriceInput = {
  /** Currency code. */
  currency: Scalars['String'];
  /** Amount of money. */
  amount: Scalars['PositiveDecimal'];
};

export type PriceRangeInput = {
  /** Price greater than or equal to. */
  gte?: Maybe<Scalars['Float']>;
  /** Price less than or equal to. */
  lte?: Maybe<Scalars['Float']>;
};

/** Represents an individual item for sale in the storefront. */
export type Product = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /**
   * Description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description: Maybe<Scalars['JSONString']>;
  productType: ProductType;
  slug: Scalars['String'];
  category: Maybe<Category>;
  created: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` field to determine whether tax collection is enabled. */
  chargeTaxes: Scalars['Boolean'];
  weight: Maybe<Weight>;
  defaultVariant: Maybe<ProductVariant>;
  rating: Maybe<Scalars['Float']>;
  /** Channel given to retrieve this product. Also used by federation gateway to resolve this object in a federated query. */
  channel: Maybe<Scalars['String']>;
  /**
   * Description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson: Maybe<Scalars['JSONString']>;
  thumbnail: Maybe<Image>;
  /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
  pricing: Maybe<ProductPricingInfo>;
  /** Whether the product is in stock and visible or not. */
  isAvailable: Maybe<Scalars['Boolean']>;
  /**
   * A type of tax. Assigned by enabled tax gateway
   * @deprecated This field will be removed in Saleor 4.0. Use `taxClass` field instead.
   */
  taxType: Maybe<TaxType>;
  /**
   * Get a single attribute attached to product by attribute slug.
   *
   * Added in Saleor 3.9.
   */
  attribute: Maybe<SelectedAttribute>;
  /** List of attributes assigned to this product. */
  attributes: Array<SelectedAttribute>;
  /**
   * List of availability in channels for the product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  channelListings: Maybe<Array<ProductChannelListing>>;
  /** Get a single product media by ID. */
  mediaById: Maybe<ProductMedia>;
  /**
   * Get a single product image by ID.
   * @deprecated This field will be removed in Saleor 4.0. Use the `mediaById` field instead.
   */
  imageById: Maybe<ProductImage>;
  /**
   * Get a single variant by SKU or ID.
   *
   * Added in Saleor 3.9.
   * @deprecated This field will be removed in Saleor 4.0. Use top-level `variant` query.
   */
  variant: Maybe<ProductVariant>;
  /** List of variants for the product. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  variants: Maybe<Array<ProductVariant>>;
  /** List of media for the product. */
  media: Maybe<Array<ProductMedia>>;
  /**
   * List of images for the product.
   * @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead.
   */
  images: Maybe<Array<ProductImage>>;
  /** List of collections for the product. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collections: Maybe<Array<Collection>>;
  /** Returns translated product fields for the given language code. */
  translation: Maybe<ProductTranslation>;
  /**
   * Date when product is available for purchase.
   * @deprecated This field will be removed in Saleor 4.0. Use the `availableForPurchaseAt` field to fetch the available for purchase date.
   */
  availableForPurchase: Maybe<Scalars['Date']>;
  /** Date when product is available for purchase. */
  availableForPurchaseAt: Maybe<Scalars['DateTime']>;
  /** Whether the product is available for purchase. */
  isAvailableForPurchase: Maybe<Scalars['Boolean']>;
  /**
   * Tax class assigned to this product type. All products of this product type use this tax class, unless it's overridden in the `Product` type.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxClass: Maybe<TaxClass>;
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  externalReference: Maybe<Scalars['String']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents an individual item for sale in the storefront. */
export type ProductPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents an individual item for sale in the storefront. */
export type ProductMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductThumbnailArgs = {
  size?: Maybe<Scalars['Int']>;
  format?: Maybe<ThumbnailFormatEnum>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductPricingArgs = {
  address?: Maybe<AddressInput>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductIsAvailableArgs = {
  address?: Maybe<AddressInput>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductAttributeArgs = {
  slug: Scalars['String'];
};


/** Represents an individual item for sale in the storefront. */
export type ProductMediaByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductImageByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductVariantArgs = {
  id?: Maybe<Scalars['ID']>;
  sku?: Maybe<Scalars['String']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductMediaArgs = {
  sortBy?: Maybe<MediaSortingInput>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Assign attributes to a given product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductAttributeAssign = {
  /** The updated product type. */
  productType: Maybe<ProductType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

export type ProductAttributeAssignInput = {
  /** The ID of the attribute to assign. */
  id: Scalars['ID'];
  /** The attribute type to be assigned as. */
  type: ProductAttributeType;
  /**
   * Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric'].
   *
   * Added in Saleor 3.1.
   */
  variantSelection?: Maybe<Scalars['Boolean']>;
};

/**
 * Update attributes assigned to product variant for given product type.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductAttributeAssignmentUpdate = {
  /** The updated product type. */
  productType: Maybe<ProductType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

export type ProductAttributeAssignmentUpdateInput = {
  /** The ID of the attribute to assign. */
  id: Scalars['ID'];
  /**
   * Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric'].
   *
   * Added in Saleor 3.1.
   */
  variantSelection: Scalars['Boolean'];
};

export type ProductAttributeType =
  | 'PRODUCT'
  | 'VARIANT';

/**
 * Un-assign attributes from a given product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductAttributeUnassign = {
  /** The updated product type. */
  productType: Maybe<ProductType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

/**
 * Creates products.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductBulkCreate = {
  /** Returns how many objects were created. */
  count: Scalars['Int'];
  /** List of the created products. */
  results: Array<ProductBulkResult>;
  errors: Array<ProductBulkCreateError>;
};

export type ProductBulkCreateError = {
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ProductBulkCreateErrorCode;
  /** List of attributes IDs which causes the error. */
  attributes: Maybe<Array<Scalars['ID']>>;
  /** List of attribute values IDs which causes the error. */
  values: Maybe<Array<Scalars['ID']>>;
  /** List of warehouse IDs which causes the error. */
  warehouses: Maybe<Array<Scalars['ID']>>;
  /** List of channel IDs which causes the error. */
  channels: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export type ProductBulkCreateErrorCode =
  | 'ATTRIBUTE_ALREADY_ASSIGNED'
  | 'ATTRIBUTE_CANNOT_BE_ASSIGNED'
  | 'ATTRIBUTE_VARIANTS_DISABLED'
  | 'BLANK'
  | 'MAX_LENGTH'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_PRICE'
  | 'PRODUCT_WITHOUT_CATEGORY'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'PRODUCT_NOT_ASSIGNED_TO_CHANNEL'
  | 'UNSUPPORTED_MEDIA_PROVIDER';

export type ProductBulkCreateInput = {
  /** List of attributes. */
  attributes?: Maybe<Array<AttributeValueInput>>;
  /** ID of the product's category. */
  category?: Maybe<Scalars['ID']>;
  /**
   * Determine if taxes are being charged for the product.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` to configure whether tax collection is enabled.
   */
  chargeTaxes?: Maybe<Scalars['Boolean']>;
  /** List of IDs of collections that the product belongs to. */
  collections?: Maybe<Array<Scalars['ID']>>;
  /**
   * Product description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']>;
  /** Product name. */
  name?: Maybe<Scalars['String']>;
  /** Product slug. */
  slug?: Maybe<Scalars['String']>;
  /** ID of a tax class to assign to this product. If not provided, product will use the tax class which is assigned to the product type. */
  taxClass?: Maybe<Scalars['ID']>;
  /**
   * Tax rate for enabled tax gateway.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use tax classes to control the tax calculation for a product. If taxCode is provided, Saleor will try to find a tax class with given code (codes are stored in metadata) and assign it. If no tax class is found, it would be created and assigned.
   */
  taxCode?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /** Weight of the Product. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /** Defines the product rating value. */
  rating?: Maybe<Scalars['Float']>;
  /** Fields required to update the product metadata. */
  metadata?: Maybe<Array<MetadataInput>>;
  /** Fields required to update the product private metadata. */
  privateMetadata?: Maybe<Array<MetadataInput>>;
  /** External ID of this product. */
  externalReference?: Maybe<Scalars['String']>;
  /** ID of the type that product belongs to. */
  productType: Scalars['ID'];
  /** List of media inputs associated with the product. */
  media?: Maybe<Array<MediaInput>>;
  /** List of channels in which the product is available. */
  channelListings?: Maybe<Array<ProductChannelListingCreateInput>>;
  /** Input list of product variants to create. */
  variants?: Maybe<Array<ProductVariantBulkCreateInput>>;
};

/**
 * Deletes products.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

export type ProductBulkResult = {
  /** Product data. */
  product: Maybe<Product>;
  /** List of errors occurred on create attempt. */
  errors: Maybe<Array<ProductBulkCreateError>>;
};

/** Represents product channel listing. */
export type ProductChannelListing = Node & {
  id: Scalars['ID'];
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  publicationDate: Maybe<Scalars['Date']>;
  /**
   * The product publication date time.
   *
   * Added in Saleor 3.3.
   */
  publishedAt: Maybe<Scalars['DateTime']>;
  isPublished: Scalars['Boolean'];
  channel: Channel;
  visibleInListings: Scalars['Boolean'];
  /** @deprecated This field will be removed in Saleor 4.0. Use the `availableForPurchaseAt` field to fetch the available for purchase date. */
  availableForPurchase: Maybe<Scalars['Date']>;
  /**
   * The product available for purchase date time.
   *
   * Added in Saleor 3.3.
   */
  availableForPurchaseAt: Maybe<Scalars['DateTime']>;
  /** The price of the cheapest variant (including discounts). */
  discountedPrice: Maybe<Money>;
  /**
   * Purchase cost of product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  purchaseCost: Maybe<MoneyRange>;
  /**
   * Range of margin percentage value.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  margin: Maybe<Margin>;
  /** Whether the product is available for purchase. */
  isAvailableForPurchase: Maybe<Scalars['Boolean']>;
  /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
  pricing: Maybe<ProductPricingInfo>;
};


/** Represents product channel listing. */
export type ProductChannelListingPricingArgs = {
  address?: Maybe<AddressInput>;
};

export type ProductChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** Determines if object is visible to customers. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: Maybe<Scalars['Date']>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Determines if product is visible in product listings (doesn't apply to product collections). */
  visibleInListings?: Maybe<Scalars['Boolean']>;
  /** Determine if product should be available for purchase. */
  isAvailableForPurchase?: Maybe<Scalars['Boolean']>;
  /**
   * A start date from which a product will be available for purchase. When not set and isAvailable is set to True, the current day is assumed.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `availableForPurchaseAt` field instead.
   */
  availableForPurchaseDate?: Maybe<Scalars['Date']>;
  /**
   * A start date time from which a product will be available for purchase. When not set and `isAvailable` is set to True, the current day is assumed.
   *
   * Added in Saleor 3.3.
   */
  availableForPurchaseAt?: Maybe<Scalars['DateTime']>;
  /** List of variants to which the channel should be assigned. */
  addVariants?: Maybe<Array<Scalars['ID']>>;
  /** List of variants from which the channel should be unassigned. */
  removeVariants?: Maybe<Array<Scalars['ID']>>;
};

export type ProductChannelListingCreateInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** Determines if object is visible to customers. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /** Publication date time. ISO 8601 standard. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Determines if product is visible in product listings (doesn't apply to product collections). */
  visibleInListings?: Maybe<Scalars['Boolean']>;
  /** Determine if product should be available for purchase. */
  isAvailableForPurchase?: Maybe<Scalars['Boolean']>;
  /** A start date time from which a product will be available for purchase. When not set and `isAvailable` is set to True, the current day is assumed. */
  availableForPurchaseAt?: Maybe<Scalars['DateTime']>;
};

export type ProductChannelListingError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ProductErrorCode;
  /** List of attributes IDs which causes the error. */
  attributes: Maybe<Array<Scalars['ID']>>;
  /** List of attribute values IDs which causes the error. */
  values: Maybe<Array<Scalars['ID']>>;
  /** List of channels IDs which causes the error. */
  channels: Maybe<Array<Scalars['ID']>>;
  /** List of variants IDs which causes the error. */
  variants: Maybe<Array<Scalars['ID']>>;
};

/**
 * Manage product's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductChannelListingUpdate = {
  /** An updated product instance. */
  product: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productChannelListingErrors: Array<ProductChannelListingError>;
  errors: Array<ProductChannelListingError>;
};

export type ProductChannelListingUpdateInput = {
  /** List of channels to which the product should be assigned or updated. */
  updateChannels?: Maybe<Array<ProductChannelListingAddInput>>;
  /** List of channels from which the product should be unassigned. */
  removeChannels?: Maybe<Array<Scalars['ID']>>;
};

export type ProductCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<ProductCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type ProductCountableEdge = {
  /** The item at the end of the edge. */
  node: Product;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Creates a new product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
  product: Maybe<Product>;
};

export type ProductCreateInput = {
  /** List of attributes. */
  attributes?: Maybe<Array<AttributeValueInput>>;
  /** ID of the product's category. */
  category?: Maybe<Scalars['ID']>;
  /**
   * Determine if taxes are being charged for the product.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` to configure whether tax collection is enabled.
   */
  chargeTaxes?: Maybe<Scalars['Boolean']>;
  /** List of IDs of collections that the product belongs to. */
  collections?: Maybe<Array<Scalars['ID']>>;
  /**
   * Product description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']>;
  /** Product name. */
  name?: Maybe<Scalars['String']>;
  /** Product slug. */
  slug?: Maybe<Scalars['String']>;
  /** ID of a tax class to assign to this product. If not provided, product will use the tax class which is assigned to the product type. */
  taxClass?: Maybe<Scalars['ID']>;
  /**
   * Tax rate for enabled tax gateway.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use tax classes to control the tax calculation for a product. If taxCode is provided, Saleor will try to find a tax class with given code (codes are stored in metadata) and assign it. If no tax class is found, it would be created and assigned.
   */
  taxCode?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /** Weight of the Product. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /** Defines the product rating value. */
  rating?: Maybe<Scalars['Float']>;
  /**
   * Fields required to update the product metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: Maybe<Array<MetadataInput>>;
  /**
   * Fields required to update the product private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: Maybe<Array<MetadataInput>>;
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']>;
  /** ID of the type that product belongs to. */
  productType: Scalars['ID'];
};

/**
 * Event sent when new product is created.
 *
 * Added in Saleor 3.2.
 */
export type ProductCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The product the event relates to. */
  product: Maybe<Product>;
  /** The category of the product. */
  category: Maybe<Category>;
};


/**
 * Event sent when new product is created.
 *
 * Added in Saleor 3.2.
 */
export type ProductCreatedProductArgs = {
  channel?: Maybe<Scalars['String']>;
};

/**
 * Deletes a product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
  product: Maybe<Product>;
};

/**
 * Event sent when product is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ProductDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The product the event relates to. */
  product: Maybe<Product>;
  /** The category of the product. */
  category: Maybe<Category>;
};


/**
 * Event sent when product is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ProductDeletedProductArgs = {
  channel?: Maybe<Scalars['String']>;
};

export type ProductError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ProductErrorCode;
  /** List of attributes IDs which causes the error. */
  attributes: Maybe<Array<Scalars['ID']>>;
  /** List of attribute values IDs which causes the error. */
  values: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export type ProductErrorCode =
  | 'ALREADY_EXISTS'
  | 'ATTRIBUTE_ALREADY_ASSIGNED'
  | 'ATTRIBUTE_CANNOT_BE_ASSIGNED'
  | 'ATTRIBUTE_VARIANTS_DISABLED'
  | 'MEDIA_ALREADY_ASSIGNED'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_PRICE'
  | 'PRODUCT_WITHOUT_CATEGORY'
  | 'NOT_PRODUCTS_IMAGE'
  | 'NOT_PRODUCTS_VARIANT'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'VARIANT_NO_DIGITAL_CONTENT'
  | 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT'
  | 'PRODUCT_NOT_ASSIGNED_TO_CHANNEL'
  | 'UNSUPPORTED_MEDIA_PROVIDER'
  | 'PREORDER_VARIANT_CANNOT_BE_DEACTIVATED';

export type ProductFieldEnum =
  | 'NAME'
  | 'DESCRIPTION'
  | 'PRODUCT_TYPE'
  | 'CATEGORY'
  | 'PRODUCT_WEIGHT'
  | 'COLLECTIONS'
  | 'CHARGE_TAXES'
  | 'PRODUCT_MEDIA'
  | 'VARIANT_ID'
  | 'VARIANT_SKU'
  | 'VARIANT_WEIGHT'
  | 'VARIANT_MEDIA';

export type ProductFilterInput = {
  isPublished?: Maybe<Scalars['Boolean']>;
  collections?: Maybe<Array<Scalars['ID']>>;
  categories?: Maybe<Array<Scalars['ID']>>;
  hasCategory?: Maybe<Scalars['Boolean']>;
  attributes?: Maybe<Array<AttributeInput>>;
  /** Filter by variants having specific stock status. */
  stockAvailability?: Maybe<StockAvailability>;
  stocks?: Maybe<ProductStockFilterInput>;
  search?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataFilter>>;
  /**
   * Filter by the publication date.
   *
   * Added in Saleor 3.8.
   */
  publishedFrom?: Maybe<Scalars['DateTime']>;
  /**
   * Filter by availability for purchase.
   *
   * Added in Saleor 3.8.
   */
  isAvailable?: Maybe<Scalars['Boolean']>;
  /**
   * Filter by the date of availability for purchase.
   *
   * Added in Saleor 3.8.
   */
  availableFrom?: Maybe<Scalars['DateTime']>;
  /**
   * Filter by visibility in product listings.
   *
   * Added in Saleor 3.8.
   */
  isVisibleInListing?: Maybe<Scalars['Boolean']>;
  price?: Maybe<PriceRangeInput>;
  /** Filter by the lowest variant price after discounts. */
  minimalPrice?: Maybe<PriceRangeInput>;
  /** Filter by when was the most recent update. */
  updatedAt?: Maybe<DateTimeRangeInput>;
  productTypes?: Maybe<Array<Scalars['ID']>>;
  /** Filter on whether product is a gift card or not. */
  giftCard?: Maybe<Scalars['Boolean']>;
  ids?: Maybe<Array<Scalars['ID']>>;
  hasPreorderedVariants?: Maybe<Scalars['Boolean']>;
  slugs?: Maybe<Array<Scalars['String']>>;
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: Maybe<Scalars['String']>;
};

/** Represents a product image. */
export type ProductImage = {
  /** The ID of the image. */
  id: Scalars['ID'];
  /** The alt text of the image. */
  alt: Maybe<Scalars['String']>;
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder: Maybe<Scalars['Int']>;
  url: Scalars['String'];
};


/** Represents a product image. */
export type ProductImageUrlArgs = {
  size?: Maybe<Scalars['Int']>;
  format?: Maybe<ThumbnailFormatEnum>;
};

export type ProductInput = {
  /** List of attributes. */
  attributes?: Maybe<Array<AttributeValueInput>>;
  /** ID of the product's category. */
  category?: Maybe<Scalars['ID']>;
  /**
   * Determine if taxes are being charged for the product.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` to configure whether tax collection is enabled.
   */
  chargeTaxes?: Maybe<Scalars['Boolean']>;
  /** List of IDs of collections that the product belongs to. */
  collections?: Maybe<Array<Scalars['ID']>>;
  /**
   * Product description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']>;
  /** Product name. */
  name?: Maybe<Scalars['String']>;
  /** Product slug. */
  slug?: Maybe<Scalars['String']>;
  /** ID of a tax class to assign to this product. If not provided, product will use the tax class which is assigned to the product type. */
  taxClass?: Maybe<Scalars['ID']>;
  /**
   * Tax rate for enabled tax gateway.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use tax classes to control the tax calculation for a product. If taxCode is provided, Saleor will try to find a tax class with given code (codes are stored in metadata) and assign it. If no tax class is found, it would be created and assigned.
   */
  taxCode?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /** Weight of the Product. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /** Defines the product rating value. */
  rating?: Maybe<Scalars['Float']>;
  /**
   * Fields required to update the product metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: Maybe<Array<MetadataInput>>;
  /**
   * Fields required to update the product private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: Maybe<Array<MetadataInput>>;
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']>;
};

/** Represents a product media. */
export type ProductMedia = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /**
   * List of private metadata items. Requires staff permissions to access.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /**
   * List of public metadata items. Can be accessed without permissions.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  sortOrder: Maybe<Scalars['Int']>;
  alt: Scalars['String'];
  type: ProductMediaType;
  oembedData: Scalars['JSONString'];
  url: Scalars['String'];
  /**
   * Product id the media refers to.
   *
   * Added in Saleor 3.12.
   */
  productId: Maybe<Scalars['ID']>;
};


/** Represents a product media. */
export type ProductMediaPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a product media. */
export type ProductMediaPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents a product media. */
export type ProductMediaMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a product media. */
export type ProductMediaMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents a product media. */
export type ProductMediaUrlArgs = {
  size?: Maybe<Scalars['Int']>;
  format?: Maybe<ThumbnailFormatEnum>;
};

/**
 * Deletes product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

/**
 * Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaCreate = {
  product: Maybe<Product>;
  media: Maybe<ProductMedia>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

export type ProductMediaCreateInput = {
  /** Alt text for a product media. */
  alt?: Maybe<Scalars['String']>;
  /** Represents an image file in a multipart request. */
  image?: Maybe<Scalars['Upload']>;
  /** ID of an product. */
  product: Scalars['ID'];
  /** Represents an URL to an external media. */
  mediaUrl?: Maybe<Scalars['String']>;
};

/**
 * Event sent when new product media is created.
 *
 * Added in Saleor 3.12.
 */
export type ProductMediaCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The product media the event relates to. */
  productMedia: Maybe<ProductMedia>;
};

/**
 * Deletes a product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaDelete = {
  product: Maybe<Product>;
  media: Maybe<ProductMedia>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

/**
 * Event sent when product media is deleted.
 *
 * Added in Saleor 3.12.
 */
export type ProductMediaDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The product media the event relates to. */
  productMedia: Maybe<ProductMedia>;
};

/**
 * Changes ordering of the product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaReorder = {
  product: Maybe<Product>;
  media: Maybe<Array<ProductMedia>>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

/** An enumeration. */
export type ProductMediaType =
  | 'IMAGE'
  | 'VIDEO';

/**
 * Updates a product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaUpdate = {
  product: Maybe<Product>;
  media: Maybe<ProductMedia>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

export type ProductMediaUpdateInput = {
  /** Alt text for a product media. */
  alt?: Maybe<Scalars['String']>;
};

/**
 * Event sent when product media is updated.
 *
 * Added in Saleor 3.12.
 */
export type ProductMediaUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The product media the event relates to. */
  productMedia: Maybe<ProductMedia>;
};

/**
 * Event sent when product metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ProductMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The product the event relates to. */
  product: Maybe<Product>;
  /** The category of the product. */
  category: Maybe<Category>;
};


/**
 * Event sent when product metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ProductMetadataUpdatedProductArgs = {
  channel?: Maybe<Scalars['String']>;
};

export type ProductOrder = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: Maybe<Scalars['String']>;
  /**
   * Sort product by the selected attribute's values.
   * Note: this doesn't take translations into account yet.
   */
  attributeId?: Maybe<Scalars['ID']>;
  /** Sort products by the selected field. */
  field?: Maybe<ProductOrderField>;
};

export type ProductOrderField =
  /** Sort products by name. */
  | 'NAME'
  /** Sort products by rank. Note: This option is available only with the `search` filter. */
  | 'RANK'
  /**
   * Sort products by price.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PRICE'
  /**
   * Sort products by a minimal price of a product's variant.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'MINIMAL_PRICE'
  /** Sort products by update date. */
  | 'LAST_MODIFIED'
  /** Sort products by update date. */
  | 'DATE'
  /** Sort products by type. */
  | 'TYPE'
  /**
   * Sort products by publication status.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PUBLISHED'
  /**
   * Sort products by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PUBLICATION_DATE'
  /**
   * Sort products by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PUBLISHED_AT'
  /** Sort products by update date. */
  | 'LAST_MODIFIED_AT'
  /**
   * Sort products by collection. Note: This option is available only for the `Collection.products` query.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'COLLECTION'
  /** Sort products by rating. */
  | 'RATING'
  /**
   * Sort products by creation date.
   *
   * Added in Saleor 3.8.
   */
  | 'CREATED_AT';

/** Represents availability of a product in the storefront. */
export type ProductPricingInfo = {
  /** Whether it is in sale or not. */
  onSale: Maybe<Scalars['Boolean']>;
  /** The discount amount if in sale (null otherwise). */
  discount: Maybe<TaxedMoney>;
  /** The discount amount in the local currency. */
  discountLocalCurrency: Maybe<TaxedMoney>;
  /** The discounted price range of the product variants. */
  priceRange: Maybe<TaxedMoneyRange>;
  /** The undiscounted price range of the product variants. */
  priceRangeUndiscounted: Maybe<TaxedMoneyRange>;
  /** The discounted price range of the product variants in the local currency. */
  priceRangeLocalCurrency: Maybe<TaxedMoneyRange>;
  /**
   * Determines whether this product's price displayed in a storefront should include taxes.
   *
   * Added in Saleor 3.9.
   */
  displayGrossPrices: Scalars['Boolean'];
};

/**
 * Reorder product attribute values.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductReorderAttributeValues = {
  /** Product from which attribute values are reordered. */
  product: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

export type ProductStockFilterInput = {
  warehouseIds?: Maybe<Array<Scalars['ID']>>;
  quantity?: Maybe<IntRangeInput>;
};

export type ProductTranslatableContent = Node & {
  id: Scalars['ID'];
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /**
   * Description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description: Maybe<Scalars['JSONString']>;
  /**
   * Description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson: Maybe<Scalars['JSONString']>;
  /** Returns translated product fields for the given language code. */
  translation: Maybe<ProductTranslation>;
  /**
   * Represents an individual item for sale in the storefront.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  product: Maybe<Product>;
  /** List of product attribute values that can be translated. */
  attributeValues: Array<AttributeValueTranslatableContent>;
};


export type ProductTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a product.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ProductTranslate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
  errors: Array<TranslationError>;
  product: Maybe<Product>;
};

export type ProductTranslation = Node & {
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  /**
   * Translated description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description: Maybe<Scalars['JSONString']>;
  /**
   * Translated description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson: Maybe<Scalars['JSONString']>;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductType = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  hasVariants: Scalars['Boolean'];
  isShippingRequired: Scalars['Boolean'];
  isDigital: Scalars['Boolean'];
  weight: Maybe<Weight>;
  /** The product type kind. */
  kind: ProductTypeKindEnum;
  /**
   * List of products of this type.
   * @deprecated This field will be removed in Saleor 4.0. Use the top-level `products` query with the `productTypes` filter.
   */
  products: Maybe<ProductCountableConnection>;
  /**
   * A type of tax. Assigned by enabled tax gateway
   * @deprecated This field will be removed in Saleor 4.0. Use `taxClass` field instead.
   */
  taxType: Maybe<TaxType>;
  /**
   * Tax class assigned to this product type. All products of this product type use this tax class, unless it's overridden in the `Product` type.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxClass: Maybe<TaxClass>;
  /**
   * Variant attributes of that product type.
   * @deprecated This field will be removed in Saleor 4.0. Use `assignedVariantAttributes` instead.
   */
  variantAttributes: Maybe<Array<Attribute>>;
  /**
   * Variant attributes of that product type with attached variant selection.
   *
   * Added in Saleor 3.1.
   */
  assignedVariantAttributes: Maybe<Array<AssignedVariantAttribute>>;
  /** Product attributes of that product type. */
  productAttributes: Maybe<Array<Attribute>>;
  /**
   * List of attributes which can be assigned to this product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  availableAttributes: Maybe<AttributeCountableConnection>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypePrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeProductsArgs = {
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeVariantAttributesArgs = {
  variantSelection?: Maybe<VariantAttributeScope>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeAssignedVariantAttributesArgs = {
  variantSelection?: Maybe<VariantAttributeScope>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeAvailableAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>;
  where?: Maybe<AttributeWhereInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/**
 * Deletes product types.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

export type ProductTypeConfigurable =
  | 'CONFIGURABLE'
  | 'SIMPLE';

export type ProductTypeCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<ProductTypeCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type ProductTypeCountableEdge = {
  /** The item at the end of the edge. */
  node: ProductType;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Creates a new product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
  productType: Maybe<ProductType>;
};

/**
 * Deletes a product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
  productType: Maybe<ProductType>;
};

export type ProductTypeEnum =
  | 'DIGITAL'
  | 'SHIPPABLE';

export type ProductTypeFilterInput = {
  search?: Maybe<Scalars['String']>;
  configurable?: Maybe<ProductTypeConfigurable>;
  productType?: Maybe<ProductTypeEnum>;
  metadata?: Maybe<Array<MetadataFilter>>;
  kind?: Maybe<ProductTypeKindEnum>;
  ids?: Maybe<Array<Scalars['ID']>>;
  slugs?: Maybe<Array<Scalars['String']>>;
};

export type ProductTypeInput = {
  /** Name of the product type. */
  name?: Maybe<Scalars['String']>;
  /** Product type slug. */
  slug?: Maybe<Scalars['String']>;
  /** The product type kind. */
  kind?: Maybe<ProductTypeKindEnum>;
  /** Determines if product of this type has multiple variants. This option mainly simplifies product management in the dashboard. There is always at least one variant created under the hood. */
  hasVariants?: Maybe<Scalars['Boolean']>;
  /** List of attributes shared among all product variants. */
  productAttributes?: Maybe<Array<Scalars['ID']>>;
  /** List of attributes used to distinguish between different variants of a product. */
  variantAttributes?: Maybe<Array<Scalars['ID']>>;
  /** Determines if shipping is required for products of this variant. */
  isShippingRequired?: Maybe<Scalars['Boolean']>;
  /** Determines if products are digital. */
  isDigital?: Maybe<Scalars['Boolean']>;
  /** Weight of the ProductType items. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /**
   * Tax rate for enabled tax gateway.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.. Use tax classes to control the tax calculation for a product type. If taxCode is provided, Saleor will try to find a tax class with given code (codes are stored in metadata) and assign it. If no tax class is found, it would be created and assigned.
   */
  taxCode?: Maybe<Scalars['String']>;
  /** ID of a tax class to assign to this product type. All products of this product type would use this tax class, unless it's overridden in the `Product` type. */
  taxClass?: Maybe<Scalars['ID']>;
};

/** An enumeration. */
export type ProductTypeKindEnum =
  | 'NORMAL'
  | 'GIFT_CARD';

/**
 * Reorder the attributes of a product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeReorderAttributes = {
  /** Product type from which attributes are reordered. */
  productType: Maybe<ProductType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

export type ProductTypeSortField =
  /** Sort products by name. */
  | 'NAME'
  /** Sort products by type. */
  | 'DIGITAL'
  /** Sort products by shipping. */
  | 'SHIPPING_REQUIRED';

export type ProductTypeSortingInput = {
  /** Specifies the direction in which to sort product types. */
  direction: OrderDirection;
  /** Sort product types by the selected field. */
  field: ProductTypeSortField;
};

/**
 * Updates an existing product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
  productType: Maybe<ProductType>;
};

/**
 * Updates an existing product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
  product: Maybe<Product>;
};

/**
 * Event sent when product is updated.
 *
 * Added in Saleor 3.2.
 */
export type ProductUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The product the event relates to. */
  product: Maybe<Product>;
  /** The category of the product. */
  category: Maybe<Category>;
};


/**
 * Event sent when product is updated.
 *
 * Added in Saleor 3.2.
 */
export type ProductUpdatedProductArgs = {
  channel?: Maybe<Scalars['String']>;
};

/** Represents a version of a product such as different size or color. */
export type ProductVariant = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  sku: Maybe<Scalars['String']>;
  product: Product;
  trackInventory: Scalars['Boolean'];
  quantityLimitPerCustomer: Maybe<Scalars['Int']>;
  weight: Maybe<Weight>;
  /** Channel given to retrieve this product variant. Also used by federation gateway to resolve this object in a federated query. */
  channel: Maybe<Scalars['String']>;
  /**
   * List of price information in channels for the product.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  channelListings: Maybe<Array<ProductVariantChannelListing>>;
  /** Lists the storefront variant's pricing, the current price and discounts, only meant for displaying. */
  pricing: Maybe<VariantPricingInfo>;
  /** List of attributes assigned to this variant. */
  attributes: Array<SelectedAttribute>;
  /** Gross margin percentage value. */
  margin: Maybe<Scalars['Int']>;
  /**
   * Total quantity ordered.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  quantityOrdered: Maybe<Scalars['Int']>;
  /**
   * Total revenue generated by a variant in given period of time. Note: this field should be queried using `reportProductSales` query as it uses optimizations suitable for such calculations.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  revenue: Maybe<TaxedMoney>;
  /**
   * List of images for the product variant.
   * @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead.
   */
  images: Maybe<Array<ProductImage>>;
  /** List of media for the product variant. */
  media: Maybe<Array<ProductMedia>>;
  /** Returns translated product variant fields for the given language code. */
  translation: Maybe<ProductVariantTranslation>;
  /**
   * Digital content for the product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContent: Maybe<DigitalContent>;
  /**
   * Stocks for the product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  stocks: Maybe<Array<Stock>>;
  /** Quantity of a product available for sale in one checkout. Field value will be `null` when no `limitQuantityPerCheckout` in global settings has been set, and `productVariant` stocks are not tracked. */
  quantityAvailable: Maybe<Scalars['Int']>;
  /**
   * Preorder data for product variant.
   *
   * Added in Saleor 3.1.
   */
  preorder: Maybe<PreorderData>;
  created: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  externalReference: Maybe<Scalars['String']>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantPricingArgs = {
  address?: Maybe<AddressInput>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantAttributesArgs = {
  variantSelection?: Maybe<VariantAttributeScope>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantRevenueArgs = {
  period?: Maybe<ReportingPeriod>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantTranslationArgs = {
  languageCode: LanguageCodeEnum;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantStocksArgs = {
  address?: Maybe<AddressInput>;
  countryCode?: Maybe<CountryCode>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantQuantityAvailableArgs = {
  address?: Maybe<AddressInput>;
  countryCode?: Maybe<CountryCode>;
};

/**
 * Event sent when product variant is back in stock.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantBackInStock = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The product variant the event relates to. */
  productVariant: Maybe<ProductVariant>;
  /** Look up a warehouse. */
  warehouse: Maybe<Warehouse>;
};


/**
 * Event sent when product variant is back in stock.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantBackInStockProductVariantArgs = {
  channel?: Maybe<Scalars['String']>;
};

/**
 * Creates product variants for a given product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantBulkCreate = {
  /** Returns how many objects were created. */
  count: Scalars['Int'];
  /** List of the created variants.This field will be removed in Saleor 4.0. */
  productVariants: Array<ProductVariant>;
  /**
   * List of the created variants.
   *
   * Added in Saleor 3.11.
   */
  results: Array<ProductVariantBulkResult>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkProductErrors: Array<BulkProductError>;
  errors: Array<BulkProductError>;
};

export type ProductVariantBulkCreateInput = {
  /** List of attributes specific to this variant. */
  attributes: Array<BulkAttributeValueInput>;
  /** Stock keeping unit. */
  sku?: Maybe<Scalars['String']>;
  /** Variant name. */
  name?: Maybe<Scalars['String']>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: Maybe<Scalars['Boolean']>;
  /** Weight of the Product Variant. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   */
  preorder?: Maybe<PreorderSettingsInput>;
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   */
  quantityLimitPerCustomer?: Maybe<Scalars['Int']>;
  /**
   * Fields required to update the product variant metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: Maybe<Array<MetadataInput>>;
  /**
   * Fields required to update the product variant private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: Maybe<Array<MetadataInput>>;
  /**
   * External ID of this product variant.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']>;
  /** Stocks of a product available for sale. */
  stocks?: Maybe<Array<StockInput>>;
  /** List of prices assigned to channels. */
  channelListings?: Maybe<Array<ProductVariantChannelListingAddInput>>;
};

/**
 * Deletes product variants.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

export type ProductVariantBulkError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ProductVariantBulkErrorCode;
  /**
   * Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   *
   * Added in Saleor 3.14.
   */
  path: Maybe<Scalars['String']>;
  /** List of attributes IDs which causes the error. */
  attributes: Maybe<Array<Scalars['ID']>>;
  /** List of attribute values IDs which causes the error. */
  values: Maybe<Array<Scalars['ID']>>;
  /** List of warehouse IDs which causes the error. */
  warehouses: Maybe<Array<Scalars['ID']>>;
  /**
   * List of stocks IDs which causes the error.
   *
   * Added in Saleor 3.12.
   */
  stocks: Maybe<Array<Scalars['ID']>>;
  /**
   * List of channel IDs which causes the error.
   *
   * Added in Saleor 3.12.
   */
  channels: Maybe<Array<Scalars['ID']>>;
  /** List of channel listings IDs which causes the error. */
  channelListings: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export type ProductVariantBulkErrorCode =
  | 'ATTRIBUTE_ALREADY_ASSIGNED'
  | 'ATTRIBUTE_CANNOT_BE_ASSIGNED'
  | 'ATTRIBUTE_VARIANTS_DISABLED'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_PRICE'
  | 'NOT_PRODUCTS_VARIANT'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'PRODUCT_NOT_ASSIGNED_TO_CHANNEL';

export type ProductVariantBulkResult = {
  /** Product variant data. */
  productVariant: Maybe<ProductVariant>;
  /** List of errors occurred on create attempt. */
  errors: Maybe<Array<ProductVariantBulkError>>;
};

/**
 * Update multiple product variants.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantBulkUpdate = {
  /** Returns how many objects were updated. */
  count: Scalars['Int'];
  /** List of the updated variants. */
  results: Array<ProductVariantBulkResult>;
  errors: Array<ProductVariantBulkError>;
};

/**
 * Input fields to update product variants.
 *
 * Added in Saleor 3.11.
 */
export type ProductVariantBulkUpdateInput = {
  /** List of attributes specific to this variant. */
  attributes?: Maybe<Array<BulkAttributeValueInput>>;
  /** Stock keeping unit. */
  sku?: Maybe<Scalars['String']>;
  /** Variant name. */
  name?: Maybe<Scalars['String']>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: Maybe<Scalars['Boolean']>;
  /** Weight of the Product Variant. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   */
  preorder?: Maybe<PreorderSettingsInput>;
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   */
  quantityLimitPerCustomer?: Maybe<Scalars['Int']>;
  /**
   * Fields required to update the product variant metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: Maybe<Array<MetadataInput>>;
  /**
   * Fields required to update the product variant private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: Maybe<Array<MetadataInput>>;
  /**
   * External ID of this product variant.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']>;
  /**
   * Stocks input.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  stocks?: Maybe<ProductVariantStocksUpdateInput>;
  /**
   * Channel listings input.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  channelListings?: Maybe<ProductVariantChannelListingUpdateInput>;
  /** ID of the product variant to update. */
  id: Scalars['ID'];
};

/** Represents product varaint channel listing. */
export type ProductVariantChannelListing = Node & {
  id: Scalars['ID'];
  channel: Channel;
  price: Maybe<Money>;
  /** Cost price of the variant. */
  costPrice: Maybe<Money>;
  /**
   * Gross margin percentage value.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  margin: Maybe<Scalars['Int']>;
  /**
   * Preorder variant data.
   *
   * Added in Saleor 3.1.
   */
  preorderThreshold: Maybe<PreorderThreshold>;
};

export type ProductVariantChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** Price of the particular variant in channel. */
  price: Scalars['PositiveDecimal'];
  /** Cost price of the variant in channel. */
  costPrice?: Maybe<Scalars['PositiveDecimal']>;
  /**
   * The threshold for preorder variant in channel.
   *
   * Added in Saleor 3.1.
   */
  preorderThreshold?: Maybe<Scalars['Int']>;
};

/**
 * Manage product variant prices in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantChannelListingUpdate = {
  /** An updated product variant instance. */
  variant: Maybe<ProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productChannelListingErrors: Array<ProductChannelListingError>;
  errors: Array<ProductChannelListingError>;
};

export type ProductVariantChannelListingUpdateInput = {
  /** List of channels to create variant channel listings. */
  create?: Maybe<Array<ProductVariantChannelListingAddInput>>;
  /** List of channel listings to update. */
  update?: Maybe<Array<ChannelListingUpdateInput>>;
  /** List of channel listings to remove. */
  remove?: Maybe<Array<Scalars['ID']>>;
};

export type ProductVariantCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<ProductVariantCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type ProductVariantCountableEdge = {
  /** The item at the end of the edge. */
  node: ProductVariant;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Creates a new variant for a product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
  productVariant: Maybe<ProductVariant>;
};

export type ProductVariantCreateInput = {
  /** List of attributes specific to this variant. */
  attributes: Array<AttributeValueInput>;
  /** Stock keeping unit. */
  sku?: Maybe<Scalars['String']>;
  /** Variant name. */
  name?: Maybe<Scalars['String']>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: Maybe<Scalars['Boolean']>;
  /** Weight of the Product Variant. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   */
  preorder?: Maybe<PreorderSettingsInput>;
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   */
  quantityLimitPerCustomer?: Maybe<Scalars['Int']>;
  /**
   * Fields required to update the product variant metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: Maybe<Array<MetadataInput>>;
  /**
   * Fields required to update the product variant private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: Maybe<Array<MetadataInput>>;
  /**
   * External ID of this product variant.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']>;
  /** Product ID of which type is the variant. */
  product: Scalars['ID'];
  /** Stocks of a product available for sale. */
  stocks?: Maybe<Array<StockInput>>;
};

/**
 * Event sent when new product variant is created.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The product variant the event relates to. */
  productVariant: Maybe<ProductVariant>;
};


/**
 * Event sent when new product variant is created.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantCreatedProductVariantArgs = {
  channel?: Maybe<Scalars['String']>;
};

/**
 * Deletes a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
  productVariant: Maybe<ProductVariant>;
};

/**
 * Event sent when product variant is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The product variant the event relates to. */
  productVariant: Maybe<ProductVariant>;
};


/**
 * Event sent when product variant is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantDeletedProductVariantArgs = {
  channel?: Maybe<Scalars['String']>;
};

export type ProductVariantFilterInput = {
  search?: Maybe<Scalars['String']>;
  sku?: Maybe<Array<Scalars['String']>>;
  metadata?: Maybe<Array<MetadataFilter>>;
  isPreorder?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<DateTimeRangeInput>;
};

export type ProductVariantInput = {
  /** List of attributes specific to this variant. */
  attributes?: Maybe<Array<AttributeValueInput>>;
  /** Stock keeping unit. */
  sku?: Maybe<Scalars['String']>;
  /** Variant name. */
  name?: Maybe<Scalars['String']>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: Maybe<Scalars['Boolean']>;
  /** Weight of the Product Variant. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   */
  preorder?: Maybe<PreorderSettingsInput>;
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   */
  quantityLimitPerCustomer?: Maybe<Scalars['Int']>;
  /**
   * Fields required to update the product variant metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: Maybe<Array<MetadataInput>>;
  /**
   * Fields required to update the product variant private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: Maybe<Array<MetadataInput>>;
  /**
   * External ID of this product variant.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']>;
};

/**
 * Event sent when product variant metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ProductVariantMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The product variant the event relates to. */
  productVariant: Maybe<ProductVariant>;
};


/**
 * Event sent when product variant metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ProductVariantMetadataUpdatedProductVariantArgs = {
  channel?: Maybe<Scalars['String']>;
};

/**
 * Event sent when product variant is out of stock.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantOutOfStock = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The product variant the event relates to. */
  productVariant: Maybe<ProductVariant>;
  /** Look up a warehouse. */
  warehouse: Maybe<Warehouse>;
};


/**
 * Event sent when product variant is out of stock.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantOutOfStockProductVariantArgs = {
  channel?: Maybe<Scalars['String']>;
};

/**
 * Deactivates product variant preorder. It changes all preorder allocation into regular allocation.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantPreorderDeactivate = {
  /** Product variant with ended preorder. */
  productVariant: Maybe<ProductVariant>;
  errors: Array<ProductError>;
};

/**
 * Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantReorder = {
  product: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

/**
 * Reorder product variant attribute values.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantReorderAttributeValues = {
  /** Product variant from which attribute values are reordered. */
  productVariant: Maybe<ProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

/**
 * Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantSetDefault = {
  product: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

export type ProductVariantSortField =
  /** Sort products variants by last modified at. */
  | 'LAST_MODIFIED_AT';

export type ProductVariantSortingInput = {
  /** Specifies the direction in which to sort productVariants. */
  direction: OrderDirection;
  /** Sort productVariants by the selected field. */
  field: ProductVariantSortField;
};

/**
 * Event sent when product variant stock is updated.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ProductVariantStockUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The product variant the event relates to. */
  productVariant: Maybe<ProductVariant>;
  /** Look up a warehouse. */
  warehouse: Maybe<Warehouse>;
};


/**
 * Event sent when product variant stock is updated.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ProductVariantStockUpdatedProductVariantArgs = {
  channel?: Maybe<Scalars['String']>;
};

/**
 * Creates stocks for product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantStocksCreate = {
  /** Updated product variant. */
  productVariant: Maybe<ProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkStockErrors: Array<BulkStockError>;
  errors: Array<BulkStockError>;
};

/**
 * Delete stocks from product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantStocksDelete = {
  /** Updated product variant. */
  productVariant: Maybe<ProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  stockErrors: Array<StockError>;
  errors: Array<StockError>;
};

/**
 * Update stocks for product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantStocksUpdate = {
  /** Updated product variant. */
  productVariant: Maybe<ProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkStockErrors: Array<BulkStockError>;
  errors: Array<BulkStockError>;
};

export type ProductVariantStocksUpdateInput = {
  /** List of warehouses to create stocks. */
  create?: Maybe<Array<StockInput>>;
  /** List of stocks to update. */
  update?: Maybe<Array<StockUpdateInput>>;
  /** List of stocks to remove. */
  remove?: Maybe<Array<Scalars['ID']>>;
};

export type ProductVariantTranslatableContent = Node & {
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Returns translated product variant fields for the given language code. */
  translation: Maybe<ProductVariantTranslation>;
  /**
   * Represents a version of a product such as different size or color.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  productVariant: Maybe<ProductVariant>;
  /** List of product variant attribute values that can be translated. */
  attributeValues: Array<AttributeValueTranslatableContent>;
};


export type ProductVariantTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a product variant.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ProductVariantTranslate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
  errors: Array<TranslationError>;
  productVariant: Maybe<ProductVariant>;
};

export type ProductVariantTranslation = Node & {
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String'];
};

/**
 * Updates an existing variant for product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
  productVariant: Maybe<ProductVariant>;
};

/**
 * Event sent when product variant is updated.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The product variant the event relates to. */
  productVariant: Maybe<ProductVariant>;
};


/**
 * Event sent when product variant is updated.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantUpdatedProductVariantArgs = {
  channel?: Maybe<Scalars['String']>;
};

export type PublishableChannelListingInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** Determines if object is visible to customers. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: Maybe<Scalars['Date']>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type Query = {
  _entities: Maybe<Array<Maybe<_Entity>>>;
  _service: Maybe<_Service>;
  /**
   * Look up an address by ID.
   *
   * Requires one of the following permissions: MANAGE_USERS, OWNER.
   */
  address: Maybe<Address>;
  /** Returns address validation rules. */
  addressValidationRules: Maybe<AddressValidationData>;
  /**
   * Look up an app by ID. If ID is not provided, return the currently authenticated app.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER AUTHENTICATED_APP. The authenticated app has access to its resources. Fetching different apps requires MANAGE_APPS permission.
   */
  app: Maybe<App>;
  /**
   * Look up an app extension by ID.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  appExtension: Maybe<AppExtension>;
  /**
   * List of all extensions.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  appExtensions: Maybe<AppExtensionCountableConnection>;
  /**
   * List of the apps.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, MANAGE_APPS.
   */
  apps: Maybe<AppCountableConnection>;
  /**
   * List of all apps installations
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appsInstallations: Array<AppInstallation>;
  /** Look up an attribute by ID, slug or external reference. */
  attribute: Maybe<Attribute>;
  /** List of the shop's attributes. */
  attributes: Maybe<AttributeCountableConnection>;
  authenticated: Scalars['Boolean'];
  authenticating: Scalars['Boolean'];
  /** List of the shop's categories. */
  categories: Maybe<CategoryCountableConnection>;
  /** Look up a category by ID or slug. */
  category: Maybe<Category>;
  /** Look up a channel by ID or slug. */
  channel: Maybe<Channel>;
  /**
   * List of all channels.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  channels: Maybe<Array<Channel>>;
  /** Look up a checkout by token and slug of channel. */
  checkout: Maybe<Checkout>;
  /**
   * List of checkout lines.
   *
   * Requires one of the following permissions: MANAGE_CHECKOUTS.
   */
  checkoutLines: Maybe<CheckoutLineCountableConnection>;
  /**
   * List of checkouts.
   *
   * Requires one of the following permissions: MANAGE_CHECKOUTS.
   */
  checkouts: Maybe<CheckoutCountableConnection>;
  /** Look up a collection by ID. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collection: Maybe<Collection>;
  /** List of the shop's collections. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collections: Maybe<CollectionCountableConnection>;
  /**
   * List of the shop's customers.
   *
   * Requires one of the following permissions: MANAGE_ORDERS, MANAGE_USERS.
   */
  customers: Maybe<UserCountableConnection>;
  /**
   * Look up digital content by ID.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContent: Maybe<DigitalContent>;
  /**
   * List of digital content.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContents: Maybe<DigitalContentCountableConnection>;
  /**
   * List of draft orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrders: Maybe<OrderCountableConnection>;
  /**
   * Look up a export file by ID.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  exportFile: Maybe<ExportFile>;
  /**
   * List of export files.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  exportFiles: Maybe<ExportFileCountableConnection>;
  /**
   * Look up a gift card by ID.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCard: Maybe<GiftCard>;
  /**
   * List of gift card currencies.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardCurrencies: Array<Scalars['String']>;
  /**
   * Gift card related settings from site settings.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardSettings: GiftCardSettings;
  /**
   * List of gift card tags.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardTags: Maybe<GiftCardTagCountableConnection>;
  /**
   * List of gift cards.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCards: Maybe<GiftCardCountableConnection>;
  /**
   * List of activity events to display on homepage (at the moment it only contains order-events).
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  homepageEvents: Maybe<OrderEventCountableConnection>;
  /** Return the currently authenticated user. */
  me: Maybe<User>;
  /** Look up a navigation menu by ID or name. */
  menu: Maybe<Menu>;
  /** Look up a menu item by ID. */
  menuItem: Maybe<MenuItem>;
  /** List of the storefronts's menu items. */
  menuItems: Maybe<MenuItemCountableConnection>;
  /** List of the storefront's menus. */
  menus: Maybe<MenuCountableConnection>;
  /** Look up an order by ID or external reference. */
  order: Maybe<Order>;
  /**
   * Look up an order by token.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  orderByToken: Maybe<Order>;
  /**
   * Order related settings from site settings. Returns `orderSettings` for the first `channel` in alphabetical order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   * @deprecated This field will be removed in Saleor 4.0. Use the `channel` query to fetch the `orderSettings` field instead.
   */
  orderSettings: Maybe<OrderSettings>;
  /**
   * List of orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orders: Maybe<OrderCountableConnection>;
  /**
   * Return the total sales amount from a specific period.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  ordersTotal: Maybe<TaxedMoney>;
  /** Look up a page by ID or slug. */
  page: Maybe<Page>;
  /** Look up a page type by ID. */
  pageType: Maybe<PageType>;
  /** List of the page types. */
  pageTypes: Maybe<PageTypeCountableConnection>;
  /** List of the shop's pages. */
  pages: Maybe<PageCountableConnection>;
  /**
   * Look up a payment by ID.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  payment: Maybe<Payment>;
  /**
   * List of payments.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  payments: Maybe<PaymentCountableConnection>;
  /**
   * Look up permission group by ID.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  permissionGroup: Maybe<Group>;
  /**
   * List of permission groups.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  permissionGroups: Maybe<GroupCountableConnection>;
  /**
   * Look up a plugin by ID.
   *
   * Requires one of the following permissions: MANAGE_PLUGINS.
   */
  plugin: Maybe<Plugin>;
  /**
   * List of plugins.
   *
   * Requires one of the following permissions: MANAGE_PLUGINS.
   */
  plugins: Maybe<PluginCountableConnection>;
  /** Look up a product by ID. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  product: Maybe<Product>;
  /** Look up a product type by ID. */
  productType: Maybe<ProductType>;
  /** List of the shop's product types. */
  productTypes: Maybe<ProductTypeCountableConnection>;
  /** Look up a product variant by ID or SKU. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  productVariant: Maybe<ProductVariant>;
  /** List of product variants. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  productVariants: Maybe<ProductVariantCountableConnection>;
  /** List of the shop's products. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  products: Maybe<ProductCountableConnection>;
  /**
   * List of top selling products.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  reportProductSales: Maybe<ProductVariantCountableConnection>;
  /**
   * Look up a sale by ID.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  sale: Maybe<Sale>;
  /**
   * List of the shop's sales.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  sales: Maybe<SaleCountableConnection>;
  /**
   * Look up a shipping zone by ID.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZone: Maybe<ShippingZone>;
  /**
   * List of the shop's shipping zones.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZones: Maybe<ShippingZoneCountableConnection>;
  /** Return information about the shop. */
  shop: Shop;
  /**
   * List of the shop's staff users.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  staffUsers: Maybe<UserCountableConnection>;
  /**
   * Look up a stock by ID
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  stock: Maybe<Stock>;
  /**
   * List of stocks.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  stocks: Maybe<StockCountableConnection>;
  /**
   * Look up a tax class.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxClass: Maybe<TaxClass>;
  /**
   * List of tax classes.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxClasses: Maybe<TaxClassCountableConnection>;
  /**
   * Look up a tax configuration.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxConfiguration: Maybe<TaxConfiguration>;
  /**
   * List of tax configurations.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxConfigurations: Maybe<TaxConfigurationCountableConnection>;
  /**
   * Tax class rates grouped by country.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxCountryConfiguration: Maybe<TaxCountryConfiguration>;
  /** Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP. */
  taxCountryConfigurations: Maybe<Array<TaxCountryConfiguration>>;
  /** List of all tax rates available from tax gateway. */
  taxTypes: Maybe<Array<TaxType>>;
  /**
   * Look up a transaction by ID.
   *
   * Added in Saleor 3.6.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: HANDLE_PAYMENTS.
   */
  transaction: Maybe<TransactionItem>;
  /**
   * Lookup a translatable item by ID.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  translation: Maybe<TranslatableItem>;
  /**
   * Returns a list of all translatable items of a given kind.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  translations: Maybe<TranslatableItemConnection>;
  /**
   * Look up a user by ID or email address.
   *
   * Requires one of the following permissions: MANAGE_STAFF, MANAGE_USERS, MANAGE_ORDERS.
   */
  user: Maybe<User>;
  /**
   * Look up a voucher by ID.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucher: Maybe<Voucher>;
  /**
   * List of the shop's vouchers.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  vouchers: Maybe<VoucherCountableConnection>;
  /**
   * Look up a warehouse by ID.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS, MANAGE_SHIPPING.
   */
  warehouse: Maybe<Warehouse>;
  /**
   * List of warehouses.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS, MANAGE_SHIPPING.
   */
  warehouses: Maybe<WarehouseCountableConnection>;
  /** Look up a webhook by ID. Requires one of the following permissions: MANAGE_APPS, OWNER. */
  webhook: Maybe<Webhook>;
  /**
   * List of all available webhook events.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   * @deprecated This field will be removed in Saleor 4.0. Use `WebhookEventTypeAsyncEnum` and `WebhookEventTypeSyncEnum` to get available event types.
   */
  webhookEvents: Maybe<Array<WebhookEvent>>;
  /** Retrieve a sample payload for a given webhook event based on real data. It can be useful for some integrations where sample payload is required. */
  webhookSamplePayload: Maybe<Scalars['JSONString']>;
};


export type Query_EntitiesArgs = {
  representations?: Maybe<Array<Maybe<Scalars['_Any']>>>;
};


export type QueryAddressArgs = {
  id: Scalars['ID'];
};


export type QueryAddressValidationRulesArgs = {
  countryCode: CountryCode;
  countryArea?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  cityArea?: Maybe<Scalars['String']>;
};


export type QueryAppArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryAppExtensionArgs = {
  id: Scalars['ID'];
};


export type QueryAppExtensionsArgs = {
  filter?: Maybe<AppExtensionFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAppsArgs = {
  filter?: Maybe<AppFilterInput>;
  sortBy?: Maybe<AppSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAttributeArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  externalReference?: Maybe<Scalars['String']>;
};


export type QueryAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>;
  where?: Maybe<AttributeWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<AttributeSortingInput>;
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCategoriesArgs = {
  filter?: Maybe<CategoryFilterInput>;
  sortBy?: Maybe<CategorySortingInput>;
  level?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCategoryArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryChannelArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryCheckoutArgs = {
  id?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['UUID']>;
};


export type QueryCheckoutLinesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCheckoutsArgs = {
  sortBy?: Maybe<CheckoutSortingInput>;
  filter?: Maybe<CheckoutFilterInput>;
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCollectionArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
};


export type QueryCollectionsArgs = {
  filter?: Maybe<CollectionFilterInput>;
  sortBy?: Maybe<CollectionSortingInput>;
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCustomersArgs = {
  filter?: Maybe<CustomerFilterInput>;
  sortBy?: Maybe<UserSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryDigitalContentArgs = {
  id: Scalars['ID'];
};


export type QueryDigitalContentsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryDraftOrdersArgs = {
  sortBy?: Maybe<OrderSortingInput>;
  filter?: Maybe<OrderDraftFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryExportFileArgs = {
  id: Scalars['ID'];
};


export type QueryExportFilesArgs = {
  filter?: Maybe<ExportFileFilterInput>;
  sortBy?: Maybe<ExportFileSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGiftCardArgs = {
  id: Scalars['ID'];
};


export type QueryGiftCardTagsArgs = {
  filter?: Maybe<GiftCardTagFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGiftCardsArgs = {
  sortBy?: Maybe<GiftCardSortingInput>;
  filter?: Maybe<GiftCardFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryHomepageEventsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMenuArgs = {
  channel?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryMenuItemArgs = {
  id: Scalars['ID'];
  channel?: Maybe<Scalars['String']>;
};


export type QueryMenuItemsArgs = {
  channel?: Maybe<Scalars['String']>;
  sortBy?: Maybe<MenuItemSortingInput>;
  filter?: Maybe<MenuItemFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMenusArgs = {
  channel?: Maybe<Scalars['String']>;
  sortBy?: Maybe<MenuSortingInput>;
  filter?: Maybe<MenuFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryOrderArgs = {
  id?: Maybe<Scalars['ID']>;
  externalReference?: Maybe<Scalars['String']>;
};


export type QueryOrderByTokenArgs = {
  token: Scalars['UUID'];
};


export type QueryOrdersArgs = {
  sortBy?: Maybe<OrderSortingInput>;
  filter?: Maybe<OrderFilterInput>;
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryOrdersTotalArgs = {
  period?: Maybe<ReportingPeriod>;
  channel?: Maybe<Scalars['String']>;
};


export type QueryPageArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryPageTypeArgs = {
  id: Scalars['ID'];
};


export type QueryPageTypesArgs = {
  sortBy?: Maybe<PageTypeSortingInput>;
  filter?: Maybe<PageTypeFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPagesArgs = {
  sortBy?: Maybe<PageSortingInput>;
  filter?: Maybe<PageFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPaymentArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentsArgs = {
  filter?: Maybe<PaymentFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPermissionGroupArgs = {
  id: Scalars['ID'];
};


export type QueryPermissionGroupsArgs = {
  filter?: Maybe<PermissionGroupFilterInput>;
  sortBy?: Maybe<PermissionGroupSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPluginArgs = {
  id: Scalars['ID'];
};


export type QueryPluginsArgs = {
  filter?: Maybe<PluginFilterInput>;
  sortBy?: Maybe<PluginSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProductArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  externalReference?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
};


export type QueryProductTypeArgs = {
  id: Scalars['ID'];
};


export type QueryProductTypesArgs = {
  filter?: Maybe<ProductTypeFilterInput>;
  sortBy?: Maybe<ProductTypeSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProductVariantArgs = {
  id?: Maybe<Scalars['ID']>;
  sku?: Maybe<Scalars['String']>;
  externalReference?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
};


export type QueryProductVariantsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
  channel?: Maybe<Scalars['String']>;
  filter?: Maybe<ProductVariantFilterInput>;
  sortBy?: Maybe<ProductVariantSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProductsArgs = {
  filter?: Maybe<ProductFilterInput>;
  sortBy?: Maybe<ProductOrder>;
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryReportProductSalesArgs = {
  period: ReportingPeriod;
  channel: Scalars['String'];
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySaleArgs = {
  id: Scalars['ID'];
  channel?: Maybe<Scalars['String']>;
};


export type QuerySalesArgs = {
  filter?: Maybe<SaleFilterInput>;
  sortBy?: Maybe<SaleSortingInput>;
  query?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryShippingZoneArgs = {
  id: Scalars['ID'];
  channel?: Maybe<Scalars['String']>;
};


export type QueryShippingZonesArgs = {
  filter?: Maybe<ShippingZoneFilterInput>;
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryStaffUsersArgs = {
  filter?: Maybe<StaffUserInput>;
  sortBy?: Maybe<UserSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryStockArgs = {
  id: Scalars['ID'];
};


export type QueryStocksArgs = {
  filter?: Maybe<StockFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTaxClassArgs = {
  id: Scalars['ID'];
};


export type QueryTaxClassesArgs = {
  sortBy?: Maybe<TaxClassSortingInput>;
  filter?: Maybe<TaxClassFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTaxConfigurationArgs = {
  id: Scalars['ID'];
};


export type QueryTaxConfigurationsArgs = {
  filter?: Maybe<TaxConfigurationFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTaxCountryConfigurationArgs = {
  countryCode: CountryCode;
};


export type QueryTransactionArgs = {
  id: Scalars['ID'];
};


export type QueryTranslationArgs = {
  id: Scalars['ID'];
  kind: TranslatableKinds;
};


export type QueryTranslationsArgs = {
  kind: TranslatableKinds;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  externalReference?: Maybe<Scalars['String']>;
};


export type QueryVoucherArgs = {
  id: Scalars['ID'];
  channel?: Maybe<Scalars['String']>;
};


export type QueryVouchersArgs = {
  filter?: Maybe<VoucherFilterInput>;
  sortBy?: Maybe<VoucherSortingInput>;
  query?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryWarehouseArgs = {
  id?: Maybe<Scalars['ID']>;
  externalReference?: Maybe<Scalars['String']>;
};


export type QueryWarehousesArgs = {
  filter?: Maybe<WarehouseFilterInput>;
  sortBy?: Maybe<WarehouseSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryWebhookArgs = {
  id: Scalars['ID'];
};


export type QueryWebhookSamplePayloadArgs = {
  eventType: WebhookSampleEventTypeEnum;
};

/** Represents a reduced VAT rate for a particular type of goods. */
export type ReducedRate = {
  /** Reduced VAT rate in percent. */
  rate: Scalars['Float'];
  /** A type of goods. */
  rateType: Scalars['String'];
};

/** Refresh JWT token. Mutation tries to take refreshToken from the input. If it fails it will try to take `refreshToken` from the http-only cookie `refreshToken`. `csrfToken` is required when `refreshToken` is provided as a cookie. */
export type RefreshToken = {
  /** JWT token, required to authenticate. */
  token: Maybe<Scalars['String']>;
  /** A user instance. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

export type ReorderInput = {
  /** The ID of the item to move. */
  id: Scalars['ID'];
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type ReportingPeriod =
  | 'TODAY'
  | 'THIS_MONTH';

/**
 * Request email change of the logged in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type RequestEmailChange = {
  /** A user instance. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/** Sends an email with the account password modification link. */
export type RequestPasswordReset = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type Sale = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  type: SaleType;
  startDate: Scalars['DateTime'];
  endDate: Maybe<Scalars['DateTime']>;
  created: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  /** List of categories this sale applies to. */
  categories: Maybe<CategoryCountableConnection>;
  /**
   * List of collections this sale applies to.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  collections: Maybe<CollectionCountableConnection>;
  /**
   * List of products this sale applies to.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  products: Maybe<ProductCountableConnection>;
  /**
   * List of product variants this sale applies to.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  variants: Maybe<ProductVariantCountableConnection>;
  /** Returns translated sale fields for the given language code. */
  translation: Maybe<SaleTranslation>;
  /**
   * List of channels available for the sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  channelListings: Maybe<Array<SaleChannelListing>>;
  /** Sale value. */
  discountValue: Maybe<Scalars['Float']>;
  /** Currency code for sale. */
  currency: Maybe<Scalars['String']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SalePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SalePrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleMetafieldArgs = {
  key: Scalars['String'];
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleCategoriesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleCollectionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleProductsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleVariantsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Adds products, categories, collections to a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleAddCatalogues = {
  /** Sale of which catalogue IDs will be modified. */
  sale: Maybe<Sale>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
};

/**
 * Deletes sales.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
};

/** Represents sale channel listing. */
export type SaleChannelListing = Node & {
  id: Scalars['ID'];
  channel: Channel;
  discountValue: Scalars['Float'];
  currency: Scalars['String'];
};

export type SaleChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** The value of the discount. */
  discountValue: Scalars['PositiveDecimal'];
};

export type SaleChannelListingInput = {
  /** List of channels to which the sale should be assigned. */
  addChannels?: Maybe<Array<SaleChannelListingAddInput>>;
  /** List of channels from which the sale should be unassigned. */
  removeChannels?: Maybe<Array<Scalars['ID']>>;
};

/**
 * Manage sale's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleChannelListingUpdate = {
  /** An updated sale instance. */
  sale: Maybe<Sale>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
};

export type SaleCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<SaleCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type SaleCountableEdge = {
  /** The item at the end of the edge. */
  node: Sale;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Creates a new sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale: Maybe<Sale>;
};

/**
 * Event sent when new sale is created.
 *
 * Added in Saleor 3.2.
 */
export type SaleCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The sale the event relates to. */
  sale: Maybe<Sale>;
};


/**
 * Event sent when new sale is created.
 *
 * Added in Saleor 3.2.
 */
export type SaleCreatedSaleArgs = {
  channel?: Maybe<Scalars['String']>;
};

/**
 * Deletes a sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale: Maybe<Sale>;
};

/**
 * Event sent when sale is deleted.
 *
 * Added in Saleor 3.2.
 */
export type SaleDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The sale the event relates to. */
  sale: Maybe<Sale>;
};


/**
 * Event sent when sale is deleted.
 *
 * Added in Saleor 3.2.
 */
export type SaleDeletedSaleArgs = {
  channel?: Maybe<Scalars['String']>;
};

export type SaleFilterInput = {
  status?: Maybe<Array<DiscountStatusEnum>>;
  saleType?: Maybe<DiscountValueTypeEnum>;
  started?: Maybe<DateTimeRangeInput>;
  search?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataFilter>>;
  updatedAt?: Maybe<DateTimeRangeInput>;
};

export type SaleInput = {
  /** Voucher name. */
  name?: Maybe<Scalars['String']>;
  /** Fixed or percentage. */
  type?: Maybe<DiscountValueTypeEnum>;
  /** Value of the voucher. */
  value?: Maybe<Scalars['PositiveDecimal']>;
  /** Products related to the discount. */
  products?: Maybe<Array<Scalars['ID']>>;
  variants?: Maybe<Array<Scalars['ID']>>;
  /** Categories related to the discount. */
  categories?: Maybe<Array<Scalars['ID']>>;
  /** Collections related to the discount. */
  collections?: Maybe<Array<Scalars['ID']>>;
  /** Start date of the voucher in ISO 8601 format. */
  startDate?: Maybe<Scalars['DateTime']>;
  /** End date of the voucher in ISO 8601 format. */
  endDate?: Maybe<Scalars['DateTime']>;
};

/**
 * Removes products, categories, collections from a sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleRemoveCatalogues = {
  /** Sale of which catalogue IDs will be modified. */
  sale: Maybe<Sale>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
};

export type SaleSortField =
  /** Sort sales by name. */
  | 'NAME'
  /** Sort sales by start date. */
  | 'START_DATE'
  /** Sort sales by end date. */
  | 'END_DATE'
  /**
   * Sort sales by value.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'VALUE'
  /** Sort sales by type. */
  | 'TYPE'
  /** Sort sales by created at. */
  | 'CREATED_AT'
  /** Sort sales by last modified at. */
  | 'LAST_MODIFIED_AT';

export type SaleSortingInput = {
  /** Specifies the direction in which to sort sales. */
  direction: OrderDirection;
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: Maybe<Scalars['String']>;
  /** Sort sales by the selected field. */
  field: SaleSortField;
};

/**
 * The event informs about the start or end of the sale.
 *
 * Added in Saleor 3.5.
 */
export type SaleToggle = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /**
   * The sale the event relates to.
   *
   * Added in Saleor 3.5.
   */
  sale: Maybe<Sale>;
};


/**
 * The event informs about the start or end of the sale.
 *
 * Added in Saleor 3.5.
 */
export type SaleToggleSaleArgs = {
  channel?: Maybe<Scalars['String']>;
};

export type SaleTranslatableContent = Node & {
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Returns translated sale fields for the given language code. */
  translation: Maybe<SaleTranslation>;
  /**
   * Sales allow creating discounts for categories, collections or products and are visible to all the customers.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  sale: Maybe<Sale>;
};


export type SaleTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a sale.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type SaleTranslate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
  errors: Array<TranslationError>;
  sale: Maybe<Sale>;
};

export type SaleTranslation = Node & {
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Maybe<Scalars['String']>;
};

export type SaleType =
  | 'FIXED'
  | 'PERCENTAGE';

/**
 * Updates a sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale: Maybe<Sale>;
};

/**
 * Event sent when sale is updated.
 *
 * Added in Saleor 3.2.
 */
export type SaleUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The sale the event relates to. */
  sale: Maybe<Sale>;
};


/**
 * Event sent when sale is updated.
 *
 * Added in Saleor 3.2.
 */
export type SaleUpdatedSaleArgs = {
  channel?: Maybe<Scalars['String']>;
};

/** Represents a custom attribute. */
export type SelectedAttribute = {
  /** Name of an attribute displayed in the interface. */
  attribute: Attribute;
  /** Values of an attribute. */
  values: Array<AttributeValue>;
};

export type SeoInput = {
  /** SEO title. */
  title?: Maybe<Scalars['String']>;
  /** SEO description. */
  description?: Maybe<Scalars['String']>;
};

/** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
export type SetPassword = {
  /** JWT token, required to authenticate. */
  token: Maybe<Scalars['String']>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken: Maybe<Scalars['String']>;
  /** CSRF token required to re-generate access token. */
  csrfToken: Maybe<Scalars['String']>;
  /** A user instance. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

export type ShippingError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ShippingErrorCode;
  /** List of warehouse IDs which causes the error. */
  warehouses: Maybe<Array<Scalars['ID']>>;
  /** List of channels IDs which causes the error. */
  channels: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export type ShippingErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'MAX_LESS_THAN_MIN'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'DUPLICATED_INPUT_ITEM';

/**
 * List shipping methods for checkout.
 *
 * Added in Saleor 3.6.
 */
export type ShippingListMethodsForCheckout = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The checkout the event relates to. */
  checkout: Maybe<Checkout>;
  /**
   * Shipping methods that can be used with this checkout.
   *
   * Added in Saleor 3.6.
   */
  shippingMethods: Maybe<Array<ShippingMethod>>;
};

/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethod = Node & ObjectWithMetadata & {
  /** Unique ID of ShippingMethod available for Order. */
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /** Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything. */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  metafield: Maybe<Scalars['String']>;
  /** Public metadata. Use `keys` to control which fields you want to include. The default is to include everything. */
  metafields: Maybe<Scalars['Metadata']>;
  /**
   * Type of the shipping method.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  type: Maybe<ShippingMethodTypeEnum>;
  /** Shipping method name. */
  name: Scalars['String'];
  /**
   * Shipping method description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description: Maybe<Scalars['JSONString']>;
  /** Maximum delivery days for this shipping method. */
  maximumDeliveryDays: Maybe<Scalars['Int']>;
  /** Minimum delivery days for this shipping method. */
  minimumDeliveryDays: Maybe<Scalars['Int']>;
  /**
   * Maximum order weight for this shipping method.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  maximumOrderWeight: Maybe<Weight>;
  /**
   * Minimum order weight for this shipping method.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  minimumOrderWeight: Maybe<Weight>;
  /** Returns translated shipping method fields for the given language code. */
  translation: Maybe<ShippingMethodTranslation>;
  /** The price of selected shipping method. */
  price: Money;
  /** Maximum order price for this shipping method. */
  maximumOrderPrice: Maybe<Money>;
  /** Minimal order price for this shipping method. */
  minimumOrderPrice: Maybe<Money>;
  /** Describes if this shipping method is active and can be selected. */
  active: Scalars['Boolean'];
  /** Message connected to this shipping method. */
  message: Maybe<Scalars['String']>;
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodMetafieldArgs = {
  key: Scalars['String'];
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Represents shipping method channel listing. */
export type ShippingMethodChannelListing = Node & {
  id: Scalars['ID'];
  channel: Channel;
  maximumOrderPrice: Maybe<Money>;
  minimumOrderPrice: Maybe<Money>;
  price: Maybe<Money>;
};

export type ShippingMethodChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** Shipping price of the shipping method in this channel. */
  price?: Maybe<Scalars['PositiveDecimal']>;
  /** Minimum order price to use this shipping method. */
  minimumOrderPrice?: Maybe<Scalars['PositiveDecimal']>;
  /** Maximum order price to use this shipping method. */
  maximumOrderPrice?: Maybe<Scalars['PositiveDecimal']>;
};

export type ShippingMethodChannelListingInput = {
  /** List of channels to which the shipping method should be assigned. */
  addChannels?: Maybe<Array<ShippingMethodChannelListingAddInput>>;
  /** List of channels from which the shipping method should be unassigned. */
  removeChannels?: Maybe<Array<Scalars['ID']>>;
};

/**
 * Manage shipping method's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingMethodChannelListingUpdate = {
  /** An updated shipping method instance. */
  shippingMethod: Maybe<ShippingMethodType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  errors: Array<ShippingError>;
};

/** Represents shipping method postal code rule. */
export type ShippingMethodPostalCodeRule = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Start address range. */
  start: Maybe<Scalars['String']>;
  /** End address range. */
  end: Maybe<Scalars['String']>;
  /** Inclusion type of the postal code rule. */
  inclusionType: Maybe<PostalCodeRuleInclusionTypeEnum>;
};

export type ShippingMethodTranslatableContent = Node & {
  id: Scalars['ID'];
  name: Scalars['String'];
  /**
   * Description of the shipping method.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description: Maybe<Scalars['JSONString']>;
  /** Returns translated shipping method fields for the given language code. */
  translation: Maybe<ShippingMethodTranslation>;
  /**
   * Shipping method are the methods you'll use to get customer's orders  to them. They are directly exposed to the customers.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  shippingMethod: Maybe<ShippingMethodType>;
};


export type ShippingMethodTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ShippingMethodTranslation = Node & {
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Maybe<Scalars['String']>;
  /**
   * Translated description of the shipping method.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description: Maybe<Scalars['JSONString']>;
};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodType = Node & ObjectWithMetadata & {
  /** Shipping method ID. */
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  /** Shipping method name. */
  name: Scalars['String'];
  /**
   * Shipping method description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description: Maybe<Scalars['JSONString']>;
  /** Type of the shipping method. */
  type: Maybe<ShippingMethodTypeEnum>;
  /** Returns translated shipping method fields for the given language code. */
  translation: Maybe<ShippingMethodTranslation>;
  /**
   * List of channels available for the method.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  channelListings: Maybe<Array<ShippingMethodChannelListing>>;
  /** The price of the cheapest variant (including discounts). */
  maximumOrderPrice: Maybe<Money>;
  /** The price of the cheapest variant (including discounts). */
  minimumOrderPrice: Maybe<Money>;
  /** Postal code ranges rule of exclusion or inclusion of the shipping method. */
  postalCodeRules: Maybe<Array<ShippingMethodPostalCodeRule>>;
  /**
   * List of excluded products for the shipping method.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  excludedProducts: Maybe<ProductCountableConnection>;
  /** Minimum order weight to use this shipping method. */
  minimumOrderWeight: Maybe<Weight>;
  /** Maximum order weight to use this shipping method. */
  maximumOrderWeight: Maybe<Weight>;
  /** Maximum number of days for delivery. */
  maximumDeliveryDays: Maybe<Scalars['Int']>;
  /** Minimal number of days for delivery. */
  minimumDeliveryDays: Maybe<Scalars['Int']>;
  /**
   * Tax class assigned to this shipping method.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxClass: Maybe<TaxClass>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypePrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeMetafieldArgs = {
  key: Scalars['String'];
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeTranslationArgs = {
  languageCode: LanguageCodeEnum;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeExcludedProductsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export type ShippingMethodTypeEnum =
  | 'PRICE'
  | 'WEIGHT';

/**
 * List of shipping methods available for the country.
 *
 * Added in Saleor 3.6.
 */
export type ShippingMethodsPerCountry = {
  /** The country code. */
  countryCode: CountryCode;
  /** List of available shipping methods. */
  shippingMethods: Maybe<Array<ShippingMethod>>;
};

export type ShippingPostalCodeRulesCreateInputRange = {
  /** Start range of the postal code. */
  start: Scalars['String'];
  /** End range of the postal code. */
  end?: Maybe<Scalars['String']>;
};

/**
 * Deletes shipping prices.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  errors: Array<ShippingError>;
};

/**
 * Creates a new shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceCreate = {
  /** A shipping zone to which the shipping method belongs. */
  shippingZone: Maybe<ShippingZone>;
  shippingMethod: Maybe<ShippingMethodType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  errors: Array<ShippingError>;
};

/**
 * Event sent when new shipping price is created.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The shipping method the event relates to. */
  shippingMethod: Maybe<ShippingMethodType>;
  /** The shipping zone the shipping method belongs to. */
  shippingZone: Maybe<ShippingZone>;
};


/**
 * Event sent when new shipping price is created.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceCreatedShippingMethodArgs = {
  channel?: Maybe<Scalars['String']>;
};


/**
 * Event sent when new shipping price is created.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceCreatedShippingZoneArgs = {
  channel?: Maybe<Scalars['String']>;
};

/**
 * Deletes a shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceDelete = {
  /** A shipping method to delete. */
  shippingMethod: Maybe<ShippingMethodType>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone: Maybe<ShippingZone>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  errors: Array<ShippingError>;
};

/**
 * Event sent when shipping price is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The shipping method the event relates to. */
  shippingMethod: Maybe<ShippingMethodType>;
  /** The shipping zone the shipping method belongs to. */
  shippingZone: Maybe<ShippingZone>;
};


/**
 * Event sent when shipping price is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceDeletedShippingMethodArgs = {
  channel?: Maybe<Scalars['String']>;
};


/**
 * Event sent when shipping price is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceDeletedShippingZoneArgs = {
  channel?: Maybe<Scalars['String']>;
};

/**
 * Exclude products from shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceExcludeProducts = {
  /** A shipping method with new list of excluded products. */
  shippingMethod: Maybe<ShippingMethodType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  errors: Array<ShippingError>;
};

export type ShippingPriceExcludeProductsInput = {
  /** List of products which will be excluded. */
  products: Array<Scalars['ID']>;
};

export type ShippingPriceInput = {
  /** Name of the shipping method. */
  name?: Maybe<Scalars['String']>;
  /** Shipping method description. */
  description?: Maybe<Scalars['JSONString']>;
  /** Minimum order weight to use this shipping method. */
  minimumOrderWeight?: Maybe<Scalars['WeightScalar']>;
  /** Maximum order weight to use this shipping method. */
  maximumOrderWeight?: Maybe<Scalars['WeightScalar']>;
  /** Maximum number of days for delivery. */
  maximumDeliveryDays?: Maybe<Scalars['Int']>;
  /** Minimal number of days for delivery. */
  minimumDeliveryDays?: Maybe<Scalars['Int']>;
  /** Shipping type: price or weight based. */
  type?: Maybe<ShippingMethodTypeEnum>;
  /** Shipping zone this method belongs to. */
  shippingZone?: Maybe<Scalars['ID']>;
  /** Postal code rules to add. */
  addPostalCodeRules?: Maybe<Array<ShippingPostalCodeRulesCreateInputRange>>;
  /** Postal code rules to delete. */
  deletePostalCodeRules?: Maybe<Array<Scalars['ID']>>;
  /** Inclusion type for currently assigned postal code rules. */
  inclusionType?: Maybe<PostalCodeRuleInclusionTypeEnum>;
  /** ID of a tax class to assign to this shipping method. If not provided, the default tax class will be used. */
  taxClass?: Maybe<Scalars['ID']>;
};

/**
 * Remove product from excluded list for shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceRemoveProductFromExclude = {
  /** A shipping method with new list of excluded products. */
  shippingMethod: Maybe<ShippingMethodType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  errors: Array<ShippingError>;
};

/**
 * Creates/updates translations for a shipping method.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ShippingPriceTranslate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
  errors: Array<TranslationError>;
  shippingMethod: Maybe<ShippingMethodType>;
};

export type ShippingPriceTranslationInput = {
  name?: Maybe<Scalars['String']>;
  /**
   * Translated shipping method description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']>;
};

/**
 * Updates a new shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceUpdate = {
  /** A shipping zone to which the shipping method belongs. */
  shippingZone: Maybe<ShippingZone>;
  shippingMethod: Maybe<ShippingMethodType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  errors: Array<ShippingError>;
};

/**
 * Event sent when shipping price is updated.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The shipping method the event relates to. */
  shippingMethod: Maybe<ShippingMethodType>;
  /** The shipping zone the shipping method belongs to. */
  shippingZone: Maybe<ShippingZone>;
};


/**
 * Event sent when shipping price is updated.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceUpdatedShippingMethodArgs = {
  channel?: Maybe<Scalars['String']>;
};


/**
 * Event sent when shipping price is updated.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceUpdatedShippingZoneArgs = {
  channel?: Maybe<Scalars['String']>;
};

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZone = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  default: Scalars['Boolean'];
  /** Lowest and highest prices for the shipping. */
  priceRange: Maybe<MoneyRange>;
  /** List of countries available for the method. */
  countries: Array<CountryDisplay>;
  /** List of shipping methods available for orders shipped to countries within this shipping zone. */
  shippingMethods: Maybe<Array<ShippingMethodType>>;
  /** List of warehouses for shipping zone. */
  warehouses: Array<Warehouse>;
  /** List of channels for shipping zone. */
  channels: Array<Channel>;
  /** Description of a shipping zone. */
  description: Maybe<Scalars['String']>;
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZonePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZonePrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZoneMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZoneMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};

/**
 * Deletes shipping zones.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  errors: Array<ShippingError>;
};

export type ShippingZoneCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<ShippingZoneCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type ShippingZoneCountableEdge = {
  /** The item at the end of the edge. */
  node: ShippingZone;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Creates a new shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  errors: Array<ShippingError>;
  shippingZone: Maybe<ShippingZone>;
};

export type ShippingZoneCreateInput = {
  /** Shipping zone's name. Visible only to the staff. */
  name?: Maybe<Scalars['String']>;
  /** Description of the shipping zone. */
  description?: Maybe<Scalars['String']>;
  /** List of countries in this shipping zone. */
  countries?: Maybe<Array<Scalars['String']>>;
  /** Default shipping zone will be used for countries not covered by other zones. */
  default?: Maybe<Scalars['Boolean']>;
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: Maybe<Array<Scalars['ID']>>;
  /** List of channels to assign to the shipping zone. */
  addChannels?: Maybe<Array<Scalars['ID']>>;
};

/**
 * Event sent when new shipping zone is created.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The shipping zone the event relates to. */
  shippingZone: Maybe<ShippingZone>;
};


/**
 * Event sent when new shipping zone is created.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneCreatedShippingZoneArgs = {
  channel?: Maybe<Scalars['String']>;
};

/**
 * Deletes a shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  errors: Array<ShippingError>;
  shippingZone: Maybe<ShippingZone>;
};

/**
 * Event sent when shipping zone is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The shipping zone the event relates to. */
  shippingZone: Maybe<ShippingZone>;
};


/**
 * Event sent when shipping zone is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneDeletedShippingZoneArgs = {
  channel?: Maybe<Scalars['String']>;
};

export type ShippingZoneFilterInput = {
  search?: Maybe<Scalars['String']>;
  channels?: Maybe<Array<Scalars['ID']>>;
};

/**
 * Event sent when shipping zone metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ShippingZoneMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The shipping zone the event relates to. */
  shippingZone: Maybe<ShippingZone>;
};


/**
 * Event sent when shipping zone metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ShippingZoneMetadataUpdatedShippingZoneArgs = {
  channel?: Maybe<Scalars['String']>;
};

/**
 * Updates a new shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  errors: Array<ShippingError>;
  shippingZone: Maybe<ShippingZone>;
};

export type ShippingZoneUpdateInput = {
  /** Shipping zone's name. Visible only to the staff. */
  name?: Maybe<Scalars['String']>;
  /** Description of the shipping zone. */
  description?: Maybe<Scalars['String']>;
  /** List of countries in this shipping zone. */
  countries?: Maybe<Array<Scalars['String']>>;
  /** Default shipping zone will be used for countries not covered by other zones. */
  default?: Maybe<Scalars['Boolean']>;
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: Maybe<Array<Scalars['ID']>>;
  /** List of channels to assign to the shipping zone. */
  addChannels?: Maybe<Array<Scalars['ID']>>;
  /** List of warehouses to unassign from a shipping zone */
  removeWarehouses?: Maybe<Array<Scalars['ID']>>;
  /** List of channels to unassign from the shipping zone. */
  removeChannels?: Maybe<Array<Scalars['ID']>>;
};

/**
 * Event sent when shipping zone is updated.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The shipping zone the event relates to. */
  shippingZone: Maybe<ShippingZone>;
};


/**
 * Event sent when shipping zone is updated.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneUpdatedShippingZoneArgs = {
  channel?: Maybe<Scalars['String']>;
};

/** Represents a shop resource containing general shop data and configuration. */
export type Shop = {
  /** List of available payment gateways. */
  availablePaymentGateways: Array<PaymentGateway>;
  /** List of available external authentications. */
  availableExternalAuthentications: Array<ExternalAuthentication>;
  /** Shipping methods that are available for the shop. */
  availableShippingMethods: Maybe<Array<ShippingMethod>>;
  /**
   * List of all currencies supported by shop's channels.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  channelCurrencies: Array<Scalars['String']>;
  /** List of countries available in the shop. */
  countries: Array<CountryDisplay>;
  /** Shop's default country. */
  defaultCountry: Maybe<CountryDisplay>;
  /**
   * Default shop's email sender's name.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  defaultMailSenderName: Maybe<Scalars['String']>;
  /**
   * Default shop's email sender's address.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  defaultMailSenderAddress: Maybe<Scalars['String']>;
  /** Shop's description. */
  description: Maybe<Scalars['String']>;
  /** Shop's domain data. */
  domain: Domain;
  /** List of the shops's supported languages. */
  languages: Array<LanguageDisplay>;
  /** Shop's name. */
  name: Scalars['String'];
  /** List of available permissions. */
  permissions: Array<Permission>;
  /** List of possible phone prefixes. */
  phonePrefixes: Array<Scalars['String']>;
  /** Header text. */
  headerText: Maybe<Scalars['String']>;
  /**
   * Automatically approve all new fulfillments.
   *
   * Added in Saleor 3.1.
   */
  fulfillmentAutoApprove: Scalars['Boolean'];
  /**
   * Allow to approve fulfillments which are unpaid.
   *
   * Added in Saleor 3.1.
   */
  fulfillmentAllowUnpaid: Scalars['Boolean'];
  /** Enable inventory tracking. */
  trackInventoryByDefault: Maybe<Scalars['Boolean']>;
  /** Default weight unit. */
  defaultWeightUnit: Maybe<WeightUnitsEnum>;
  /** Returns translated shop fields for the given language code. */
  translation: Maybe<ShopTranslation>;
  /**
   * Enable automatic fulfillment for all digital products.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  automaticFulfillmentDigitalProducts: Maybe<Scalars['Boolean']>;
  /**
   * Default number of minutes stock will be reserved for anonymous checkout or null when stock reservation is disabled.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  reserveStockDurationAnonymousUser: Maybe<Scalars['Int']>;
  /**
   * Default number of minutes stock will be reserved for authenticated checkout or null when stock reservation is disabled.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  reserveStockDurationAuthenticatedUser: Maybe<Scalars['Int']>;
  /**
   * Default number of maximum line quantity in single checkout (per single checkout line).
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  limitQuantityPerCheckout: Maybe<Scalars['Int']>;
  /**
   * Default number of max downloads per digital content URL.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  defaultDigitalMaxDownloads: Maybe<Scalars['Int']>;
  /**
   * Default number of days which digital content URL will be valid.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  defaultDigitalUrlValidDays: Maybe<Scalars['Int']>;
  /** Company address. */
  companyAddress: Maybe<Address>;
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl: Maybe<Scalars['String']>;
  /**
   * List of staff notification recipients.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  staffNotificationRecipients: Maybe<Array<StaffNotificationRecipient>>;
  /**
   * Determines if account confirmation by email is enabled.
   *
   * Added in Saleor 3.14.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  enableAccountConfirmationByEmail: Maybe<Scalars['Boolean']>;
  /**
   * Resource limitations and current usage if any set for a shop
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  limits: LimitInfo;
  /**
   * Saleor API version.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  version: Scalars['String'];
  /**
   * Minor Saleor API version.
   *
   * Added in Saleor 3.5.
   */
  schemaVersion: Scalars['String'];
  /**
   * Include taxes in prices.
   * @deprecated This field will be removed in Saleor 4.0. Use `Channel.taxConfiguration.pricesEnteredWithTax` to determine whether prices are entered with tax.
   */
  includeTaxesInPrices: Scalars['Boolean'];
  /**
   * Display prices with tax in store.
   * @deprecated This field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` to determine whether to display gross or net prices.
   */
  displayGrossPrices: Scalars['Boolean'];
  /**
   * Charge taxes on shipping.
   * @deprecated This field will be removed in Saleor 4.0. Use `ShippingMethodType.taxClass` to determine whether taxes are calculated for shipping methods; if a tax class is set, the taxes will be calculated, otherwise no tax rate will be applied.
   */
  chargeTaxesOnShipping: Scalars['Boolean'];
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopAvailablePaymentGatewaysArgs = {
  currency?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopAvailableShippingMethodsArgs = {
  channel: Scalars['String'];
  address?: Maybe<AddressInput>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopCountriesArgs = {
  languageCode?: Maybe<LanguageCodeEnum>;
  filter?: Maybe<CountryFilterInput>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Update the shop's address. If the `null` value is passed, the currently selected address will be deleted.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopAddressUpdate = {
  /** Updated shop. */
  shop: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  errors: Array<ShopError>;
};

/**
 * Updates site domain of the shop.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopDomainUpdate = {
  /** Updated shop. */
  shop: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  errors: Array<ShopError>;
};

export type ShopError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ShopErrorCode;
};

/** An enumeration. */
export type ShopErrorCode =
  | 'ALREADY_EXISTS'
  | 'CANNOT_FETCH_TAX_RATES'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

/**
 * Fetch tax rates.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopFetchTaxRates = {
  /** Updated shop. */
  shop: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  errors: Array<ShopError>;
};

export type ShopSettingsInput = {
  /** Header text. */
  headerText?: Maybe<Scalars['String']>;
  /** SEO description. */
  description?: Maybe<Scalars['String']>;
  /** Enable inventory tracking. */
  trackInventoryByDefault?: Maybe<Scalars['Boolean']>;
  /** Default weight unit. */
  defaultWeightUnit?: Maybe<WeightUnitsEnum>;
  /** Enable automatic fulfillment for all digital products. */
  automaticFulfillmentDigitalProducts?: Maybe<Scalars['Boolean']>;
  /**
   * Enable automatic approval of all new fulfillments.
   *
   * Added in Saleor 3.1.
   */
  fulfillmentAutoApprove?: Maybe<Scalars['Boolean']>;
  /**
   * Enable ability to approve fulfillments which are unpaid.
   *
   * Added in Saleor 3.1.
   */
  fulfillmentAllowUnpaid?: Maybe<Scalars['Boolean']>;
  /** Default number of max downloads per digital content URL. */
  defaultDigitalMaxDownloads?: Maybe<Scalars['Int']>;
  /** Default number of days which digital content URL will be valid. */
  defaultDigitalUrlValidDays?: Maybe<Scalars['Int']>;
  /** Default email sender's name. */
  defaultMailSenderName?: Maybe<Scalars['String']>;
  /** Default email sender's address. */
  defaultMailSenderAddress?: Maybe<Scalars['String']>;
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl?: Maybe<Scalars['String']>;
  /**
   * Default number of minutes stock will be reserved for anonymous checkout. Enter 0 or null to disable.
   *
   * Added in Saleor 3.1.
   */
  reserveStockDurationAnonymousUser?: Maybe<Scalars['Int']>;
  /**
   * Default number of minutes stock will be reserved for authenticated checkout. Enter 0 or null to disable.
   *
   * Added in Saleor 3.1.
   */
  reserveStockDurationAuthenticatedUser?: Maybe<Scalars['Int']>;
  /**
   * Default number of maximum line quantity in single checkout. Minimum possible value is 1, default value is 50.
   *
   * Added in Saleor 3.1.
   */
  limitQuantityPerCheckout?: Maybe<Scalars['Int']>;
  /**
   * Enable automatic account confirmation by email.
   *
   * Added in Saleor 3.14.
   */
  enableAccountConfirmationByEmail?: Maybe<Scalars['Boolean']>;
  /**
   * Include taxes in prices.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `taxConfigurationUpdate` mutation to configure this setting per channel or country.
   */
  includeTaxesInPrices?: Maybe<Scalars['Boolean']>;
  /**
   * Display prices with tax in store.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `taxConfigurationUpdate` mutation to configure this setting per channel or country.
   */
  displayGrossPrices?: Maybe<Scalars['Boolean']>;
  /**
   * Charge taxes on shipping.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. To enable taxes for a shipping method, assign a tax class to the shipping method with `shippingPriceCreate` or `shippingPriceUpdate` mutations.
   */
  chargeTaxesOnShipping?: Maybe<Scalars['Boolean']>;
};

/**
 * Creates/updates translations for shop settings.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ShopSettingsTranslate = {
  /** Updated shop settings. */
  shop: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
  errors: Array<TranslationError>;
};

export type ShopSettingsTranslationInput = {
  headerText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/**
 * Updates shop settings.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopSettingsUpdate = {
  /** Updated shop. */
  shop: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  errors: Array<ShopError>;
};

export type ShopTranslation = Node & {
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  headerText: Scalars['String'];
  description: Scalars['String'];
};

export type SiteDomainInput = {
  /** Domain name for shop. */
  domain?: Maybe<Scalars['String']>;
  /** Shop site name. */
  name?: Maybe<Scalars['String']>;
};

/**
 * Deletes staff users. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type StaffBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
  errors: Array<StaffError>;
};

/**
 * Creates a new staff user. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type StaffCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
  errors: Array<StaffError>;
  user: Maybe<User>;
};

/** Fields required to create a staff user. */
export type StaffCreateInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** The unique email address of the user. */
  email?: Maybe<Scalars['String']>;
  /** User account is active. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** A note about the user. */
  note?: Maybe<Scalars['String']>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: Maybe<Array<MetadataInput>>;
  /**
   * Fields required to update the user private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: Maybe<Array<MetadataInput>>;
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: Maybe<Array<Scalars['ID']>>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: Maybe<Scalars['String']>;
};

/**
 * Event sent when new staff user is created.
 *
 * Added in Saleor 3.5.
 */
export type StaffCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The user the event relates to. */
  user: Maybe<User>;
};

/**
 * Deletes a staff user. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type StaffDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
  errors: Array<StaffError>;
  user: Maybe<User>;
};

/**
 * Event sent when staff user is deleted.
 *
 * Added in Saleor 3.5.
 */
export type StaffDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The user the event relates to. */
  user: Maybe<User>;
};

export type StaffError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: AccountErrorCode;
  /** A type of address that causes the error. */
  addressType: Maybe<AddressTypeEnum>;
  /** List of permissions which causes the error. */
  permissions: Maybe<Array<PermissionEnum>>;
  /** List of permission group IDs which cause the error. */
  groups: Maybe<Array<Scalars['ID']>>;
  /** List of user IDs which causes the error. */
  users: Maybe<Array<Scalars['ID']>>;
};

/** Represents status of a staff account. */
export type StaffMemberStatus =
  /** User account has been activated. */
  | 'ACTIVE'
  /** User account has not been activated yet. */
  | 'DEACTIVATED';

/** Represents a recipient of email notifications send by Saleor, such as notifications about new orders. Notifications can be assigned to staff users or arbitrary email addresses. */
export type StaffNotificationRecipient = Node & {
  id: Scalars['ID'];
  /** Returns a user subscribed to email notifications. */
  user: Maybe<User>;
  /** Returns email address of a user subscribed to email notifications. */
  email: Maybe<Scalars['String']>;
  /** Determines if a notification active. */
  active: Maybe<Scalars['Boolean']>;
};

/**
 * Creates a new staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type StaffNotificationRecipientCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  errors: Array<ShopError>;
  staffNotificationRecipient: Maybe<StaffNotificationRecipient>;
};

/**
 * Delete staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type StaffNotificationRecipientDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  errors: Array<ShopError>;
  staffNotificationRecipient: Maybe<StaffNotificationRecipient>;
};

export type StaffNotificationRecipientInput = {
  /** The ID of the user subscribed to email notifications.. */
  user?: Maybe<Scalars['ID']>;
  /** Email address of a user subscribed to email notifications. */
  email?: Maybe<Scalars['String']>;
  /** Determines if a notification active. */
  active?: Maybe<Scalars['Boolean']>;
};

/**
 * Updates a staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type StaffNotificationRecipientUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  errors: Array<ShopError>;
  staffNotificationRecipient: Maybe<StaffNotificationRecipient>;
};

/**
 * Updates an existing staff user. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type StaffUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
  errors: Array<StaffError>;
  user: Maybe<User>;
};

/** Fields required to update a staff user. */
export type StaffUpdateInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** The unique email address of the user. */
  email?: Maybe<Scalars['String']>;
  /** User account is active. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** A note about the user. */
  note?: Maybe<Scalars['String']>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: Maybe<Array<MetadataInput>>;
  /**
   * Fields required to update the user private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: Maybe<Array<MetadataInput>>;
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: Maybe<Array<Scalars['ID']>>;
  /** List of permission group IDs from which user should be unassigned. */
  removeGroups?: Maybe<Array<Scalars['ID']>>;
};

/**
 * Event sent when staff user is updated.
 *
 * Added in Saleor 3.5.
 */
export type StaffUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The user the event relates to. */
  user: Maybe<User>;
};

export type StaffUserInput = {
  status?: Maybe<StaffMemberStatus>;
  search?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Scalars['ID']>>;
};

/** Represents stock. */
export type Stock = Node & {
  id: Scalars['ID'];
  warehouse: Warehouse;
  productVariant: ProductVariant;
  /**
   * Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  quantity: Scalars['Int'];
  /**
   * Quantity allocated for orders.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  quantityAllocated: Scalars['Int'];
  /**
   * Quantity reserved for checkouts.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  quantityReserved: Scalars['Int'];
};

export type StockAvailability =
  | 'IN_STOCK'
  | 'OUT_OF_STOCK';

export type StockBulkResult = {
  /** Stock data. */
  stock: Maybe<Stock>;
  /** List of errors occurred on create or update attempt. */
  errors: Maybe<Array<StockBulkUpdateError>>;
};

/**
 * Updates stocks for a given variant and warehouse.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type StockBulkUpdate = {
  /** Returns how many objects were updated. */
  count: Scalars['Int'];
  /** List of the updated stocks. */
  results: Array<StockBulkResult>;
  errors: Array<StockBulkUpdateError>;
};

export type StockBulkUpdateError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: StockBulkUpdateErrorCode;
};

/** An enumeration. */
export type StockBulkUpdateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED';

export type StockBulkUpdateInput = {
  /** Variant ID. */
  variantId?: Maybe<Scalars['ID']>;
  /** Variant external reference. */
  variantExternalReference?: Maybe<Scalars['String']>;
  /** Warehouse ID. */
  warehouseId?: Maybe<Scalars['ID']>;
  /** Warehouse external reference. */
  warehouseExternalReference?: Maybe<Scalars['String']>;
  /** Quantity of items available for sell. */
  quantity: Scalars['Int'];
};

export type StockCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<StockCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type StockCountableEdge = {
  /** The item at the end of the edge. */
  node: Stock;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type StockError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: StockErrorCode;
};

/** An enumeration. */
export type StockErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type StockFilterInput = {
  quantity?: Maybe<Scalars['Float']>;
  search?: Maybe<Scalars['String']>;
};

export type StockInput = {
  /** Warehouse in which stock is located. */
  warehouse: Scalars['ID'];
  /** Quantity of items available for sell. */
  quantity: Scalars['Int'];
};

/**
 * Represents the channel stock settings.
 *
 * Added in Saleor 3.7.
 */
export type StockSettings = {
  /** Allocation strategy defines the preference of warehouses for allocations and reservations. */
  allocationStrategy: AllocationStrategyEnum;
};

export type StockSettingsInput = {
  /** Allocation strategy options. Strategy defines the preference of warehouses for allocations and reservations. */
  allocationStrategy: AllocationStrategyEnum;
};

export type StockUpdateInput = {
  /** Stock. */
  stock: Scalars['ID'];
  /** Quantity of items available for sell. */
  quantity: Scalars['Int'];
};

/** Enum representing the type of a payment storage in a gateway. */
export type StorePaymentMethodEnum =
  /** On session storage type. The payment is stored only to be reused when the customer is present in the checkout flow. */
  | 'ON_SESSION'
  /** Off session storage type. The payment is stored to be reused even if the customer is absent. */
  | 'OFF_SESSION'
  /** Storage is disabled. The payment is not stored. */
  | 'NONE';

/**
 * Define the filtering options for string fields.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type StringFilterInput = {
  /** The value equal to. */
  eq?: Maybe<Scalars['String']>;
  /** The value included in. */
  oneOf?: Maybe<Array<Scalars['String']>>;
};

export type Subscription = {
  /**
   * Look up subscription event.
   *
   * Added in Saleor 3.2.
   */
  event: Maybe<Event>;
};

export type TaxCalculationStrategy =
  | 'FLAT_RATES'
  | 'TAX_APP';

/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type TaxClass = Node & ObjectWithMetadata & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  /** Name of the tax class. */
  name: Scalars['String'];
  /** Country-specific tax rates for this tax class. */
  countries: Array<TaxClassCountryRate>;
};


/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type TaxClassPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type TaxClassPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type TaxClassMetafieldArgs = {
  key: Scalars['String'];
};


/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type TaxClassMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};

export type TaxClassCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<TaxClassCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type TaxClassCountableEdge = {
  /** The item at the end of the edge. */
  node: TaxClass;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Tax rate for a country. When tax class is null, it represents the default tax rate for that country; otherwise it's a country tax rate specific to the given tax class.
 *
 * Added in Saleor 3.9.
 */
export type TaxClassCountryRate = {
  /** Country in which this tax rate applies. */
  country: CountryDisplay;
  /** Tax rate value. */
  rate: Scalars['Float'];
  /** Related tax class. */
  taxClass: Maybe<TaxClass>;
};

/**
 * Create a tax class.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxClassCreate = {
  errors: Array<TaxClassCreateError>;
  taxClass: Maybe<TaxClass>;
};

export type TaxClassCreateError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: TaxClassCreateErrorCode;
  /** List of country codes for which the configuration is invalid. */
  countryCodes: Array<Scalars['String']>;
};

/** An enumeration. */
export type TaxClassCreateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

export type TaxClassCreateInput = {
  /** Name of the tax class. */
  name: Scalars['String'];
  /** List of country-specific tax rates to create for this tax class. */
  createCountryRates?: Maybe<Array<CountryRateInput>>;
};

/**
 * Delete a tax class. After deleting the tax class any products, product types or shipping methods using it are updated to use the default tax class.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxClassDelete = {
  errors: Array<TaxClassDeleteError>;
  taxClass: Maybe<TaxClass>;
};

export type TaxClassDeleteError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: TaxClassDeleteErrorCode;
};

/** An enumeration. */
export type TaxClassDeleteErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

export type TaxClassFilterInput = {
  metadata?: Maybe<Array<MetadataFilter>>;
  ids?: Maybe<Array<Scalars['ID']>>;
  countries?: Maybe<Array<CountryCode>>;
};

export type TaxClassRateInput = {
  /** ID of a tax class for which to update the tax rate */
  taxClassId?: Maybe<Scalars['ID']>;
  /** Tax rate value. */
  rate?: Maybe<Scalars['Float']>;
};

export type TaxClassSortField =
  /** Sort tax classes by name. */
  | 'NAME';

export type TaxClassSortingInput = {
  /** Specifies the direction in which to sort tax classes. */
  direction: OrderDirection;
  /** Sort tax classes by the selected field. */
  field: TaxClassSortField;
};

/**
 * Update a tax class.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxClassUpdate = {
  errors: Array<TaxClassUpdateError>;
  taxClass: Maybe<TaxClass>;
};

export type TaxClassUpdateError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: TaxClassUpdateErrorCode;
  /** List of country codes for which the configuration is invalid. */
  countryCodes: Array<Scalars['String']>;
};

/** An enumeration. */
export type TaxClassUpdateErrorCode =
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

export type TaxClassUpdateInput = {
  /** Name of the tax class. */
  name?: Maybe<Scalars['String']>;
  /** List of country-specific tax rates to create or update for this tax class. */
  updateCountryRates?: Maybe<Array<CountryRateUpdateInput>>;
  /** List of country codes for which to remove the tax class rates. Note: It removes all rates for given country code. */
  removeCountryRates?: Maybe<Array<CountryCode>>;
};

/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfiguration = Node & ObjectWithMetadata & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  /** A channel to which the tax configuration applies to. */
  channel: Channel;
  /** Determines whether taxes are charged in the given channel. */
  chargeTaxes: Scalars['Boolean'];
  /** The default strategy to use for tax calculation in the given channel. Taxes can be calculated either using user-defined flat rates or with a tax app. Empty value means that no method is selected and taxes are not calculated. */
  taxCalculationStrategy: Maybe<TaxCalculationStrategy>;
  /** Determines whether prices displayed in a storefront should include taxes. */
  displayGrossPrices: Scalars['Boolean'];
  /** Determines whether prices are entered with the tax included. */
  pricesEnteredWithTax: Scalars['Boolean'];
  /** List of country-specific exceptions in tax configuration. */
  countries: Array<TaxConfigurationPerCountry>;
};


/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfigurationPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfigurationPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfigurationMetafieldArgs = {
  key: Scalars['String'];
};


/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfigurationMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};

export type TaxConfigurationCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<TaxConfigurationCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type TaxConfigurationCountableEdge = {
  /** The item at the end of the edge. */
  node: TaxConfiguration;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type TaxConfigurationFilterInput = {
  metadata?: Maybe<Array<MetadataFilter>>;
  ids?: Maybe<Array<Scalars['ID']>>;
};

/**
 * Country-specific exceptions of a channel's tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfigurationPerCountry = {
  /** Country in which this configuration applies. */
  country: CountryDisplay;
  /** Determines whether taxes are charged in this country. */
  chargeTaxes: Scalars['Boolean'];
  /** A country-specific strategy to use for tax calculation. Taxes can be calculated either using user-defined flat rates or with a tax app. If not provided, use the value from the channel's tax configuration. */
  taxCalculationStrategy: Maybe<TaxCalculationStrategy>;
  /** Determines whether prices displayed in a storefront should include taxes for this country. */
  displayGrossPrices: Scalars['Boolean'];
};

export type TaxConfigurationPerCountryInput = {
  /** Country in which this configuration applies. */
  countryCode: CountryCode;
  /** Determines whether taxes are charged in this country. */
  chargeTaxes: Scalars['Boolean'];
  /** A country-specific strategy to use for tax calculation. Taxes can be calculated either using user-defined flat rates or with a tax app. If not provided, use the value from the channel's tax configuration. */
  taxCalculationStrategy?: Maybe<TaxCalculationStrategy>;
  /** Determines whether prices displayed in a storefront should include taxes for this country. */
  displayGrossPrices: Scalars['Boolean'];
};

/**
 * Update tax configuration for a channel.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxConfigurationUpdate = {
  errors: Array<TaxConfigurationUpdateError>;
  taxConfiguration: Maybe<TaxConfiguration>;
};

export type TaxConfigurationUpdateError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: TaxConfigurationUpdateErrorCode;
  /** List of country codes for which the configuration is invalid. */
  countryCodes: Array<Scalars['String']>;
};

/** An enumeration. */
export type TaxConfigurationUpdateErrorCode =
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

export type TaxConfigurationUpdateInput = {
  /** Determines whether taxes are charged in the given channel. */
  chargeTaxes?: Maybe<Scalars['Boolean']>;
  /** The default strategy to use for tax calculation in the given channel. Taxes can be calculated either using user-defined flat rates or with a tax app. Empty value means that no method is selected and taxes are not calculated. */
  taxCalculationStrategy?: Maybe<TaxCalculationStrategy>;
  /** Determines whether prices displayed in a storefront should include taxes. */
  displayGrossPrices?: Maybe<Scalars['Boolean']>;
  /** Determines whether prices are entered with the tax included. */
  pricesEnteredWithTax?: Maybe<Scalars['Boolean']>;
  /** List of tax country configurations to create or update (identified by a country code). */
  updateCountriesConfiguration?: Maybe<Array<TaxConfigurationPerCountryInput>>;
  /** List of country codes for which to remove the tax configuration. */
  removeCountriesConfiguration?: Maybe<Array<CountryCode>>;
};

/**
 * Tax class rates grouped by country.
 *
 * Added in Saleor 3.9.
 */
export type TaxCountryConfiguration = {
  /** A country for which tax class rates are grouped. */
  country: CountryDisplay;
  /** List of tax class rates. */
  taxClassCountryRates: Array<TaxClassCountryRate>;
};

/**
 * Remove all tax class rates for a specific country.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxCountryConfigurationDelete = {
  /** Updated tax class rates grouped by a country. */
  taxCountryConfiguration: Maybe<TaxCountryConfiguration>;
  errors: Array<TaxCountryConfigurationDeleteError>;
};

export type TaxCountryConfigurationDeleteError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: TaxCountryConfigurationDeleteErrorCode;
};

/** An enumeration. */
export type TaxCountryConfigurationDeleteErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

/**
 * Update tax class rates for a specific country.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxCountryConfigurationUpdate = {
  /** Updated tax class rates grouped by a country. */
  taxCountryConfiguration: Maybe<TaxCountryConfiguration>;
  errors: Array<TaxCountryConfigurationUpdateError>;
};

export type TaxCountryConfigurationUpdateError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: TaxCountryConfigurationUpdateErrorCode;
  /** List of tax class IDs for which the update failed. */
  taxClassIds: Array<Scalars['String']>;
};

/** An enumeration. */
export type TaxCountryConfigurationUpdateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'ONLY_ONE_DEFAULT_COUNTRY_RATE_ALLOWED'
  | 'CANNOT_CREATE_NEGATIVE_RATE';

/**
 * Exempt checkout or order from charging the taxes. When tax exemption is enabled, taxes won't be charged for the checkout or order. Taxes may still be calculated in cases when product prices are entered with the tax included and the net price needs to be known.
 *
 * Added in Saleor 3.8.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxExemptionManage = {
  taxableObject: Maybe<TaxSourceObject>;
  errors: Array<TaxExemptionManageError>;
};

export type TaxExemptionManageError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: TaxExemptionManageErrorCode;
};

/** An enumeration. */
export type TaxExemptionManageErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'NOT_EDITABLE_ORDER';

export type TaxSourceLine = CheckoutLine | OrderLine;

export type TaxSourceObject = Checkout | Order;

/** Representation of tax types fetched from tax gateway. */
export type TaxType = {
  /** Description of the tax type. */
  description: Maybe<Scalars['String']>;
  /** External tax code used to identify given tax group. */
  taxCode: Maybe<Scalars['String']>;
};

/** Taxable object. */
export type TaxableObject = {
  /** The source object related to this tax object. */
  sourceObject: TaxSourceObject;
  /** Determines if prices contain entered tax.. */
  pricesEnteredWithTax: Scalars['Boolean'];
  /** The currency of the object. */
  currency: Scalars['String'];
  /** The price of shipping method. */
  shippingPrice: Money;
  /** The address data. */
  address: Maybe<Address>;
  /** List of discounts. */
  discounts: Array<TaxableObjectDiscount>;
  /** List of lines assigned to the object. */
  lines: Array<TaxableObjectLine>;
  channel: Channel;
};

/** Taxable object discount. */
export type TaxableObjectDiscount = {
  /** The name of the discount. */
  name: Maybe<Scalars['String']>;
  /** The amount of the discount. */
  amount: Money;
};

export type TaxableObjectLine = {
  /** The source line related to this tax line. */
  sourceLine: TaxSourceLine;
  /** Number of items. */
  quantity: Scalars['Int'];
  /** Determines if taxes are being charged for the product. */
  chargeTaxes: Scalars['Boolean'];
  /** The product name. */
  productName: Scalars['String'];
  /** The variant name. */
  variantName: Scalars['String'];
  /** The product sku. */
  productSku: Maybe<Scalars['String']>;
  /** Price of the single item in the order line. */
  unitPrice: Money;
  /** Price of the order line. */
  totalPrice: Money;
};

/** Represents a monetary value with taxes. In cases where taxes were not applied, net and gross values will be equal. */
export type TaxedMoney = {
  /** Currency code. */
  currency: Scalars['String'];
  /** Amount of money including taxes. */
  gross: Money;
  /** Amount of money without taxes. */
  net: Money;
  /** Amount of taxes. */
  tax: Money;
};

/** Represents a range of monetary values. */
export type TaxedMoneyRange = {
  /** Lower bound of a price range. */
  start: Maybe<TaxedMoney>;
  /** Upper bound of a price range. */
  stop: Maybe<TaxedMoney>;
};

/**
 * Event sent when thumbnail is created.
 *
 * Added in Saleor 3.12.
 */
export type ThumbnailCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /**
   * Thumbnail id.
   *
   * Added in Saleor 3.12.
   */
  id: Maybe<Scalars['ID']>;
  /**
   * Thumbnail url.
   *
   * Added in Saleor 3.12.
   */
  url: Maybe<Scalars['String']>;
  /**
   * Object the thumbnail refers to.
   *
   * Added in Saleor 3.12.
   */
  objectId: Maybe<Scalars['ID']>;
  /**
   * Original media url.
   *
   * Added in Saleor 3.12.
   */
  mediaUrl: Maybe<Scalars['String']>;
};

/** An enumeration. */
export type ThumbnailFormatEnum =
  | 'ORIGINAL'
  | 'AVIF'
  | 'WEBP';

export type TimePeriod = {
  /** The length of the period. */
  amount: Scalars['Int'];
  /** The type of the period. */
  type: TimePeriodTypeEnum;
};

export type TimePeriodInputType = {
  /** The length of the period. */
  amount: Scalars['Int'];
  /** The type of the period. */
  type: TimePeriodTypeEnum;
};

/** An enumeration. */
export type TimePeriodTypeEnum =
  | 'DAY'
  | 'WEEK'
  | 'MONTH'
  | 'YEAR';

/** An object representing a single payment. */
export type Transaction = Node & {
  id: Scalars['ID'];
  created: Scalars['DateTime'];
  payment: Payment;
  token: Scalars['String'];
  kind: TransactionKind;
  isSuccess: Scalars['Boolean'];
  error: Maybe<Scalars['String']>;
  gatewayResponse: Scalars['JSONString'];
  /** Total amount of the transaction. */
  amount: Maybe<Money>;
};

export type TransactionAction = {
  /** Determines the action type. */
  actionType: TransactionActionEnum;
  /** Transaction request amount. Null when action type is VOID. */
  amount: Maybe<Scalars['PositiveDecimal']>;
};

/**
 * Represents possible actions on payment transaction.
 *
 *     The following actions are possible:
 *     CHARGE - Represents the charge action.
 *     REFUND - Represents a refund action.
 *     VOID - Represents a void action. This field will be removed
 *     in Saleor 3.14 (Preview Feature). Use `CANCEL` instead.
 *     CANCEL - Represents a cancel action. Added in Saleor 3.12.
 */
export type TransactionActionEnum =
  | 'CHARGE'
  | 'REFUND'
  | 'VOID'
  | 'CANCEL';

/**
 * Event sent when transaction action is requested.
 *
 * Added in Saleor 3.4.
 *
 * DEPRECATED: this subscription will be removed in Saleor 3.14 (Preview Feature). Use `TransactionChargeRequested`, `TransactionRefundRequested`, `TransactionCancelationRequested` instead.
 */
export type TransactionActionRequest = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** Look up a transaction. */
  transaction: Maybe<TransactionItem>;
  /** Requested action data. */
  action: TransactionAction;
};

/**
 * Event sent when transaction cancelation is requested.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionCancelationRequested = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** Look up a transaction. */
  transaction: Maybe<TransactionItem>;
  /** Requested action data. */
  action: TransactionAction;
};

/**
 * Event sent when transaction charge is requested.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionChargeRequested = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** Look up a transaction. */
  transaction: Maybe<TransactionItem>;
  /** Requested action data. */
  action: TransactionAction;
};

/**
 * Create transaction for checkout or order.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: HANDLE_PAYMENTS.
 */
export type TransactionCreate = {
  transaction: Maybe<TransactionItem>;
  errors: Array<TransactionCreateError>;
};

export type TransactionCreateError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: TransactionCreateErrorCode;
};

/** An enumeration. */
export type TransactionCreateErrorCode =
  | 'INVALID'
  | 'GRAPHQL_ERROR'
  | 'NOT_FOUND'
  | 'INCORRECT_CURRENCY'
  | 'METADATA_KEY_REQUIRED'
  | 'UNIQUE';

export type TransactionCreateInput = {
  /**
   * Status of the transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.14 (Preview Feature). The `status` is not needed. The amounts can be used to define the current status of transactions.
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Payment type used for this transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.14 (Preview Feature). Use `name` and `message` instead.
   */
  type?: Maybe<Scalars['String']>;
  /**
   * Payment name of the transaction.
   *
   * Added in Saleor 3.13.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The message of the transaction.
   *
   * Added in Saleor 3.13.
   */
  message?: Maybe<Scalars['String']>;
  /**
   * Reference of the transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.14 (Preview Feature). Use `pspReference` instead.
   */
  reference?: Maybe<Scalars['String']>;
  /**
   * PSP Reference of the transaction.
   *
   * Added in Saleor 3.13.
   */
  pspReference?: Maybe<Scalars['String']>;
  /** List of all possible actions for the transaction */
  availableActions?: Maybe<Array<TransactionActionEnum>>;
  /** Amount authorized by this transaction. */
  amountAuthorized?: Maybe<MoneyInput>;
  /** Amount charged by this transaction. */
  amountCharged?: Maybe<MoneyInput>;
  /** Amount refunded by this transaction. */
  amountRefunded?: Maybe<MoneyInput>;
  /**
   * Amount voided by this transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.14 (Preview Feature). Use `amountCanceled` instead.
   */
  amountVoided?: Maybe<MoneyInput>;
  /**
   * Amount canceled by this transaction.
   *
   * Added in Saleor 3.13.
   */
  amountCanceled?: Maybe<MoneyInput>;
  /** Payment public metadata. */
  metadata?: Maybe<Array<MetadataInput>>;
  /** Payment private metadata. */
  privateMetadata?: Maybe<Array<MetadataInput>>;
  /**
   * The url that will allow to redirect user to payment provider page with transaction event details.
   *
   * Added in Saleor 3.13.
   */
  externalUrl?: Maybe<Scalars['String']>;
};

/** Represents transaction's event. */
export type TransactionEvent = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  /**
   * Status of transaction's event.
   * @deprecated This field will be removed in Saleor 3.14 (Preview Feature). Use `type` instead.
   */
  status: Maybe<TransactionStatus>;
  /**
   * Reference of transaction's event.
   * @deprecated This field will be removed in Saleor 3.14 (Preview Feature).Use `pspReference` instead.
   */
  reference: Scalars['String'];
  /**
   * PSP reference of transaction.
   *
   * Added in Saleor 3.13.
   */
  pspReference: Scalars['String'];
  /**
   * Name of the transaction's event.
   * @deprecated This field will be removed in Saleor 3.14 (Preview Feature). Use `message` instead.
   */
  name: Maybe<Scalars['String']>;
  /**
   * Message related to the transaction's event.
   *
   * Added in Saleor 3.13.
   */
  message: Scalars['String'];
  /**
   * The url that will allow to redirect user to payment provider page with transaction details.
   *
   * Added in Saleor 3.13.
   */
  externalUrl: Scalars['String'];
  /**
   * The amount related to this event.
   *
   * Added in Saleor 3.13.
   */
  amount: Money;
  /**
   * The type of action related to this event.
   *
   * Added in Saleor 3.13.
   */
  type: Maybe<TransactionEventTypeEnum>;
  /**
   * User or App that created the transaction event.
   *
   * Added in Saleor 3.13.
   */
  createdBy: Maybe<UserOrApp>;
};

export type TransactionEventInput = {
  /**
   * Current status of the payment transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.14 (Preview Feature). Status will be calculated by Saleor.
   */
  status?: Maybe<TransactionStatus>;
  /**
   * Reference of the transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.14 (Preview Feature). Use `pspReference` instead.
   */
  reference?: Maybe<Scalars['String']>;
  /**
   * PSP Reference related to this action.
   *
   * Added in Saleor 3.13.
   */
  pspReference?: Maybe<Scalars['String']>;
  /**
   * Name of the transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.14 (Preview Feature). Use `message` instead. `name` field will be added to `message`.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The message related to the event.
   *
   * Added in Saleor 3.13.
   */
  message?: Maybe<Scalars['String']>;
};

/**
 * Report the event for the transaction.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires the following permissions: OWNER and HANDLE_PAYMENTS.
 */
export type TransactionEventReport = {
  /** Defines if the reported event hasn't been processed earlier. */
  alreadyProcessed: Maybe<Scalars['Boolean']>;
  /** The transaction related to the reported event. */
  transaction: Maybe<TransactionItem>;
  /** The event assigned to this report. if `alreadyProcessed` is set to `true`, the previously processed event will be returned. */
  transactionEvent: Maybe<TransactionEvent>;
  errors: Array<TransactionEventReportError>;
};

export type TransactionEventReportError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: TransactionEventReportErrorCode;
};

/** An enumeration. */
export type TransactionEventReportErrorCode =
  | 'INVALID'
  | 'GRAPHQL_ERROR'
  | 'NOT_FOUND'
  | 'INCORRECT_DETAILS'
  | 'ALREADY_EXISTS';

/**
 * Represents possible event types.
 *
 *     Added in Saleor 3.12.
 *
 *     The following types are possible:
 *     AUTHORIZATION_SUCCESS - represents success authorization.
 *     AUTHORIZATION_FAILURE - represents failure authorization.
 *     AUTHORIZATION_ADJUSTMENT - represents authorization adjustment.
 *     AUTHORIZATION_REQUEST - represents authorization request.
 *     AUTHORIZATION_ACTION_REQUIRED - represents authorization that needs
 *     additional actions from the customer.
 *     CHARGE_ACTION_REQUIRED - represents charge that needs
 *     additional actions from the customer.
 *     CHARGE_SUCCESS - represents success charge.
 *     CHARGE_FAILURE - represents failure charge.
 *     CHARGE_BACK - represents chargeback.
 *     CHARGE_REQUEST - represents charge request.
 *     REFUND_SUCCESS - represents success refund.
 *     REFUND_FAILURE - represents failure refund.
 *     REFUND_REVERSE - represents reverse refund.
 *     REFUND_REQUEST - represents refund request.
 *     CANCEL_SUCCESS - represents success cancel.
 *     CANCEL_FAILURE - represents failure cancel.
 *     CANCEL_REQUEST - represents cancel request.
 *     INFO - represents info event.
 */
export type TransactionEventTypeEnum =
  | 'AUTHORIZATION_SUCCESS'
  | 'AUTHORIZATION_FAILURE'
  | 'AUTHORIZATION_ADJUSTMENT'
  | 'AUTHORIZATION_REQUEST'
  | 'AUTHORIZATION_ACTION_REQUIRED'
  | 'CHARGE_ACTION_REQUIRED'
  | 'CHARGE_SUCCESS'
  | 'CHARGE_FAILURE'
  | 'CHARGE_BACK'
  | 'CHARGE_REQUEST'
  | 'REFUND_SUCCESS'
  | 'REFUND_FAILURE'
  | 'REFUND_REVERSE'
  | 'REFUND_REQUEST'
  | 'CANCEL_SUCCESS'
  | 'CANCEL_FAILURE'
  | 'CANCEL_REQUEST'
  | 'INFO';

/**
 * Determine the transaction flow strategy.
 *
 *     AUTHORIZATION - the processed transaction should be only authorized
 *     CHARGE - the processed transaction should be charged.
 */
export type TransactionFlowStrategyEnum =
  | 'AUTHORIZATION'
  | 'CHARGE';

/**
 * Initializes a transaction session. It triggers the webhook `TRANSACTION_INITIALIZE_SESSION`, to the requested `paymentGateways`.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionInitialize = {
  /** The initialized transaction. */
  transaction: Maybe<TransactionItem>;
  /** The event created for the initialized transaction. */
  transactionEvent: Maybe<TransactionEvent>;
  /** The JSON data required to finalize the payment. */
  data: Maybe<Scalars['JSON']>;
  errors: Array<TransactionInitializeError>;
};

export type TransactionInitializeError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: TransactionInitializeErrorCode;
};

/** An enumeration. */
export type TransactionInitializeErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

/**
 * Event sent when user starts processing the payment.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionInitializeSession = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** Look up a transaction. */
  transaction: TransactionItem;
  /** Checkout or order */
  sourceObject: OrderOrCheckout;
  /** Payment gateway data in JSON format, recieved from storefront. */
  data: Maybe<Scalars['JSON']>;
  /** Merchant reference assigned to this payment. */
  merchantReference: Scalars['String'];
  /** Action to proceed for the transaction */
  action: TransactionProcessAction;
};

/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItem = Node & ObjectWithMetadata & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
  /** List of actions that can be performed in the current state of a payment. */
  actions: Array<TransactionActionEnum>;
  /** Total amount authorized for this payment. */
  authorizedAmount: Money;
  /**
   * Total amount of ongoing authorization requests for the transaction.
   *
   * Added in Saleor 3.13.
   */
  authorizePendingAmount: Money;
  /** Total amount refunded for this payment. */
  refundedAmount: Money;
  /**
   * Total amount of ongoing refund requests for the transaction.
   *
   * Added in Saleor 3.13.
   */
  refundPendingAmount: Money;
  /**
   * Total amount voided for this payment.
   * @deprecated This field will be removed in Saleor 3.14 (Preview Feature).Use `canceledAmount` instead.
   */
  voidedAmount: Money;
  /**
   * Total amount canceled for this payment.
   *
   * Added in Saleor 3.13.
   */
  canceledAmount: Money;
  /**
   * Total amount of ongoing cancel requests for the transaction.
   *
   * Added in Saleor 3.13.
   */
  cancelPendingAmount: Money;
  /** Total amount charged for this payment. */
  chargedAmount: Money;
  /**
   * Total amount of ongoing charge requests for the transaction.
   *
   * Added in Saleor 3.13.
   */
  chargePendingAmount: Money;
  /**
   * Status of transaction.
   * @deprecated This field will be removed in Saleor 3.14 (Preview Feature). The `status` is not needed. The amounts can be used to define the current status of transactions.
   */
  status: Scalars['String'];
  /**
   * Type of transaction.
   * @deprecated This field will be removed in Saleor 3.14 (Preview Feature). Use `name` or `message` instead.
   */
  type: Scalars['String'];
  /**
   * Name of the transaction.
   *
   * Added in Saleor 3.13.
   */
  name: Scalars['String'];
  /**
   * Message related to the transaction.
   *
   * Added in Saleor 3.13.
   */
  message: Scalars['String'];
  /**
   * Reference of transaction.
   * @deprecated This field will be removed in Saleor 3.14 (Preview Feature).Use `pspReference` instead.
   */
  reference: Scalars['String'];
  /**
   * PSP reference of transaction.
   *
   * Added in Saleor 3.13.
   */
  pspReference: Scalars['String'];
  /**
   * The related order.
   *
   * Added in Saleor 3.6.
   */
  order: Maybe<Order>;
  /** List of all transaction's events. */
  events: Array<TransactionEvent>;
  /**
   * User or App that created the transaction.
   *
   * Added in Saleor 3.13.
   */
  createdBy: Maybe<UserOrApp>;
  /**
   * The url that will allow to redirect user to payment provider page with transaction details.
   *
   * Added in Saleor 3.13.
   */
  externalUrl: Scalars['String'];
};


/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemMetafieldArgs = {
  key: Scalars['String'];
};


/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};

/**
 * Event sent when transaction item metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type TransactionItemMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** Look up a transaction. */
  transaction: Maybe<TransactionItem>;
};

/** An enumeration. */
export type TransactionKind =
  | 'EXTERNAL'
  | 'AUTH'
  | 'PENDING'
  | 'ACTION_TO_CONFIRM'
  | 'REFUND'
  | 'REFUND_ONGOING'
  | 'CAPTURE'
  | 'VOID'
  | 'CONFIRM'
  | 'CANCEL';

/**
 * Processes a transaction session. It triggers the webhook `TRANSACTION_PROCESS_SESSION`, to the assigned `paymentGateways`.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionProcess = {
  /** The processed transaction. */
  transaction: Maybe<TransactionItem>;
  /** The event created for the processed transaction. */
  transactionEvent: Maybe<TransactionEvent>;
  /** The json data required to finalize the payment. */
  data: Maybe<Scalars['JSON']>;
  errors: Array<TransactionProcessError>;
};

export type TransactionProcessAction = {
  /** Transaction amount to process. */
  amount: Scalars['PositiveDecimal'];
  /** Currency of the amount. */
  currency: Scalars['String'];
  actionType: TransactionFlowStrategyEnum;
};

export type TransactionProcessError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: TransactionProcessErrorCode;
};

/** An enumeration. */
export type TransactionProcessErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'TRANSACTION_ALREADY_PROCESSED'
  | 'MISSING_PAYMENT_APP_RELATION'
  | 'MISSING_PAYMENT_APP';

/**
 * Event sent when user has additional payment action to process.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionProcessSession = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** Look up a transaction. */
  transaction: TransactionItem;
  /** Checkout or order */
  sourceObject: OrderOrCheckout;
  /** Payment gateway data in JSON format, recieved from storefront. */
  data: Maybe<Scalars['JSON']>;
  /** Merchant reference assigned to this payment. */
  merchantReference: Scalars['String'];
  /** Action to proceed for the transaction */
  action: TransactionProcessAction;
};

/**
 * Event sent when transaction refund is requested.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionRefundRequested = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** Look up a transaction. */
  transaction: Maybe<TransactionItem>;
  /** Requested action data. */
  action: TransactionAction;
};

/**
 * Request an action for payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: HANDLE_PAYMENTS.
 */
export type TransactionRequestAction = {
  transaction: Maybe<TransactionItem>;
  errors: Array<TransactionRequestActionError>;
};

export type TransactionRequestActionError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: TransactionRequestActionErrorCode;
};

/** An enumeration. */
export type TransactionRequestActionErrorCode =
  | 'INVALID'
  | 'GRAPHQL_ERROR'
  | 'NOT_FOUND'
  | 'MISSING_TRANSACTION_ACTION_REQUEST_WEBHOOK';

/**
 * Represents a status of payment transaction.
 *
 *     The following statuses are possible:
 *     SUCCESS - Represents a sucess action.
 *     FAILURE - Represents a failure action.
 *     PENDING - Represents a pending action.
 */
export type TransactionStatus =
  | 'PENDING'
  | 'SUCCESS'
  | 'FAILURE';

/**
 * Create transaction for checkout or order.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires the following permissions: OWNER and HANDLE_PAYMENTS.
 */
export type TransactionUpdate = {
  transaction: Maybe<TransactionItem>;
  errors: Array<TransactionUpdateError>;
};

export type TransactionUpdateError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: TransactionUpdateErrorCode;
};

/** An enumeration. */
export type TransactionUpdateErrorCode =
  | 'INVALID'
  | 'GRAPHQL_ERROR'
  | 'NOT_FOUND'
  | 'INCORRECT_CURRENCY'
  | 'METADATA_KEY_REQUIRED'
  | 'UNIQUE';

export type TransactionUpdateInput = {
  /**
   * Status of the transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.14 (Preview Feature). The `status` is not needed. The amounts can be used to define the current status of transactions.
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Payment type used for this transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.14 (Preview Feature). Use `name` and `message` instead.
   */
  type?: Maybe<Scalars['String']>;
  /**
   * Payment name of the transaction.
   *
   * Added in Saleor 3.13.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The message of the transaction.
   *
   * Added in Saleor 3.13.
   */
  message?: Maybe<Scalars['String']>;
  /**
   * Reference of the transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.14 (Preview Feature). Use `pspReference` instead.
   */
  reference?: Maybe<Scalars['String']>;
  /**
   * PSP Reference of the transaction.
   *
   * Added in Saleor 3.13.
   */
  pspReference?: Maybe<Scalars['String']>;
  /** List of all possible actions for the transaction */
  availableActions?: Maybe<Array<TransactionActionEnum>>;
  /** Amount authorized by this transaction. */
  amountAuthorized?: Maybe<MoneyInput>;
  /** Amount charged by this transaction. */
  amountCharged?: Maybe<MoneyInput>;
  /** Amount refunded by this transaction. */
  amountRefunded?: Maybe<MoneyInput>;
  /**
   * Amount voided by this transaction.
   *
   * DEPRECATED: this field will be removed in Saleor 3.14 (Preview Feature). Use `amountCanceled` instead.
   */
  amountVoided?: Maybe<MoneyInput>;
  /**
   * Amount canceled by this transaction.
   *
   * Added in Saleor 3.13.
   */
  amountCanceled?: Maybe<MoneyInput>;
  /** Payment public metadata. */
  metadata?: Maybe<Array<MetadataInput>>;
  /** Payment private metadata. */
  privateMetadata?: Maybe<Array<MetadataInput>>;
  /**
   * The url that will allow to redirect user to payment provider page with transaction event details.
   *
   * Added in Saleor 3.13.
   */
  externalUrl?: Maybe<Scalars['String']>;
};

export type TranslatableItem = ProductTranslatableContent | CollectionTranslatableContent | CategoryTranslatableContent | AttributeTranslatableContent | AttributeValueTranslatableContent | ProductVariantTranslatableContent | PageTranslatableContent | ShippingMethodTranslatableContent | SaleTranslatableContent | VoucherTranslatableContent | MenuItemTranslatableContent;

export type TranslatableItemConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<TranslatableItemEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type TranslatableItemEdge = {
  /** The item at the end of the edge. */
  node: TranslatableItem;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type TranslatableKinds =
  | 'ATTRIBUTE'
  | 'ATTRIBUTE_VALUE'
  | 'CATEGORY'
  | 'COLLECTION'
  | 'MENU_ITEM'
  | 'PAGE'
  | 'PRODUCT'
  | 'SALE'
  | 'SHIPPING_METHOD'
  | 'VARIANT'
  | 'VOUCHER';

/**
 * Event sent when new translation is created.
 *
 * Added in Saleor 3.2.
 */
export type TranslationCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The translation the event relates to. */
  translation: Maybe<TranslationTypes>;
};

export type TranslationError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: TranslationErrorCode;
};

/** An enumeration. */
export type TranslationErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED';

export type TranslationInput = {
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /**
   * Translated description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']>;
};

export type TranslationTypes = ProductTranslation | CollectionTranslation | CategoryTranslation | AttributeTranslation | AttributeValueTranslation | ProductVariantTranslation | PageTranslation | ShippingMethodTranslation | SaleTranslation | VoucherTranslation | MenuItemTranslation;

/**
 * Event sent when translation is updated.
 *
 * Added in Saleor 3.2.
 */
export type TranslationUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The translation the event relates to. */
  translation: Maybe<TranslationTypes>;
};


export type UpdateInvoiceInput = {
  /** Invoice number */
  number?: Maybe<Scalars['String']>;
  /** URL of an invoice to download. */
  url?: Maybe<Scalars['String']>;
  /**
   * Fields required to update the invoice metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: Maybe<Array<MetadataInput>>;
  /**
   * Fields required to update the invoice private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: Maybe<Array<MetadataInput>>;
};

/** Updates metadata of an object. To use it, you need to have access to the modified object. */
export type UpdateMetadata = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
  errors: Array<MetadataError>;
  item: Maybe<ObjectWithMetadata>;
};

/** Updates private metadata of an object. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
export type UpdatePrivateMetadata = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
  errors: Array<MetadataError>;
  item: Maybe<ObjectWithMetadata>;
};


export type UploadError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: UploadErrorCode;
};

/** An enumeration. */
export type UploadErrorCode =
  | 'GRAPHQL_ERROR';

/** Represents user data. */
export type User = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  isStaff: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  /** List of all user's addresses. */
  addresses: Array<Address>;
  /**
   * Returns the last open checkout of this user.
   * @deprecated This field will be removed in Saleor 4.0. Use the `checkoutTokens` field to fetch the user checkouts.
   */
  checkout: Maybe<Checkout>;
  /**
   * Returns the checkout UUID's assigned to this user.
   * @deprecated This field will be removed in Saleor 4.0. Use `checkoutIds` instead.
   */
  checkoutTokens: Maybe<Array<Scalars['UUID']>>;
  /** Returns the checkout ID's assigned to this user. */
  checkoutIds: Maybe<Array<Scalars['ID']>>;
  /**
   * Returns checkouts assigned to this user.
   *
   * Added in Saleor 3.8.
   */
  checkouts: Maybe<CheckoutCountableConnection>;
  /** List of the user gift cards. */
  giftCards: Maybe<GiftCardCountableConnection>;
  /**
   * A note about the customer.
   *
   * Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF.
   */
  note: Maybe<Scalars['String']>;
  /** List of user's orders. Requires one of the following permissions: MANAGE_STAFF, OWNER. */
  orders: Maybe<OrderCountableConnection>;
  /** List of user's permissions. */
  userPermissions: Maybe<Array<UserPermission>>;
  /** List of user's permission groups. */
  permissionGroups: Maybe<Array<Group>>;
  /** List of user's permission groups which user can manage. */
  editableGroups: Maybe<Array<Group>>;
  /**
   * List of channels the user has access to. The sum of channels from all user groups. If at least one group has `restrictedAccessToChannels` set to False - all channels are returned.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  accessibleChannels: Maybe<Array<Channel>>;
  /**
   * Determine if user have restricted access to channels. False if at least one user group has `restrictedAccessToChannels` set to False.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  restrictedAccessToChannels: Scalars['Boolean'];
  avatar: Maybe<Image>;
  /**
   * List of events associated with the user.
   *
   * Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF.
   */
  events: Maybe<Array<CustomerEvent>>;
  /** List of stored payment sources. */
  storedPaymentSources: Maybe<Array<PaymentSource>>;
  /** User language code. */
  languageCode: LanguageCodeEnum;
  defaultShippingAddress: Maybe<Address>;
  defaultBillingAddress: Maybe<Address>;
  /**
   * External ID of this user.
   *
   * Added in Saleor 3.10.
   */
  externalReference: Maybe<Scalars['String']>;
  lastLogin: Maybe<Scalars['DateTime']>;
  dateJoined: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


/** Represents user data. */
export type UserPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents user data. */
export type UserPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents user data. */
export type UserMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents user data. */
export type UserMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents user data. */
export type UserCheckoutTokensArgs = {
  channel?: Maybe<Scalars['String']>;
};


/** Represents user data. */
export type UserCheckoutIdsArgs = {
  channel?: Maybe<Scalars['String']>;
};


/** Represents user data. */
export type UserCheckoutsArgs = {
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents user data. */
export type UserGiftCardsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents user data. */
export type UserOrdersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents user data. */
export type UserAvatarArgs = {
  size?: Maybe<Scalars['Int']>;
  format?: Maybe<ThumbnailFormatEnum>;
};


/** Represents user data. */
export type UserStoredPaymentSourcesArgs = {
  channel?: Maybe<Scalars['String']>;
};

/**
 * Deletes a user avatar. Only for staff members.
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type UserAvatarDelete = {
  /** An updated user instance. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/**
 * Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type UserAvatarUpdate = {
  /** An updated user instance. */
  user: Maybe<User>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/**
 * Activate or deactivate users.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type UserBulkSetActive = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

export type UserCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<UserCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type UserCountableEdge = {
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type UserCreateInput = {
  /** Billing address of the customer. */
  defaultBillingAddress?: Maybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: Maybe<AddressInput>;
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** The unique email address of the user. */
  email?: Maybe<Scalars['String']>;
  /** User account is active. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** A note about the user. */
  note?: Maybe<Scalars['String']>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: Maybe<Array<MetadataInput>>;
  /**
   * Fields required to update the user private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: Maybe<Array<MetadataInput>>;
  /** User language code. */
  languageCode?: Maybe<LanguageCodeEnum>;
  /**
   * External ID of the customer.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: Maybe<Scalars['String']>;
  /** Slug of a channel which will be used for notify user. Optional when only one channel exists. */
  channel?: Maybe<Scalars['String']>;
};

export type UserOrApp = User | App;

/** Represents user's permissions. */
export type UserPermission = {
  /** Internal code for permission. */
  code: PermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  name: Scalars['String'];
  /** List of user permission groups which contains this permission. */
  sourcePermissionGroups: Maybe<Array<Group>>;
};


/** Represents user's permissions. */
export type UserPermissionSourcePermissionGroupsArgs = {
  userId: Scalars['ID'];
};

export type UserSortField =
  /** Sort users by first name. */
  | 'FIRST_NAME'
  /** Sort users by last name. */
  | 'LAST_NAME'
  /** Sort users by email. */
  | 'EMAIL'
  /** Sort users by order count. */
  | 'ORDER_COUNT'
  /** Sort users by created at. */
  | 'CREATED_AT'
  /** Sort users by last modified at. */
  | 'LAST_MODIFIED_AT';

export type UserSortingInput = {
  /** Specifies the direction in which to sort users. */
  direction: OrderDirection;
  /** Sort users by the selected field. */
  field: UserSortField;
};

/** Represents a VAT rate for a country. */
export type Vat = {
  /** Country code. */
  countryCode: Scalars['String'];
  /** Standard VAT rate in percent. */
  standardRate: Maybe<Scalars['Float']>;
  /** Country's VAT rate exceptions for specific types of goods. */
  reducedRates: Array<ReducedRate>;
};

export type VariantAttributeScope =
  | 'ALL'
  | 'VARIANT_SELECTION'
  | 'NOT_VARIANT_SELECTION';

/**
 * Assign an media to a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type VariantMediaAssign = {
  productVariant: Maybe<ProductVariant>;
  media: Maybe<ProductMedia>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

/**
 * Unassign an media from a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type VariantMediaUnassign = {
  productVariant: Maybe<ProductVariant>;
  media: Maybe<ProductMedia>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  errors: Array<ProductError>;
};

/** Represents availability of a variant in the storefront. */
export type VariantPricingInfo = {
  /** Whether it is in sale or not. */
  onSale: Maybe<Scalars['Boolean']>;
  /** The discount amount if in sale (null otherwise). */
  discount: Maybe<TaxedMoney>;
  /** The discount amount in the local currency. */
  discountLocalCurrency: Maybe<TaxedMoney>;
  /** The price, with any discount subtracted. */
  price: Maybe<TaxedMoney>;
  /** The price without any discount. */
  priceUndiscounted: Maybe<TaxedMoney>;
  /** The discounted price in the local currency. */
  priceLocalCurrency: Maybe<TaxedMoney>;
};

/** Verify JWT token. */
export type VerifyToken = {
  /** User assigned to token. */
  user: Maybe<User>;
  /** Determine if token is valid or not. */
  isValid: Scalars['Boolean'];
  /** JWT payload. */
  payload: Maybe<Scalars['GenericScalar']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/** An enumeration. */
export type VolumeUnitsEnum =
  | 'CUBIC_MILLIMETER'
  | 'CUBIC_CENTIMETER'
  | 'CUBIC_DECIMETER'
  | 'CUBIC_METER'
  | 'LITER'
  | 'CUBIC_FOOT'
  | 'CUBIC_INCH'
  | 'CUBIC_YARD'
  | 'QT'
  | 'PINT'
  | 'FL_OZ'
  | 'ACRE_IN'
  | 'ACRE_FT';

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type Voucher = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  name: Maybe<Scalars['String']>;
  code: Scalars['String'];
  usageLimit: Maybe<Scalars['Int']>;
  used: Scalars['Int'];
  startDate: Scalars['DateTime'];
  endDate: Maybe<Scalars['DateTime']>;
  applyOncePerOrder: Scalars['Boolean'];
  applyOncePerCustomer: Scalars['Boolean'];
  onlyForStaff: Scalars['Boolean'];
  minCheckoutItemsQuantity: Maybe<Scalars['Int']>;
  /** List of categories this voucher applies to. */
  categories: Maybe<CategoryCountableConnection>;
  /**
   * List of collections this voucher applies to.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  collections: Maybe<CollectionCountableConnection>;
  /**
   * List of products this voucher applies to.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  products: Maybe<ProductCountableConnection>;
  /**
   * List of product variants this voucher applies to.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  variants: Maybe<ProductVariantCountableConnection>;
  /** List of countries available for the shipping voucher. */
  countries: Maybe<Array<CountryDisplay>>;
  /** Returns translated voucher fields for the given language code. */
  translation: Maybe<VoucherTranslation>;
  /** Determines a type of discount for voucher - value or percentage */
  discountValueType: DiscountValueTypeEnum;
  /** Voucher value. */
  discountValue: Maybe<Scalars['Float']>;
  /** Currency code for voucher. */
  currency: Maybe<Scalars['String']>;
  /** Minimum order value to apply voucher. */
  minSpent: Maybe<Money>;
  /** Determines a type of voucher. */
  type: VoucherTypeEnum;
  /**
   * List of availability in channels for the voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  channelListings: Maybe<Array<VoucherChannelListing>>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherPrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherPrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherMetafieldArgs = {
  key: Scalars['String'];
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCategoriesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCollectionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherProductsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherVariantsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Adds products, categories, collections to a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherAddCatalogues = {
  /** Voucher of which catalogue IDs will be modified. */
  voucher: Maybe<Voucher>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
};

/**
 * Deletes vouchers.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
};

/** Represents voucher channel listing. */
export type VoucherChannelListing = Node & {
  id: Scalars['ID'];
  channel: Channel;
  discountValue: Scalars['Float'];
  currency: Scalars['String'];
  minSpent: Maybe<Money>;
};

export type VoucherChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** Value of the voucher. */
  discountValue?: Maybe<Scalars['PositiveDecimal']>;
  /** Min purchase amount required to apply the voucher. */
  minAmountSpent?: Maybe<Scalars['PositiveDecimal']>;
};

export type VoucherChannelListingInput = {
  /** List of channels to which the voucher should be assigned. */
  addChannels?: Maybe<Array<VoucherChannelListingAddInput>>;
  /** List of channels from which the voucher should be unassigned. */
  removeChannels?: Maybe<Array<Scalars['ID']>>;
};

/**
 * Manage voucher's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherChannelListingUpdate = {
  /** An updated voucher instance. */
  voucher: Maybe<Voucher>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
};

export type VoucherCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<VoucherCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type VoucherCountableEdge = {
  /** The item at the end of the edge. */
  node: Voucher;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Creates a new voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher: Maybe<Voucher>;
};

/**
 * Event sent when new voucher is created.
 *
 * Added in Saleor 3.4.
 */
export type VoucherCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The voucher the event relates to. */
  voucher: Maybe<Voucher>;
};


/**
 * Event sent when new voucher is created.
 *
 * Added in Saleor 3.4.
 */
export type VoucherCreatedVoucherArgs = {
  channel?: Maybe<Scalars['String']>;
};

/**
 * Deletes a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher: Maybe<Voucher>;
};

/**
 * Event sent when voucher is deleted.
 *
 * Added in Saleor 3.4.
 */
export type VoucherDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The voucher the event relates to. */
  voucher: Maybe<Voucher>;
};


/**
 * Event sent when voucher is deleted.
 *
 * Added in Saleor 3.4.
 */
export type VoucherDeletedVoucherArgs = {
  channel?: Maybe<Scalars['String']>;
};

export type VoucherDiscountType =
  | 'FIXED'
  | 'PERCENTAGE'
  | 'SHIPPING';

export type VoucherFilterInput = {
  status?: Maybe<Array<DiscountStatusEnum>>;
  timesUsed?: Maybe<IntRangeInput>;
  discountType?: Maybe<Array<VoucherDiscountType>>;
  started?: Maybe<DateTimeRangeInput>;
  search?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<MetadataFilter>>;
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type VoucherInput = {
  /** Voucher type: PRODUCT, CATEGORY SHIPPING or ENTIRE_ORDER. */
  type?: Maybe<VoucherTypeEnum>;
  /** Voucher name. */
  name?: Maybe<Scalars['String']>;
  /** Code to use the voucher. */
  code?: Maybe<Scalars['String']>;
  /** Start date of the voucher in ISO 8601 format. */
  startDate?: Maybe<Scalars['DateTime']>;
  /** End date of the voucher in ISO 8601 format. */
  endDate?: Maybe<Scalars['DateTime']>;
  /** Choices: fixed or percentage. */
  discountValueType?: Maybe<DiscountValueTypeEnum>;
  /** Products discounted by the voucher. */
  products?: Maybe<Array<Scalars['ID']>>;
  /**
   * Variants discounted by the voucher.
   *
   * Added in Saleor 3.1.
   */
  variants?: Maybe<Array<Scalars['ID']>>;
  /** Collections discounted by the voucher. */
  collections?: Maybe<Array<Scalars['ID']>>;
  /** Categories discounted by the voucher. */
  categories?: Maybe<Array<Scalars['ID']>>;
  /** Minimal quantity of checkout items required to apply the voucher. */
  minCheckoutItemsQuantity?: Maybe<Scalars['Int']>;
  /** Country codes that can be used with the shipping voucher. */
  countries?: Maybe<Array<Scalars['String']>>;
  /** Voucher should be applied to the cheapest item or entire order. */
  applyOncePerOrder?: Maybe<Scalars['Boolean']>;
  /** Voucher should be applied once per customer. */
  applyOncePerCustomer?: Maybe<Scalars['Boolean']>;
  /** Voucher can be used only by staff user. */
  onlyForStaff?: Maybe<Scalars['Boolean']>;
  /** Limit number of times this voucher can be used in total. */
  usageLimit?: Maybe<Scalars['Int']>;
};

/**
 * Event sent when voucher metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type VoucherMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The voucher the event relates to. */
  voucher: Maybe<Voucher>;
};


/**
 * Event sent when voucher metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type VoucherMetadataUpdatedVoucherArgs = {
  channel?: Maybe<Scalars['String']>;
};

/**
 * Removes products, categories, collections from a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherRemoveCatalogues = {
  /** Voucher of which catalogue IDs will be modified. */
  voucher: Maybe<Voucher>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
};

export type VoucherSortField =
  /** Sort vouchers by code. */
  | 'CODE'
  /** Sort vouchers by start date. */
  | 'START_DATE'
  /** Sort vouchers by end date. */
  | 'END_DATE'
  /**
   * Sort vouchers by value.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'VALUE'
  /** Sort vouchers by type. */
  | 'TYPE'
  /** Sort vouchers by usage limit. */
  | 'USAGE_LIMIT'
  /**
   * Sort vouchers by minimum spent amount.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'MINIMUM_SPENT_AMOUNT';

export type VoucherSortingInput = {
  /** Specifies the direction in which to sort vouchers. */
  direction: OrderDirection;
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: Maybe<Scalars['String']>;
  /** Sort vouchers by the selected field. */
  field: VoucherSortField;
};

export type VoucherTranslatableContent = Node & {
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  /** Returns translated voucher fields for the given language code. */
  translation: Maybe<VoucherTranslation>;
  /**
   * Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  voucher: Maybe<Voucher>;
};


export type VoucherTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a voucher.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type VoucherTranslate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
  errors: Array<TranslationError>;
  voucher: Maybe<Voucher>;
};

export type VoucherTranslation = Node & {
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Maybe<Scalars['String']>;
};

export type VoucherTypeEnum =
  | 'SHIPPING'
  | 'ENTIRE_ORDER'
  | 'SPECIFIC_PRODUCT';

/**
 * Updates a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher: Maybe<Voucher>;
};

/**
 * Event sent when voucher is updated.
 *
 * Added in Saleor 3.4.
 */
export type VoucherUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The voucher the event relates to. */
  voucher: Maybe<Voucher>;
};


/**
 * Event sent when voucher is updated.
 *
 * Added in Saleor 3.4.
 */
export type VoucherUpdatedVoucherArgs = {
  channel?: Maybe<Scalars['String']>;
};

/** Represents warehouse. */
export type Warehouse = Node & ObjectWithMetadata & {
  id: Scalars['ID'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield: Maybe<Scalars['String']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields: Maybe<Scalars['Metadata']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield: Maybe<Scalars['String']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  email: Scalars['String'];
  isPrivate: Scalars['Boolean'];
  address: Address;
  /**
   * Warehouse company name.
   * @deprecated This field will be removed in Saleor 4.0. Use `Address.companyName` instead.
   */
  companyName: Scalars['String'];
  /**
   * Click and collect options: local, all or disabled.
   *
   * Added in Saleor 3.1.
   */
  clickAndCollectOption: WarehouseClickAndCollectOptionEnum;
  shippingZones: ShippingZoneCountableConnection;
  /**
   * External ID of this warehouse.
   *
   * Added in Saleor 3.10.
   */
  externalReference: Maybe<Scalars['String']>;
};


/** Represents warehouse. */
export type WarehousePrivateMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents warehouse. */
export type WarehousePrivateMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents warehouse. */
export type WarehouseMetafieldArgs = {
  key: Scalars['String'];
};


/** Represents warehouse. */
export type WarehouseMetafieldsArgs = {
  keys?: Maybe<Array<Scalars['String']>>;
};


/** Represents warehouse. */
export type WarehouseShippingZonesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export type WarehouseClickAndCollectOptionEnum =
  | 'DISABLED'
  | 'LOCAL'
  | 'ALL';

export type WarehouseCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<WarehouseCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type WarehouseCountableEdge = {
  /** The item at the end of the edge. */
  node: Warehouse;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/**
 * Creates new warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
  errors: Array<WarehouseError>;
  warehouse: Maybe<Warehouse>;
};

export type WarehouseCreateInput = {
  /** Warehouse slug. */
  slug?: Maybe<Scalars['String']>;
  /** The email address of the warehouse. */
  email?: Maybe<Scalars['String']>;
  /**
   * External ID of the warehouse.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']>;
  /** Warehouse name. */
  name: Scalars['String'];
  /** Address of the warehouse. */
  address: AddressInput;
  /**
   * Shipping zones supported by the warehouse.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Providing the zone ids will raise a ValidationError.
   */
  shippingZones?: Maybe<Array<Scalars['ID']>>;
};

/**
 * Event sent when new warehouse is created.
 *
 * Added in Saleor 3.4.
 */
export type WarehouseCreated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The warehouse the event relates to. */
  warehouse: Maybe<Warehouse>;
};

/**
 * Deletes selected warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
  errors: Array<WarehouseError>;
  warehouse: Maybe<Warehouse>;
};

/**
 * Event sent when warehouse is deleted.
 *
 * Added in Saleor 3.4.
 */
export type WarehouseDeleted = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The warehouse the event relates to. */
  warehouse: Maybe<Warehouse>;
};

export type WarehouseError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: WarehouseErrorCode;
  /** List of shipping zones IDs which causes the error. */
  shippingZones: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export type WarehouseErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type WarehouseFilterInput = {
  clickAndCollectOption?: Maybe<WarehouseClickAndCollectOptionEnum>;
  search?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Scalars['ID']>>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  channels?: Maybe<Array<Scalars['ID']>>;
  slugs?: Maybe<Array<Scalars['String']>>;
};

/**
 * Event sent when warehouse metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type WarehouseMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The warehouse the event relates to. */
  warehouse: Maybe<Warehouse>;
};

/**
 * Add shipping zone to given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseShippingZoneAssign = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
  errors: Array<WarehouseError>;
  warehouse: Maybe<Warehouse>;
};

/**
 * Remove shipping zone from given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseShippingZoneUnassign = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
  errors: Array<WarehouseError>;
  warehouse: Maybe<Warehouse>;
};

export type WarehouseSortField =
  /** Sort warehouses by name. */
  | 'NAME';

export type WarehouseSortingInput = {
  /** Specifies the direction in which to sort warehouses. */
  direction: OrderDirection;
  /** Sort warehouses by the selected field. */
  field: WarehouseSortField;
};

/**
 * Updates given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
  errors: Array<WarehouseError>;
  warehouse: Maybe<Warehouse>;
};

export type WarehouseUpdateInput = {
  /** Warehouse slug. */
  slug?: Maybe<Scalars['String']>;
  /** The email address of the warehouse. */
  email?: Maybe<Scalars['String']>;
  /**
   * External ID of the warehouse.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']>;
  /** Warehouse name. */
  name?: Maybe<Scalars['String']>;
  /** Address of the warehouse. */
  address?: Maybe<AddressInput>;
  /**
   * Click and collect options: local, all or disabled.
   *
   * Added in Saleor 3.1.
   */
  clickAndCollectOption?: Maybe<WarehouseClickAndCollectOptionEnum>;
  /**
   * Visibility of warehouse stocks.
   *
   * Added in Saleor 3.1.
   */
  isPrivate?: Maybe<Scalars['Boolean']>;
};

/**
 * Event sent when warehouse is updated.
 *
 * Added in Saleor 3.4.
 */
export type WarehouseUpdated = Event & {
  /** Time of the event. */
  issuedAt: Maybe<Scalars['DateTime']>;
  /** Saleor version that triggered the event. */
  version: Maybe<Scalars['String']>;
  /** The user or application that triggered the event. */
  issuingPrincipal: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient: Maybe<App>;
  /** The warehouse the event relates to. */
  warehouse: Maybe<Warehouse>;
};

/** Webhook. */
export type Webhook = Node & {
  id: Scalars['ID'];
  name: Scalars['String'];
  /**
   * List of webhook events.
   * @deprecated This field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  events: Array<WebhookEvent>;
  /** List of synchronous webhook events. */
  syncEvents: Array<WebhookEventSync>;
  /** List of asynchronous webhook events. */
  asyncEvents: Array<WebhookEventAsync>;
  app: App;
  /** Event deliveries. */
  eventDeliveries: Maybe<EventDeliveryCountableConnection>;
  /** Target URL for webhook. */
  targetUrl: Scalars['String'];
  /** Informs if webhook is activated. */
  isActive: Scalars['Boolean'];
  /**
   * Used to create a hash signature for each payload.
   * @deprecated This field will be removed in Saleor 4.0. As of Saleor 3.5, webhook payloads default to signing using a verifiable JWS.
   */
  secretKey: Maybe<Scalars['String']>;
  /** Used to define payloads for specific events. */
  subscriptionQuery: Maybe<Scalars['String']>;
  /**
   * Custom headers, which will be added to HTTP request.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  customHeaders: Maybe<Scalars['JSONString']>;
};


/** Webhook. */
export type WebhookEventDeliveriesArgs = {
  sortBy?: Maybe<EventDeliverySortingInput>;
  filter?: Maybe<EventDeliveryFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/**
 * Creates a new webhook subscription.
 *
 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
 */
export type WebhookCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>;
  errors: Array<WebhookError>;
  webhook: Maybe<Webhook>;
};

export type WebhookCreateInput = {
  /** The name of the webhook. */
  name?: Maybe<Scalars['String']>;
  /** The url to receive the payload. */
  targetUrl?: Maybe<Scalars['String']>;
  /**
   * The events that webhook wants to subscribe.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  events?: Maybe<Array<WebhookEventTypeEnum>>;
  /** The asynchronous events that webhook wants to subscribe. */
  asyncEvents?: Maybe<Array<WebhookEventTypeAsyncEnum>>;
  /** The synchronous events that webhook wants to subscribe. */
  syncEvents?: Maybe<Array<WebhookEventTypeSyncEnum>>;
  /** ID of the app to which webhook belongs. */
  app?: Maybe<Scalars['ID']>;
  /** Determine if webhook will be set active or not. */
  isActive?: Maybe<Scalars['Boolean']>;
  /**
   * The secret key used to create a hash signature with each payload.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. As of Saleor 3.5, webhook payloads default to signing using a verifiable JWS.
   */
  secretKey?: Maybe<Scalars['String']>;
  /**
   * Subscription query used to define a webhook payload.
   *
   * Added in Saleor 3.2.
   */
  query?: Maybe<Scalars['String']>;
  /**
   * Custom headers, which will be added to HTTP request. There is a limitation of 5 headers per webhook and 998 characters per header.Only "X-*" and "Authorization*" keys are allowed.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  customHeaders?: Maybe<Scalars['JSONString']>;
};

/**
 * Delete a webhook. Before the deletion, the webhook is deactivated to pause any deliveries that are already scheduled. The deletion might fail if delivery is in progress. In such a case, the webhook is not deleted but remains deactivated.
 *
 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
 */
export type WebhookDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>;
  errors: Array<WebhookError>;
  webhook: Maybe<Webhook>;
};

/**
 * Performs a dry run of a webhook event. Supports a single event (the first, if multiple provided in the `query`). Requires permission relevant to processed event.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type WebhookDryRun = {
  /** JSON payload, that would be sent out to webhook's target URL. */
  payload: Maybe<Scalars['JSONString']>;
  errors: Array<WebhookDryRunError>;
};

export type WebhookDryRunError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: WebhookDryRunErrorCode;
};

/** An enumeration. */
export type WebhookDryRunErrorCode =
  | 'GRAPHQL_ERROR'
  | 'NOT_FOUND'
  | 'INVALID_ID'
  | 'MISSING_PERMISSION'
  | 'TYPE_NOT_SUPPORTED'
  | 'SYNTAX'
  | 'MISSING_SUBSCRIPTION'
  | 'UNABLE_TO_PARSE'
  | 'MISSING_EVENT';

export type WebhookError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: WebhookErrorCode;
};

/** An enumeration. */
export type WebhookErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'DELETE_FAILED'
  | 'SYNTAX'
  | 'MISSING_SUBSCRIPTION'
  | 'UNABLE_TO_PARSE'
  | 'MISSING_EVENT'
  | 'INVALID_CUSTOM_HEADERS';

/** Webhook event. */
export type WebhookEvent = {
  /** Display name of the event. */
  name: Scalars['String'];
  /** Internal name of the event type. */
  eventType: WebhookEventTypeEnum;
};

/** Asynchronous webhook event. */
export type WebhookEventAsync = {
  /** Display name of the event. */
  name: Scalars['String'];
  /** Internal name of the event type. */
  eventType: WebhookEventTypeAsyncEnum;
};

/** Synchronous webhook event. */
export type WebhookEventSync = {
  /** Display name of the event. */
  name: Scalars['String'];
  /** Internal name of the event type. */
  eventType: WebhookEventTypeSyncEnum;
};

/** Enum determining type of webhook. */
export type WebhookEventTypeAsyncEnum =
  /** All the events. */
  | 'ANY_EVENTS'
  /** A new address created. */
  | 'ADDRESS_CREATED'
  /** An address updated. */
  | 'ADDRESS_UPDATED'
  /** An address deleted. */
  | 'ADDRESS_DELETED'
  /** A new app installed. */
  | 'APP_INSTALLED'
  /** An app updated. */
  | 'APP_UPDATED'
  /** An app deleted. */
  | 'APP_DELETED'
  /** An app status is changed. */
  | 'APP_STATUS_CHANGED'
  /** A new attribute is created. */
  | 'ATTRIBUTE_CREATED'
  /** An attribute is updated. */
  | 'ATTRIBUTE_UPDATED'
  /** An attribute is deleted. */
  | 'ATTRIBUTE_DELETED'
  /** A new attribute value is created. */
  | 'ATTRIBUTE_VALUE_CREATED'
  /** An attribute value is updated. */
  | 'ATTRIBUTE_VALUE_UPDATED'
  /** An attribute value is deleted. */
  | 'ATTRIBUTE_VALUE_DELETED'
  /** A new category created. */
  | 'CATEGORY_CREATED'
  /** A category is updated. */
  | 'CATEGORY_UPDATED'
  /** A category is deleted. */
  | 'CATEGORY_DELETED'
  /** A new channel created. */
  | 'CHANNEL_CREATED'
  /** A channel is updated. */
  | 'CHANNEL_UPDATED'
  /** A channel is deleted. */
  | 'CHANNEL_DELETED'
  /** A channel status is changed. */
  | 'CHANNEL_STATUS_CHANGED'
  /** A new gift card created. */
  | 'GIFT_CARD_CREATED'
  /** A gift card is updated. */
  | 'GIFT_CARD_UPDATED'
  /** A gift card is deleted. */
  | 'GIFT_CARD_DELETED'
  /**
   * A gift card has been sent.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'GIFT_CARD_SENT'
  /** A gift card status is changed. */
  | 'GIFT_CARD_STATUS_CHANGED'
  /**
   * A gift card metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'GIFT_CARD_METADATA_UPDATED'
  /** A new menu created. */
  | 'MENU_CREATED'
  /** A menu is updated. */
  | 'MENU_UPDATED'
  /** A menu is deleted. */
  | 'MENU_DELETED'
  /** A new menu item created. */
  | 'MENU_ITEM_CREATED'
  /** A menu item is updated. */
  | 'MENU_ITEM_UPDATED'
  /** A menu item is deleted. */
  | 'MENU_ITEM_DELETED'
  /** A new order is placed. */
  | 'ORDER_CREATED'
  /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
  | 'ORDER_CONFIRMED'
  /**
   * Payment has been made. The order may be partially or fully paid.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'ORDER_PAID'
  /** Payment is made and an order is fully paid. */
  | 'ORDER_FULLY_PAID'
  /**
   * The order received a refund. The order may be partially or fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'ORDER_REFUNDED'
  /**
   * The order is fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'ORDER_FULLY_REFUNDED'
  /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
  | 'ORDER_UPDATED'
  /** An order is cancelled. */
  | 'ORDER_CANCELLED'
  /** An order is expired. */
  | 'ORDER_EXPIRED'
  /** An order is fulfilled. */
  | 'ORDER_FULFILLED'
  /**
   * An order metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'ORDER_METADATA_UPDATED'
  /** A draft order is created. */
  | 'DRAFT_ORDER_CREATED'
  /** A draft order is updated. */
  | 'DRAFT_ORDER_UPDATED'
  /** A draft order is deleted. */
  | 'DRAFT_ORDER_DELETED'
  /** A sale is created. */
  | 'SALE_CREATED'
  /** A sale is updated. */
  | 'SALE_UPDATED'
  /** A sale is deleted. */
  | 'SALE_DELETED'
  /** A sale is activated or deactivated. */
  | 'SALE_TOGGLE'
  /** An invoice for order requested. */
  | 'INVOICE_REQUESTED'
  /** An invoice is deleted. */
  | 'INVOICE_DELETED'
  /** Invoice has been sent. */
  | 'INVOICE_SENT'
  /** A new customer account is created. */
  | 'CUSTOMER_CREATED'
  /** A customer account is updated. */
  | 'CUSTOMER_UPDATED'
  /** A customer account is deleted. */
  | 'CUSTOMER_DELETED'
  /**
   * A customer account metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'CUSTOMER_METADATA_UPDATED'
  /** A new collection is created. */
  | 'COLLECTION_CREATED'
  /** A collection is updated. */
  | 'COLLECTION_UPDATED'
  /** A collection is deleted. */
  | 'COLLECTION_DELETED'
  /**
   * A collection metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'COLLECTION_METADATA_UPDATED'
  /** A new product is created. */
  | 'PRODUCT_CREATED'
  /** A product is updated. */
  | 'PRODUCT_UPDATED'
  /** A product is deleted. */
  | 'PRODUCT_DELETED'
  /**
   * A new product media is created.
   *
   * Added in Saleor 3.12.
   */
  | 'PRODUCT_MEDIA_CREATED'
  /**
   * A product media is updated.
   *
   * Added in Saleor 3.12.
   */
  | 'PRODUCT_MEDIA_UPDATED'
  /**
   * A product media is deleted.
   *
   * Added in Saleor 3.12.
   */
  | 'PRODUCT_MEDIA_DELETED'
  /**
   * A product metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'PRODUCT_METADATA_UPDATED'
  /** A new product variant is created. */
  | 'PRODUCT_VARIANT_CREATED'
  /** A product variant is updated. */
  | 'PRODUCT_VARIANT_UPDATED'
  /** A product variant is deleted. */
  | 'PRODUCT_VARIANT_DELETED'
  /** A product variant is out of stock. */
  | 'PRODUCT_VARIANT_OUT_OF_STOCK'
  /** A product variant is back in stock. */
  | 'PRODUCT_VARIANT_BACK_IN_STOCK'
  /** A product variant stock is updated */
  | 'PRODUCT_VARIANT_STOCK_UPDATED'
  /**
   * A product variant metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'PRODUCT_VARIANT_METADATA_UPDATED'
  /** A new checkout is created. */
  | 'CHECKOUT_CREATED'
  /** A checkout is updated. It also triggers all updates related to the checkout. */
  | 'CHECKOUT_UPDATED'
  | 'CHECKOUT_FULLY_PAID'
  /**
   * A checkout metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'CHECKOUT_METADATA_UPDATED'
  /** A new fulfillment is created. */
  | 'FULFILLMENT_CREATED'
  /** A fulfillment is cancelled. */
  | 'FULFILLMENT_CANCELED'
  /** A fulfillment is approved. */
  | 'FULFILLMENT_APPROVED'
  /**
   * A fulfillment metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'FULFILLMENT_METADATA_UPDATED'
  /** User notification triggered. */
  | 'NOTIFY_USER'
  /** A new page is created. */
  | 'PAGE_CREATED'
  /** A page is updated. */
  | 'PAGE_UPDATED'
  /** A page is deleted. */
  | 'PAGE_DELETED'
  /** A new page type is created. */
  | 'PAGE_TYPE_CREATED'
  /** A page type is updated. */
  | 'PAGE_TYPE_UPDATED'
  /** A page type is deleted. */
  | 'PAGE_TYPE_DELETED'
  /** A new permission group is created. */
  | 'PERMISSION_GROUP_CREATED'
  /** A permission group is updated. */
  | 'PERMISSION_GROUP_UPDATED'
  /** A permission group is deleted. */
  | 'PERMISSION_GROUP_DELETED'
  /** A new shipping price is created. */
  | 'SHIPPING_PRICE_CREATED'
  /** A shipping price is updated. */
  | 'SHIPPING_PRICE_UPDATED'
  /** A shipping price is deleted. */
  | 'SHIPPING_PRICE_DELETED'
  /** A new shipping zone is created. */
  | 'SHIPPING_ZONE_CREATED'
  /** A shipping zone is updated. */
  | 'SHIPPING_ZONE_UPDATED'
  /** A shipping zone is deleted. */
  | 'SHIPPING_ZONE_DELETED'
  /**
   * A shipping zone metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'SHIPPING_ZONE_METADATA_UPDATED'
  /** A new staff user is created. */
  | 'STAFF_CREATED'
  /** A staff user is updated. */
  | 'STAFF_UPDATED'
  /** A staff user is deleted. */
  | 'STAFF_DELETED'
  /**
   * An action requested for transaction.
   *
   * DEPRECATED: this subscription will be removed in Saleor 3.14 (Preview Feature). Use `TRANSACTION_CHARGE_REQUESTED`, `TRANSACTION_REFUND_REQUESTED`, `TRANSACTION_CANCELATION_REQUESTED` instead.
   */
  | 'TRANSACTION_ACTION_REQUEST'
  /**
   * Transaction item metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'TRANSACTION_ITEM_METADATA_UPDATED'
  /** A new translation is created. */
  | 'TRANSLATION_CREATED'
  /** A translation is updated. */
  | 'TRANSLATION_UPDATED'
  /** A new warehouse created. */
  | 'WAREHOUSE_CREATED'
  /** A warehouse is updated. */
  | 'WAREHOUSE_UPDATED'
  /** A warehouse is deleted. */
  | 'WAREHOUSE_DELETED'
  /**
   * A warehouse metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'WAREHOUSE_METADATA_UPDATED'
  /** A new voucher created. */
  | 'VOUCHER_CREATED'
  /** A voucher is updated. */
  | 'VOUCHER_UPDATED'
  /** A voucher is deleted. */
  | 'VOUCHER_DELETED'
  /**
   * A voucher metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'VOUCHER_METADATA_UPDATED'
  /** An observability event is created. */
  | 'OBSERVABILITY'
  /**
   * A thumbnail is created.
   *
   * Added in Saleor 3.12.
   */
  | 'THUMBNAIL_CREATED';

/** Enum determining type of webhook. */
export type WebhookEventTypeEnum =
  /** All the events. */
  | 'ANY_EVENTS'
  /** A new address created. */
  | 'ADDRESS_CREATED'
  /** An address updated. */
  | 'ADDRESS_UPDATED'
  /** An address deleted. */
  | 'ADDRESS_DELETED'
  /** A new app installed. */
  | 'APP_INSTALLED'
  /** An app updated. */
  | 'APP_UPDATED'
  /** An app deleted. */
  | 'APP_DELETED'
  /** An app status is changed. */
  | 'APP_STATUS_CHANGED'
  /** A new attribute is created. */
  | 'ATTRIBUTE_CREATED'
  /** An attribute is updated. */
  | 'ATTRIBUTE_UPDATED'
  /** An attribute is deleted. */
  | 'ATTRIBUTE_DELETED'
  /** A new attribute value is created. */
  | 'ATTRIBUTE_VALUE_CREATED'
  /** An attribute value is updated. */
  | 'ATTRIBUTE_VALUE_UPDATED'
  /** An attribute value is deleted. */
  | 'ATTRIBUTE_VALUE_DELETED'
  /** A new category created. */
  | 'CATEGORY_CREATED'
  /** A category is updated. */
  | 'CATEGORY_UPDATED'
  /** A category is deleted. */
  | 'CATEGORY_DELETED'
  /** A new channel created. */
  | 'CHANNEL_CREATED'
  /** A channel is updated. */
  | 'CHANNEL_UPDATED'
  /** A channel is deleted. */
  | 'CHANNEL_DELETED'
  /** A channel status is changed. */
  | 'CHANNEL_STATUS_CHANGED'
  /** A new gift card created. */
  | 'GIFT_CARD_CREATED'
  /** A gift card is updated. */
  | 'GIFT_CARD_UPDATED'
  /** A gift card is deleted. */
  | 'GIFT_CARD_DELETED'
  /**
   * A gift card has been sent.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'GIFT_CARD_SENT'
  /** A gift card status is changed. */
  | 'GIFT_CARD_STATUS_CHANGED'
  /**
   * A gift card metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'GIFT_CARD_METADATA_UPDATED'
  /** A new menu created. */
  | 'MENU_CREATED'
  /** A menu is updated. */
  | 'MENU_UPDATED'
  /** A menu is deleted. */
  | 'MENU_DELETED'
  /** A new menu item created. */
  | 'MENU_ITEM_CREATED'
  /** A menu item is updated. */
  | 'MENU_ITEM_UPDATED'
  /** A menu item is deleted. */
  | 'MENU_ITEM_DELETED'
  /** A new order is placed. */
  | 'ORDER_CREATED'
  /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
  | 'ORDER_CONFIRMED'
  /**
   * Payment has been made. The order may be partially or fully paid.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'ORDER_PAID'
  /** Payment is made and an order is fully paid. */
  | 'ORDER_FULLY_PAID'
  /**
   * The order received a refund. The order may be partially or fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'ORDER_REFUNDED'
  /**
   * The order is fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'ORDER_FULLY_REFUNDED'
  /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
  | 'ORDER_UPDATED'
  /** An order is cancelled. */
  | 'ORDER_CANCELLED'
  /** An order is expired. */
  | 'ORDER_EXPIRED'
  /** An order is fulfilled. */
  | 'ORDER_FULFILLED'
  /**
   * An order metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'ORDER_METADATA_UPDATED'
  /** A draft order is created. */
  | 'DRAFT_ORDER_CREATED'
  /** A draft order is updated. */
  | 'DRAFT_ORDER_UPDATED'
  /** A draft order is deleted. */
  | 'DRAFT_ORDER_DELETED'
  /** A sale is created. */
  | 'SALE_CREATED'
  /** A sale is updated. */
  | 'SALE_UPDATED'
  /** A sale is deleted. */
  | 'SALE_DELETED'
  /** A sale is activated or deactivated. */
  | 'SALE_TOGGLE'
  /** An invoice for order requested. */
  | 'INVOICE_REQUESTED'
  /** An invoice is deleted. */
  | 'INVOICE_DELETED'
  /** Invoice has been sent. */
  | 'INVOICE_SENT'
  /** A new customer account is created. */
  | 'CUSTOMER_CREATED'
  /** A customer account is updated. */
  | 'CUSTOMER_UPDATED'
  /** A customer account is deleted. */
  | 'CUSTOMER_DELETED'
  /**
   * A customer account metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'CUSTOMER_METADATA_UPDATED'
  /** A new collection is created. */
  | 'COLLECTION_CREATED'
  /** A collection is updated. */
  | 'COLLECTION_UPDATED'
  /** A collection is deleted. */
  | 'COLLECTION_DELETED'
  /**
   * A collection metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'COLLECTION_METADATA_UPDATED'
  /** A new product is created. */
  | 'PRODUCT_CREATED'
  /** A product is updated. */
  | 'PRODUCT_UPDATED'
  /** A product is deleted. */
  | 'PRODUCT_DELETED'
  /**
   * A new product media is created.
   *
   * Added in Saleor 3.12.
   */
  | 'PRODUCT_MEDIA_CREATED'
  /**
   * A product media is updated.
   *
   * Added in Saleor 3.12.
   */
  | 'PRODUCT_MEDIA_UPDATED'
  /**
   * A product media is deleted.
   *
   * Added in Saleor 3.12.
   */
  | 'PRODUCT_MEDIA_DELETED'
  /**
   * A product metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'PRODUCT_METADATA_UPDATED'
  /** A new product variant is created. */
  | 'PRODUCT_VARIANT_CREATED'
  /** A product variant is updated. */
  | 'PRODUCT_VARIANT_UPDATED'
  /** A product variant is deleted. */
  | 'PRODUCT_VARIANT_DELETED'
  /** A product variant is out of stock. */
  | 'PRODUCT_VARIANT_OUT_OF_STOCK'
  /** A product variant is back in stock. */
  | 'PRODUCT_VARIANT_BACK_IN_STOCK'
  /** A product variant stock is updated */
  | 'PRODUCT_VARIANT_STOCK_UPDATED'
  /**
   * A product variant metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'PRODUCT_VARIANT_METADATA_UPDATED'
  /** A new checkout is created. */
  | 'CHECKOUT_CREATED'
  /** A checkout is updated. It also triggers all updates related to the checkout. */
  | 'CHECKOUT_UPDATED'
  | 'CHECKOUT_FULLY_PAID'
  /**
   * A checkout metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'CHECKOUT_METADATA_UPDATED'
  /** A new fulfillment is created. */
  | 'FULFILLMENT_CREATED'
  /** A fulfillment is cancelled. */
  | 'FULFILLMENT_CANCELED'
  /** A fulfillment is approved. */
  | 'FULFILLMENT_APPROVED'
  /**
   * A fulfillment metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'FULFILLMENT_METADATA_UPDATED'
  /** User notification triggered. */
  | 'NOTIFY_USER'
  /** A new page is created. */
  | 'PAGE_CREATED'
  /** A page is updated. */
  | 'PAGE_UPDATED'
  /** A page is deleted. */
  | 'PAGE_DELETED'
  /** A new page type is created. */
  | 'PAGE_TYPE_CREATED'
  /** A page type is updated. */
  | 'PAGE_TYPE_UPDATED'
  /** A page type is deleted. */
  | 'PAGE_TYPE_DELETED'
  /** A new permission group is created. */
  | 'PERMISSION_GROUP_CREATED'
  /** A permission group is updated. */
  | 'PERMISSION_GROUP_UPDATED'
  /** A permission group is deleted. */
  | 'PERMISSION_GROUP_DELETED'
  /** A new shipping price is created. */
  | 'SHIPPING_PRICE_CREATED'
  /** A shipping price is updated. */
  | 'SHIPPING_PRICE_UPDATED'
  /** A shipping price is deleted. */
  | 'SHIPPING_PRICE_DELETED'
  /** A new shipping zone is created. */
  | 'SHIPPING_ZONE_CREATED'
  /** A shipping zone is updated. */
  | 'SHIPPING_ZONE_UPDATED'
  /** A shipping zone is deleted. */
  | 'SHIPPING_ZONE_DELETED'
  /**
   * A shipping zone metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'SHIPPING_ZONE_METADATA_UPDATED'
  /** A new staff user is created. */
  | 'STAFF_CREATED'
  /** A staff user is updated. */
  | 'STAFF_UPDATED'
  /** A staff user is deleted. */
  | 'STAFF_DELETED'
  /**
   * An action requested for transaction.
   *
   * DEPRECATED: this subscription will be removed in Saleor 3.14 (Preview Feature). Use `TRANSACTION_CHARGE_REQUESTED`, `TRANSACTION_REFUND_REQUESTED`, `TRANSACTION_CANCELATION_REQUESTED` instead.
   */
  | 'TRANSACTION_ACTION_REQUEST'
  /**
   * Transaction item metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'TRANSACTION_ITEM_METADATA_UPDATED'
  /** A new translation is created. */
  | 'TRANSLATION_CREATED'
  /** A translation is updated. */
  | 'TRANSLATION_UPDATED'
  /** A new warehouse created. */
  | 'WAREHOUSE_CREATED'
  /** A warehouse is updated. */
  | 'WAREHOUSE_UPDATED'
  /** A warehouse is deleted. */
  | 'WAREHOUSE_DELETED'
  /**
   * A warehouse metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'WAREHOUSE_METADATA_UPDATED'
  /** A new voucher created. */
  | 'VOUCHER_CREATED'
  /** A voucher is updated. */
  | 'VOUCHER_UPDATED'
  /** A voucher is deleted. */
  | 'VOUCHER_DELETED'
  /**
   * A voucher metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'VOUCHER_METADATA_UPDATED'
  /** An observability event is created. */
  | 'OBSERVABILITY'
  /**
   * A thumbnail is created.
   *
   * Added in Saleor 3.12.
   */
  | 'THUMBNAIL_CREATED'
  /** Authorize payment. */
  | 'PAYMENT_AUTHORIZE'
  /** Capture payment. */
  | 'PAYMENT_CAPTURE'
  /** Confirm payment. */
  | 'PAYMENT_CONFIRM'
  /** Listing available payment gateways. */
  | 'PAYMENT_LIST_GATEWAYS'
  /** Process payment. */
  | 'PAYMENT_PROCESS'
  /** Refund payment. */
  | 'PAYMENT_REFUND'
  /** Void payment. */
  | 'PAYMENT_VOID'
  /**
   * Event called when charge has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'TRANSACTION_CHARGE_REQUESTED'
  /**
   * Event called when refund has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'TRANSACTION_REFUND_REQUESTED'
  /**
   * Event called when cancel has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'TRANSACTION_CANCELATION_REQUESTED'
  /**
   * Event called for checkout tax calculation.
   *
   * Added in Saleor 3.6.
   */
  | 'CHECKOUT_CALCULATE_TAXES'
  /**
   * Event called for order tax calculation.
   *
   * Added in Saleor 3.6.
   */
  | 'ORDER_CALCULATE_TAXES'
  /** Fetch external shipping methods for checkout. */
  | 'SHIPPING_LIST_METHODS_FOR_CHECKOUT'
  /** Filter shipping methods for order. */
  | 'ORDER_FILTER_SHIPPING_METHODS'
  /** Filter shipping methods for checkout. */
  | 'CHECKOUT_FILTER_SHIPPING_METHODS'
  | 'PAYMENT_GATEWAY_INITIALIZE_SESSION'
  | 'TRANSACTION_INITIALIZE_SESSION'
  | 'TRANSACTION_PROCESS_SESSION';

/** Enum determining type of webhook. */
export type WebhookEventTypeSyncEnum =
  /** Authorize payment. */
  | 'PAYMENT_AUTHORIZE'
  /** Capture payment. */
  | 'PAYMENT_CAPTURE'
  /** Confirm payment. */
  | 'PAYMENT_CONFIRM'
  /** Listing available payment gateways. */
  | 'PAYMENT_LIST_GATEWAYS'
  /** Process payment. */
  | 'PAYMENT_PROCESS'
  /** Refund payment. */
  | 'PAYMENT_REFUND'
  /** Void payment. */
  | 'PAYMENT_VOID'
  /**
   * Event called when charge has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'TRANSACTION_CHARGE_REQUESTED'
  /**
   * Event called when refund has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'TRANSACTION_REFUND_REQUESTED'
  /**
   * Event called when cancel has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'TRANSACTION_CANCELATION_REQUESTED'
  /**
   * Event called for checkout tax calculation.
   *
   * Added in Saleor 3.6.
   */
  | 'CHECKOUT_CALCULATE_TAXES'
  /**
   * Event called for order tax calculation.
   *
   * Added in Saleor 3.6.
   */
  | 'ORDER_CALCULATE_TAXES'
  /** Fetch external shipping methods for checkout. */
  | 'SHIPPING_LIST_METHODS_FOR_CHECKOUT'
  /** Filter shipping methods for order. */
  | 'ORDER_FILTER_SHIPPING_METHODS'
  /** Filter shipping methods for checkout. */
  | 'CHECKOUT_FILTER_SHIPPING_METHODS'
  | 'PAYMENT_GATEWAY_INITIALIZE_SESSION'
  | 'TRANSACTION_INITIALIZE_SESSION'
  | 'TRANSACTION_PROCESS_SESSION';

/** An enumeration. */
export type WebhookSampleEventTypeEnum =
  | 'ADDRESS_CREATED'
  | 'ADDRESS_UPDATED'
  | 'ADDRESS_DELETED'
  | 'APP_INSTALLED'
  | 'APP_UPDATED'
  | 'APP_DELETED'
  | 'APP_STATUS_CHANGED'
  | 'ATTRIBUTE_CREATED'
  | 'ATTRIBUTE_UPDATED'
  | 'ATTRIBUTE_DELETED'
  | 'ATTRIBUTE_VALUE_CREATED'
  | 'ATTRIBUTE_VALUE_UPDATED'
  | 'ATTRIBUTE_VALUE_DELETED'
  | 'CATEGORY_CREATED'
  | 'CATEGORY_UPDATED'
  | 'CATEGORY_DELETED'
  | 'CHANNEL_CREATED'
  | 'CHANNEL_UPDATED'
  | 'CHANNEL_DELETED'
  | 'CHANNEL_STATUS_CHANGED'
  | 'GIFT_CARD_CREATED'
  | 'GIFT_CARD_UPDATED'
  | 'GIFT_CARD_DELETED'
  | 'GIFT_CARD_SENT'
  | 'GIFT_CARD_STATUS_CHANGED'
  | 'GIFT_CARD_METADATA_UPDATED'
  | 'MENU_CREATED'
  | 'MENU_UPDATED'
  | 'MENU_DELETED'
  | 'MENU_ITEM_CREATED'
  | 'MENU_ITEM_UPDATED'
  | 'MENU_ITEM_DELETED'
  | 'ORDER_CREATED'
  | 'ORDER_CONFIRMED'
  | 'ORDER_PAID'
  | 'ORDER_FULLY_PAID'
  | 'ORDER_REFUNDED'
  | 'ORDER_FULLY_REFUNDED'
  | 'ORDER_UPDATED'
  | 'ORDER_CANCELLED'
  | 'ORDER_EXPIRED'
  | 'ORDER_FULFILLED'
  | 'ORDER_METADATA_UPDATED'
  | 'DRAFT_ORDER_CREATED'
  | 'DRAFT_ORDER_UPDATED'
  | 'DRAFT_ORDER_DELETED'
  | 'SALE_CREATED'
  | 'SALE_UPDATED'
  | 'SALE_DELETED'
  | 'SALE_TOGGLE'
  | 'INVOICE_REQUESTED'
  | 'INVOICE_DELETED'
  | 'INVOICE_SENT'
  | 'CUSTOMER_CREATED'
  | 'CUSTOMER_UPDATED'
  | 'CUSTOMER_DELETED'
  | 'CUSTOMER_METADATA_UPDATED'
  | 'COLLECTION_CREATED'
  | 'COLLECTION_UPDATED'
  | 'COLLECTION_DELETED'
  | 'COLLECTION_METADATA_UPDATED'
  | 'PRODUCT_CREATED'
  | 'PRODUCT_UPDATED'
  | 'PRODUCT_DELETED'
  | 'PRODUCT_MEDIA_CREATED'
  | 'PRODUCT_MEDIA_UPDATED'
  | 'PRODUCT_MEDIA_DELETED'
  | 'PRODUCT_METADATA_UPDATED'
  | 'PRODUCT_VARIANT_CREATED'
  | 'PRODUCT_VARIANT_UPDATED'
  | 'PRODUCT_VARIANT_DELETED'
  | 'PRODUCT_VARIANT_OUT_OF_STOCK'
  | 'PRODUCT_VARIANT_BACK_IN_STOCK'
  | 'PRODUCT_VARIANT_STOCK_UPDATED'
  | 'PRODUCT_VARIANT_METADATA_UPDATED'
  | 'CHECKOUT_CREATED'
  | 'CHECKOUT_UPDATED'
  | 'CHECKOUT_FULLY_PAID'
  | 'CHECKOUT_METADATA_UPDATED'
  | 'FULFILLMENT_CREATED'
  | 'FULFILLMENT_CANCELED'
  | 'FULFILLMENT_APPROVED'
  | 'FULFILLMENT_METADATA_UPDATED'
  | 'NOTIFY_USER'
  | 'PAGE_CREATED'
  | 'PAGE_UPDATED'
  | 'PAGE_DELETED'
  | 'PAGE_TYPE_CREATED'
  | 'PAGE_TYPE_UPDATED'
  | 'PAGE_TYPE_DELETED'
  | 'PERMISSION_GROUP_CREATED'
  | 'PERMISSION_GROUP_UPDATED'
  | 'PERMISSION_GROUP_DELETED'
  | 'SHIPPING_PRICE_CREATED'
  | 'SHIPPING_PRICE_UPDATED'
  | 'SHIPPING_PRICE_DELETED'
  | 'SHIPPING_ZONE_CREATED'
  | 'SHIPPING_ZONE_UPDATED'
  | 'SHIPPING_ZONE_DELETED'
  | 'SHIPPING_ZONE_METADATA_UPDATED'
  | 'STAFF_CREATED'
  | 'STAFF_UPDATED'
  | 'STAFF_DELETED'
  | 'TRANSACTION_ACTION_REQUEST'
  | 'TRANSACTION_ITEM_METADATA_UPDATED'
  | 'TRANSLATION_CREATED'
  | 'TRANSLATION_UPDATED'
  | 'WAREHOUSE_CREATED'
  | 'WAREHOUSE_UPDATED'
  | 'WAREHOUSE_DELETED'
  | 'WAREHOUSE_METADATA_UPDATED'
  | 'VOUCHER_CREATED'
  | 'VOUCHER_UPDATED'
  | 'VOUCHER_DELETED'
  | 'VOUCHER_METADATA_UPDATED'
  | 'OBSERVABILITY'
  | 'THUMBNAIL_CREATED';

/**
 * Trigger a webhook event. Supports a single event (the first, if multiple provided in the `webhook.subscription_query`). Requires permission relevant to processed event. Successfully delivered webhook returns `delivery` with status='PENDING' and empty payload.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type WebhookTrigger = {
  delivery: Maybe<EventDelivery>;
  errors: Array<WebhookTriggerError>;
};

export type WebhookTriggerError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: WebhookTriggerErrorCode;
};

/** An enumeration. */
export type WebhookTriggerErrorCode =
  | 'GRAPHQL_ERROR'
  | 'NOT_FOUND'
  | 'INVALID_ID'
  | 'MISSING_PERMISSION'
  | 'TYPE_NOT_SUPPORTED'
  | 'SYNTAX'
  | 'MISSING_SUBSCRIPTION'
  | 'UNABLE_TO_PARSE'
  | 'MISSING_QUERY'
  | 'MISSING_EVENT';

/**
 * Updates a webhook subscription.
 *
 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
 */
export type WebhookUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>;
  errors: Array<WebhookError>;
  webhook: Maybe<Webhook>;
};

export type WebhookUpdateInput = {
  /** The new name of the webhook. */
  name?: Maybe<Scalars['String']>;
  /** The url to receive the payload. */
  targetUrl?: Maybe<Scalars['String']>;
  /**
   * The events that webhook wants to subscribe.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  events?: Maybe<Array<WebhookEventTypeEnum>>;
  /** The asynchronous events that webhook wants to subscribe. */
  asyncEvents?: Maybe<Array<WebhookEventTypeAsyncEnum>>;
  /** The synchronous events that webhook wants to subscribe. */
  syncEvents?: Maybe<Array<WebhookEventTypeSyncEnum>>;
  /** ID of the app to which webhook belongs. */
  app?: Maybe<Scalars['ID']>;
  /** Determine if webhook will be set active or not. */
  isActive?: Maybe<Scalars['Boolean']>;
  /**
   * Use to create a hash signature with each payload.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. As of Saleor 3.5, webhook payloads default to signing using a verifiable JWS.
   */
  secretKey?: Maybe<Scalars['String']>;
  /**
   * Subscription query used to define a webhook payload.
   *
   * Added in Saleor 3.2.
   */
  query?: Maybe<Scalars['String']>;
  /**
   * Custom headers, which will be added to HTTP request. There is a limitation of 5 headers per webhook and 998 characters per header.Only "X-*" and "Authorization*" keys are allowed.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  customHeaders?: Maybe<Scalars['JSONString']>;
};

/** Represents weight value in a specific weight unit. */
export type Weight = {
  /** Weight unit. */
  unit: WeightUnitsEnum;
  /** Weight value. */
  value: Scalars['Float'];
};


/** An enumeration. */
export type WeightUnitsEnum =
  | 'G'
  | 'LB'
  | 'OZ'
  | 'KG'
  | 'TONNE';


/** _Entity union as defined by Federation spec. */
export type _Entity = App | Address | User | Group | ProductVariant | Product | ProductType | ProductMedia | Category | Collection | Order | PageType;

/** _Service manifest as defined by Federation spec. */
export type _Service = {
  sdl: Maybe<Scalars['String']>;
};

export type AccountErrorFragment = Pick<AccountError, 'code' | 'field' | 'message'>;

export type AddressFragment = (
  Pick<Address, 'id' | 'firstName' | 'lastName' | 'companyName' | 'streetAddress1' | 'streetAddress2' | 'city' | 'cityArea' | 'postalCode' | 'countryArea' | 'phone' | 'isDefaultBillingAddress' | 'isDefaultShippingAddress'>
  & { country: Pick<CountryDisplay, 'code' | 'country'> }
);

export type ChannelFragment = (
  Pick<Channel, 'id' | 'isActive' | 'name' | 'slug' | 'currencyCode'>
  & { defaultCountry: Pick<CountryDisplay, 'code' | 'country'>, stockSettings: Pick<StockSettings, 'allocationStrategy'> }
);

export type UserBaseFragment = Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'isStaff'>;

export type UserDetailsFragment = (
  Pick<User, 'restrictedAccessToChannels'>
  & { metadata: Array<Pick<MetadataItem, 'key' | 'value'>>, defaultShippingAddress: Maybe<AddressFragment>, defaultBillingAddress: Maybe<AddressFragment>, addresses: Array<AddressFragment>, accessibleChannels: Maybe<Array<ChannelFragment>> }
  & UserBaseFragment
);

export type LoginWithoutDetailsMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginWithoutDetailsMutation = { tokenCreate: Maybe<(
    Pick<CreateToken, 'refreshToken' | 'token'>
    & { errors: Array<AccountErrorFragment>, user: Maybe<UserBaseFragment> }
  )> };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { tokenCreate: Maybe<(
    Pick<CreateToken, 'token' | 'refreshToken'>
    & { errors: Array<AccountErrorFragment>, user: Maybe<UserDetailsFragment> }
  )> };

export type RegisterMutationVariables = Exact<{
  input: AccountRegisterInput;
}>;


export type RegisterMutation = { accountRegister: Maybe<(
    Pick<AccountRegister, 'requiresConfirmation'>
    & { errors: Array<AccountErrorFragment> }
  )> };

export type RefreshTokenMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type RefreshTokenMutation = { tokenRefresh: Maybe<(
    Pick<RefreshToken, 'token'>
    & { errors: Array<AccountErrorFragment> }
  )> };

export type RefreshTokenWithUserMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type RefreshTokenWithUserMutation = { tokenRefresh: Maybe<(
    Pick<RefreshToken, 'token'>
    & { user: Maybe<UserDetailsFragment>, errors: Array<AccountErrorFragment> }
  )> };

export type VerifyTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyTokenMutation = { tokenVerify: Maybe<(
    Pick<VerifyToken, 'isValid' | 'payload'>
    & { user: Maybe<UserDetailsFragment>, errors: Array<AccountErrorFragment> }
  )> };

export type ExternalAuthenticationUrlMutationVariables = Exact<{
  pluginId?: Maybe<Scalars['String']>;
  input: Scalars['JSONString'];
}>;


export type ExternalAuthenticationUrlMutation = { externalAuthenticationUrl: Maybe<(
    Pick<ExternalAuthenticationUrl, 'authenticationData'>
    & { errors: Array<AccountErrorFragment> }
  )> };

export type ExternalObtainAccessTokensMutationVariables = Exact<{
  pluginId?: Maybe<Scalars['String']>;
  input: Scalars['JSONString'];
}>;


export type ExternalObtainAccessTokensMutation = { externalObtainAccessTokens: Maybe<(
    Pick<ExternalObtainAccessTokens, 'token' | 'refreshToken'>
    & { user: Maybe<UserDetailsFragment>, errors: Array<AccountErrorFragment> }
  )> };

export type ExternalRefreshMutationVariables = Exact<{
  pluginId?: Maybe<Scalars['String']>;
  input: Scalars['JSONString'];
}>;


export type ExternalRefreshMutation = { externalRefresh: Maybe<(
    Pick<ExternalRefresh, 'token' | 'refreshToken'>
    & { errors: Array<AccountErrorFragment> }
  )> };

export type ExternalRefreshWithUserMutationVariables = Exact<{
  pluginId?: Maybe<Scalars['String']>;
  input: Scalars['JSONString'];
}>;


export type ExternalRefreshWithUserMutation = { externalRefresh: Maybe<(
    Pick<ExternalRefresh, 'token' | 'refreshToken'>
    & { user: Maybe<UserDetailsFragment>, errors: Array<AccountErrorFragment> }
  )> };

export type ExternalVerifyMutationVariables = Exact<{
  pluginId?: Maybe<Scalars['String']>;
  input: Scalars['JSONString'];
}>;


export type ExternalVerifyMutation = { externalVerify: Maybe<(
    Pick<ExternalVerify, 'isValid' | 'verifyData'>
    & { user: Maybe<(
      { userPermissions: Maybe<Array<Pick<UserPermission, 'code' | 'name'>>> }
      & UserDetailsFragment
    )>, errors: Array<AccountErrorFragment> }
  )> };

export type ExternalLogoutMutationVariables = Exact<{
  pluginId?: Maybe<Scalars['String']>;
  input: Scalars['JSONString'];
}>;


export type ExternalLogoutMutation = { externalLogout: Maybe<(
    Pick<ExternalLogout, 'logoutData'>
    & { errors: Array<AccountErrorFragment> }
  )> };

export type PasswordChangeMutationVariables = Exact<{
  newPassword: Scalars['String'];
  oldPassword?: Maybe<Scalars['String']>;
}>;


export type PasswordChangeMutation = { passwordChange: Maybe<{ errors: Array<AccountErrorFragment> }> };

export type RequestPasswordResetMutationVariables = Exact<{
  email: Scalars['String'];
  redirectUrl: Scalars['String'];
  channel: Scalars['String'];
}>;


export type RequestPasswordResetMutation = { requestPasswordReset: Maybe<{ errors: Array<AccountErrorFragment> }> };

export type SetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SetPasswordMutation = { setPassword: Maybe<(
    Pick<SetPassword, 'token' | 'refreshToken'>
    & { errors: Array<AccountErrorFragment>, user: Maybe<UserDetailsFragment> }
  )> };

export type RequestEmailChangeMutationVariables = Exact<{
  channel: Scalars['String'];
  newEmail: Scalars['String'];
  password: Scalars['String'];
  redirectUrl: Scalars['String'];
}>;


export type RequestEmailChangeMutation = { requestEmailChange: Maybe<{ errors: Array<AccountErrorFragment>, user: Maybe<UserDetailsFragment> }> };

export type ConfirmEmailChangeMutationVariables = Exact<{
  channel: Scalars['String'];
  token: Scalars['String'];
}>;


export type ConfirmEmailChangeMutation = { confirmEmailChange: Maybe<{ errors: Array<AccountErrorFragment>, user: Maybe<UserDetailsFragment> }> };

export type AccountRequestDeletionMutationVariables = Exact<{
  channel: Scalars['String'];
  redirectUrl: Scalars['String'];
}>;


export type AccountRequestDeletionMutation = { accountRequestDeletion: Maybe<{ errors: Array<AccountErrorFragment> }> };

export type AccountDeleteMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type AccountDeleteMutation = { accountDelete: Maybe<{ errors: Array<AccountErrorFragment>, user: Maybe<UserDetailsFragment> }> };

export type AccountUpdateMutationVariables = Exact<{
  input: AccountInput;
}>;


export type AccountUpdateMutation = { accountUpdate: Maybe<{ errors: Array<AccountErrorFragment>, user: Maybe<UserDetailsFragment> }> };

export type SetAccountDefaultAddressMutationVariables = Exact<{
  id: Scalars['ID'];
  type: AddressTypeEnum;
}>;


export type SetAccountDefaultAddressMutation = { accountSetDefaultAddress: Maybe<{ errors: Array<AccountErrorFragment>, user: Maybe<UserDetailsFragment> }> };

export type DeleteAccountAddressMutationVariables = Exact<{
  addressId: Scalars['ID'];
}>;


export type DeleteAccountAddressMutation = { accountAddressDelete: Maybe<{ errors: Array<AccountErrorFragment>, user: Maybe<UserDetailsFragment> }> };

export type CreateAccountAddressMutationVariables = Exact<{
  input: AddressInput;
}>;


export type CreateAccountAddressMutation = { accountAddressCreate: Maybe<{ address: Maybe<AddressFragment>, errors: Array<AccountErrorFragment>, user: Maybe<UserDetailsFragment> }> };

export type UpdateAccountAddressMutationVariables = Exact<{
  input: AddressInput;
  id: Scalars['ID'];
}>;


export type UpdateAccountAddressMutation = { accountAddressUpdate: Maybe<{ address: Maybe<AddressFragment>, errors: Array<AccountErrorFragment>, user: Maybe<UserDetailsFragment> }> };

export type AccountConfirmMutationVariables = Exact<{
  email: Scalars['String'];
  token: Scalars['String'];
}>;


export type AccountConfirmMutation = { confirmAccount: Maybe<{ user: Maybe<UserDetailsFragment>, errors: Array<AccountErrorFragment> }> };

export type UserWithoutDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserWithoutDetailsQuery = (
  Pick<Query, 'authenticated' | 'authenticating'>
  & { user: Maybe<UserBaseFragment> }
);

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = (
  Pick<Query, 'authenticated' | 'authenticating'>
  & { user: Maybe<UserDetailsFragment> }
);
