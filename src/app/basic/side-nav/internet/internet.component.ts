import { Component } from '@angular/core';

@Component({
  selector: 'app-internet',
  templateUrl: './internet.component.html',
  styleUrls: ['./internet.component.scss']
})
export class InternetComponent {
  ipAddress: string = "192.168.3.209";
  dataSource: {name: string, value: string}[] = [
    {name: "IP Address:", value: "192.168.3.209"},
    {name: "Subnet Mask:", value: "255.255.255.0"},
    {name: "Default Gateway:", value: "172.31.70.155"}
  ];
  displayedColumns: string[] = ["name", "value"];
  OnDetect() {
    return 0;
  }
}
