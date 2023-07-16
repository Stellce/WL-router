import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {AppRoutingModule} from "./app-routing.module";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {BasicComponent} from "./basic/basic.component";
import {QuickSetupComponent} from "./quick-setup/quick-setup.component";
import {AdvancedComponent} from "./advanced/advanced.component";
import {InternetComponent} from './basic/side-nav/internet/internet.component';
import {NetworkComponent} from './basic/side-nav/network/network.component';
import {WirelessComponent} from './basic/side-nav/wireless/wireless.component';
import {GuestNetworkComponent} from './basic/side-nav/guest-network/guest-network.component';
import {StatusComponent} from "./advanced/side-nav/status/status.component";
import {WanComponent} from "./advanced/side-nav/network/wan/wan.component";
import {MacCloneComponent} from "./advanced/side-nav/network/mac-clone/mac-clone.component";

import {AngularMaterialModule} from "./angular-material.module";
import { LoginComponent } from './login/login.component';
import { RebootComponent } from './reboot/reboot.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { LogCircleComponent } from './header/log-circle/log-circle.component';
import {CdkDrag, CdkDragHandle} from "@angular/cdk/drag-drop";

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

    StatusComponent,
    WanComponent,
    MacCloneComponent,
    LoginComponent,
    RebootComponent,
    // LogCircleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MatProgressBarModule,
    CdkDrag,
    CdkDragHandle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
