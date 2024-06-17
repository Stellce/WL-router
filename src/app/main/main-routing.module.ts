import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {authGuard} from "../auth.guard";
import {QuickSetupComponent} from "../quick-setup/quick-setup.component";

const routes: Routes = [
  {path: '', component: MainComponent, canActivate: [authGuard], children: [
    {path: 'quick-setup', component: QuickSetupComponent},
    {path: 'basic', loadChildren: () => import('../basic/basic.module').then(m => m.BasicModule)},
    {path: 'advanced', loadChildren: () => import('../advanced/advanced.module').then(m => m.AdvancedModule)},
    {path: 'reboot', loadChildren: () => import('../reboot/reboot.module').then(m => m.RebootModule)}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class MainRoutingModule {}
