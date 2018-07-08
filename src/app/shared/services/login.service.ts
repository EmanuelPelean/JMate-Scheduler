import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn = new Subject<boolean>();
  constructor() { }

  login() {
    this.loggedIn.next(true);
  }
}
