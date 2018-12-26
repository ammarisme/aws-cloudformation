import {Component, OnInit} from '@angular/core';
import {profile} from '../dummy-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profile = profile;

  constructor() {


  }

  ngOnInit() {
  }
}
