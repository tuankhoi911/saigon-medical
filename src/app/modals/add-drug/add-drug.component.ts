import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class AddDrugComponent implements OnInit {

  public medAdded = {
    verify: false,
    amount: null,
    instruc: null
  }
  public logo = 'assets/images/pbLogo.png'

  constructor(public activeModal: NgbActiveModal, private router: Router) {
  }


  ngOnInit() {
  }

  public close() {
    this.activeModal.dismiss('forget');
  }

  public verifyAdded(value) {
    this.medAdded = value;
    this.medAdded.verify = true;
    this.activeModal.close(this.medAdded);
  }

}
