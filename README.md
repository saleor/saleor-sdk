# Saleor API SDK

This package contains all queries and mutations that are used in our sample storefront.
Still under heavy development.

## Setup

```
npm install @saleor/sdk
```

Create new saleor client by using our built-in pre-configured apollo client:

```
import { createSaleorClient } from '@saleor/sdk'

const client = createSaleorClient(API_URL)
```

## Usage

### React

We provide a custom hook per each query that have near identical API to `react-apollo` but are dynamically typed, with built-in error handling.

In your root file:

```
import { SaleorProvider } from '@saleor/sdk'
import { client } from './saleor'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <SaleorProvider client={client}>
    <App />
  </SaleorProvider>,
  rootElement
)
```

There are 2 types of api calls - queries and mutations.

Query (gets data):

```
const { data: TData["data"], loading: boolean, error: ApolloError } = useProductDetails(variables, options?)
```

Mutation (sets data):

```
const [
  signIn: (options?) => Promise<TData>,
  { data: TData["data"], loading: boolean, error: ApolloError, called: boolean }
] = useSignIn(options?)
```

For `options` and full api reference, navigate to [official docs](https://www.apollographql.com/docs/)

### Other frameworks

Create new SaleorAPI instance and use methods available on it

```
import { SaleorAPI } from 'saleor-sdk'
import { client } from './saleor'

export const saleorAPI = new SaleorAPI(client)
```

```
const { data } = await saleorAPI.getProductDetails(variables, options?)
```

### Local development

It is possible to develop storefront and SDK simultaneously. To do this, you need
to link it to the storefront's project.

```language=shell
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
