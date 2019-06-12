import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
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


  doanhThus = [
    {
      thang: 'Tháng 04 / 2019',
      soTien: '250,000,000 vnd',
      ghiChu: 'Tăng 20%'
    },
    {
      thang: 'Tháng 05 / 2019',
      soTien: '100,000,000 vnd',
      ghiChu: 'Giảm gần 50%'
    }

  ]
  constructor() { }

  ngOnInit() {
  }



}
