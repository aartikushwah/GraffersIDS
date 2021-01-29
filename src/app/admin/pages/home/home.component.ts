import { Inject, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/service';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})


export class HomeComponent implements OnInit {
  membershipslist: any
  constructor(private router: Router, public _adminservice: AdminService, public dialog: MatDialog) {
   }

  ngOnInit(): void {
    this.GetMemberList()
    this._adminservice.getToken();
  }

  Showdetails(id){
    this._adminservice.detailsId=id;
    this.router.navigate(['/showdetails'])
  }

  GetMemberList()
  {
    this._adminservice.GetMemberShip().subscribe(result=>
      {
         this._adminservice.getToken();
          this.membershipslist = result['memberships'];

      })
  }

}


