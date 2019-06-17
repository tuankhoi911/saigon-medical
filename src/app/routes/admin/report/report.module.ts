import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportComponent } from './report.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  exports: [ReportComponent]
})
export class ReportModule { }
