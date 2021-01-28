import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonAllModule } from 'src/app/common.module';
import { MembershiplistComponent } from './membershiplist.component';


    const AddroutRoutes: Route[] = [
    {
        path: '',
        component: MembershiplistComponent
    },
    ];


@NgModule({
  declarations: [MembershiplistComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(AddroutRoutes),
    CommonAllModule
  ]
})
export class MemberListModule { }
