import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() link: string = 'todo';

  // declare proerties for delete task and delete isDone
  deleteTask: string;
  deleteIsDone: boolean;

  todos: Todo[] = [
    new Todo('taskone', true),
    new Todo('tasktwo', false)
  ]

  getTask(t: Todo) {
    this.todos.push(t);
    this.link = 'todo'; // added this link to route back to todo-list.component
  }

  getTodo(td: any) {
    this.link = 'todo-edit';
    this.deleteTask = td.task;
    this.deleteIsDone = td.isDone;
    console.log(this.deleteTask, this.deleteIsDone)
  }

  deletedTodo() {
    if (this.deleteTask) {
      this.todos = this.todos.filter(i => i.task !== this.deleteTask);
      this.deleteTask='';
      this.deleteIsDone=false;

      this.link='todo'
    }
  }
}
