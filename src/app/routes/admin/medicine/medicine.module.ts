import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { MedicineRoutingModule } from './medicine.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddMedicineComponent],
  imports: [
    CommonModule,
    MedicineRoutingModule,
    FormsModule
  ]
})
export class MedicineModule { }
