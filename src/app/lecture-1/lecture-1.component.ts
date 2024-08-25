import { Component } from '@angular/core';
import { HeadingComponent } from '../templates/heading/heading.component';
import { TextComponent } from '../templates/text/text.component';
import { CardComponent } from '../templates/card/card.component';
import { ContainerComponent } from '../templates/container/container.component';
import { SectionComponent } from '../templates/section/section.component';
import { ListComponent } from '../templates/list/list.component';
import { TextCardComponent } from '../templates/text-card/text-card.component';
import { ModalComponent } from '../templates/modal/modal.component';

@Component({
  selector: 'app-lecture-1',
  standalone: true,
  imports: [HeadingComponent, TextComponent, CardComponent, ContainerComponent, ModalComponent, SectionComponent, ListComponent, TextCardComponent],
  templateUrl: './lecture-1.component.html',
  styleUrls: ['./lecture-1.component.css']
})
export class Lecture1Component {
  isModalOpen = false;
  modalTitle = '';
  modalContent: string = '';

  modalConfigs = [
    { title: 'Iisa lang ba ang karanasang mental at pisikal? Paano sila nauugnay?', content: this.item1() },
    { title: 'Nagmumula ba ang ating kaalaman sa ating kakayahanag magrason o sa ating mga karanasan?', content: this.item2() },
    { title: 'Ano ang mas maimpluwensiya: minanang katangian o kapaligiran?', content: this.item3() },
    { title: 'Tayo ba ang pumipili ng ating ikinikilos at iniisip? O kumikilos at nag-iisip ba tayo ayon sa batas ng kalikasan?', content: this.item4() },
    { title: 'Paano pinakamainam na aralin ang ating pag-iral: sa pamamagitan ng paghahati-hati sa ating karanasan dito o sa pagtingin dito nang buo?', content: this.item5() },
  ];

  constructor() { }

  openModal(index: number) {
    this.isModalOpen = true;
    this.modalTitle = this.modalConfigs[index].title;
    this.modalContent = this.modalConfigs[index].content;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  item1() {
    let text = `Sinasabi ng iba magkaiba ang karanasan ng mental at pisikal
		- Mind-Body Problem o Mind-Brain problem
		  -- Iba nga ba ang isip at utak?
		- Isip - mas abstrak, walang bahagi ng katawan pero alam natin meron tayo nito
			-- dito galing sa mga kuro-kuro. Kaya ihawalay ang sarili sa ibang tao
		- Utak - bahagi ng katawan ng tao mismo. Pisikal!
		- Dalawang perspektibo
			-- Dualism - Rene Descartes
				--- Magkahiwalay ang isip at katawan
				--- Katawan may okupadong espasyo ang isip ay wala
				--- Isip - kakayahang magrason
				--- Cartesian Dichotomy
					---- Ang tao may isip at mga hayop wala sapagkat wala silang kakayahang magrason
			-- Monism
				--- iisa ang isip at katawan
				--- Materialists: naniniwalang pisikal na realidad, lahat ng kaganapan sa kalawakan ay kayang masukat sapagkat iisa lang ang pag-materialize tulad sa katawan.`;
    return text.replace(/\n/g, '<br>');
  }

  item2() {
    let text = `- Kaalaman natin ay bunga ng pakikitunguhan sa lipunan
		- Kaisipan o Karanasan?
		- Tungkol sa nagmumula sa naiisip o galing sa na-encounter natin sa buhay
		- Nativism (Descartes)
			-- May innate ideas na o ipinanganak na may kakayahan na magrason
		- Empiricism (Locke)
			-- nagmumula sa karanasan ang lahat ng kaalmaan
			-- tao ay ipinanganak na parang blankong papel
			-- batay sa karanasan natin yung maglalaman ng blankong papel`;
    return text.replace(/\n/g, '<br>');
  }

  item3() {
    let text = `- Nature vs Nurture (Galton)
		- Paano ba mas mainam bigyan kahulugan ang pagkilos natin?
			-- sa heredity ba o sa interaksyon sa kapaligiran?
		- Nativism (Descartes)
			-- Ipinanganak na may kakayahan na magrason
		- Empiricism (Locke)
			-- nagmula sa karanasan ang lahat ng kaalaman`;
    return text.replace(/\n/g, '<br>');
  }

  item4() {
    let text = `- Punto: malaya ba talaga ang tao pumili at kumilos? O may batas ba ng kalikasan para kumilos
		- Free will vs Determinism
		- Free will: may mga katangian na maaaring gamitin
		- Determinism: Nagaganap ayon sa dapat at inaasahan`;
    return text.replace(/\n/g, '<br>');
  }

  item5() {
    let text = `- Hati-hati o buo-buo
		- mas makabuluhan ba himay-himayin o tingnan bilang isang buong karanasan
		- Atomism (Hartley)
			-- ang kumplikadong ideya ay binubuo ng mas maliit at simpleng bahagi
		- Holism (Aristotle)
			-- Suriin muna ang kabuuan upang maunawaan ang maliit na bahagi ng karanasan
			-- Ang kabuuan ay hindi lang pagsasama ng yunit`
    return text.replace(/\n/g, '<br>');
  }
}
