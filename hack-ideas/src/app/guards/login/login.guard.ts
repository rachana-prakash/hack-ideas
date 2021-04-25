import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let redirectToLogin = true;
    if (localStorage.getItem('isLoggedInStatus')) {
      this.router.navigate(['home']);
      redirectToLogin = false;
    }
    return redirectToLogin;
  }
}
