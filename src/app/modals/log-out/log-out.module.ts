import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogOutComponent } from './log-out.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LogOutComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  entryComponents: [LogOutComponent]
})
export class LogOutModule { }
