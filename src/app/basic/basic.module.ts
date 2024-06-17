import {NgModule} from "@angular/core";
import {BasicComponent} from "./basic.component";
import {QuickSetupComponent} from "../quick-setup/quick-setup.component";
import {AdvancedComponent} from "../advanced/advanced.component";
import {InternetComponent} from "./side-nav/internet/internet.component";
import {NetworkComponent} from "./side-nav/network/network.component";
import {WirelessComponent} from "./side-nav/wireless/wireless.component";
import {GuestNetworkComponent} from "./side-nav/guest-network/guest-network.component";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatStepperModule} from "@angular/material/stepper";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";
import {CommonModule} from "@angular/common";
import {CdkDrag} from "@angular/cdk/drag-drop";

const routes: Routes = [
  {path: '',
    component: BasicComponent,
    children: [
      {path: 'network', component: NetworkComponent},
      {path: 'internet', component: InternetComponent},
      {path: 'wireless', component: WirelessComponent},
      {path: 'guest-net', component: GuestNetworkComponent},
      {path: '', redirectTo: 'network', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  declarations: [
    BasicComponent,
    QuickSetupComponent,
    AdvancedComponent,
    InternetComponent,
    NetworkComponent,
    WirelessComponent,
    GuestNetworkComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatButtonModule,

    MatCardModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatButtonToggleModule,

    MatExpansionModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,

    MatTableModule,
    MatDividerModule,
    CdkDrag,
  ]
})
export class BasicModule {}
