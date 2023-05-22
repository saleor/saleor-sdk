<div align="center">
  <h1>Saleor SDK - DEPRECATED</h1>
</div>

This package contains methods providing Saleor business logic for a storefront and apps. It handles Saleor GraphQL queries and mutations, manages Apollo cache, and provides an internal state to manage popular storefront use cases, like user authentication.

> :warning: **Note: Saleor SDK is DEPRECATED. [See the announcement](https://github.com/saleor/saleor/discussions/12891).**
> 
> **For authentication, follow the [Saleor docs](https://docs.saleor.io/docs/3.x/api-usage/authentication) and use [@saleor/auth-sdk](https://www.npmjs.com/package/@saleor/auth-sdk).**

## Table of Contents

- [Setup](#setup)
- [Features](#features)
- [Local development](#local-development)

## Setup

There are two ways to use SDK - making custom implementation or using React components and hooks, which already has that implementation ready.

### Using React

First install following dependencies to your project

```bash
npm install @saleor/sdk @apollo/client graphql
```

Use `SaleorProvider` with passed Saleor's client created by `createSaleorClient` in a prop. Then use React hooks in any component passed as child to `SaleorProvider`.

```tsx
import {
  SaleorProvider,
  createSaleorClient,
  useAuth,
  useAuthState,
} from "@saleor/sdk";

const client = createSaleorClient({
  apiUrl: "<SALEOR_GRAPHQL_URL>",
  channel: "<CHANNEL>",
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <SaleorProvider client={client}>
    <App />
  </SaleorProvider>,
  rootElement
);

const App = () => {
  const { login } = useAuth();
  const { authenticated, user } = useAuthState();

  const handleSignIn = async () => {
    const { data } = await login({
      email: "admin@example.com",
      password: "admin",
    });

    if (data.tokenCreate.errors.length > 0) {
      /**
       * Unable to sign in.
       **/
    } else if (data) {
      /**
       * User signed in successfully.
       **/
    }
  };

  if (authenticated && user) {
    return <span>Signed in as {user.firstName}</span>;
  }

  return <button onClick={handleSignIn}>Sign in</button>;
};
```

### Using with NodeJS and other frameworks

```bash
npm install @saleor/sdk @apollo/client graphql
```

Then use `createSaleorClient` to get Saleor api methods and internal config variables like channel and Apollo client.

```tsx
import { createSaleorClient } from "@saleor/sdk";

const client = createSaleorClient({
  apiUrl: "<SALEOR_GRAPHQL_URL>",
  channel: "<CHANNEL>",
});

const { auth, config, _internal } = client;
```

Finally, API methods can be used:

```tsx
const { data } = await auth.login({
  email: "admin@example.com",
  password: "admin",
});

if (data.tokenCreate.errors.length > 0) {
  /**
   * Unable to sign in.
   **/
} else if (data) {
  /**
   * User signed in successfully.
   **/
  const userData = api.auth.tokenCreate.user;
}
```

### Custom HTTP communication with SDK authorization

SDK provides fetch method with all the necessary authorization headers assigned to HTTP requests and handled authorization token creation, verification and refresh inside, which you may use instead of built-in browser fetch. Using SDK `auth` login or logout methods will appropriately alter fetch behavior automatically, like including Authorization Bearer header in HTTP request.

```tsx
import { createFetch } from "@saleor/sdk";

const authorizedFetch = createFetch();

const result = await authorizedFetch("https://example.com");
```

If you use GraphQL you may pass SDK fetch to the Apollo client:

```tsx
const authorizationLink = new HttpLink({
  fetch: authorizedFetch,
});
const apolloClient = new ApolloClient({
  link: authorizationLink,
});
```

SDK fetch method uses [cross-fetch](https://github.com/lquixada/cross-fetch) under the hood.

## Features

We provide an API with methods and fields, performing one, scoped type of work. You may access them straight from `createSaleorClient()` or use React hooks:

| API object   | React hook          | Description                                                              |
| :----------- | :------------------ | :----------------------------------------------------------------------- |
| `getState()` | `useAuthState()`    | Returns current SDK state: `user`, `authenticated` and `authenticating`. |
| `auth`       | `useAuth()`         | Handles user authentication methods.                                     |
| `user`       | `useUser()`         | Handles user account methods.                                            |
| `config`     | `useSaleorConfig()` | Handles SDK configuration.                                               |

SDK supports OpenId Connect methods provided by Saleor API. They are under `auth` object and `useAuth` hook. For more usage details, please check https://docs.saleor.io/docs/3.0/developer/available-plugins/openid-connect.

## Local development

Our aim it to build SDK, highly configurable, as a separate package, which you will not require modifications. Although if you want to alter the project, especially if you want to contribute, it is possible to develop storefront and SDK simultaneously. To do this, you need
to link it to the storefront's project.

```bash
$ cd lib
$ npm link
$ cd <your storefront path>
$ npm link @saleor/sdk
```

Notice that in [our example storefront](https://github.com/mirumee/saleor-storefront)
webpack is configured to always resolve `react` to `./node_modules/react`. It may
seem redundant for the most use cases, but helps in sdk's local development, because
it overcomes `npm`'s limitations regarding peer dependencies hoisting, explicitly
telling webpack to always have one and only copy of `react`.

### Configuration

Set environment variables:

```bash
export API_URI=https://your.saleor.instance.com/graphql/
export TEST_AUTH_EMAIL=admin@example.com
export TEST_AUTH_PASSWORD=admin
```

### Development

1. Download repository
2. Install dependencies: `npm i`
3. Now you can start files watcher with: `npm run start`

### Production build

```bash
npm run build
```

### Tests

Tests are located at `/test` directory. To start the test suite:

```bash
npm run test
```

All communication with API is prerecorded using [Polly.JS](https://netflix.github.io/pollyjs/#/README). Unless requests changed or code executes new ones, no requests to API will be made.

Changes in `/recordings` directory should be reviewed before committing to make sure that changes in communication are intentional.

### Code quality

The project has configured Prettier and ESLint. To check your code:

```bash
npm run lint
```

### Fetch current GraphQL schema

```bash
npm run download-schema
```

Command will overwrite `introspection.json` with server schema, based on `API_URL` variable.

### Updating TS types

GraphQL Code Generator is an automatic tool that converts schema to TS types. After changing schema file run:

```bash
npm run build-types
```

### Updating recordings

Changes in the core user methods and tests may result in failing tests. Typically you may encounter the following error:

```bash
request to http://localhost:8000/graphql/ failed, reason: connect ECONNREFUSED 127.0.0.1:8000
```

To fix this run `npm run test` with the following variables:

- `API_URI`
- `TEST_AUTH_EMAIL`
- `TEST_AUTH_PASSWORD`

After the tests run the recordings should be updated. Next time you run tests without variables, tests will use updated recordings.
