import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';
import { PatientComponent } from './patient/patient.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ExaminationComponent } from './examination/examination.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { OverviewComponent } from './overview/overview.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { SettingComponent } from './setting/setting.component';
import { EmployeesComponent } from './employees/employees.component';
import { BarChartModule } from 'src/app/components/bar-chart/bar-chart.module';
import { PieChartModule } from 'src/app/components/pie-chart/pie-chart.module';
import { ReportModule } from './report/report.module';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SuccessModule } from 'src/app/modals/success/success.module';

@NgModule({
  declarations: [PatientComponent,
    MedicineComponent,
    ExaminationComponent,
    PrescriptionComponent,
    OverviewComponent,
    RegulationsComponent,
    SettingComponent,
    EmployeesComponent,
    PrescriptionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BarChartModule,
    PieChartModule,
    FormsModule,
    ReportModule,
    NgbDatepickerModule,
    NgbModalModule,
    SuccessModule
  ]
})
export class AdminModule { }
