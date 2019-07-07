import { map } from "rxjs/operators";
import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { OverviewService } from "src/app/services/overview.service";
@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"],
})
export class BarChartComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private overviewService: OverviewService
  ) {}
  public barChartOptions = {
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
  public barChartLabels = [
    // this.translate.instant("overview.precious") + " 1",
    // this.translate.instant("overview.precious") + " 2",
    // this.translate.instant("overview.precious") + " 3",
    // this.translate.instant("overview.precious") + " 4",
  ];

  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [
    {
      data: [65, 59, 80],
      label: this.translate.instant("overview.male"),
    },
    {
      data: [28, 48, 40, 19],
      label: this.translate.instant("overview.female"),
    },
  ];
  ngOnInit() {
    this.getData();
  }

  public getData() {
    this.overviewService.getAllGenderRate().subscribe((data: any) => {
      let maleArr = data
        .filter(item => item.gioiTinh === "Nam")
        .map(item => item.giaTri);
      let femaleArr = data
        .filter(item => item.gioiTinh === "Nữ")
        .map(item => item.giaTri);

      data.forEach(item => {
        if (
          !this.barChartLabels.includes(
            this.translate.instant("overview.precious") + " " + item.quy
          )
        ) {
          this.barChartLabels.push(
            this.translate.instant("overview.precious") + " " + item.quy
          );
        }
      });
      this.barChartData = [
        { data: maleArr, label: this.translate.instant("overview.male") },
        { data: femaleArr, label: this.translate.instant("overview.female") },
      ];
    });
  }
}
