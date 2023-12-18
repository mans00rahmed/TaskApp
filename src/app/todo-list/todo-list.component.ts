import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  link: string = 'todo';

  todos: Todo[] = [
    new Todo('taskone', false)
  ]
}
