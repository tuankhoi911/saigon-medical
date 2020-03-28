import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LogOutComponent } from 'src/app/modals/log-out/log-out.component';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [NgbModalConfig, NgbModal, NgbActiveModal]
})
export class SidebarComponent implements OnInit {
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  logo = 'assets/images/logo-2.png'

  isPharmacist = false;
  isAdmin = false;
  isDoctor = false;
  isEmployee = false;
  role = localStorage.getItem(environment.role);

  roleAuth() {
    if (this.role == 'ROLE_ADMIN') {
      this.isAdmin = true;
    }
    if (this.role == 'ROLE_EMPLOYEE') {
      this.isEmployee = true;
    }
    if (this.role == 'ROLE_DOCTOR') {
      this.isDoctor = true;
    }
    if (this.role == 'ROLE_PHARMACIST') {
      this.isPharmacist = true;
    }
  }



  show() {
    this.modalService.open(LogOutComponent, { centered: true, windowClass: 'send-message' });
  }


  ngOnInit() {
    this.roleAuth();
  }

}
