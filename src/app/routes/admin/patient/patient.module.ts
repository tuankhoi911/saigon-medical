import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRoutingModule } from './patient.routing';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ExaminationModule } from '../examination/examination.module';
import { UpdatePatientModule } from './update-patient/update-patient.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [AddPatientComponent],
    imports: [
        CommonModule,
        PatientRoutingModule,
        ExaminationModule,
        UpdatePatientModule,
        FormsModule
    ]
})
export class PatientModule { }
