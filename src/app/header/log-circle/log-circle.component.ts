import { Component } from '@angular/core';
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-log-circle',
  templateUrl: './log-circle.component.html',
  styleUrls: ['./log-circle.component.scss']
})
export class LogCircleComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<LogCircleComponent>) {}

  openLink(event: MouseEvent) {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
