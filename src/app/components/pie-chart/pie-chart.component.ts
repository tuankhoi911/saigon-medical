import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { map } from "rxjs/operators";
import { OverviewService } from "src/app/services/overview.service";

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.scss"],
})
export class PieChartComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private overviewService: OverviewService
  ) {}
  public pieChartLabels = [
    this.translate.instant("overview.tumor"),
    this.translate.instant("overview.dentist"),
    this.translate.instant("overview.blood"),
    this.translate.instant("overview.nerve"),
    this.translate.instant("overview.digest"),
  ];
  public pieChartData = [120, 150, 180, 45, 45];
  public pieChartType = "doughnut";

  ngOnInit() {
    this.getData();
  }

  public getData() {
    this.overviewService.getAllDptRate().subscribe((data: any) => {
      this.pieChartData = data.map(item => item.value);
      this.pieChartLabels = data.map(item => item.name);
    });
  }
}
