import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AppService} from "../../app.service";
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-log-circle',
  templateUrl: './log-circle.component.html',
  styleUrls: ['./log-circle.component.scss'],
  imports: [
    MatButton
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
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
