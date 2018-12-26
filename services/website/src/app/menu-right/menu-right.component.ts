import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoggerService} from '../logger.service';

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.css']
})
export class MenuRightComponent implements OnInit {

  currentRoute: string;

  constructor(private logger: LoggerService) {
  }

  ngOnInit() {
    this.currentRoute = 'profile';
  }

  menuClicked(route) {
    this.currentRoute = route;
    const data = {
      route: route,
      token: this.logger.myToken
    };

    this.logger.tokenObservable.subscribe(val => {
      console.log(val);
    });
    this.logger.send(data);
    document.getElementById('routelet').scrollIntoView({behavior: 'smooth', block: 'start'});
    console.log(route);
  }

}
