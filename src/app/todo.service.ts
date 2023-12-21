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
  addSubject: Subject<Todo> = new Subject<Todo>();
  deleteSubject: Subject<string> = new Subject<string>();

  constructor() {
    this.deleteSubject.subscribe((task) => {
      let deleteIndex = 0;
      this.todos.forEach((element, index) => {
        if (element.task === task) {
          deleteIndex = index;
        }
      })
      this.todos.splice(deleteIndex, 1);
    })
  }

  getAllTodos() {
    return this.todos;
  }

  addTodos() {
    this.addSubject.subscribe((todo) => this.todos.push(todo))
  }

}
