import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin.routes';
import { RouterModule } from '@angular/router';
import { CommonAllModule } from '../common.module';
import { componentmodule } from './component/component.module';
import { MembershiplistComponent } from './pages/membershiplist/membershiplist.component';

@NgModule({
  declarations: [AdminComponent, MembershiplistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes), 
    CommonAllModule,
    componentmodule
  ]
})
export class AdminModule { }
