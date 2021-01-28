import { Component, OnInit } from '@angular/core';
import * as navmenu from '../../../../assets/navigation.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  itemchild: any = [];
  constructor() {
      this.itemchild = navmenu['default'];
   }

  ngOnInit(): void {
  }

}
