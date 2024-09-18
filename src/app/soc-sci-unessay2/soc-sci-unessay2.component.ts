import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  selector: 'app-soc-sci-unessay2',
  standalone: true,
  imports: [HeadingComponent, TextComponent, CommonModule, InfoCardComponent, ReflectionComponent, CardComponent, ContainerComponent, ModalComponent, SectionComponent, ListComponent, TextCardComponent],
  templateUrl: './soc-sci-unessay2.component.html',
  styleUrl: './soc-sci-unessay2.component.css'
})
export class SocSciUnessay2Component {
  images = ["13Xho8CRjGhVc3Zikp-eyywvq4gl77Sq_", "1A1V6_ZmM1Be11QAxL0jdQ7Y_Ln7qiB8G", "1CKoEBbOOC0Y9JX6wAjzcxUS3Y3AFWP7Q", "1yid3I60W5WmqtPufz9wXuqmXFs5YEoAD", "1sy5Y_BQ-quEvxqh0H5_9NXmTgesGgZdZ", "1uwqgdXS28eZ_1L_9sQMhCkGf4nz9lmJA"]

}
