import { Inject, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(public _adminservice: AdminService, public dialog: MatDialog) {
   }

  ngOnInit(): void {
    this.GetMemberList()
  }

  openDialog(id): void {
    const dialogRef = this.dialog.open(MembershipDialog, {
      width: '600px',
      data: {
        _id:id,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  GetMemberList()
  {
    this._adminservice.GetMemberShip().subscribe(result=>
      {
          this.membershipslist = result['memberships'];

      })
  }

}


@Component({
  selector: 'membership-dialog',
  templateUrl: 'membership.component.html',
})
export class MembershipDialog implements OnInit {
  membershipsdetils : any;
  constructor(
    public dialogRef: MatDialogRef<MembershipDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public _adminservice: AdminService) {}

    ngOnInit(): void {
      this._adminservice.GetMemberShipDetails(this.data['_id']).subscribe(result=>
        {
          this.membershipsdetils = result['memberships'];       
         })   
      }
  onNoClick(): void {
    this.dialogRef.close();
  }
}