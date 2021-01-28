import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonAllModule } from 'src/app/common.module';
import { HomeComponent, MembershipDialog } from './home.component';
    const AddroutRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    ];

@NgModule({
  declarations: [HomeComponent,MembershipDialog],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(AddroutRoutes),
    CommonAllModule
  ],
  entryComponents: [MembershipDialog],

})
export class HomeModule { }
