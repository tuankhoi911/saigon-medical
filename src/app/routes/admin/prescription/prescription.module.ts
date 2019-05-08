import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionRoutingModule } from './prescription.routing';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { PrescriptionDetailComponent } from './prescription-detail/prescription-detail.component';

@NgModule({
  declarations: [AddPrescriptionComponent, PrescriptionDetailComponent],
  imports: [
    CommonModule,
    PrescriptionRoutingModule
  ]
})
export class PrescriptionModule { }
