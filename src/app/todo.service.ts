import { Injectable } from '@angular/core';
import { Todo } from './model/Todo';
import { BehaviorSubject, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    { id: 1, task: 'taskone', isDone: true },
    { id: 2, task: 'taskTwo', isDone: false },
  ]


  constructor(private afs: AngularFirestore) { }

  getAllTodos() {
    return this.afs.collection('/Todos').snapshotChanges();

    //return this.todos;
  }

  addTodos(at) {
    at.id = this.afs.createId();
    return this.afs.collection('/Todos').add(at);

    //this.todos.push(at)
  }

  deleteTodo(data) {
    // delete student
    console.log("tobe deleted", data);

    this.afs.doc('/Todos/' + data.id).delete();

    // id = id.id.toString();
    // this.todos.forEach((element, index) => {
    //   if (element.id == id) {
    //     this.todos.splice(index, 1);
    //     console.log(this.todos);
    //   }
    // })
  }

}