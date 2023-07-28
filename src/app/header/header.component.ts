import {Component, OnDestroy, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {Subscription} from "rxjs";
import {LogCircleComponent} from "./log-circle/log-circle.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {Router} from "@angular/router";

@Component({
  selector: `app-header`,
  templateUrl: `./header.component.html`,
  styleUrls: [`./header.component.scss`, `../shared/shared.scss`],
})

export class HeaderComponent implements OnInit, OnDestroy{
  constructor(private appService: AppService, private router: Router, private _bottomSheet: MatBottomSheet) {}
  private authListenerSubs: Subscription;
  userIsAuthenticated: boolean = false;
  loggedIn: boolean = false;
  isSmallScreen: boolean = this.appService.isSmallSceen;
  ngOnInit() {
    this.loggedIn = this.router.url !== '/login';
    this.authListenerSubs =this.appService
      .getAuthStatusListener()
      .subscribe(isAuth => {
        this.userIsAuthenticated = isAuth;
      })
  }
  onLogout() {
    this.appService.logout();
  }

  openBottomSheet(): void {
    this._bottomSheet.open(LogCircleComponent);
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
