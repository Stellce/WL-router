import { Component } from '@angular/core';
import {AppService} from "../../app.service";
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-log-circle',
  templateUrl: './log-circle.component.html',
  styleUrls: ['./log-circle.component.scss']
})
export class LogCircleComponent {
  constructor(private appService: AppService, private sheet: MatBottomSheetRef<LogCircleComponent>) {}
  onLogout() {
    this.appService.logout();
    this.sheet.dismiss();
  }

  onRestart() {
    this.appService.restart();
    this.sheet.dismiss();
  }
}
