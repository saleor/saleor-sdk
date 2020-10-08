import BaseDetails, { MapQueryData } from "../../helpers/BaseDetails";
import {
  CategoryDetails as CategoryDetailsQuery,
  CategoryDetailsVariables,
} from "../../queries/gqlTypes/CategoryDetails";
import { CategoryDetails as Category } from "../../fragments/gqlTypes/CategoryDetails";
import { categoryDetails } from "../../queries/category";

export class CategoryDetails extends BaseDetails<
  CategoryDetailsQuery,
  Category,
  CategoryDetailsVariables
> {
  mapQueryData: MapQueryData<CategoryDetailsQuery, Category> = data =>
    data.category || undefined;

  query = (variables: CategoryDetailsVariables) =>
    this.client!.query<CategoryDetailsQuery, CategoryDetailsVariables>({
      query: categoryDetails,
      variables,
    });
}
