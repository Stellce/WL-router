import {ChangeDetectionStrategy, Component} from '@angular/core';
import { NgForm, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButton } from '@angular/material/button';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';

@Component({
    selector: 'app-guest-network',
    templateUrl: './guest-network.component.html',
    styleUrls: ['./guest-network.component.scss', '../../../shared/shared.scss'],
    standalone: true,
    imports: [MatCard, ReactiveFormsModule, FormsModule, MatCardContent, MatButtonToggleGroup, MatButtonToggle, MatCardActions, MatButton],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuestNetworkComponent {
  allowAccess: string = "OFF";
  wireless24G: string = "OFF";

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
