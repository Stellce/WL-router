import { Component } from '@angular/core';
import {MatSelectChange} from "@angular/material/select";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-internet',
  templateUrl: './internet.component.html',
  styleUrls: ['./internet.component.scss']
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
  ipAddress: string = this.ipConfig[0].value;
  subnetMask: string = this.ipConfig[1].value;
  defaultGateway: string = this.ipConfig[2].value;
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

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
