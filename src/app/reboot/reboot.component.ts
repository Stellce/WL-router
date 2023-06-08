import {Component} from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-reboot',
  templateUrl: './reboot.component.html',
  styleUrls: ['./reboot.component.scss']
})
export class RebootComponent{
  constructor(private appService: AppService) {
  }
  reboot = false;
  onReboot() {
    this.reboot = true;
    setTimeout(() => this.appService.reboot(), 5000);
  }
}
