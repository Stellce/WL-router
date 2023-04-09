import { Component } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent {
  earthPath: string = './assets/images/Earth.svg';
  disconnected :boolean = true;

  routerPath: string = './assets/images/Router.svg'
  clientPath: string = './assets/images/Client.svg'
  xPath: string = './assets/images/X.svg';
}
