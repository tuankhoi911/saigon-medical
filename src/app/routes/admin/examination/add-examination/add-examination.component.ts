import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-examination',
  templateUrl: './add-examination.component.html',
  styleUrls: ['./add-examination.component.scss']
})
export class AddExaminationComponent implements OnInit {

  isHidden = false;
  isPopup = false;
  isAdd = false;

  medicines = [
    {
      name: 'Paracetamol 500mg',
      amount: '20'
    },
    {
      name: 'Aspirin',
      amount: '20'
    },
    {
      name: 'CLARIVIDE 500, 500mg (Clarithromycin)',
      amount: '20'
    },
    {
      name: 'Tatanon, 500mg (Paracetamol (Acetaminophen))',
      amount: '20'
    },
    {
      name: 'MELOCICAM, 10^9 CFU (Lactobacillus acidophilus)',
      amount: '20'
    },
  ]

  users = [
    {
      name: 'Paracetamol 500mg',
      amount: '500 ',
      unit: 'Viên'
    },
    {
      name: 'Paracetamol 500mg',
      amount: '500 ',
      unit: 'Viên'
    },
    {
      name: 'Paracetamol 500mg',
      amount: '500 ',
      unit: 'Viên'
    },
    {
      name: 'Paracetamol 500mg',
      amount: '500 ',
      unit: 'Viên'
    },
    {
      name: 'Paracetamol 500mg',
      amount: '500 ',
      unit: 'Viên'
    },
    {
      name: 'Paracetamol 500mg',
      amount: '500 ',
      unit: 'Viên'
    },
    {
      name: 'Paracetamol 500mg',
      amount: '500 ',
      unit: 'Viên'
    },
  ]

  show() {
    this.isPopup = true;
  }

  close() {
    this.isPopup = false;
  }

  addMedicine() {
    this.isAdd = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
