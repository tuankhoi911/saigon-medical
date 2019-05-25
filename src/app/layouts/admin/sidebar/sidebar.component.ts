import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public isPopup = false;

  public manages = [
    { title: 'Quản lí bệnh nhân', link: '/admin/patient' },
    { title: 'Quản lí khám bệnh', link: '/admin/examination' },
    { title: 'Quản lí thuốc', link: '/admin/medicine' },
    { title: 'Quản lí đơn thuốc', link: '/admin/prescription' }
  ]

  logout() {
      this.router.navigate(['/']);
  }

  show() {
    this.isPopup = true;
  }

  close() {
    this.isPopup = false;
  }


  constructor(private router: Router) { }

  ngOnInit() {
  }

}
