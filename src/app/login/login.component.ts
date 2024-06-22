import {Component} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {AppService} from "../app.service";
import {MatCard, MatCardActions} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../shared/shared.scss'],
  imports: [
    MatCard,
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatCardActions,
    MatButton
  ],
  standalone: true
})
export class LoginComponent {
  constructor(private appService: AppService) {}

  onSubmit(form: NgForm) {
    this.appService.login();
  }
}
