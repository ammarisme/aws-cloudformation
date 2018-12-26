import {Component, Input, OnInit} from '@angular/core';
import {Education} from '../../models/education';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {

  @Input() myEducations: Education[];

  constructor() {
  }

  ngOnInit() {
  }

}
