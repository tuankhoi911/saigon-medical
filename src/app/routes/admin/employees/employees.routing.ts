import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { UpdateEmployeesComponent } from './update-employees/update-employees.component';



const routes: Routes = [
    {
        path: 'add-employees',
        component: AddEmployeesComponent
    },
    {
        path: 'update-employees/:id',
        component: UpdateEmployeesComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class EmployeesRoutingModule { }
