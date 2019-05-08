import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeesComponent } from './add-employees/add-employees.component';



const routes: Routes = [
    {
        path: 'add-employees',
        component: AddEmployeesComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class EmployeesRoutingModule { }
