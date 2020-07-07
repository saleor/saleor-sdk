/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { JobStatusEnum } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: InvoiceFragment
// ====================================================

export interface InvoiceFragment {
  __typename: "Invoice";
  /**
   * The ID of the object.
   */
  id: string;
  number: string | null;
  /**
   * Created date time of job in ISO 8601 format.
   */
  createdAt: any;
  /**
   * URL to download an invoice.
   */
  url: string | null;
  /**
   * Job status.
   */
  status: JobStatusEnum;
}
