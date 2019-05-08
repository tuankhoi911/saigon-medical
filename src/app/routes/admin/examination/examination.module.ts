import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationRoutingModule } from './examination.routing';
import { AddExaminationComponent } from './add-examination/add-examination.component';

@NgModule({
  declarations: [AddExaminationComponent],
  imports: [
    CommonModule,
    ExaminationRoutingModule
  ]
})
export class ExaminationModule { }
