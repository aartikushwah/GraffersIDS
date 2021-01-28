import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
    sidenav:any;
    public setDrawer(matsidenav: MatDrawer) {
        this.sidenav = matsidenav;
    }
    public toggle() {
        return this.sidenav.toggle();
    }
}