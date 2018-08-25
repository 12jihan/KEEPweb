import { Injectable } from '@angular/core';
import { fromEventPattern } from 'rxjs';

import {
  faCalendarAlt,
  faHeart,
  faGlobeAfrica,
  faHandsHelping,
  faBullhorn,
  faEnvelope,
  faNewspaper
  } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class FontawesomeService {
  // Font awesome stuff right here

  faCal = faCalendarAlt;
  faHt = faHeart;
  faGlAf = faGlobeAfrica;
  faShake = faHandsHelping;
  faMega = faBullhorn;
  faEnv = faEnvelope;
  faNews = faNewspaper;

  constructor() { }
}
