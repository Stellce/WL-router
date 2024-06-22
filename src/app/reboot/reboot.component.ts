import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AppService} from "../app.service";
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatButton } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatCard } from '@angular/material/card';

@Component({
    selector: 'app-reboot',
    templateUrl: './reboot.component.html',
    styleUrls: ['./reboot.component.scss', "../shared/shared.scss"],
    standalone: true,
    imports: [MatCard, NgIf, MatButton, MatProgressBar],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RebootComponent{
  constructor(private appService: AppService) {
  }
  reboot = false;
  onReboot() {
    this.reboot = true;
    setTimeout(() => this.appService.restart(), 5000);
  }
}
