import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { UserAuthService } from '../../../services/user-auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  isUserLogged:boolean;

  constructor(
    private _userAuthService:UserAuthService
  ){
    this.isUserLogged= this._userAuthService.getUserLogged()
  }

  login() {
    this._userAuthService.login()
    this.isUserLogged = true;
  }
  logout() {
    this._userAuthService.logout()
    this.isUserLogged = false;

  }

}
