import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Lecture1Component } from './lecture-1/lecture-1.component';
import { Lecture2Component } from './lecture-2/lecture-2.component';

export const routes: Routes = [
    { 'path': '', 'component': MainpageComponent },
    { 'path': 'lecture-1', 'component': Lecture1Component },
    { 'path': 'lecture-2', 'component': Lecture2Component },
];
