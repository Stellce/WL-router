import {NgModule} from "@angular/core";
import {MainRoutingModule} from "./main-routing.module";
import {HeaderComponent} from "../header/header.component";
import {StatusComponent} from "../advanced/side-nav/status/status.component";
import {WanComponent} from "../advanced/side-nav/network/wan/wan.component";
import {LoginComponent} from "../login/login.component";
import {LogCircleComponent} from "../header/log-circle/log-circle.component";
import {MainComponent} from "./main.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {LayoutModule} from "@angular/cdk/layout";
import {AngularMaterialModule} from "../angular-material.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    HeaderComponent,

    StatusComponent,
    WanComponent,

    LoginComponent,
    LogCircleComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FormsModule,
    LayoutModule,
    AngularMaterialModule
  ],
  exports: []
})
export class MainModule {}
