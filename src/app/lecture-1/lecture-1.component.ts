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
  selector: 'app-lecture-1',
  standalone: true,
  imports: [HeadingComponent, TextComponent, InfoCardComponent, ReflectionComponent, CardComponent, ContainerComponent, ModalComponent, SectionComponent, ListComponent, TextCardComponent],
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

  reflection = `Ang sikolohiya ay ang siyentipikong pag-aaral sa pagkilos, pag-iisip at karanasan ng tao, kabilang dito ang pag-aaral sa ating pandama, isip at nervous system, upang mas magkaroon ng mas makabuluhang pagkakaintindi sa ating sarili at kapuwa, at kapaligiran. Sa loob ng 145 na taon mula nang maging isang hiwalay na disiplina ang sikolohiya, maraming siyentipiko ang nagsagawa ng mga saliksik upang masagot ang ilang katanungang pilosopikal na may kinalaman sa sikolohiya. Maraming teorya at paniniwala ang nabuo sa nasabing panahon. Karamihan dito ay mayroong conflicts sa isa’t isa tulad ng: structuralism at functionalism, na nagkaroon ng mga salungatan ngunit nakatulong sa paghubog ng ating pag-unawa sa sikolohiya at sa pagbuo ng ating kamalayan.

Isa sa mga katanungang nagbigay ng malaking interes sa akin ay ang “Tayo ba ang pumipili ng ating kinikilos at iniisip? O kumkilos at nag-iisip ba tayo ayon sa batas ng kalikasan?”. Sa aking pananaw tayo ay mayroong free will at sa paggamit nito, maaari nating makamit ang pinakamataas na antas ng ating pagiging tao. Sa aking pakikinig aking na natutuhan ang humanistikong perspektibo. Itong teorya ang nagbibigay kahulugan sa aking orihinal na pananaw kung saan naniniwala ang mga tao na tayo ay may free will at free choice na makakatulong upang hubugin ang kaniyang sarili at mga kakayahan.

Ang pag-aaral ng sikolohiya ay hindi lamang paraan upang maintindihan natin ang ating sarili, kundi upang makilala rin ang mga puwersang humuhubog sa ating pagkatao, tulad ng ating kapaligiran, kultura, at mga karanasan sa lipunan. Lahat tayo ay may iba’t ibang karanasan sa buhay at dahil dito tayo ay may kaniya-kaniyang paniniwala at pag-uugali na nakakaapekto rin sa ating interaksyon sa ibang tao. Ang pag-aaral ng Behabyorismo at Sikodinamikong Perspektibo ay ilan sa mga nagsasagot sa ating mga katanungan bakit nga ba ang tao ay kumikilos sa espisipikong paraan at paano nga ba tayo bilang mamamayan makakatulong sa iba. Bilang pagtatapos, ang sikolohiya ay nakakatulong sa paglinang ng ating kritikal na pag-iisip at nagbubukas ng mga pagkakataon para sa mas malalim at makabuluhang pagkaintindi sa ating sarili.
`.split("\n");
}
