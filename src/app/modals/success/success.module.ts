import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './success.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SuccessComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  entryComponents: [SuccessComponent]
})
export class SuccessModule { }
 