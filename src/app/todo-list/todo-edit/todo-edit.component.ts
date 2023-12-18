import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.css'
})
export class TodoEditComponent {
  task: string = '';
  isDone: boolean = false;

}
