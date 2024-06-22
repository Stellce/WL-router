import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {authGuard} from "./auth.guard";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '',
    loadComponent: () => import('./main/main.component').then(m => m.MainComponent),
    canActivate: [authGuard],
    children: [
      {path: 'quick-setup', loadComponent: () => import('././quick-setup/quick-setup.component').then(m => m.QuickSetupComponent)},
      {path: 'basic', loadComponent: () => import('././basic/basic.component').then(m => m.BasicComponent),
        children: [
          {path: 'network', loadComponent: () => import('./basic/side-nav/network/network.component').then(m => m.NetworkComponent)},
          {path: 'internet', loadComponent: () => import('./basic/side-nav/internet/internet.component').then(m => m.InternetComponent)},
          {path: 'wireless', loadComponent: () => import('./basic/side-nav/wireless/wireless.component').then(m => m.WirelessComponent)},
          {path: 'guest-net', loadComponent: () => import('./basic/side-nav/guest-network/guest-network.component').then(m => m.GuestNetworkComponent)},
          {path: '', redirectTo: 'network', pathMatch: 'full'},
        ]},
      {path: 'advanced', loadComponent: () => import('././advanced/advanced.component').then(m => m.AdvancedComponent),
        children: [
          {path: 'status', loadComponent: () => import('./advanced/side-nav/status/status.component').then(m => m.StatusComponent)},
          {path: 'wan', loadComponent: () => import('./advanced/side-nav/network/wan/wan.component').then(m => m.WanComponent)},
          {path: '', redirectTo: 'status', pathMatch: 'full'}
        ]
      },
      {path: 'reboot', loadComponent: () => import('././reboot/reboot.component').then(m => m.RebootComponent)}
    ]
  },
]
