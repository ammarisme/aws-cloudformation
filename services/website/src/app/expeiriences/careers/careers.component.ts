import {Component, Input, OnInit} from '@angular/core';
import {Career} from '../../models/career';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  @Input() myCareers: Career[];

  constructor() {
  }

  ngOnInit() {
  }

}
