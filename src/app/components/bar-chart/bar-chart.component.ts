import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor(private translate: TranslateService) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [
    this.translate.instant('overview.precious') + ' 1',
    this.translate.instant('overview.precious') + ' 2',
    this.translate.instant('overview.precious') + ' 3',
    this.translate.instant('overview.precious') + ' 4'
  ];

  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: this.translate.instant('overview.male') },
    { data: [28, 48, 40, 19, 86, 27, 90], label: this.translate.instant('overview.female') }
  ];
  ngOnInit() {
  }

}
