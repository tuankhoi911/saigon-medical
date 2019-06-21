import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pbLogo = 'assets/images/pbLogo.png';
  constructor() { }

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

  ngOnInit() {
    this.roleAuth();
  }

}
