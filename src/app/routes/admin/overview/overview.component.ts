import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {


  public rewards = [
    {
      doctorName: 'Han Sara',
      doctorDescription: 'The best doctor of the month',
      doctorUrl: 'assets/images/doc.jpg'
    },
    {
      doctorName: 'Han Sara',
      doctorDescription: 'The best doctor of the month',
      doctorUrl: 'assets/images/doc.jpg'
    },
    {
      doctorName: 'Han Sara',
      doctorDescription: 'The best doctor of the month',
      doctorUrl: 'assets/images/doc.jpg'
    },
    {
      doctorName: 'Han Sara',
      doctorDescription: 'The best doctor of the month',
      doctorUrl: 'assets/images/doc.jpg'
    },
  ]

  public techs = [
    {
      techName: 'CRISPR',
      techDescription: '...',
      techUrl: 'assets/images/tech.jpg'
    },
    {
      techName: 'CRISPR',
      techDescription: '...',
      techUrl: 'assets/images/tech.jpg'
    },
    {
      techName: 'CRISPR',
      techDescription: '...',
      techUrl: 'assets/images/tech.jpg'
    },
    {
      techName: 'CRISPR',
      techDescription: '...',
      techUrl: 'assets/images/tech.jpg'
    },
  ]

  public gallery = [
    {
      galleryUrl: 'assets/images/tech.jpg',
      galleryName: 'Test'
    },
    {
      galleryUrl: 'assets/images/tech.jpg',
      galleryName: 'Test'
    },
    {
      galleryUrl: 'assets/images/tech.jpg',
      galleryName: 'Test'
    },
    {
      galleryUrl: 'assets/images/tech.jpg',
      galleryName: 'Test'
    },
    {
      galleryUrl: 'assets/images/tech.jpg',
      galleryName: 'Test'
    },
    
  ]


  doanhThus = [
    {
      thang: 'Tháng một',
      soTien: '200,000,000vnd',
      ghiChu: 'Tăng 20%'
    },
    {
      thang: 'Tháng một',
      soTien: '200,000,000vnd',
      ghiChu: 'Tăng 20%'
    },
    {
      thang: 'Tháng một',
      soTien: '200,000,000vnd',
      ghiChu: 'Tăng 20%'
    },
    {
      thang: 'Tháng một',
      soTien: '200,000,000vnd',
      ghiChu: 'Tăng 20%'
    },
    {
      thang: 'Tháng một',
      soTien: '200,000,000vnd',
      ghiChu: 'Tăng 20%'
    },
    {
      thang: 'Tháng một',
      soTien: '200,000,000vnd',
      ghiChu: 'Tăng 20%'
    },
    {
      thang: 'Tháng một',
      soTien: '200,000,000vnd',
      ghiChu: 'Tăng 20%'
    },
    {
      thang: 'Tháng một',
      soTien: '200,000,000vnd',
      ghiChu: 'Tăng 20%'
    },
    {
      thang: 'Tháng một',
      soTien: '200,000,000vnd',
      ghiChu: 'Tăng 20%'
    },

  ]
  constructor() { }

  ngOnInit() {
  }



}
