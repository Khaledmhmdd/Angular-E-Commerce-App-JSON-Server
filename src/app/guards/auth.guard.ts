import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterLink } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  let _userAuthService =inject(UserAuthService)
  let _router =inject(Router)

  if(_userAuthService.getUserLogged()){
    return true;
  }else{
    alert('Please log in')
    _router.navigateByUrl("login")
    return false
  }
    
};
