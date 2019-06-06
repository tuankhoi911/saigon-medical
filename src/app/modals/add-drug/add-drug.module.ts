import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDrugComponent } from './add-drug.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddDrugComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  entryComponents: [AddDrugComponent]
})
export class AddDrugModule { }
