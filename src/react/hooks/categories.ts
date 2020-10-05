import {
  CategoryDetails,
  CategoryDetailsVariables,
} from "../../queries/gqlTypes/CategoryDetails";
import { CategoryAncestorsList } from "../../api/categories/CategoryAncestorsList";
import { CategoryChildrenList } from "../../api/categories/CategoryChildrenList";
import { CategoryList } from "../../api/categories/CategoryList";
import { makeList, makeQuery } from "./utils";

export const useCategoryList = makeList(client => new CategoryList(client));
export const useCategoryAncestorsList = makeList(
  client => new CategoryAncestorsList(client)
);
export const useCategoryChildrenList = makeList(
  client => new CategoryChildrenList(client)
);
export const useCategoryDetails = makeQuery<
  CategoryDetails,
  CategoryDetailsVariables
>((saleor, params) => saleor.categories.getDetails(params));
