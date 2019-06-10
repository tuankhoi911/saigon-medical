import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EmployeesRoutingModule } from './employees.routing';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeesComponent } from './update-employees/update-employees.component';

@NgModule({
  declarations: [AddEmployeesComponent, UpdateEmployeesComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule
  ]
})
export class EmployeesModule { }
