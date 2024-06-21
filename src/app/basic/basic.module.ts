import {NgModule} from "@angular/core";
import {BasicComponent} from "./basic.component";
import {InternetComponent} from "./side-nav/internet/internet.component";
import {NetworkComponent} from "./side-nav/network/network.component";
import {WirelessComponent} from "./side-nav/wireless/wireless.component";
import {GuestNetworkComponent} from "./side-nav/guest-network/guest-network.component";
import {MatButton} from "@angular/material/button";
import {RouterModule, Routes} from "@angular/router";
import {MatCard, MatCardActions, MatCardContent} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatExpansionPanel, MatExpansionPanelTitle} from "@angular/material/expansion";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatInput} from "@angular/material/input";
import {MatDivider} from "@angular/material/divider";
import {CommonModule} from "@angular/common";
import {CdkDrag, CdkDragHandle} from "@angular/cdk/drag-drop";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";

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
    InternetComponent,
    NetworkComponent,
    WirelessComponent,
    GuestNetworkComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatButton,
    MatCard,
    MatFormField,

    MatExpansionPanel,
    MatExpansionPanelTitle,

    MatCardContent,
    MatSelect,
    MatOption,
    MatCardActions,
    FormsModule,
    MatCheckbox,
    MatInput,

    MatDivider,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatDivider,

    CdkDrag,
    CdkDragHandle,
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
  ]
})
export class BasicModule {}
