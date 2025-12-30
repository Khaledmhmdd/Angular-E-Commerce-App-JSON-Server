import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { UserAuthService } from '../../../services/user-auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {

  isUserLogged:boolean;
constructor(
    private _userAuthService:UserAuthService
){
  this.isUserLogged = this._userAuthService.getUserLogged()
}
logout() {
  this._userAuthService.logout()
  this.isUserLogged = false;
}

// ngOnInit(): void {
//   this._userAuthService.getauthSubject().subscribe({
//     next :(status)=>{
//       this.isUserLogged= status
//     }
//   })
// }
}
