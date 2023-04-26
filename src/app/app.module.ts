import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {BasicComponent} from "./basic/basic.component";
import {QuickSetupComponent} from "./quick-setup/quick-setup.component";

import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {AdvancedComponent} from "./advanced/advanced.component";
import {AppRoutingModule} from "./app-routing.module";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { InternetComponent } from './basic/side-nav/internet/internet.component';
import { NetworkComponent } from './basic/side-nav/network/network.component';
import { WirelessComponent } from './basic/side-nav/wireless/wireless.component';
import { GuestNetworkComponent } from './basic/side-nav/guest-network/guest-network.component';
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicComponent,
    QuickSetupComponent,
    AdvancedComponent,
    InternetComponent,
    NetworkComponent,
    WirelessComponent,
    GuestNetworkComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatSelectModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
