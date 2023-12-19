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

  todos: Todo[] = [
    new Todo('taskone', true)
  ]

  getTask(t: Todo) {
    this.todos.push(t);
    this.link = 'todo'; // added this link to route back to todo-list.component
  }
}
