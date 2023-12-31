import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoService } from '../todo.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  ngOnInit(): void {
    
    this.todoService.getAllTodos().subscribe(res => {

      this.todos = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching student data');
    })
    this.todos = this.todoService.getAllTodos();
    console.log(this.todos);
  }

  nav: string = 'todo';


  constructor(private todoService: TodoService, private router: Router) {

    //this subscribe will get changed value by service.
    // this.todoService.link.subscribe((a) => { this.nav = a })

  }

  // declare proerties for delete task and delete isDone
  loadTask: string;
  loadIsDone: boolean;
  loadId: number;
  todos: any = [];

  
  loadTodo(td: any) {
    console.log(td);
    //send data in route
    this.router.navigate(['/todo/todoEdit', td.id], { queryParams: td })

    //These are used to load data in edit componenet.
    this.loadTask = td.task;
    this.loadIsDone = td.isDone;
    this.loadId = td.id;
    console.log(this.loadId);

    //this.todoService.link.next('editTodo')
  }
}
