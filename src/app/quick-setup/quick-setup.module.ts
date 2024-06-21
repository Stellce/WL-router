import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {QuickSetupComponent} from "./quick-setup.component";
import {MatStepperModule} from "@angular/material/stepper";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInput} from "@angular/material/input";

const routes: Routes = [
  {path: '', component: QuickSetupComponent}
];

@NgModule({
  declarations: [
    QuickSetupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatInput,
  ]
})
export class QuickSetupModule {}
