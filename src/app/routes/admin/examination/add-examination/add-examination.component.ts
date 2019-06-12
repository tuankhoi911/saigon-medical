import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AddDrugComponent } from 'src/app/modals/add-drug/add-drug.component';
import { ActivatedRoute } from '@angular/router';
import { MedicineService } from 'src/app/services/medicine.service';
import { PrescripService } from 'src/app/services/prescrip.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { mergeMap } from 'rxjs/operators';
import { DetailmedsService } from 'src/app/services/detailmeds.service';
import { SuccessComponent } from 'src/app/modals/success/success.component';

interface drugAdded {
  name: string,
  amount: number,
  cachDung: string
}

@Component({
  selector: 'app-add-examination',
  templateUrl: './add-examination.component.html',
  styleUrls: ['./add-examination.component.scss'],
  providers: [NgbModal, NgbModalConfig, MedicineService, PrescripService, EmployeeService]

})
export class AddExaminationComponent implements OnInit {


  logo = 'assets/images/pbLogo.png';
  id = null;
  public phieuKhamBenh = {
    trieuChung: null,
    chuanDoan: null,
    maDangKi: null,
    maBacSi: null
  }


  public isAdd = false;
  public users: any;
  public searchedMed = this.users;
  public doctorList = [];
  public medicinesAdded: drugAdded[] = [];




  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    protected prescripService: PrescripService,
    protected medicineService: MedicineService,
    protected employeeService: EmployeeService,
    protected detailPress: DetailmedsService

  ) { }

  ngOnInit() {
    this.getAllMedicine();
    this.getAllDoctor();
    this.route.params.subscribe(params => { this.phieuKhamBenh.maDangKi = params['id'] })
  }

  public searchUpdateMed(term: string): void {
    term = term.trim().toLowerCase();
    const isMatch = (medicine: any) => medicine.keys.toLowerCase().includes(term);
    if (term == "") {
      this.searchedMed = this.users;
    }
    this.searchedMed = this.users.filter(isMatch);
  }

  public addMedicine() {
    this.isAdd = true;
  }

  delete(index) {
    return this.medicinesAdded.splice(index, 1);
  }

  show(index) {
    let addDrug = this.modalService.open(AddDrugComponent, { centered: true });
    addDrug.result.then(
      (result) => {
        // console.log(result);
        if (result) {
          let add: drugAdded = { ...this.searchedMed[index] };
          add.amount = result.amount;
          add.cachDung = result.instruc
          this.medicinesAdded.push(add);
          // console.log(this.medicinesAdded);

        }
      }
    )

  }

  public onCreate(value) {
    const addInfo = (info) => (drug) => {
      drug.maHoaDon = info.maHoaDon;
      drug.maPhieuKham = info.maPhieuKham;
      drug.soLuong = drug.amount;
      console.log(drug);
      return drug;
    }
    this.prescripService.create(this.phieuKhamBenh).pipe(
      mergeMap((res) => {
        let addInfoToDrug = addInfo(res);
        let drugs = this.medicinesAdded.map(addInfoToDrug);
        console.log(drugs);

        return this.detailPress.create(drugs);
      })
    )
      .subscribe(
        (res => {
          console.log(res);
        })
      )
    this.modalService.open(SuccessComponent, { centered: true });
    // if (this.isSuccess) {
    //   this.router.navigate(['/admin/examination']).then(() => {
    //     window.location.reload();
    //   })
    // }
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

  public getAllDoctor() {
    const isDoctor = (employee => employee.chucVu == 'Bác sĩ')
    this.employeeService
      .getAll()
      .subscribe(
        (mainData: any) => {
          mainData = mainData.filter(isDoctor);
          this.doctorList = mainData
        }
      )
  }
}
