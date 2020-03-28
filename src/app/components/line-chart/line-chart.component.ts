import { Component, OnInit } from "@angular/core";
import { OverviewService } from "src/app/services/overview.service";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.scss"],
})
export class LineChartComponent implements OnInit {
  constructor(private overviewService: OverviewService) {}

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
      data: [1, 51, 3],
      label: "a",
    },
    {
      data: [12, 18, 29, 48],
      label: "b",
    },
  ];
  ngOnInit() {
    this.getAllIncome();
  }

  public getAllIncome() {
    this.overviewService.getAllIncome().subscribe(res => {
      this.incomes = res.map(item => item.giaTri / 1000);
      this.rate = res.map(item => item.tyLe);
      this.lineChartData = [
        { data: this.incomes, label: "Infected: (thousand)" },
        { data: this.rate, label: "Rate : (%)" },
      ];
      // this.lineChartLabels = res.map(item => item.thang);
    });
  }
}
