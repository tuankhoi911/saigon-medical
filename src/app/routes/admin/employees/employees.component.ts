import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {


  isHidden = false;


  users = [
    {
      maBenhNhan: '1412152',
      maDinhDanh: '2221452',
      tenBenhNhan: 'Mai Văn Yên',
      gioiTinh: 'Nam',
      ngaySinh: '03/01/2000',
      diaChi: 'Osaka, Japna',
      ngheNghiep: 'Bác sĩ',
      ngayVao:'20/11/2010',
      ngayThem: '20/11/2019'
    },
    {
      maBenhNhan: '1412152',
      maDinhDanh: '2221452',
      tenBenhNhan: 'Mai Văn Yên',
      gioiTinh: 'Nam',
      ngaySinh: '03/01/2000',
      diaChi: 'Osaka, Japna',
      ngheNghiep: 'Bác sĩ',
      ngayVao:'20/11/2010',
      ngayThem: '20/11/2019'
    },
    {
      maBenhNhan: '1412152',
      maDinhDanh: '2221452',
      tenBenhNhan: 'Mai Văn Yên',
      gioiTinh: 'Nam',
      ngaySinh: '03/01/2000',
      diaChi: 'Osaka, Japna',
      ngheNghiep: 'Bác sĩ',
      ngayVao:'20/11/2010',
      ngayThem: '20/11/2019'
    },
    {
      maBenhNhan: '1412152',
      maDinhDanh: '2221452',
      tenBenhNhan: 'Mai Văn Yên',
      gioiTinh: 'Nam',
      ngaySinh: '03/01/2000',
      diaChi: 'Osaka, Japna',
      ngheNghiep: 'Bác sĩ',
      ngayVao:'20/11/2010',
      ngayThem: '20/11/2019'
    },
    {
      maBenhNhan: '1412152',
      maDinhDanh: '2221452',
      tenBenhNhan: 'Mai Văn Yên',
      gioiTinh: 'Nam',
      ngaySinh: '03/01/2000',
      diaChi: 'Osaka, Japna',
      ngheNghiep: 'Bác sĩ',
      ngayVao:'20/11/2010',
      ngayThem: '20/11/2019'
    },
  ]

  // viewDetail() {
  //   this.isHidden = !this.isHidden;
  // }

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (router.url === '/admin/employees/add-employees') {
          this.isHidden = false;
        } else {
          this.isHidden = true;
        }
      }
    })
  }

  ngOnInit() {
  }

}
