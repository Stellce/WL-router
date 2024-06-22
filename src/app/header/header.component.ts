import {Component} from "@angular/core";
import {AppService} from "../app.service";
import {LogCircleComponent} from "./log-circle/log-circle.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: `app-header`,
  templateUrl: `./header.component.html`,
  styleUrls: [`./header.component.scss`, `../shared/shared.scss`],
  imports: [
    MatMenu,
    MatMenuItem,
    RouterLink,
    RouterLinkActive,
    MatButton,
    NgIf,
    MatMenuTrigger,
    MatIcon
  ],
  standalone: true
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
