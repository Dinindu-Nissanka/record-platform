import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  isSubmitted: boolean;
  loginStatus: string;

  constructor(private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginStatus = 'Not Logged In';
  }

  onLoginClick(loginForm) {
    this.isSubmitted = true;
    if (loginForm.valid) {
      this._authenticationService.login();
      this.loginStatus = 'Login Success';
    }

  }

}
