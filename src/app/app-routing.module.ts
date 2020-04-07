import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component'

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [{
    path:'',
    component: DashboardComponent
  }]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
