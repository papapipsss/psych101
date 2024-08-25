import { Component, Input } from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 't-card',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() text: string = '';
}
