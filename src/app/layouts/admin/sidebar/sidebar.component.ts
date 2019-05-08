import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  manages = [
    { title: 'Quản lí bệnh nhân', link: '/admin/patient' },
    { title: 'Quản lí khám bệnh', link: '/admin/examination' },
    { title: 'Quản lí thuốc', link: '/admin/medicine' },
    { title: 'Quản lí đơn thuốc', link: '/admin/prescription' }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
