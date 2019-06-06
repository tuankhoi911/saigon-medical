import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class AddDrugComponent implements OnInit {

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
    this.activeModal.dismiss('forget');
  }

}
