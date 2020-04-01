import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DisplayModule } from 'src/app/display/display.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DisplayModule,
    MatSidenavModule
    

  ]
})

export class DefaultModule { }



