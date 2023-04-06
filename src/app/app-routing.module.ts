import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {BasicComponent} from "./basic/basic.component";
import {QuickSetupComponent} from "./quick-setup/quick-setup.component";
import {AdvancedComponent} from "./advanced/advanced.component";
import {InternetComponent} from "./basic/side-nav/internet/internet.component";
import {NetworkComponent} from "./basic/side-nav/network/network.component";
import {WirelessComponent} from "./basic/side-nav/wireless/wireless.component";
import {GuestNetworkComponent} from "./basic/side-nav/guest-network/guest-network.component";

const routes: Routes = [
  { path: 'basic', component: BasicComponent,
    children: [
      { path: 'network', component: NetworkComponent},
      { path: 'internet', component: InternetComponent},
      { path: 'wireless', component: WirelessComponent},
      { path: 'guest-net', component: GuestNetworkComponent},
      { path: '', redirectTo: 'network', pathMatch: "full"}
    ]
  },
  { path: 'quickSetup', component: QuickSetupComponent},
  { path: 'advanced', component: AdvancedComponent},
  // { path: 'login', component: LoginComponent},
  // { path: '**', component: PageNotFoundComponent}
  {path: '', redirectTo: 'basic', pathMatch: "full"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule{}
