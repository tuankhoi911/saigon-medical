import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePatientComponent } from './update-patient.component';


@NgModule({
  declarations: [UpdatePatientComponent],
  imports: [
    CommonModule
  ],
  exports: [UpdatePatientComponent]
})
export class UpdatePatientModule { }
