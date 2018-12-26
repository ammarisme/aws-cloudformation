import {Component, OnInit} from '@angular/core';
import {News} from '../models/News';
import {news} from '../dummy-data';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {

  newsItems: News[] = news;

  constructor() {
  }

  ngOnInit() {
  }

}
