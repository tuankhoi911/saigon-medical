import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationRoutingModule } from './examination.routing';
import { AddExaminationComponent } from './add-examination/add-examination.component';
import { ListExaminationComponent } from './list-examination/list-examination.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddExaminationComponent, ListExaminationComponent],
  imports: [
    CommonModule,
    ExaminationRoutingModule,
    FormsModule
  ],
  exports: [AddExaminationComponent]
})
export class ExaminationModule { }
