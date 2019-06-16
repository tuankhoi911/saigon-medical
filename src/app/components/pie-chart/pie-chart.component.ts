import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor(private translate: TranslateService) { }
  public pieChartLabels = [
    this.translate.instant('overview.tumor'),
    this.translate.instant('overview.dentist'),
    this.translate.instant('overview.blood'),
    this.translate.instant('overview.nerve'),
    this.translate.instant('overview.digest')
  ];
  public pieChartData = [120, 150, 180, 45, 45];
  public pieChartType = 'pie';

  ngOnInit() {
  }

}
