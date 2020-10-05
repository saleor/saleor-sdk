import ApolloClient from "apollo-client";
import { CategoryAncestorsListVariables } from "../../queries/gqlTypes/CategoryAncestorsList";
import { CategoryChildrenListVariables } from "../../queries/gqlTypes/CategoryChildrenList";
import {
  CategoryList as CategoryListQuery,
  CategoryListVariables,
} from "../../queries/gqlTypes/CategoryList";
import { BaseCategory } from "../../fragments/gqlTypes/BaseCategory";
import { WithList } from "../types";
import { CategoryList } from "./CategoryList";
import { CategoryAncestorsList } from "./CategoryAncestorsList";
import { CategoryChildrenList } from "./CategoryChildrenList";
import { categoryDetails } from "../../queries/category";
import {
  CategoryDetails,
  CategoryDetailsVariables,
} from "../../queries/gqlTypes/CategoryDetails";

export class CategoriesAPI
  implements WithList<CategoryListQuery, BaseCategory, CategoryListVariables> {
  client: ApolloClient<any>;

  constructor(client: ApolloClient<any>) {
    this.client = client;
  }

  // CategoryDetails: <TCacheShape>(
  //   client: ApolloClient<TCacheShape>,
  //   options: QueryOptions<CategoryDetailsVariables>
  // ): ObservableQuery<CategoryDetails, any> =>
  //   client.watchQuery({
  //     query: Category.categoryQuery,
  //     ...options,
  //   }),

  /**
   * Method returning category details
   * @param variables Category details parameters
   */
  getDetails = (variables: CategoryDetailsVariables) =>
    this.client.watchQuery<CategoryDetails, CategoryDetailsVariables>({
      query: categoryDetails,
      variables,
    });
  //   observable.subscribe(value => next(value.data?.me), error, complete)
  // }

  /**
   * Method returning list of categories with ability to request next page
   * @param params List parameters
   */
  getList = (variables: CategoryListVariables): CategoryList => {
    const list = new CategoryList(this.client);

    list.init(variables);

    return list;
  };

  getAncestors = (
    variables: CategoryAncestorsListVariables
  ): CategoryAncestorsList => {
    const list = new CategoryAncestorsList(this.client);

    list.init(variables);

    return list;
  };

  getChildren = (
    variables: CategoryChildrenListVariables
  ): CategoryChildrenList => {
    const list = new CategoryChildrenList(this.client);

    list.init(variables);

    return list;
  };
}
