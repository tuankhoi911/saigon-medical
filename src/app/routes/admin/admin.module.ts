import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';
import { PatientComponent } from './patient/patient.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ExaminationComponent } from './examination/examination.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { OverviewComponent } from './overview/overview.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [PatientComponent,
    MedicineComponent,
    ExaminationComponent,
    PrescriptionComponent,
    OverviewComponent,
    RegulationsComponent,
    ReportComponent,
    SettingComponent,
    EmployeesComponent,
    PrescriptionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
