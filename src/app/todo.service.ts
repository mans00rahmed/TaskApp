import { Injectable } from '@angular/core';
import { Todo } from './model/Todo';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    { id: 1, task: 'taskone', isDone: true },
    { id: 2, task: 'taskTwo', isDone: false },
  ]

  link: Subject<string> = new Subject<string>();

  constructor() { }

  getAllTodos() {
    return this.todos;
  }

  addTodos(at) {
    this.todos.push(at)
  }

  deleteTodo(id) {
    id = id.id.toString();

    this.todos.forEach((element, index) => {
      if (element.id == id) {
        this.todos.splice(index, 1);
        console.log(this.todos);
      }
    })
  }

}