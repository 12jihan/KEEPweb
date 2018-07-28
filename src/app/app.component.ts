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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // Font awesome stuff right here

  faCal = faCalendarAlt;
  faHt = faHeart;
  faGlAf = faGlobeAfrica;
  faShake = faHandsHelping;
  faMega = faBullhorn;
  faEnv = faEnvelope;
  faNews = faNewspaper;
}
