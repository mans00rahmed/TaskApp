import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private todoService: TodoService) { }


  navigation(n: string) {
    // link next
    this.todoService.link.next(n);
  }
}
