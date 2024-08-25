import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 't-text-card',
  standalone: true,
  imports: [],
  templateUrl: './text-card.component.html',
  styleUrl: './text-card.component.css'
})
export class TextCardComponent {
  @Input() title = '';
  @Output() clicked = new EventEmitter<string>();

  onClick() {
    this.clicked.emit(this.title);
  }
}