import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lecture1Component } from './lecture-1/lecture-1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Lecture1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'psych101-project';
}
