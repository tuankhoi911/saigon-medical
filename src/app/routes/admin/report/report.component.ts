import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  public reportPatient = {
    month: '',
    years: ''
  }

  public reportMedicine = {
    month: '',
    years: ''
  }

  public now = new Date();
  public currentYeary = this.now.getFullYear();

  public months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  public years = [this.currentYeary - 5, this.currentYeary - 4, this.currentYeary - 3, this.currentYeary - 2, this.currentYeary - 1, this.currentYeary, this.currentYeary + 1, this.currentYeary + 2, this.currentYeary + 3, this.currentYeary + 4, this.currentYeary + 5];

  constructor() { }

  ngOnInit() {
  }

}
