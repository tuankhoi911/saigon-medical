import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { MedicineService } from 'src/app/services/medicine.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss'],
  providers: [MedicineService]
})
export class MedicineComponent implements OnInit {


  isHidden = false;
  isPopup = false;
  logo = 'assets/images/pbLogo.png'
  public medicines: any;
  public searchedMed = this.medicines;
  public patients: any;


  constructor(private router: Router, protected medicineService: MedicineService, protected patientService: PatientService) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (router.url === '/admin/medicine/add-medicine') {
          this.isHidden = false;
        } else {
          this.isHidden = true;
        }
      }
    })
  }

  show() {
    this.isPopup = true;
  }

  close() {
    this.isPopup = false;
  }

  ngOnInit() {
    this.getAllMedicine();
  }

  public searchUpdateMed(term: string): void {
    term = term.trim().toLowerCase();
    const isMatch = (medicine: any) => medicine.keys.toLowerCase().includes(term);
    if (term == "") {
      this.searchedMed = this.medicines;
    }
    // console.log(this.patients);
    this.searchedMed = this.medicines.filter(isMatch);
  }

  public getAllMedicine() {
    this.medicineService
      .getAll()
      .subscribe(
        (medicineData: any) => {
          medicineData.forEach((medicine) => medicine.keys = JSON.stringify(medicine));
          this.medicines = medicineData;
          this.searchedMed = medicineData;
          console.log(this.medicines)
        }
      )
  }

  public deleteMedicine(medicine) {
    this.medicineService
      .delete(medicine.maThuoc)
      .subscribe(() => {
        this.getAllMedicine();
      })
  }
}
