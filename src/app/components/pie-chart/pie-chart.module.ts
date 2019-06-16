import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PieChartComponent],
  imports: [
    CommonModule,
    ChartsModule,
    TranslateModule
  ],
  exports: [
    PieChartComponent
  ]
})
export class PieChartModule { }
