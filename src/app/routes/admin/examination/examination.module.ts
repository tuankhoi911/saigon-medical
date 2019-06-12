import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationRoutingModule } from './examination.routing';
import { AddExaminationComponent } from './add-examination/add-examination.component';
import { FormsModule } from '@angular/forms';
import { AddDrugModule } from 'src/app/modals/add-drug/add-drug.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ExaminationDetailComponent } from './examination-detail/examination-detail.component';

@NgModule({
  declarations: [AddExaminationComponent, ExaminationDetailComponent],
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
