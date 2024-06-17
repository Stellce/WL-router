import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdvancedComponent} from "./advanced.component";
import {StatusComponent} from "./side-nav/status/status.component";
import {InternetComponent} from "../basic/side-nav/internet/internet.component";

const routes: Routes = [
  {path: '', component: AdvancedComponent,
    children: [
      {path: 'status', component: StatusComponent},
      {path: 'wan', component: InternetComponent},
      // {path: 'mac-clone', component: MacCloneComponent},
      {path: '', redirectTo: 'status', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AdvancedModule {}
