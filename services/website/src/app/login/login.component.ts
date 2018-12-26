import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../logger.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  constructor(private logger: LoggerService, private router: Router) {
  }

  ngOnInit() {
    this.logger.initSocket(this.userName);
  }

  login() {
    this.logger.register(this.userName);
    localStorage.setItem('token', this.logger.myToken);
    localStorage.setItem('myName', this.userName);
    this.router.navigateByUrl('/logged-in');
  }
}
