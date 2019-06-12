import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class SuccessComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  public logo = 'assets/images/pbLogo.png'

  ngOnInit() {
  }

  public close() {
    this.activeModal.dismiss('forget');
  }

}
