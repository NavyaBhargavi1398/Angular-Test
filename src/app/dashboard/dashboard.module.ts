import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './organisation/list/list.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent, 
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
