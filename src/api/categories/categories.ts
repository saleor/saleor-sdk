import ApolloClient from "apollo-client";
import { CategoryAncestorsListVariables } from "../../queries/gqlTypes/CategoryAncestorsList";
import { CategoryChildrenListVariables } from "../../queries/gqlTypes/CategoryChildrenList";
import {
  CategoryDetails as CategoryDetailsQuery,
  CategoryDetailsVariables,
} from "../../queries/gqlTypes/CategoryDetails";
import { CategoryDetails as CategoryDetailsFragment } from "../../fragments/gqlTypes/CategoryDetails";
import {
  CategoryList as CategoryListQuery,
  CategoryListVariables,
} from "../../queries/gqlTypes/CategoryList";
import { BaseCategory } from "../../fragments/gqlTypes/BaseCategory";
import { WithDetails, WithList } from "../types";
import { CategoryList } from "./CategoryList";
import { CategoryAncestorsList } from "./CategoryAncestorsList";
import { CategoryChildrenList } from "./CategoryChildrenList";
import { CategoryDetails } from "./CategoryDetails";

export class CategoriesAPI
  implements
    WithDetails<
      CategoryDetailsQuery,
      CategoryDetailsFragment,
      CategoryDetailsVariables
    >,
    WithList<CategoryListQuery, BaseCategory, CategoryListVariables> {
  private client: ApolloClient<any>;

  constructor(client: ApolloClient<any>) {
    this.client = client;
  }

  /**
   * Method returning category details
   * @param variables Details parameters
   */
  getDetails = async (variables: CategoryDetailsVariables) => {
    const details = new CategoryDetails(this.client);

    await details.init(variables);

    return details;
  };

  /**
   * Method returning list of categories with ability to request next page
   * @param params List parameters
   */
  getList = async (variables: CategoryListVariables) => {
    const list = new CategoryList(this.client);

    await list.init(variables);

    return list;
  };

  getAncestors = async (variables: CategoryAncestorsListVariables) => {
    const list = new CategoryAncestorsList(this.client);

    await list.init(variables);

    return list;
  };

  getChildren = async (variables: CategoryChildrenListVariables) => {
    const list = new CategoryChildrenList(this.client);

    await list.init(variables);

    return list;
  };
}
