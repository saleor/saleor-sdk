<div align="center">
  <h1>Saleor SDK</h1>
</div>

This package contains all queries and mutations that are used in our sample storefront.
Still under heavy development.

## Table of Contents

- [Setup](#setup)
- [Usage](#usage)

## Setup

### React implementation

First install SDK as dependency to your project

```bash
npm install @saleor/sdk
```

In React, all you need to do is to use `SaleorProvider` with passed custom config as a prop. Having that you may use React hooks in any component passed as child to `SaleorProvider`. These hooks are available in the same package.

```tsx
import { SaleorProvider } from "@saleor/sdk";
import App from "./App";

const CUSTOM_CONFIG = { apiUrl: "http://localhost:8000/graphql/" };

const rootElement = document.getElementById("root");
ReactDOM.render(
  <SaleorProvider config={CUSTOM_CONFIG}>
    <App />
  </SaleorProvider>,
  rootElement
);
```

### Custom implementation

```bash
npm install @saleor/sdk
```

Create new saleor client by using our built-in pre-configured apollo client:

```tsx
import { createSaleorClient } from "@saleor/sdk";

const client = createSaleorClient(...);
```

Then use SaleorManager and get `SaleorAPI` from `connect` method. This method takes function as an argument, which will be executed every time the `SaleorAPI` state changes.

```tsx
const manager = new SaleorManager(client, config);

let saleor;

manager.connect((saleorAPI) => {
  if (saleor === undefined) {
    saleor = saleorAPI;
  }
});
```

## Usage

### React hooks

We provide a custom hook per each query that have near identical API to `react-apollo` but are dynamically typed, with built-in error handling.

In your root file:

```tsx
import { SaleorProvider } from "@saleor/sdk";
import App from "./App";

const CUSTOM_CONFIG = { apiUrl: "http://localhost:8000/graphql/" };

const rootElement = document.getElementById("root");
ReactDOM.render(
  <SaleorProvider config={CUSTOM_CONFIG}>
    <App />
  </SaleorProvider>,
  rootElement
);
```

There are 2 types of api calls - queries and mutations.

Query (gets data):

```tsx
const { data: TData["data"], loading: boolean, error: ApolloError } = useProductDetails(variables, options?)
```

Mutation (sets data):

```tsx
const [
  signIn: (options?) => Promise<TData>,
  { data: TData["data"], loading: boolean, error: ApolloError, called: boolean }
] = useSignIn(options?)
```

For `options` and full api reference, navigate to [official docs](https://www.apollographql.com/docs/)

### Other frameworks

Create new SaleorAPI instance and use methods available on it

```tsx
import { SaleorAPI } from "saleor-sdk";
import { client } from "./saleor";

export const saleorAPI = new SaleorAPI(client);
```

```tsx
const { data } = await saleorAPI.getProductDetails(variables, options?)
```

### Local development

It is possible to develop storefront and SDK simultaneously. To do this, you need
to link it to the storefront's project.

```bash
$ cd build
$ npm link
$ cd <your storefront path>
$ npm link @saleor/sdk
```

Notice that in [our example storefront](https://github.com/mirumee/saleor-storefront)
webpack is configured to always resolve `react` to `./node_modules/react`. It may
seem redundant for the most use cases, but helps in sdk's local development, because
it overcomes `npm`'s limitations regarding peer dependencies hoisting, explicitely
telling webpack to always have one and only copy of `react`.
