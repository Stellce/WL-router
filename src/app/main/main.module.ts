import {NgModule} from "@angular/core";
import {MainRoutingModule} from "./main-routing.module";
import {HeaderComponent} from "../header/header.component";
import {LogCircleComponent} from "../header/log-circle/log-circle.component";
import {MainComponent} from "./main.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {LayoutModule} from "@angular/cdk/layout";
import {CommonModule} from "@angular/common";
import {MatCard} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";

@NgModule({
  declarations: [
    HeaderComponent,
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

    MatCard,
    MatFormField,
    MatInput,
    MatButton,
    MatIcon,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem
  ],
  exports: []
})
export class MainModule {}
