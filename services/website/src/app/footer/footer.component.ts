import {Component, OnInit} from '@angular/core';
import {profile} from '../dummy-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  profile = profile;

  constructor() {
  }

  ngOnInit() {
  }

}
