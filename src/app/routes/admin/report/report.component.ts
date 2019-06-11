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

  public months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  public years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

  constructor() { }

  ngOnInit() {
  }

}
