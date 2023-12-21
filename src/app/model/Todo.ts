export class Todo {
  public id: number;
  public task: string;
  public isDone: boolean;

  constructor(task: string, isDone: boolean, id: number) {
    this.task = task;
    this.isDone = isDone;
    this.id = id;
  }
}
