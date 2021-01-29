import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/service';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {
  membershipsdetils: any;
  membershipslist: any;
  constructor(public _adminservice: AdminService, private router: Router) { 
  }

  ngOnInit(): void {

      this.GetMemberShipDetailsfun()
  }


  GetMemberShipDetailsfun(){
   var id= this._adminservice.detailsId;
    this._adminservice.GetMemberShipDetails(id).subscribe(result=>
      {
        this.membershipsdetils = result['memberships'];       
       }) 
  }
    membershiplist(){
    this.router.navigate(['/home'])
  }
}
