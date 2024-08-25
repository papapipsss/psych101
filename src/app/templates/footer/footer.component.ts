import { Component } from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 't-footer',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
