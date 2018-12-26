import {Component, OnInit} from '@angular/core';
import {Education} from '../models/education';
import {careers, educations} from '../dummy-data';
import {Career} from '../models/career';

@Component({
  selector: 'app-expeiriences',
  templateUrl: './expeiriences.component.html',
  styleUrls: ['./expeiriences.component.css']
})
export class ExpeiriencesComponent implements OnInit {

  myEducations: Education[] = educations;
  myCareers: Career[] = careers;

  constructor() { }

  ngOnInit() {
  }

}
