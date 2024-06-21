import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-guest-network',
  templateUrl: './guest-network.component.html',
  styleUrls: ['./guest-network.component.scss', '../../../shared/shared.scss']
})
export class GuestNetworkComponent {
  allowAccess: string = "OFF";
  wireless24G: string = "OFF";

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
