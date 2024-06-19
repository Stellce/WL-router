import {Component} from "@angular/core";
import {AppService} from "../app.service";
import {LogCircleComponent} from "./log-circle/log-circle.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";

@Component({
  selector: `app-header`,
  templateUrl: `./header.component.html`,
  styleUrls: [`./header.component.scss`, `../shared/shared.scss`],
})
export class HeaderComponent {
  constructor(private appService: AppService, private _bottomSheet: MatBottomSheet) {}
  isSmallScreen: boolean = this.appService.isSmallScreen;
  onLogout() {
    this.appService.logout();
  }

  openBottomSheet(): void {
    this._bottomSheet.open(LogCircleComponent);
  }
}
