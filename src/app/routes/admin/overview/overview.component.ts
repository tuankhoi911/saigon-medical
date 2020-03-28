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

  public title = {
    title: 'overview.title',
    description: 'overview.description'
  }

  public techs = [
    {
      techName: 'COVID-19',
      techDescription: 'Coronavirus disease (COVID-19) is an infectious disease caused by a new virus....',
      techUrl: 'assets/images/teah.jpg'
    },
    {
      techName: 'Vaccine nCoV-TTX7455',
      techDescription: 'The USA is developing new COVID-19 treatment vaccin',
      techUrl: 'assets/images/1.jpg'
    },
    {
      techName: 'COVID-19 Treatment ',
      techDescription: 'Many COVID-19 patients have tested negative for coronavirus ...',
      techUrl: 'assets/images/2.jpg'
    },
    {
      techName: 'Ketamine',
      techDescription: 'The favored drug of the 1960s, can help treat depression.',
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
      // console.log(res);     
    })
  }

  getAllEmp() {
    this.overviewService.getEmployee()
    .subscribe((res: any) => {
      this.newEmp = res;
      // console.log(res);
      
    })
  }
}
