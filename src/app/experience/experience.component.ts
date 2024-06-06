import { Component } from '@angular/core';
import { fadeInAnimation, cascadeFade1, cascadeFade2, cascadeFade3, cascadeFade4 } from 'src/assets/animations/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [fadeInAnimation, cascadeFade1, cascadeFade2, cascadeFade3, cascadeFade4]
})
export class ExperienceComponent {

}
