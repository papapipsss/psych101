import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 't-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent {
  @Input() HeadingType: string = '';

  getClass(HeadingType: string): string {
    switch (HeadingType) {
      case 'h1':
        return 'font-sans text-5xl font-bold';
      case 'h2':
        return 'font-sans text-4xl font-bold';
      case 'h3':
        return 'font-sans text-3xl font-bold';
      default:
        return 'font-sans text-xl font-bold';
    }
  }
}
