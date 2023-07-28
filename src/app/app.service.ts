import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {BreakpointObserver} from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private isAuth: boolean = false;
  private authStatusListener = new Subject<boolean>();
  isSmallSceen = this.media.isMatched('(max-width: 1000px)');

  constructor(private router: Router, public media: BreakpointObserver) {}
  setAuth(change: boolean) {
    this.isAuth = change;
    this.authStatusListener.next(change);
  }
  getIsAuth() {
    return this.isAuth;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  login() {
    // this.router.navigate(['/quick-setup']);
    this.router.navigate(['/basic/internet']);
  }
  logout() {
    this.authStatusListener.next(false);
    this.router.navigate(['/']);
  }
  restart() {
    this.router.navigate(['/reboot']);
  }
}
