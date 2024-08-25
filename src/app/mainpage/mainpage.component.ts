import { Component } from '@angular/core';
import { ContainerComponent } from '../templates/container/container.component';
import { ClickableCardComponent } from '../templates/clickable-card/clickable-card.component';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [ContainerComponent, ClickableCardComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

}
