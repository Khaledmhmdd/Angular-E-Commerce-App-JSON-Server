import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  isUserLogged:boolean= false;
  
  private _authSubject: BehaviorSubject<boolean>;


  constructor(){
    this._authSubject = new BehaviorSubject<boolean>(false)
  }

  login(){
    localStorage.setItem("token","sajbcbabivenanivanaisklvalkn")
    this._authSubject.next(true)
  }

  logout(){
    localStorage.removeItem("token")
    this._authSubject.next(false)

  }

  getUserLogged():boolean{
    return localStorage.getItem('token')?true:false;

  }
  
  getauthSubject(): BehaviorSubject<boolean> {
    return this._authSubject;
  }
  getToken():any{
   return localStorage.getItem('token')?localStorage.getItem("token"):""
  }
}
