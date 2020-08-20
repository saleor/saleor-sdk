import { act, renderHook } from "@testing-library/react-hooks";
import React from "react";
import { ApolloProvider } from "react-apollo";
import setupAPI from "../../../testUtils/api";
import {
  useCategoryList,
  useCategoryChildrenList,
  useCategoryAncestorsList,
} from "./categories";
import * as fixtures from "../../api/categories/fixtures";

const { client } = setupAPI();

const wrapper: React.FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

describe("useCategoryList", () => {
  it("can fetch categories", async () => {
    const { result } = renderHook(
      () =>
        useCategoryList({
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
        useCategoryList({
          first: 1,
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

    await act(result.current.next);

    expect(result.current.data).toMatchSnapshot();
    expect(result.current.loading).toBe(false);
  });
});

describe("useCategoryAncestorsList", () => {
  it("can fetch category ancestors", async () => {
    const { result } = renderHook(
      () =>
        useCategoryAncestorsList({
          first: 20,
          id: fixtures.categoryWithParent,
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
});

describe("useCategoryChildrenList", () => {
  it("can fetch subcategories", async () => {
    const { result } = renderHook(
      () =>
        useCategoryChildrenList({
          first: 20,
          id: fixtures.categoryWithChildren,
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
        useCategoryChildrenList({
          first: 1,
          id: fixtures.categoryWithChildren,
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

    await act(result.current.next);

    expect(result.current.data).toMatchSnapshot();
    expect(result.current.loading).toBe(false);
  });
});
