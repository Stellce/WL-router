import {importProvidersFrom, provideExperimentalZonelessChangeDetection} from '@angular/core';
import { AppComponent } from './app/app.component';
import {provideRouter, RouterOutlet} from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {routes} from "./app/app.routes";


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, RouterOutlet),
    provideAnimationsAsync(),
    provideRouter(routes),
    provideExperimentalZonelessChangeDetection()
  ]
})
  .catch(err => console.error(err));
