import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EmployeesRoutingModule } from './employees.routing';

@NgModule({
  declarations: [AddEmployeesComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
