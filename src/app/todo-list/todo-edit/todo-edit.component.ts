import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/Todo';
import { TodoService } from '../../todo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.css',
})
export class TodoEditComponent implements OnInit {
  id: number;
  task: string = '';
  isDone: boolean = false;

  constructor(private todoService: TodoService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    //accept data from routes
    this.route.queryParams.subscribe((qp) => {
      this.id = qp.id;
      this.task = qp.task;
      this.isDone = qp.isDone;
    })
  }

  addTask() {
    //since we are not giving ids to adding items so we added this way
    this.todoService.addTodos({ id: this.todoService.todos.length + 1, task: this.task, isDone: this.isDone });
    //navigate to todo bt route
    this.router.navigate(['/todo']);
  }

  deleteTask() {
    //apply delete functionality here
    this.todoService.deleteTodo({ id: this.id });
    //navigate to todo bt route
    this.router.navigate(['/todo']);

  }

  clearTask() {
    this.task = '';
    this.isDone = false;
  }
}
