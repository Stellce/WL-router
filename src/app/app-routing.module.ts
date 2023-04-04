import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {BasicComponent} from "./basic/basic.component";
import {QuickSetupComponent} from "./quick-setup/quick-setup.component";
import {AdvancedComponent} from "./advanced/advanced.component";
import {BasicNavComponent} from "./basic/nav/basic.nav.component";

const routes: Routes = [
  { path: 'basic', component: BasicComponent},
  { path: 'quickSetup', component: QuickSetupComponent},
  { path: 'advanced', component: AdvancedComponent},
  { path: 'basic/network', component: BasicNavComponent},
  // { path: 'basic/internet', component: }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule{}
