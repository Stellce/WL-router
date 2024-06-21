import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {BreakpointObserver} from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _isAuth: boolean = false;

  constructor(private router: Router, public media: BreakpointObserver) {}
  get isAuth() {
    return this._isAuth;
  }
  set isAuth(isAuth: boolean) {
    this._isAuth = isAuth;
  }
  login() {
    this.isAuth = true;
    this.router.navigate(['/basic/internet']);
  }
  logout() {
    this.isAuth = false;
    this.router.navigate(['/']);
  }
  restart() {
    this.router.navigate(['/reboot']);
  }
}
