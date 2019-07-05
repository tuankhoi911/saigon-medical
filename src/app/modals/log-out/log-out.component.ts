import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class LogOutComponent implements OnInit {

  logo = 'assets/images/pbLogo.png'
  constructor(public activeModal: NgbActiveModal, private router: Router) {
  }


  ngOnInit() {
  }

  close() {
    this.activeModal.dismiss('forget');
  }

  logout() {
    this.router.navigate(['/']);
    localStorage.clear();
    this.activeModal.dismiss('forget');
  }

}
