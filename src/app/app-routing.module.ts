import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent} from './Dashboard/dashboard.component'
import {LoginComponent} from './loginscreen/login.component'
import { IncidentComponent } from './Incidenttab/incidenttab.component';

const routes: Routes = [  
  {path:'',component:LoginComponent},
  { path: 'Dashboard', component: DashboardComponent},
  { path: 'IncidentTab', component: IncidentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
