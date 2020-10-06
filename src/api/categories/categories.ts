import ApolloClient from "apollo-client";
import { CategoryAncestorsListVariables } from "../../queries/gqlTypes/CategoryAncestorsList";
import { CategoryChildrenListVariables } from "../../queries/gqlTypes/CategoryChildrenList";
import {
  CategoryList as CategoryListQuery,
  CategoryListVariables,
} from "../../queries/gqlTypes/CategoryList";
import { CategoryDetailsVariables } from "../../queries/gqlTypes/CategoryDetails";
import { BaseCategory } from "../../fragments/gqlTypes/BaseCategory";
import { WithList } from "../types";
import { CategoryList } from "./CategoryList";
import { CategoryAncestorsList } from "./CategoryAncestorsList";
import { CategoryChildrenList } from "./CategoryChildrenList";
import { CategoryDetails } from "./CategoryDetails";

export class CategoriesAPI
  implements WithList<CategoryListQuery, BaseCategory, CategoryListVariables> {
  private client: ApolloClient<any>;

  constructor(client: ApolloClient<any>) {
    this.client = client;
  }

  /**
   * Method returning category details
   * @param variables Details parameters
   */
  getDetails = (variables: CategoryDetailsVariables) => {
    const details = new CategoryDetails(this.client);

    details.init(variables);

    return details;
  };

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
