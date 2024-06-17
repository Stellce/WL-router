import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Router} from "@angular/router";
import {BreakpointObserver} from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _isAuth: boolean = false;
  private _authStatusListener = new BehaviorSubject<boolean>(false);
  isSmallScreen = this.media.isMatched('(max-width: 1000px)');

  constructor(private router: Router, public media: BreakpointObserver) {}
  get isAuth() {
    return this._isAuth;
  }
  set isAuth(isAuth: boolean) {
    this._isAuth = isAuth;
    this._authStatusListener.next(isAuth);
  }
  get authStatusListener() {
    return this._authStatusListener.asObservable();
  }
  login() {
    this.isAuth = true;
    // this.router.navigate(['/quick-setup']);
    this.router.navigate(['/basic/internet']);
  }
  logout() {
    this._authStatusListener.next(false);
    this.router.navigate(['/']);
  }
  restart() {
    this.router.navigate(['/reboot']);
  }
}
