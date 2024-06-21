import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdvancedComponent} from "./advanced.component";
import {StatusComponent} from "./side-nav/status/status.component";
import {WanComponent} from "./side-nav/network/wan/wan.component";
import {NgFor, NgIf} from "@angular/common";
import {MatCard, MatCardActions, MatCardContent} from "@angular/material/card";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatFormField} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from "@angular/material/expansion";

const routes: Routes = [
  {path: '', component: AdvancedComponent,
    children: [
      {path: 'status', component: StatusComponent},
      {path: 'wan', component: WanComponent},
      {path: '', redirectTo: 'status', pathMatch: 'full'}
  ]}
];

@NgModule({
  declarations: [
    WanComponent,
    StatusComponent,
    AdvancedComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    NgFor,
    NgIf,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatCheckbox,
    MatFormField,
    FormsModule,
    MatSelect,
    MatOption,
    MatInput,
    MatButton,
    MatDivider,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle
  ]
})
export class AdvancedModule {}
