import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDrugComponent } from './add-drug.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AddDrugComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  entryComponents: [AddDrugComponent]
})
export class AddDrugModule { }
