import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Quý 1', 'Quý 2', 'Quý 3', 'Quý 4'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Bệnh nhân Nam'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Bệnh nhân Nữ'}
  ];
  ngOnInit() {
  }

}
