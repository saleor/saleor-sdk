import {
  ApolloClient,
  ApolloError,
  ObservableQuery,
  WatchQueryOptions,
} from "apollo-client";
import { GraphQLError } from "graphql";

import { UserOrderByToken } from "../queries/gqlTypes/UserOrderByToken";
import { OrderByToken } from "../queries/gqlTypes/OrderByToken";
import { PasswordChange } from "../mutations/gqlTypes/PasswordChange";
import { SetPassword } from "../mutations/gqlTypes/SetPassword";
import { getAuthToken } from "../auth";
import { MUTATIONS } from "../mutations";
import { QUERIES } from "../queries";
import { RequireAtLeastOne } from "../tsHelpers";
import {
  InferOptions,
  MapFn,
  QueryShape,
  WatchMapFn,
  WatchQueryData,
} from "../types";
import {
  getErrorsFromData,
  getMappedData,
  isDataEmpty,
  mergeEdges,
} from "../utils";
import { SetPasswordChange, SetPasswordResult } from "./types";
import { WINDOW_EXISTS } from "../consts";

const handleDataErrors = <T extends QueryShape, TData>(
  mapFn: MapFn<T, TData> | WatchMapFn<T, TData>,
  data: TData,
  apolloErrors?: readonly GraphQLError[]
) => {
  // INFO: user input errors will be moved to graphql errors
  const userInputErrors = getErrorsFromData(data);
  const errors =
    apolloErrors || userInputErrors
      ? new ApolloError({
          extraInfo: userInputErrors,
          graphQLErrors: apolloErrors,
        })
      : null;

  if (errors && isDataEmpty(data)) {
    return { errors };
  }

  const result = getMappedData(mapFn, data);

  return { data: result };
};

class APIProxy {
  client: ApolloClient<any>;

  constructor(client: ApolloClient<any>) {
    this.client = client;
  }

  getAttributes = this.watchQuery(QUERIES.Attributes, data => data.attributes);

  getOrdersByUser = this.watchQuery(QUERIES.OrdersByUser, data =>
    data.me ? data.me.orders : null
  );

  getOrderDetails = (
    variables: InferOptions<
      QUERIES["OrderDetails"] | QUERIES["OrderDetailsByUser"]
    >["variables"],
    options: Omit<
      InferOptions<QUERIES["OrderDetails"] | QUERIES["OrderDetailsByUser"]>,
      "variables"
    > & {
      onUpdate: (
        data:
          | OrderByToken["orderByToken"]
          | UserOrderByToken["orderByToken"]
          | null
      ) => void;
    }
  ) => {
    if (this.isLoggedIn()) {
      return this.watchQuery(
        QUERIES.OrderDetailsByUser,
        data => data.orderByToken
      )(variables, options);
    }
    return this.watchQuery(QUERIES.OrderDetails, data => data.orderByToken)(
      variables,
      options
    );
  };

  getVariantsProducts = this.watchQuery(
    QUERIES.VariantsProducts,
    data => data.productVariants
  );

  getShopDetails = this.watchQuery(QUERIES.GetShopDetails, data => data);

  setUserDefaultAddress = this.fireQuery(
    MUTATIONS.AddressTypeUpdate,
    data => data!.accountSetDefaultAddress
  );

  setDeleteUserAddress = this.fireQuery(
    MUTATIONS.DeleteUserAddress,
    data => data!.accountAddressDelete
  );

  setCreateUserAddress = this.fireQuery(
    MUTATIONS.CreateUserAddress,
    data => data!.accountAddressCreate
  );

  setUpdateuserAddress = this.fireQuery(
    MUTATIONS.UpdateUserAddress,
    data => data!.accountAddressUpdate
  );

  setAccountUpdate = this.fireQuery(
    MUTATIONS.AccountUpdate,
    data => data!.accountUpdate
  );

  setPassword = async (
    variables: InferOptions<MUTATIONS["SetPassword"]>["variables"],
    options?: Omit<InferOptions<MUTATIONS["SetPassword"]>, "variables">
  ): Promise<SetPasswordResult> => {
    let result: {
      data: SetPassword | null;
    } | null = null;

    result = await this.fireQuery(MUTATIONS.SetPassword, data => data!)(
      variables,
      {
        ...options,
        fetchPolicy: "no-cache",
      }
    );
    const { data } = result;

    return {
      data,
      error: null,
    };
  };

  setPasswordChange = async (
    variables: InferOptions<MUTATIONS["PasswordChange"]>["variables"],
    options?: Omit<InferOptions<MUTATIONS["PasswordChange"]>, "variables">
  ): Promise<SetPasswordChange> => {
    let result: {
      data: PasswordChange | null;
    } | null = null;

    result = await this.fireQuery(MUTATIONS.PasswordChange, data => data!)(
      variables,
      {
        ...options,
        fetchPolicy: "no-cache",
      }
    );
    const { data } = result;

    return {
      data,
      error: null,
    };
  };

