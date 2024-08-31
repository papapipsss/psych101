import { Component } from '@angular/core';
import { HeadingComponent } from '../templates/heading/heading.component';
import { TextComponent } from '../templates/text/text.component';
import { CardComponent } from '../templates/card/card.component';
import { ContainerComponent } from '../templates/container/container.component';
import { SectionComponent } from '../templates/section/section.component';
import { ListComponent } from '../templates/list/list.component';
import { TextCardComponent } from '../templates/text-card/text-card.component';
import { ModalComponent } from '../templates/modal/modal.component';
import { InfoCardComponent } from '../templates/info-card/info-card.component';
import { ReflectionComponent } from '../templates/reflection/reflection.component';

@Component({
  selector: 'app-lecture-2',
  standalone: true,
  imports: [HeadingComponent, TextComponent, InfoCardComponent, ReflectionComponent, CardComponent, ContainerComponent, ModalComponent, SectionComponent, ListComponent, TextCardComponent],
  templateUrl: './lecture-2.component.html',
  styleUrls: ['./lecture-2.component.css']
})
export class Lecture2Component {

}
