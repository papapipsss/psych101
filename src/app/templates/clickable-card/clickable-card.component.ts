import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ContainerComponent } from '../container/container.component';
import { HeadingComponent } from '../heading/heading.component';

@Component({
  selector: 't-clickable-card',
  standalone: true,
  imports: [ContainerComponent, HeadingComponent],
  templateUrl: './clickable-card.component.html',
  styleUrls: ['./clickable-card.component.css']
})
export class ClickableCardComponent {
  @Input() image: string = '';
  @Input() alt: string = '';
  @Input() title: string = '';
  @Input() link: string = '';

  constructor(private router: Router) { }

  onCardClick(): void {
    if (this.link) {
      this.router.navigate([this.link]);
    }
  }
}