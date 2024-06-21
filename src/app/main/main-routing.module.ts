import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {authGuard} from "../auth.guard";

const routes: Routes = [
  {path: '', component: MainComponent, canActivate: [authGuard], children: [
    {path: 'quick-setup', loadChildren: () => import('../quick-setup/quick-setup.module').then(m => m.QuickSetupModule)},
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
