import { Component, OnInit } from "@angular/core";
import { Router, Event, NavigationEnd } from "@angular/router";
import { MedicineService } from "src/app/services/medicine.service";
import { PatientService } from "src/app/services/patient.service";

@Component({
  selector: "app-medicine",
  templateUrl: "./medicine.component.html",
  styleUrls: ["./medicine.component.scss"],
  providers: [MedicineService],
})
export class MedicineComponent implements OnInit {
  public config: any;
  isHidden = false;
  isPopup = false;
  logo = "assets/images/pbLogo.png";
  public medicines: any;
  public searchedMed = this.medicines;
  public patients: any;
  isDelete: boolean;
  title = {
    title: 'medicine.title',
    description: 'medicine.description'
  }


  constructor(
    private router: Router,
    protected medicineService: MedicineService,
    protected patientService: PatientService
  ) {
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.getAllMedicine();
        if (router.url != "/admin/medicine") {
          this.isHidden = false;
        } else {
          this.isHidden = true;
        }
      }
    });

    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.searchedMed ? this.searchedMed : 0,
    };

   
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
    const isMatch = (medicine: any) =>
      medicine.keys.toLowerCase().includes(term);
    if (term == "") {
      this.searchedMed = this.medicines;
    }
    // console.log(this.patients);
    this.searchedMed = this.medicines.filter(isMatch);
    this.config.currentPage = 1;
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  public getAllMedicine() {
    this.medicineService.getAll().subscribe((medicineData: any) => {
      medicineData.forEach(
        medicine => (medicine.keys = JSON.stringify(medicine))
      );
      this.medicines = medicineData;
      this.searchedMed = medicineData;
      // console.log(this.medicines)
    });
  }

  public deleteMedicine(medicine) {
    this.medicineService.delete(medicine.maThuoc).subscribe(() => {
      this.getAllMedicine();
    });
    this.isDelete = false;
  }

  public verifyAction() {
    this.isDelete = true;
  }

  public cancelAction() {
    this.isDelete = false;
  }
}
