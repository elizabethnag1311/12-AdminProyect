import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const chilRoutes: Routes = [
  { path: '', component: DashboardComponent, data: {title: 'dashboard'}},
  { path: 'progress', component: ProgressComponent, data: {title: 'ProgressBar'} },
  { path: 'grafica1', component: Grafica1Component, data: {title: 'Grafica #1'} },
  { path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Theme'} },
  { path: 'promesas', component: PromesasComponent, data: {title: 'Promesas'} },
  { path: 'rxjs', component: RxjsComponent, data: {title: 'RxJs'} },

]

@NgModule({
  imports: [RouterModule.forChild(chilRoutes),],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
