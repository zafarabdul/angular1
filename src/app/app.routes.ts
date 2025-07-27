import { Routes } from '@angular/router';
// import {NotMade} from './not-made/not-made'
import {Helper} from './right/helper/helper'
import {Right} from './right/right'
import {Add} from './right/add/add'
export const routes: Routes = [
    {path : '' , redirectTo : 'helper', pathMatch : 'full'},
    {path : 'helper',component: Right,
        children:[
            {path : '',component: Helper},
            {path:'add',loadComponent : ()=>{return import('./right/add/add').then(m => m.Add)}},
            {path:'edit',loadComponent: ()=>import('./right/edit/edit').then(m=>m.Edit)},
            // {path : 'add',component:Add}
        ]
    },
    // {path:'a',component:NotMade},
    // {path:'b',component:NotMade},
    {path:'**',loadComponent:()=> import('./not-made/not-made').then(m=>m.NotMade)},
];
