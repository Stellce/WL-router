import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {RouterOutlet} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {MatCard, MatCardActions} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    MatCard,
    MatFormField,
    MatInput,
    FormsModule,
    MatCardActions,
    MatButton,
    MatLabel
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
