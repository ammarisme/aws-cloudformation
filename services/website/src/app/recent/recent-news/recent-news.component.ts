import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../models/News';

@Component({
  selector: 'app-recent-news',
  templateUrl: './recent-news.component.html',
  styleUrls: ['./recent-news.component.css']
})
export class RecentNewsComponent implements OnInit {

  @Input() newsItem: News;

  constructor() {
  }

  ngOnInit() {
  }

}
