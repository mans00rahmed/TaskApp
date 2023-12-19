import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.css'
})
export class TodoEditComponent {
  @Input() task: string = '';
  @Input() isDone: boolean = false;
  @Output() addTodo = new EventEmitter<Todo>();

  @Output() deleteTodo = new EventEmitter<void>();

  addTask() {
    this.addTodo.emit({ task: this.task, isDone: this.isDone })
  }

  deleteTask(){
    this.deleteTodo.emit();
  }

  clearTask(){
    this.task='';
    this.isDone=false;
  }
  
}
