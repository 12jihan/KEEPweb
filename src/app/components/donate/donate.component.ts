import { Component, OnInit } from '@angular/core';

import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  faHt = faHeart;

  constructor() { }

  ngOnInit() {
  }

}
