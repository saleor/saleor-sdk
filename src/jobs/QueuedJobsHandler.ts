import { ApolloErrorWithUserInput } from "../react/types";

export class QueuedJobsHandler<ErrorTypes> {
  protected onErrorListener:
    | ((error: ApolloErrorWithUserInput | any, type: ErrorTypes) => any)
    | undefined;

  attachErrorListener(
    onErrorListener: (
      error: ApolloErrorWithUserInput | any,
      type: ErrorTypes
    ) => any
  ) {
    this.onErrorListener = onErrorListener;
  }
}
