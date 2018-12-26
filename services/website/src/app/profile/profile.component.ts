import {Component, OnInit} from '@angular/core';
import {profile} from '../dummy-data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = profile;

  constructor() { }

  ngOnInit() {
  }

}
