import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin.routes';
import { RouterModule } from '@angular/router';
import { CommonAllModule } from '../common.module';
import { componentmodule } from './component/component.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes), 
    CommonAllModule,
    componentmodule
  ]
})
export class AdminModule { }
