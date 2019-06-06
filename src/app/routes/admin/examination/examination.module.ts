import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationRoutingModule } from './examination.routing';
import { AddExaminationComponent } from './add-examination/add-examination.component';
import { ListExaminationComponent } from './list-examination/list-examination.component';
import { FormsModule } from '@angular/forms';
import { AddDrugModule } from 'src/app/modals/add-drug/add-drug.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AddExaminationComponent, ListExaminationComponent],
  imports: [
    CommonModule,
    ExaminationRoutingModule,
    FormsModule,
    NgbModalModule,
    AddDrugModule
  ],
  exports: [AddExaminationComponent]
})
export class ExaminationModule { }
