import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  ngOnInit(): void {
    this.todos = this.todoService.getAllTodos();
    console.log(this.todos);
  }

  nav: string = 'todo';


  constructor(private todoService: TodoService) {

    //this subscribe will get changed value by service.
    this.todoService.link.subscribe((a) => { this.nav = a })

  }

  // declare proerties for delete task and delete isDone
  loadTask: string;
  loadIsDone: boolean;
  loadId : number;
  todos: Todo[] = [];

  loadTodo(td: any) {
    console.log(td);
    
    //These are used to load data in edit componenet.
    this.loadTask = td.task;
    this.loadIsDone = td.isDone;
    this.loadId = td.id;
    console.log(this.loadId);
    
    this.todoService.link.next('editTodo')
  }
}
