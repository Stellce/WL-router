import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-guest-network',
  templateUrl: './guest-network.component.html',
  styleUrls: ['./guest-network.component.scss']
})
export class GuestNetworkComponent {
  allowAccess: string = "OFF";
  wireless24G: string = "OFF";

  onCheck() {
    console.log('AllowAccess: ' + this.allowAccess + '\nwireless24G: ' + this.wireless24G);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
