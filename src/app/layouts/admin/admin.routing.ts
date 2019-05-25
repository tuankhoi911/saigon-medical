import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from 'src/app/routes/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                loadChildren: './../../routes/admin/admin.module#AdminModule'
            }
        ]
    },
    // {
    //     path: '/home',
    //     component: HomeComponent,
    //     children: [
    //         {
    //             path: '',
    //             loadChildren: './../../routes/home/home.module#HomeModule'
    //         }
    //     ]
    // }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})

export class AdminRoutingModule { }
