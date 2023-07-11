import { Component } from '@angular/core';
import {MatSelectChange} from "@angular/material/select";
import {NgForm} from "@angular/forms";
import {UserDataModel} from "./user-data.model";

@Component({
  selector: 'app-internet',
  templateUrl: './internet.component.html',
  styleUrls: ['./internet.component.scss', '../../../shared/shared.scss']
})
export class InternetComponent {
  connectOptions = ['Dynamic IP', 'Static IP', 'PPPoE', 'BigPond Cable'];
  ipConfig: {name: string, value: string}[] = [
    {name: "IP Address:", value: "192.168.3.209"},
    {name: "Subnet Mask:", value: "255.255.255.0"},
    {name: "Default Gateway:", value: "172.31.70.155"},
  ];
  DNS: {name: string, value: string}[] = [
    {name: "Primary DNS:", value: "192.168.3.1"},
    {name: "Secondary DNS:", value: "0.0.0.0"}
  ]
  selected: string = this.connectOptions[0];
  useAnotherDNS: boolean = false;
  primaryDNS: string = this.DNS[0].value;
  secondaryDNS: string = this.DNS[1].value;
  renewDisable: boolean = true;
  user: UserDataModel = {
    userName: "Admin",
    password: "admin"
  };
  connected: boolean = false;
  bigPond: {user: UserDataModel, authServer: string, authDomain: string} = {
    user: this.user,
    authServer: "sm-server",
    authDomain: "sm-domain"
  };
  onDetect() {
    this.selected = 'Dynamic IP';
  }
  onSelect(event: MatSelectChange) {
    this.selected = event.value;
    // console.log(`Selected option:${event.value}`);
  }

  onRelease() {
    this.renewDisable = false;
    for (let item of this.ipConfig) {
      item.value = " - . - . - . - ";
    }

  }
  onRenew() {
    this.renewDisable = true;
    this.ipConfig = [
      {name: "IP Address:", value: "192.168.3.209"},
      {name: "Subnet Mask:", value: "255.255.255.0"},
      {name: "Default Gateway:", value: "172.31.70.155"},
    ];
  }

  onConnect() {
    this.connected = true;
  }

  onDisconnect() {
    this.connected = false;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
