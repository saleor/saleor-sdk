<div align="center">
  <h1>Saleor SDK</h1>
</div>

This package contains methods providing Saleor business logic for a storefront and apps. It handles Saleor GraphQL queries and mutations, manages Apollo cache, and provides an internal state to manage popular storefront use cases, like user authentication or checkout.

> :warning: **Note: Saleor SDK is still under heavy development, and its API may change.**

## Configuration

Set environment variables:

```bash
export API_URI=https://your.saleor.instance.com/graphql/
export TEST_AUTH_EMAIL=admin@example.com
export TEST_AUTH_PASSWORD=admin
```

## Development

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

Command will overwrite `schema.graphql` with up to date version from Saleor repository.

### Updating TS types

GraphQL Code Generator is an automatic tool that converts schema to TS types. After changing schema file run:

```bash
npm run build-types
```