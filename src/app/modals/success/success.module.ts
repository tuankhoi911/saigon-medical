import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './success.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SuccessComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  entryComponents: [SuccessComponent]
})
export class SuccessModule { }
