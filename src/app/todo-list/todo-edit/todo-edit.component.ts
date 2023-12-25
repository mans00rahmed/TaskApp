import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/Todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.css',
})
export class TodoEditComponent {
  @Input() id: number;
  @Input() task: string = '';
  @Input() isDone: boolean = false;

  constructor(private todoService: TodoService) { }

  addTask() {
    //since we are not giving ids to adding items so we added this way
    this.todoService.addTodos({ id: this.todoService.todos.length + 1, task: this.task, isDone: this.isDone });
    this.todoService.link.next('todo')
  }

  deleteTask() {
    //apply delete functionality here
    this.todoService.deleteTodo({ id: this.id });
    this.todoService.link.next('todo')
  }

  clearTask() {
    this.task = '';
    this.isDone = false;
  }
}
