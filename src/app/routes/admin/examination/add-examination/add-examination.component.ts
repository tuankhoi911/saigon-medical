import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AddDrugComponent } from 'src/app/modals/add-drug/add-drug.component';

@Component({
  selector: 'app-add-examination',
  templateUrl: './add-examination.component.html',
  styleUrls: ['./add-examination.component.scss'],
  providers: [NgbModal, NgbModalConfig]

})
export class AddExaminationComponent implements OnInit {

  isHidden = false;
  isPopup = false;
  isAlert = false;
  isSuccess = false;
  isFail = false;
  isAdd = false;
  logo = 'assets/images/pbLogo.png';
  amountMed: number;
  cachDung: any;

  medicines = [
    {
      name: 'Paracetamol 500mg',
      amount: 10
    },
    {
      name: 'Aspirin',
      amount: 10
    },
    {
      name: 'CLARIVIDE 500, 500mg (Clarithromycin)',
      amount: 10
    },
    {
      name: 'Tatanon, 500mg (Paracetamol (Acetaminophen))',
      amount: 10
    },
    {
      name: 'MELOCICAM, 10^9 CFU (Lactobacillus acidophilus)',
      amount: 10
    },
  ]


  delete(index) {
    return this.medicines.splice(index, 1);
  }

  add(index) {
    let usersTemp = [...this.searchedUsers];
    let preAmount = this.searchedUsers[index].amount;
    let a = { ...this.searchedUsers[index] };

    if (a.amount >= this.amountMed) {
      this.searchedUsers[index].amount = this.amountMed;
      a.amount = this.amountMed;
      this.medicines.push(a);
      let newAmount = preAmount - this.amountMed;
      usersTemp[index].amount = newAmount;
      this.searchedUsers = usersTemp;
      this.isSuccess = true
      this.isFail = false;
    }

    else {
      this.isFail = true;
      this.isSuccess = false;
    }

    this.isPopup = false;
    this.isAlert = true;

  }


  users = [
    {
      name: 'Paracetamol 500mg',
      amount: 200,
    },
    {
      name: 'Tatanol 500mg',
      amount: 200,
    },
    {
      name: 'Expoinetalin 500mg',
      amount: 200,
    },
    {
      name: 'Benzen 500mg',
      amount: 200,
    },
    {
      name: 'Alcohotamol 500mg',
      amount: 200
    },
    {
      name: 'Paracetamol 500mg',
      amount: 200,
    },
    {
      name: 'Paracetamol 500mg',
      amount: 200,
    },
  ]

  close() {
    this.isPopup = false;
    this.isAlert = false;
  }

  addMedicine() {
    this.isAdd = true;
  }

  searchedUsers = this.users;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  public searchUpdate(term: string): void {
    term = term.trim().toLowerCase();
    const isMatch = (user: any) => user.name.toLowerCase().includes(term);

    if (term == "") {
      this.searchedUsers = this.users;
    }
    this.searchedUsers = this.users.filter(isMatch);
    console.log(this.searchedUsers);

  };

  show() {
    this.modalService.open(AddDrugComponent, { centered: true, windowClass: 'send-message' });
  }


}
