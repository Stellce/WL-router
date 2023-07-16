import {Component} from '@angular/core';
import {wiredList, wirelessList} from "./clientsIP";
import {ClientsIPInterface} from "./clientsIP-interface";
import {WindowService} from "../../window.service";

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss', '../../../shared/shared.scss']
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

  wiredList: ClientsIPInterface[] = wiredList;
  displayedWiredColumns: string[] = ['ID', 'name', 'IP', 'MAC'];

  wirelessList: ClientsIPInterface[] = wirelessList;

  wireless24GHZ = [
    {name: 'SSID', value: 'TP-LINK_7B00'},
    {name: 'Channel', value: 'Auto(Current channel 6)'},
    {name: 'MAC', value: '00-0A-EB-13-7B-00'}
  ]

  wan = [
    {name: 'Internet Status', value: 'Linked'},
    {name: 'Connect Type', value: 'Dynamic IP'},
    {name: 'MAC', value: '00-0A-EB-13-7B-01'},
    {name: 'WAN IP', value: '192.168.3.209'},
    {name: 'Gateway', value: '172.31.70.166'}
  ]

  divsDisplay = {
    'wired-clients-div': false,
    'wan-div': false,
    'wireless-div': false,
    'wireless-clients-div': false
  };

  constructor(private winService: WindowService) {}

  onShowWindow(winNum: number) {
    this.winService.showWindow(winNum);
  }

  // onTrack(winNum: number) {
  //   this.winService.trackMove(winNum, true);
  // }

  onDrag(showWinNum: number, e: any) {
    const body: HTMLElement = document.getElementsByTagName('body')[0] as HTMLElement;
    let innerWindow = document.getElementsByClassName('inner-window')[showWinNum] as HTMLElement;
    const moveDiv: HTMLElement = document.getElementsByClassName('move')[showWinNum] as HTMLElement;
    let pos1X = 0, pos1Y = 0, offsetX = 0, offsetY = 0;
    // console.log(moveDiv)

    e = e || Event;
    console.log(e.clientY)
    body.style.userSelect = 'none'
    pos1X = e.clientX;
    pos1Y = e.clientY;

    offsetX = pos1X - innerWindow!.offsetLeft;
    offsetY = pos1Y - innerWindow!.offsetTop;

    document.onmousemove = (e) => {
      innerWindow!.style.left = e.clientX - offsetX + 'px';
      innerWindow!.style.top = e.clientY - offsetY + 'px';
      // console.log(e.clientX, e.clientY);
    }
    document.onmouseup = () => {
      document.onmousedown = null;
      document.onmousemove = null;
      body.style.userSelect = 'text';
    }

  }
}