  attachAuthListener = (callback: (authenticated: boolean) => void) => {
    const eventHandler = () => {
      callback(this.isLoggedIn());
    };

    if (WINDOW_EXISTS) {
      window.addEventListener("auth", eventHandler);
    }

    return () => {
      if (WINDOW_EXISTS) {
        window.removeEventListener("auth", eventHandler);
      }
    };
  };

  isLoggedIn = () => {
    return !!getAuthToken();
  };

  watchQuery<T extends QueryShape, TResult>(
    query: T,
    mapFn: WatchMapFn<T, TResult>
  ) {
    return <
      TVariables extends InferOptions<T>["variables"],
      TOptions extends Omit<
        InferOptions<T> | WatchQueryOptions<InferOptions<T>>,
        "variables"
      >
    >(
      variables: TVariables,
      options: TOptions & {
        skip?: boolean;
        onComplete?: () => void;
        onError?: (error: ApolloError) => void;
        onUpdate: (
          data: ReturnType<typeof mapFn> | null,
          loading?: boolean
        ) => void;
      }
    ) => {
      const { onComplete, onError, onUpdate, ...apolloClientOptions } = options;

      const observable: ObservableQuery<WatchQueryData<T>, TVariables> = query(
        this.client,
        {
          ...apolloClientOptions,
          variables,
        }
      );

      if (options.skip) {
        return {
          refetch: () => {
            return new Promise(resolve => {
              resolve({ data: null });
            });
          },
          unsubscribe: null,
        };
      }

      const subscription = observable.subscribe(
        result => {
          const { data, errors: apolloErrors, loading } = result;
          const errorHandledData = handleDataErrors(
            mapFn,
            data as any,
            apolloErrors
          );
          if (onUpdate) {
            if (errorHandledData.errors) {
              if (onError) {
                onError(errorHandledData.errors);
              }
            } else {
              onUpdate(errorHandledData.data as TResult, loading);
              if (onComplete) {
                onComplete();
              }
            }
          }
        },
        error => {
          if (onError) {
            onError(error);
          }
        }
      );

      return {
        loadMore: (
          extraVariables: RequireAtLeastOne<TVariables>,
          mergeResults: boolean = true
        ) => {
          observable.fetchMore({
            updateQuery: (previousResult, { fetchMoreResult }) => {
              if (!fetchMoreResult) {
                // returning previousResult doesn't trigger observable `next`
                onUpdate(mapFn(previousResult));
                return previousResult;
              }

              if (mergeResults) {
                const prevResultRef = mapFn(previousResult) as any;
                const newResultRef = mapFn(fetchMoreResult) as any;

                if (!prevResultRef || !newResultRef) {
                  onUpdate(prevResultRef);
                  return previousResult;
                }

                const mergedEdges = mergeEdges(
                  prevResultRef.edges,
                  newResultRef.edges
                );

                // use new result for metadata and mutate existing data
                Object.keys(prevResultRef).forEach(key => {
                  prevResultRef[key] = newResultRef[key];
                });
                prevResultRef.edges = mergedEdges;

                return previousResult;
              }

              return fetchMoreResult;
            },
            variables: { ...variables, ...extraVariables },
          });
        },
        refetch: (newVariables?: TVariables) => {
          if (newVariables) {
            observable.setVariables(newVariables);
            const cachedResult = observable.currentResult();
            const errorHandledData = handleDataErrors(mapFn, cachedResult.data);
            if (errorHandledData.data) {
              onUpdate(errorHandledData.data as TResult);
            }
          }

          return APIProxy.firePromise(
            () => observable.refetch(newVariables),
            mapFn
          );
        },
        setOptions: (newOptions: TOptions) =>
          APIProxy.firePromise(() => observable.setOptions(newOptions), mapFn),
        unsubscribe: subscription.unsubscribe.bind(subscription),
      };
    };
  }

  fireQuery<T extends QueryShape, TResult>(query: T, mapFn: MapFn<T, TResult>) {
    return (
      variables: InferOptions<T>["variables"],
      options?: Omit<InferOptions<T>, "variables">
    ) =>
      APIProxy.firePromise(
        () =>
          query(this.client, {
            ...options,
            variables,
          }),
        mapFn
      );
  }

  // Promise wrapper to catch errors
  static firePromise<T extends QueryShape, TResult>(
    promise: () => Promise<any>,
    mapFn: MapFn<T, TResult> | WatchMapFn<T, TResult>
  ) {
    return new Promise<{ data: ReturnType<typeof mapFn> | null }>(
      async (resolve, reject) => {
        try {
          const { data, errors: apolloErrors } = await promise();
          const errorHandledData = handleDataErrors(mapFn, data, apolloErrors);

          if (errorHandledData.errors) {
            reject(errorHandledData.errors);
          }

          resolve({ data: errorHandledData.data });
        } catch (error) {
          reject(error);
        }
      }
    );
  }
}

export default APIProxy;
