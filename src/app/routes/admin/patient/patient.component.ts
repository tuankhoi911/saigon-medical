import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  isHidden = false;


  users = [
    {
      maBenhNhan: '1412152',
      maDinhDanh: '2221452',
      tenBenhNhan: 'Mai Văn Yên',
      gioiTinh: 'Nam',
      ngaySinh: '03/01/2000',
      diaChi: 'Osaka, Japna',
      ngheNghiep: 'Siêu nhân cào cào',
      soDienThoai: '023541245871',
      ngayThem: '20/11/2019'
    },
    {
      maBenhNhan: '1412152',
      maDinhDanh: '2221452',
      tenBenhNhan: 'Mai Văn Yên',
      gioiTinh: 'Nam',
      ngaySinh: '03/01/2000',
      diaChi: 'Osaka, Japna',
      ngheNghiep: 'Siêu nhân cào cào',
      soDienThoai: '023541245871',
      ngayThem: '20/11/2019'
    },
    {
      maBenhNhan: '1412152',
      maDinhDanh: '2221452',
      tenBenhNhan: 'Mai Văn Yên',
      gioiTinh: 'Nam',
      ngaySinh: '03/01/2000',
      diaChi: 'Osaka, Japna',
      ngheNghiep: 'Siêu nhân cào cào',
      soDienThoai: '023541245871',
      ngayThem: '20/11/2019'
    },
    {
      maBenhNhan: '1412152',
      maDinhDanh: '2221452',
      tenBenhNhan: 'Mai Văn Yên',
      gioiTinh: 'Nam',
      ngaySinh: '03/01/2000',
      diaChi: 'Osaka, Japna',
      ngheNghiep: 'Siêu nhân cào cào',
      soDienThoai: '023541245871',
      ngayThem: '20/11/2019'
    },
    {
      maBenhNhan: '1412152',
      maDinhDanh: '2221452',
      tenBenhNhan: 'Mai Văn Yên',
      gioiTinh: 'Nam',
      ngaySinh: '03/01/2000',
      diaChi: 'Osaka, Japna',
      ngheNghiep: 'Siêu nhân cào cào',
      soDienThoai: '023541245871',
      ngayThem: '20/11/2019'
    },
  ]

  // viewDetail() {
  //   this.isHidden = !this.isHidden;
  // }

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (router.url === '/admin/patient/add-patient') {
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
