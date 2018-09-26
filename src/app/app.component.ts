import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from './shared/services/login.service';
import {Subscription} from 'rxjs';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalAboutComponent} from './modal-about/modal-about.component';


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
  _opened = false;

  constructor(private loginService: LoginService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.subscription = this.loginService.loggedIn.subscribe((loggedInStatus: boolean) => {
      this.loggedIn = loggedInStatus;
    });
  }

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
