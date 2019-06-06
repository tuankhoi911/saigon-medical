import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LogOutComponent } from 'src/app/modals/log-out/log-out.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [NgbModalConfig, NgbModal, NgbActiveModal]
})
export class SidebarComponent implements OnInit {

  logo = 'assets/images/pbLogo.png'

  public manages = [
    { title: 'Quản lí bệnh nhân', link: '/admin/patient' },
    { title: 'Quản lí khám bệnh', link: '/admin/examination' },
    { title: 'Quản lí thuốc', link: '/admin/medicine' },
    { title: 'Quản lí đơn thuốc', link: '/admin/prescription' }
  ]

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  show() {
    this.modalService.open(LogOutComponent, { centered: true, windowClass: 'send-message' });
  }


  ngOnInit() {
  }

}
