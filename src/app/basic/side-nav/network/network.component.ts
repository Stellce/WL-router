import {Component} from '@angular/core';
import {wiredList, wirelessList} from "./clientsIP";
import {ClientsIPInterface} from "./clientsIP-interface";
import { MatDivider } from '@angular/material/divider';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { NgIf, NgFor } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-network',
    templateUrl: './network.component.html',
    styleUrls: ['./network.component.scss', '../../../shared/shared.scss'],
    standalone: true,
    imports: [MatCard, MatCardContent, NgIf, CdkDrag, CdkDragHandle, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatDivider, NgFor]
})
export class NetworkComponent {
  disconnected: boolean = true;
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
}
