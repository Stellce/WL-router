import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-wireless',
  templateUrl: './wireless.component.html',
  styleUrls: ['./wireless.component.scss']
})
export class WirelessComponent {
  wireless: string = "ON";
  ssid: string = "TP-LINK_7B00";
  password: string = "tplinkpassword";
  hiddenSSID: boolean = false;

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
