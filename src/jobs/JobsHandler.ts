type Events = { [name: string]: any };

export class JobsHandler<JobsEvents extends Events> {
  private eventListeners: Array<
    <E extends keyof JobsEvents, V extends JobsEvents[E]>(
      event: E,
      value: V
    ) => void
  > = [];

  attachEventListener(
    eventListener: <E extends keyof JobsEvents, V extends JobsEvents[E]>(
      event: E,
      value: V
    ) => void
  ) {
    this.eventListeners.push(eventListener);
  }

  protected notifyEvent<E extends keyof JobsEvents, V extends JobsEvents[E]>(
    event: E,
    value: V
  ) {
    this.eventListeners.forEach(eventListener => {
      eventListener(event, value);
    });
  }
}
