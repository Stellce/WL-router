import {AfterViewInit, Component, OnInit} from '@angular/core';
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {wiredList} from "./clientsIP";
import {ClientsIPInterface} from "./clientsIP-interface";

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss', '../../../shared/shared.scss']
})
export class NetworkComponent implements AfterViewInit{
  disconnected :boolean = true;
  earthPath: string = './assets/images/network-tab1/Earth.svg';
  routerPath: string = './assets/images/network-tab1/Router.svg'
  clientPath: string = './assets/images/network-tab1/Client.svg'
  xPath: string = './assets/images/network-tab1/X.svg';

  wiredClientsPath: string = './assets/images/network-tab2/PC-full.svg';
  wanPath: string = './assets/images/network-tab2/RJ45.svg';
  wirelessPath: string = './assets/images/network-tab2/Wireless.svg';
  wirelessClientsPath: string = './assets/images/network-tab2/WirelessPhone.svg';

  showWiredList: boolean = true;
  wiredList: ClientsIPInterface[] = wiredList;
  displayedWiredColumns: string[] = ['ID', 'name', 'IP', 'MAC'];

  innerWindow: HTMLElement | null;

  ngAfterViewInit() {
    this.innerWindow = document.getElementsByClassName('inner-window')[0] as HTMLElement;
  }
  onShowWired() {
    if (this.innerWindow!.style.display != '' && this.innerWindow!.style.display != 'none') {
      this.innerWindow!.style.display = 'none';
      return;
    }
    const wiredDiv = document.getElementsByClassName('wired-clients-div')[0] as HTMLElement;
    this.innerWindow!.style.display = 'block';
    this.innerWindow!.style.left = String(wiredDiv.getBoundingClientRect().left) + 'px';
    this.innerWindow!.style.top = String(wiredDiv.getBoundingClientRect().top) + 'px';
    this.moveInner();
  }
  moveInner() {
    const body: HTMLElement = document.getElementsByTagName('body')[0] as HTMLElement;
    const innerWindowMove: HTMLElement = document.getElementsByClassName('move')[0] as HTMLElement;
    let pos1X = 0, pos1Y = 0, offsetX = 0, offsetY = 0;
    innerWindowMove.onmousedown = (e) => {
      e = e || Event;
      // e.preventDefault();
      body.style.userSelect = 'none'
      pos1X = e.clientX;
      pos1Y = e.clientY;

      offsetX = pos1X - this.innerWindow!.offsetLeft;
      offsetY = pos1Y - this.innerWindow!.offsetTop;

      document.onmousemove = (e) => {
        this.innerWindow!.style.left = e.clientX - offsetX + 'px';
        this.innerWindow!.style.top = e.clientY - offsetY + 'px';
        console.log(e.clientX, e.clientY);
      }
      document.onmouseup = () => {
        document.onmousedown = null;
        document.onmousemove = null;
        body.style.userSelect = 'text';
      }

    }
  }

  onCloseInner() {
    this.innerWindow!.style.display = 'none';
  }
}
