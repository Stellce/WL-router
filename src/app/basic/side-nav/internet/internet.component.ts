import { Component } from '@angular/core';
import {MatSelectChange} from "@angular/material/select";

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
  onDetect() {
    this.selected = 'Dynamic IP';
  }
  onSelect(event: MatSelectChange) {
    this.selected = event.value;
    // console.log(`Selected option:${event.value}`);
  }

  onRelease() {

  }
  onRenew() {

  }

  onSave() {

  }
}
