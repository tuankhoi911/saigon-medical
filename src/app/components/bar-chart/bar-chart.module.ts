import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [BarChartComponent],
  imports: [
    CommonModule,
    ChartsModule,
    TranslateModule
  ],
  exports: [BarChartComponent]
})
export class BarChartModule { }
