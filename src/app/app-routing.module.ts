import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEditComponent } from './todo-list/todo-edit/todo-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  {
    path: 'todo', children: [
      { path: '', component: TodoListComponent },
      { path: 'todoEdit', component: TodoEditComponent },
      { path: 'todoEdit/:id', component: TodoEditComponent }

    ]
  },
  { path: '**', redirectTo: '/todo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
