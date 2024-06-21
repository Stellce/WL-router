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
  onLogout() {
    this.appService.logout();
  }

  get isSmallScreen() {
    return this.appService.media.isMatched('(max-width: 1000px)');
  }

  openBottomSheet(): void {
    this._bottomSheet.open(LogCircleComponent);
  }
}
