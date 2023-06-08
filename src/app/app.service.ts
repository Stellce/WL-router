import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private isAuth: boolean = false;
  private authStatusListener = new Subject<boolean>();
  constructor(private router: Router) {}
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
    this.router.navigate(['/quick-setup']);
  }
  logout() {
    this.authStatusListener.next(false);
    this.router.navigate(['/']);
  }
  reboot() {
    this.authStatusListener.next(false);
    this.router.navigate(['/']);
  }
}
