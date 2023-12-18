export class Todo {
  public task: string;
  public isDone: boolean;

  constructor(task: string, isDone: boolean) {
    this.task = task;
    this.isDone = isDone;
  }
}
