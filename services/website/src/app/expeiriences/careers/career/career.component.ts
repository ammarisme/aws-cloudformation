import {Component, Input, OnInit} from '@angular/core';
import {Career} from '../../../models/career';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  @Input() career: Career;

  constructor() {
  }

  ngOnInit() {
  }

}
