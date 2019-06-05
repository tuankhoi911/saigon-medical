import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AddExaminationComponent } from '../examination/add-examination/add-examination.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';


const routes: Routes = [
    {
        path: 'add-patient',
        component: AddPatientComponent
    },
    {
        path: 'update-patient',
        component: UpdatePatientComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PatientRoutingModule { }
