import {Component, OnDestroy, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {Subscription} from "rxjs";
import {LogCircleComponent} from "./log-circle/log-circle.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";

@Component({
  selector: `app-header`,
  templateUrl: `./header.component.html`,
  styleUrls: [`./header.component.scss`, `../shared/shared.scss`],
})
export class HeaderComponent implements OnInit, OnDestroy{
  constructor(private appService: AppService, private _bottomSheet: MatBottomSheet) {}
  private isAuthSub: Subscription;
  isAuth: boolean = false;
  loggedIn: boolean = false;
  isSmallScreen: boolean = this.appService.isSmallScreen;
  ngOnInit() {
    this.isAuthSub = this.appService.authStatusListener
      .subscribe(isAuth => this.isAuth = isAuth);
  }
  onLogout() {
    this.appService.logout();
  }

  openBottomSheet(): void {
    this._bottomSheet.open(LogCircleComponent);
  }

  ngOnDestroy() {
    this.isAuthSub.unsubscribe();
  }
}
