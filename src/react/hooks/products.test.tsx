import { act, renderHook } from "@testing-library/react-hooks";
import React from "react";
import { ApolloProvider } from "react-apollo";
import setupAPI from "../../../testUtils/api";
import { useProductList } from "./products";
import { OrderDirection, ProductOrderField } from "../../gqlTypes/globalTypes";

const { client } = setupAPI();

const wrapper: React.FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

describe("useProductList", () => {
  it("can fetch products", async () => {
    const { result } = renderHook(
      () =>
        useProductList({
          first: 5,
        }),
      {
        wrapper,
      }
    );

    expect(result.current.data).toBe(undefined);
    expect(result.current.loading).toBe(true);

    // @ts-ignore
    await act(() => result.current.current);

    expect(result.current.data).toMatchSnapshot();
    expect(result.current.loading).toBe(false);
  });

  it("can fetch next page", async () => {
    const { result } = renderHook(
      () =>
        useProductList({
          first: 1,
        }),
      {
        wrapper,
      }
    );

    // @ts-ignore
    await act(() => result.current.current);

    expect(result.current.data).toMatchSnapshot();
    expect(result.current.data).toHaveLength(1);

    await act(result.current.next);

    expect(result.current.data).toMatchSnapshot();
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toHaveLength(2);
  });

  it("can sort", async () => {
    const { result } = renderHook(
      () =>
        useProductList({
          first: 5,
          sortBy: {
            direction: OrderDirection.DESC,
            field: ProductOrderField.NAME,
          },
        }),
      {
        wrapper,
      }
    );

    // @ts-ignore
    await act(() => result.current.current);

    expect(result.current.data).toMatchSnapshot();
  });

  it("can filter", async () => {
    const { result } = renderHook(
      () =>
        useProductList({
          filter: {
            search: "beer",
          },
          first: 2,
        }),
      {
        wrapper,
      }
    );

    // @ts-ignore
    await act(() => result.current.current);

    expect(result.current.data).toMatchSnapshot();
  });
});
