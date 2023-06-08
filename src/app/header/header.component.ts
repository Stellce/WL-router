import {Component, OnDestroy, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {Subscription} from "rxjs";

@Component({
  selector: `app-header`,
  templateUrl: `./header.component.html`,
  styleUrls: [`./header.component.scss`, `../shared/shared.scss`]
})
export class HeaderComponent implements OnInit, OnDestroy{
  constructor(private appService: AppService) {}
  userIsAuthenticated: boolean = false;
  private authListenerSubs: Subscription;
  ngOnInit() {
    this.authListenerSubs =this.appService
      .getAuthStatusListener()
      .subscribe(isAuth => {
        this.userIsAuthenticated = isAuth;
      })
  }
  onLogout() {
    this.appService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
