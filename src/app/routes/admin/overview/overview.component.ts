import { Component, OnInit } from '@angular/core';
import { OverviewService } from 'src/app/services/overview.service';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

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
    },
    {
      techName: 'Vaccine CC',
      techDescription: '"Vắcxin" loại bỏ khối u ở chuột.',
      techUrl: 'assets/images/1.jpg'
    },
    {
      techName: 'Vascepa ',
      techDescription: 'Thuốc kê đơn Vascepa được phát hiện có công dụng giảm nguy cơ tim mạch lên đến 25%.',
      techUrl: 'assets/images/2.jpg'
    },
    {
      techName: 'Ketamine',
      techDescription: 'Loại ma túy được ưa chuộng của thập niên 60, có thể giúp điều trị trầm cảm.',
      techUrl: 'assets/images/3.jpg'
    },
  ]

  public gallery = [
    {
      galleryUrl: 'assets/images/hoatri.jpg',
      galleryName: 'Bệnh nhân ung thư được hóa trị bằng Alkylating'
    },
    {
      galleryUrl: 'assets/images/4.jpg',
      galleryName: 'Brazil công bố một bé gái khỏe mạnh đã được sinh ra bằng tử cung của một người đã chết ghép vào cơ thể mẹ.'
    },
    {
      galleryUrl: 'assets/images/5.jpg',
      galleryName: 'Kính áp tròng thông minh có thể theo dõi đường huyết ở những người bệnh tiểu đường'
    },
    {
      galleryUrl: 'assets/images/6.jpg',
      galleryName: 'Các nghiên cứu mới về kiểm soát khả năng sinh sản.'
    },
  ]

  cardInfor: any;
  genderRate: any;
  departRate: any;
  totalRevenue: any;
  newPat: any;
  newEmp: any;
  isLoading = false;
  constructor(private overviewService: OverviewService,
    private router: Router) {
    router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }

      if (event instanceof NavigationEnd) {
        this.isLoading = false;
      }
    });
  }

  ngOnInit() {
    this.getAllCardInfor();
    this.getAllRevenue();
    this.getAllNewPat();
    this.getAllEmp();
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

  getAllNewPat() {
    this.overviewService
    .getPatient()
    .subscribe((res: any) => {
      this.newPat = res;
      console.log(res);     
    })
  }

  getAllEmp() {
    this.overviewService.getEmployee()
    .subscribe((res: any) => {
      this.newEmp = res;
      console.log(res);
      
    })
  }
}
