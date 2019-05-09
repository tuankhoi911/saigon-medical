import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ExaminationComponent } from './examination/examination.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { OverviewComponent } from './overview/overview.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';
import { EmployeesComponent } from './employees/employees.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/admin/overview',
        pathMatch: 'full'
    },
    {
        path: 'patient',
        component: PatientComponent,
        children: [
            {
                path: '',
                loadChildren: './../../routes/admin/patient/patient.module#PatientModule'
            },
            {
                path: '/examination',
                loadChildren: './../../routes/admin/examination/examination.module#ExaminationModule'
            }
        ]
    },
    {
        path: 'medicine',
        component: MedicineComponent,
        children: [
            {
                path: '',
                loadChildren: './../../routes/admin/medicine/medicine.module#MedicineModule'
            }

        ]
    },
    {
        path: 'examination',
        component: ExaminationComponent,
        children: [
            {
                path: '',
                loadChildren: './../../routes/admin/examination/examination.module#ExaminationModule'
            }
        ]
    },
    {
        path: 'employees',
        component: EmployeesComponent,
        children: [
            {
                path: '',
                loadChildren: './../../routes/admin/employees/employees.module#EmployeesModule'
            }
        ]

    },
    {
        path: 'prescription',
        component: PrescriptionComponent,
        children: [
            {
                path: '',
                loadChildren: './../../routes/admin/prescription/prescription.module#PrescriptionModule'
            }
        ]
    },
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: 'regulations',
        component: RegulationsComponent
    },
    {
        path: 'report',
        component: ReportComponent
    },
    {
        path: 'setting',
        component: SettingComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
