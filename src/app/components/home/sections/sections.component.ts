import { Component } from '@angular/core';

import {
  faCalendarAlt,
  faHeart,
  faGlobeAfrica,
  faHandsHelping,
  faBullhorn,
  faEnvelope,
  faNewspaper
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})

export class SectionsComponent {
  title = '';

  // Font awesome stuff right here

  faCal = faCalendarAlt;
  faHt = faHeart;
  faGlAf = faGlobeAfrica;
  faShake = faHandsHelping;
  faMega = faBullhorn;
  faEnv = faEnvelope;
  faNews = faNewspaper;
}
