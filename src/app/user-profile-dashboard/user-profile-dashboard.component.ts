import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginService} from '../shared/services/login.service';

@Component({
  selector: 'app-user-profile-dashboard',
  templateUrl: './user-profile-dashboard.component.html',
  styleUrls: ['./user-profile-dashboard.component.css']
})
export class UserProfileDashboardComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  loggedIn = false;
  _opened = false;


  constructor(private loginService: LoginService,
              private modalService: NgbModal) {
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
