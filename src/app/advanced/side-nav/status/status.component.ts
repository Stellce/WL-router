import {Component} from "@angular/core";

@Component({
  selector: 'app-status',
  templateUrl: 'status.component.html',
  styleUrls: ['status.component.scss']
})

export class StatusComponent {
  config = [
    {name: "Firmware Version", value: "3.16.9 Build 20160718 Rel.31920n"},
    {name: "Hardware Version", value: "TL-WR1043ND v4 00000000"},
  ];
  LAN = [
    {name: "MAC Address", value: "00-0A-EB-13-7B-00"},
    {name: "IP Address", value: "192.168.0.1"},
    {name: "Subnet Mask", value: "255.255.255.0"}
  ];
  Wireless = [
    {name: "Wireless Radio", value: "Enable"},
    {name: "Name (SSID)", value: "TP-LINK_7B00"}
  ];
  WAN = [
    {name: "MAC Address", value: "00-0A-EB-13-7B-01"},
    {name: "IP Address", value: "192.168.3.210"},
    {name: "Subnet Mask", value: "255.255.255.0"},
    {name: "Default Gateway", value: "172.31.70.155"},
    {name: "DNS Server", value: "192.168.137.210, 0.0.0.0"}
  ];
  cfg = [{name: "Config", value: this.config}, {name: "LAN", value: this.LAN}, {name: "Wireless", value: this.Wireless}, {name: "WAN", value: this.WAN}];
  IPv4ConType = "Dynamic IP";

  onIPRelease() {
    return 0;
  }
}
