import {ChangeDetectionStrategy, Component} from '@angular/core';
import { NgForm, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';

@Component({
    selector: 'app-wireless',
    templateUrl: './wireless.component.html',
    styleUrls: ['./wireless.component.scss', '../../../shared/shared.scss'],
    standalone: true,
    imports: [MatCard, ReactiveFormsModule, FormsModule, MatCardContent, MatButtonToggleGroup, MatButtonToggle, MatFormField, MatInput, MatCheckbox, MatCardActions, MatButton],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WirelessComponent {
  wireless: string = "ON";
  ssid: string = "TP-LINK_7B00";
  password: string = "tplinkpassword";
  hiddenSSID: boolean = false;

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
