import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppGuardService {

  constructor(private route:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkLogin();
  }

  checkLogin() {
    if (sessionStorage.getItem('token') != null) {
      return true;
    }
    this.route.navigate(['/login']);
    return false;
  }
  
}
