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

import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatStepperModule} from "@angular/material/stepper";
import {MatRadioModule} from "@angular/material/radio";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

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
    MacCloneComponent
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
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatExpansionModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
