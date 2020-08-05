import { act, renderHook } from "@testing-library/react-hooks";
import React from "react";
import { ApolloProvider } from "react-apollo";
import setupAPI from "../../../../testUtils/api";
import useCollectionList from "./useCollectionList";

const { client } = setupAPI();

const wrapper: React.FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

describe("useCollection", () => {
  it("can fetch collections", async () => {
    const { result } = renderHook(
      () =>
        useCollectionList({
          count: 20,
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
        useCollectionList({
          count: 1,
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

    const nextPromise = act(result.current.next);

    expect(result.current.data).toMatchSnapshot();
    expect(result.current.loading).toBe(true);

    await act(() => nextPromise);

    expect(result.current.data).toMatchSnapshot();
    expect(result.current.loading).toBe(false);
  });
});
