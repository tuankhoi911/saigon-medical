import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-verify-drug',
  templateUrl: './verify-drug.component.html',
  styleUrls: ['./verify-drug.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class VerifyDrugComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  public logo = 'assets/images/pbLogo.png'

  ngOnInit() {
  }

  public close() {
    this.activeModal.dismiss('forget');
  }
}
