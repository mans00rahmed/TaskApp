import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() nav = new EventEmitter<string>();


  navigation(n: string) {
    this.nav.emit(n);
  }
}
