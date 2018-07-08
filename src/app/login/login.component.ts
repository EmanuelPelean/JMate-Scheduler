import {Component, OnInit, Output} from '@angular/core';
import {LoginService} from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onLoginClick() {
    this.loginService.login();
  }
}
