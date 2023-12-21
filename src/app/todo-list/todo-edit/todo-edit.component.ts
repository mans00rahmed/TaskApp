import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/Todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.css'
})
export class TodoEditComponent {
  @Input() id: number;
  @Input() task: string = '';
  @Input() isDone: boolean = false;

  constructor(private todoService: TodoService) {
    todoService.addTodos();
  }

  addTask() {
    this.todoService.addSubject.next({ id: this.id, task: this.task, isDone: this.isDone });
    this.todoService.link.next('todo')
  }

  deleteTask() {
    //apply delete functionality here
    this.todoService.link.next('todo')
  }

  clearTask() {
    this.task = '';
    this.isDone = false;
  }
}
