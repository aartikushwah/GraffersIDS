import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

import { DrawerService } from '../shared/matdrawer.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild(MatDrawer, { static: false }) drawer: MatDrawer;

  constructor(private _drawerService: DrawerService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this._drawerService.setDrawer(this.drawer);
  }
}
