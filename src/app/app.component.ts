import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from './shared/services/login.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  viewDate: Date = new Date();
  events = [];
  subscription: Subscription;
  loggedIn = false;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.subscription = this.loginService.loggedIn.subscribe((loggedInStatus: boolean) => {
      this.loggedIn = loggedInStatus;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
