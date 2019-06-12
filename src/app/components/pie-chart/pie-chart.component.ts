import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  public pieChartLabels = ['Ung bướu', 'Nha khoa', 'Huyết học', 'Thần kinh', 'Tiêu hóa'];
  public pieChartData = [120, 150, 180, 45, 45];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}
