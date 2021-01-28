import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { CommonAllModule } from 'src/app/common.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [TopbarComponent, SidebarComponent], 
  imports: [
    RouterModule,
    CommonModule,
    CommonAllModule,
  ],
  exports:[
    TopbarComponent,
    SidebarComponent,
  ]
})
export class componentmodule { }
