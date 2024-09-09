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

  reflection = `Sa nakaraang diskusyon, tinalakay ang Sikolohiya bilang pag-aaral ng kilos, isip at karanasan ng tao. Ipinakita ng ilang sikolohista ang kahalagahan na gawin sa loob ng laboratoryo na may sistematikong metodo at walang bias ang Sikolohiya. Tinatawag ito bilang Positibismo na nagsasabing mayroon lamang iisang reyalidad at nasusukat ang resulta ng isang pag-aaral. Ngunit sa paglipas ng panahon nabuo ang post-positibismo kung saan isinasaalang-alang ang mga bias at katauhan ng mananaliksik. Kinikilala rito ang papel ng mananaliksik sa mga pag-aaral at pinapatunayan na mahirap maging obhetibo sapagkat lahat tayo ay may sariling mga pananaw at external variables na nakakaapekto sa ating pananaliksik. Ang ating kaalaman sa Sikolohiya, tulad ng Positibismo at Unibersalimso, ay labis na naimpluwensyahan ng mga Kanluraning kultura. Masasabi pa rin kayang angkop ang ating mga pag-aaral sa ating kalagayan?
Ang maikling sagot ay hindi. Ang ating pag-aaral ng Sikolohiya ay dapat batay sa ating sariling kultura at paniniwala. Mahalaga na tayo ay magkaroon ng kritikal at dekolonyal na pag-aaral sa agham at lipunan. Ito ay isa sa mga paraan upang umunlad ang ating sariling paniniwala at mabigyan ng solusyon ang mga isyung panlipunan na naaayon sa ating karanasan. Kung tayo’y gagawa ng mga batas at mungkahi na nakabatay sa mga pag-aaral ng ibang bansa tiyak na tayo ay mahihirapan sa pagpapairal ng mga ito dahil iba ang kalagayan at kakayahan ng ibang nasyon. Ang ating mga pag-aaral sa Sikolohiya at ibang larangan ay dapat maging inklusibo at batay sa pangangailangan ng mga Pilipino.
Pinapahalagahan ng dekolonyal at kritikal na lente sa sikolohiya ang ating kultura, karanasan at umiiral na konteksto ng ating lipunan. Sa maayos na pamumuno at pamamalakad ng dekolonyal na solusyon, maisusulong natin ang pantay at patas na kamalayan at matutugunan ang pangangailangan ng bawat Pilipino. Bilang Iskolar ng Bayan tayo ay may kapangyarihan maging mulat sa mga isyu, maglingkod sa lipunan, at kakayahan ipamalas ang galing ng Pilipino para sa Pilipino.
`.split("\n");
}
