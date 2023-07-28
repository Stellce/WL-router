import {NgModule} from "@angular/core";
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
import {MatListModule} from "@angular/material/list";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";

@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatExpansionModule,
    MatStepperModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatListModule,
    MatBottomSheetModule
  ]
})
 export class AngularMaterialModule {}
