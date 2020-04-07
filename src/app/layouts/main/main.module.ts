import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DisplayModule } from 'src/app/display/display.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DisplayModule,
    MatSidenavModule
    

  ]
})

export class MainModule { }



