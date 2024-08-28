import { Component, Input } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';
import { TextComponent } from '../text/text.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 't-reflection',
  standalone: true,
  imports: [HeadingComponent, TextComponent, CommonModule],
  templateUrl: './reflection.component.html',
  styleUrl: './reflection.component.css'
})
export class ReflectionComponent {
  @Input() paragraphs: string[] = [];
}
