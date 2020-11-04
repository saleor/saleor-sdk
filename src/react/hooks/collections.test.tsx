import { act, renderHook } from "@testing-library/react-hooks";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { setupRecording, setupAPI } from "../../../testUtils/api";
import { useCollectionDetails, useCollectionList } from "./collections";
import {
  OrderDirection,
  CollectionSortField,
} from "../../gqlTypes/globalTypes";
import * as fixtures from "../../api/collections/fixtures";

setupRecording();

describe("useCollectionList", () => {
  let wrapper: React.FC<{}>;

  beforeAll(async () => {
    const { client } = await setupAPI();

    wrapper = ({ children }) => (
      <ApolloProvider client={client}>{children}</ApolloProvider>
    );
  });

  it("can fetch collection by id", async () => {
    const { result } = renderHook(
      () =>
        useCollectionDetails({
          id: fixtures.collectionId,
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

  it("can fetch collection by slug", async () => {
    const { result } = renderHook(
      () =>
        useCollectionDetails({
          slug: fixtures.collectionSlug,
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

  it("can fetch collections", async () => {
    const { result } = renderHook(
      () =>
        useCollectionList({
          channel: "default-channel",
          first: 20,
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
          channel: "default-channel",
          first: 1,
        }),
      {
        wrapper,
      }
    );

    // @ts-ignore
    await act(() => result.current.current);

    expect(result.current.data).toMatchSnapshot();

    await act(result.current.next);

    expect(result.current.data).toMatchSnapshot();
    expect(result.current.loading).toBe(false);
  });

  it("can sort", async () => {
    const { result } = renderHook(
      () =>
        useCollectionList({
          channel: "default-channel",
          first: 10,
          sortBy: {
            direction: OrderDirection.DESC,
            field: CollectionSortField.NAME,
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
        useCollectionList({
          channel: "default-channel",
          filter: {
            search: "winter",
          },
          first: 10,
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
