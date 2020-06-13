import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ListComponent } from './organisation/list/list.component';


const routes: Routes = [
  {
    path: '',
    component: SideMenuComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, },
      { path: 'list', component: ListComponent },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
