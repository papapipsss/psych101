import { Component } from '@angular/core';
import { HeadingComponent } from '../templates/heading/heading.component';
import { TextComponent } from '../templates/text/text.component';
import { CardComponent } from '../templates/card/card.component';
import { ContainerComponent } from '../templates/container/container.component';

@Component({
  selector: 'app-lecture-1',
  standalone: true,
  imports: [HeadingComponent, TextComponent, CardComponent, ContainerComponent],
  templateUrl: './lecture-1.component.html',
  styleUrl: './lecture-1.component.css'
})
export class Lecture1Component {

}
