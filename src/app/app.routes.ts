import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Lecture1Component } from './lecture-1/lecture-1.component';

export const routes: Routes = [
    { 'path': '', 'component': MainpageComponent },
    { 'path': 'lecture-1', 'component': Lecture1Component }
];
