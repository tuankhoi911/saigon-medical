import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyDrugComponent } from './verify-drug.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VerifyDrugComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  entryComponents: [VerifyDrugComponent]
})
export class VerifyDrugModule { }
