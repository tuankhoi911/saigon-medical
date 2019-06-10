import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AddDrugComponent } from 'src/app/modals/add-drug/add-drug.component';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-add-examination',
  templateUrl: './add-examination.component.html',
  styleUrls: ['./add-examination.component.scss'],
  providers: [NgbModal, NgbModalConfig, MedicineService]

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

  medicinesAdded = [];


  delete(index) {
    return this.medicinesAdded.splice(index, 1);
  }

  add(index) {
    let usersTemp = [...this.searchedMed];
    let preAmount = this.searchedMed[index].amount;
    let a = { ...this.searchedMed[index] };

    if (a.amount >= this.amountMed) {
      this.searchedMed[index].amount = this.amountMed;
      a.amount = this.amountMed;
      this.medicinesAdded.push(a);
      let newAmount = preAmount - this.amountMed;
      usersTemp[index].amount = newAmount;
      this.searchedMed = usersTemp;
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


  public users: any;
  public searchedMed = this.users;

  addMedicine() {
    this.isAdd = true;
  }


  constructor(private modalService: NgbModal, protected medicineService: MedicineService) { }

  ngOnInit() {
    this.getAllMedicine();

  }

  public searchUpdateMed(term: string): void {
    term = term.trim().toLowerCase();
    const isMatch = (medicine: any) => medicine.keys.toLowerCase().includes(term);
    if (term == "") {
      this.searchedMed = this.users;
    }
    // console.log(this.patients);
    this.searchedMed = this.users.filter(isMatch);
  }

  show() {
    this.modalService.open(AddDrugComponent, { centered: true, windowClass: 'send-message' });
  }

  public getAllMedicine() {
    this.medicineService
      .getAll()
      .subscribe(
        (medicineData: any) => {
          medicineData.forEach((medicine) => medicine.keys = JSON.stringify(medicine));
          this.users = medicineData;
          this.searchedMed = medicineData;
          // console.log(this.users)
        }
      )
  }

}
