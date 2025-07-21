import { Routes } from '@angular/router';
import { Add } from './right/add/add';
import {NotMade} from './not-made/not-made'
import {Helper} from './right/helper/helper'
import {Right} from './right/right'
import { Edit } from './right/edit/edit';

export const routes: Routes = [
    {path : '' , redirectTo : 'helper', pathMatch : 'full'},
    {path : 'helper',component: Right,
        children:[
            {path : '',component: Helper},
            {path:'add',component:Add},
            {path:'edit',component:Edit},
        ]
    },
    // {path:'a',component:NotMade},
    // {path:'b',component:NotMade},
    {path:'**',component:NotMade},
];
