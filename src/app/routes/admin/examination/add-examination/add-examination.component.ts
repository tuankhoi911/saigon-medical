import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { AddDrugComponent } from "src/app/modals/add-drug/add-drug.component";
import { ActivatedRoute } from "@angular/router";
import { MedicineService } from "src/app/services/medicine.service";
import { PrescripService } from "src/app/services/prescrip.service";
import { EmployeeService } from "src/app/services/employee.service";
import { mergeMap } from "rxjs/operators";
import { DetailmedsService } from "src/app/services/detailmeds.service";
import { SuccessComponent } from "src/app/modals/success/success.component";
import { TranslateService } from "@ngx-translate/core";
import { VerifyDrugComponent } from "src/app/modals/verify-drug/verify-drug.component";
import { Router } from "@angular/router";

interface drugAdded {
  name: string;
  amount: number;
  cachDung: string;
  id: string;
}

@Component({
  selector: "app-add-examination",
  templateUrl: "./add-examination.component.html",
  styleUrls: ["./add-examination.component.scss"],
  providers: [
    NgbModal,
    NgbModalConfig,
    MedicineService,
    PrescripService,
    EmployeeService,
  ],
})
export class AddExaminationComponent implements OnInit {
  logo = "assets/images/pbLogo.png";
  public phieuKhamBenh = {
    trieuChung: null,
    chuanDoan: null,
    maDangKi: null,
    maBacSi: null,
  };

  public isAdd = false;
  public users: any;
  public searchedMed = this.users;
  public doctorList = [];
  public medicinesAdded: drugAdded[] = [];
  isLoadingResults = false;
  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    protected prescripService: PrescripService,
    protected medicineService: MedicineService,
    protected employeeService: EmployeeService,
    protected detailPress: DetailmedsService,
    private translate: TranslateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllMedicine();
    this.getAllDoctor();
    this.route.params.subscribe(params => {
      this.phieuKhamBenh.maDangKi = params["id"];
    });
  }

  public searchUpdateMed(term: string): void {
    term = term.trim().toLowerCase();
    const isMatch = (medicine: any) =>
      medicine.keys.toLowerCase().includes(term);
    if (term == "") {
      this.searchedMed = this.users;
    }
    this.searchedMed = this.users.filter(isMatch);
  }

  public addMedicine() {
    this.isAdd = true;
  }

  delete(index) {
    let id = this.medicinesAdded[index].id;
    this.users.find(user => user.maThuoc === id).clicked = false;
    return this.medicinesAdded.splice(index, 1);
  }

  show(index, user) {
    let addDrug = this.modalService.open(AddDrugComponent, { centered: true });
    addDrug.result.then(result => {
      if (result) {
        let add: drugAdded = { ...this.searchedMed[index] };
        add.amount = result.amount;
        add.cachDung = result.instruc;
        add.id = user.maThuoc;
        if (add.amount <= user.soLuong) {
          this.medicinesAdded.push(add);
          user.clicked = true;
        } else {
          this.alertAmount();
        }
      }
    });
  }

  public onCreate(value) {
    this.isLoadingResults = true;
    const addInfo = info => drug => {
      drug.maHoaDon = info.maHoaDon;
      drug.maPhieuKham = info.maPhieuKham;
      drug.soLuong = drug.amount;
      return drug;
    };
    this.prescripService
      .create(this.phieuKhamBenh)
      .pipe(
        mergeMap(res => {
          let addInfoToDrug = addInfo(res);
          let drugs = this.medicinesAdded.map(addInfoToDrug);
          return this.detailPress.create(drugs);
        })
      )
      .subscribe(res => {});
    //this.modalService.open(SuccessComponent, { centered: true });
    this.router.navigate([`/admin/examination/`]);
  }

  public getAllMedicine() {
    this.medicineService.getAll().subscribe((medicineData: any) => {
      medicineData.forEach(medicine => {
        medicine.clicked = false;
        return (medicine.keys = JSON.stringify(medicine));
      });
      this.users = medicineData;
      this.searchedMed = medicineData;
    });
  }

  public getAllDoctor() {
    const isDoctor = employee => employee.chucVu == "Doctor";
    this.employeeService.getAll().subscribe((mainData: any) => {
      mainData = mainData.filter(isDoctor);
      this.doctorList = mainData;
    });
  }

  public alertAmount() {
    this.modalService.open(VerifyDrugComponent, { centered: true });
  }
}
