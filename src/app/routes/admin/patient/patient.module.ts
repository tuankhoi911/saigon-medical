import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRoutingModule } from './patient.routing';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ExaminationModule } from '../examination/examination.module';

@NgModule({
    declarations: [AddPatientComponent],
    imports: [
        CommonModule,
        PatientRoutingModule,
        ExaminationModule
    ]
})
export class PatientModule { }
