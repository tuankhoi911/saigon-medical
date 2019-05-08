import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './layouts/client/client.module#ClientModule'
    },
    {
        path: 'admin',
        loadChildren: './layouts/admin/admin.module#AdminModule'
    },
    {
        path: 'login',
        loadChildren: './routes/login/login.module#LoginModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule { }
