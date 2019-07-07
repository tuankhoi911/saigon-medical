import { Component, OnInit } from '@angular/core';
import { OverviewService } from 'src/app/services/overview.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor(
    private overviewService: OverviewService
  ) { }

  public incomes: any;
  public rate: any;
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  public lineChartLabels = [
    // this.translate.instant("overview.precious") + " 1",
    // this.translate.instant("overview.precious") + " 2",
    // this.translate.instant("overview.precious") + " 3",
    // this.translate.instant("overview.precious") + " 4",
  ];

  public lineChartType = "line";
  public lineChartLegend = true;
  public lineChartData = [
    {
      data: [65, 59, 80],
      label: 'a',
    },
    {
      data: [28, 48, 40, 19],
      label: 'b',
    },
  ];
  ngOnInit() {
    this.getAllIncome();
  }

  public getAllIncome() {
    this.overviewService
    .getAllIncome()
    .subscribe((res) => {
      this.incomes = res.map(item => item.giaTri/1000);
      this.rate = res.map(item => item.tyLe);
      this.lineChartData = [{data: this.incomes, label: "Doanh thu: (nghìn đồng)"}, 
        {data: this.rate, label: "Tỷ lệ tăng trưởng : (%)"}];
      this.lineChartLabels = res.map(item => item.thang)
    });
  }
}
