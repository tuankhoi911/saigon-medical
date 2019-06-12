import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { MedicineRoutingModule } from './medicine.routing';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';

@NgModule({
  declarations: [AddMedicineComponent, UpdateMedicineComponent],
  imports: [
    CommonModule,
    MedicineRoutingModule,
    FormsModule,
    NgbDatepickerModule
  ]
})
export class MedicineModule { }