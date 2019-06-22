import { Component, OnInit } from '@angular/core';
import { OverviewService } from 'src/app/services/overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  providers: [OverviewService]
})
export class OverviewComponent implements OnInit {


  public rewards = [
    {
      doctorName: 'Nguyễn Thị Phi Yến',
      doctorDescription: 'Bác sĩ giỏi nhất tháng.',
      doctorUrl: 'assets/images/doc.jpg'
    }
  ]

  public techs = [
    {
      techName: 'CRISPR',
      techDescription: 'CRISPR là một họ các trình tự DNA ở trong vi khuẩn và vi khuẩn cổ...',
      techUrl: 'assets/images/tech.jpg'
    }
  ]

  public gallery = [
    {
      galleryUrl: 'assets/images/hoatri.jpg',
      galleryName: 'Bệnh nhân ung thư được hóa trị bằng Alkylating'
    }
  ]

  cardInfor: any;
  genderRate: any;
  departRate: any;
  totalRevenue: any;
  constructor(private overviewService: OverviewService) { }

  ngOnInit() {
    this.getAllCardInfor();
    this.getAllRevenue();
  }

  getAllCardInfor() {
    this.overviewService
      .getAllCard()
      .subscribe((data: any) => {
        this.cardInfor = data
        // console.log(data);
        
      })
  }

  getAllRevenue() {
    this.overviewService
      .getAllRevenue()
      .subscribe((data: any) => {
        this.totalRevenue = data
        // console.log(data);
      })
  }

}
