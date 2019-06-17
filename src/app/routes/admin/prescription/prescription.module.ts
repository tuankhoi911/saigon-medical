import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionRoutingModule } from './prescription.routing';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { PrescriptionDetailComponent } from './prescription-detail/prescription-detail.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AddPrescriptionComponent, PrescriptionDetailComponent],
  imports: [
    CommonModule,
    PrescriptionRoutingModule,
    TranslateModule
  ],
  exports: [AddPrescriptionComponent]
})
export class PrescriptionModule { }
