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
  public patients: any;

  users = [
    {
      name: 'Paracetamol 500mg',
      img: 'assets/images/para.jpg',
      amount: '500 ',
      price: '200,000',
      nsx: '20/10/2017',
      hsd: '20/10/2022',
      unit: 'Viên'
    },
    {
      name: 'Paracetamol 500mg',
      img: 'assets/images/para.jpg',
      amount: '500 ',
      price: '200,000',
      nsx: '20/10/2017',
      hsd: '20/10/2022',
      unit: 'Viên'
    },
    {
      name: 'Paracetamol 500mg',
      img: 'assets/images/para.jpg',
      amount: '500 ',
      price: '200,000',
      nsx: '20/10/2017',
      hsd: '20/10/2022',
      unit: 'Viên'
    },
    {
      name: 'Paracetamol 500mg',
      img: 'assets/images/para.jpg',
      amount: '500 ',
      price: '200,000',
      nsx: '20/10/2017',
      hsd: '20/10/2022',
      unit: 'Viên'
    },
    {
      name: 'Tatanol 500mg',
      img: 'assets/images/para.jpg',
      amount: '500 ',
      price: '200,000',
      nsx: '20/10/2017',
      hsd: '20/10/2022',
      unit: 'Viên'
    },
    {
      name: 'Paracetamol 500mg',
      img: 'assets/images/para.jpg',
      amount: '500 ',
      price: '200,000',
      nsx: '20/10/2017',
      hsd: '20/10/2022',
      unit: 'Viên'
    },
    {
      name: 'Aspirin 500mg',
      img: 'assets/images/para.jpg',
      amount: '500 ',
      price: '200,000',
      nsx: '20/10/2017',
      hsd: '20/10/2022',
      unit: 'Viên'
    },
  ]

  searchedUsers = this.users;

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

  public searchUpdate(term: string): void {
    term = term.trim().toLowerCase();
    const isMatch = (user: any) => user.name.toLowerCase().includes(term);

    if (term == "") {
      this.searchedUsers = this.users;
    }
    this.searchedUsers = this.users.filter(isMatch);
  }

  public getAllMedicine() {
    this.medicineService
      .getAll()
      .subscribe(
        (medicineData: any) => {
          this.medicines = medicineData;
          console.log(this.medicines);
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
