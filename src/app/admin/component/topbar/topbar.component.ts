import { Component, OnInit } from '@angular/core';
import { DrawerService } from 'src/app/shared/matdrawer.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private _drawerService:DrawerService) { }
  logo = './assets/image/logo.png';
  shirtref = './assets/image/shirt.png';

  ngOnInit(): void {
  }
  public toggleRightSidenav() {
    this._drawerService
    .toggle()
    .then(() => { });
 
   }
}
