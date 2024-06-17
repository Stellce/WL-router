import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AppService} from "../app.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../shared/shared.scss']
})
export class LoginComponent {
  constructor(private appService: AppService) {}

  onSubmit(form: NgForm) {
    this.appService.login();
  }
}
