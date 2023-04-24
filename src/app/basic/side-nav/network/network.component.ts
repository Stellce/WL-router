import { Component } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent {
  disconnected :boolean = true;
  earthPath: string = './assets/images/network-tab1/Earth.svg';
  routerPath: string = './assets/images/network-tab1/Router.svg'
  clientPath: string = './assets/images/network-tab1/Client.svg'
  xPath: string = './assets/images/network-tab1/X.svg';

  wiredClientsPath: string = './assets/images/network-tab2/PC-full.svg';
  wanPath: string = './assets/images/network-tab2/RJ45.svg';
  wirelessPath: string = './assets/images/network-tab2/Wireless.svg';
  wirelessClientsPath: string = './assets/images/network-tab2/WirelessPhone.svg';
}
