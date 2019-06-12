import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRoutingModule } from './patient.routing';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [AddPatientComponent, UpdatePatientComponent],
    imports: [
        CommonModule,
        PatientRoutingModule,
        FormsModule,
        NgbDatepickerModule,
    ]
})
export class PatientModule { }
