import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prescription-detail',
  templateUrl: './prescription-detail.component.html',
  styleUrls: ['./prescription-detail.component.scss']
})
export class PrescriptionDetailComponent implements OnInit {
  logo = 'assets/images/pbLogo.png'
  constructor(private router: Router) { }

  close() {
    this.router.navigate(['/admin/prescription']);
  }

  ngOnInit() {
  }

}
