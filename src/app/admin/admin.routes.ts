import {Route} from '@angular/router';
import { AdminComponent } from './admin.component';

export const AdminRoutes : Route[] = [
    {
        path: '',
        component: AdminComponent,  
           children: [
            {
                path: '',
                loadChildren: () => import('../admin/pages/home/home.module').then(m => m.HomeModule)
            }, 
            {
                path: 'home',
                loadChildren: () => import('../admin/pages/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'showdetails',
                loadChildren: () => import('../admin/pages/showdetails/showdetails.moduls').then(m => m.ShowDetailsModule)
            } 

            
            ]
        }

]
