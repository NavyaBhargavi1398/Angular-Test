import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuardService } from './guards/app-guard.service';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
    canActivate: [AppGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
