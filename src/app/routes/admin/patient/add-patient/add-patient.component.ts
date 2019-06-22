import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  public patient = {
    tenBenhNhan: "",
    gioiTinh: "",
    ngaySinh: "",
    diaChi: "",
    ngheNghiep: "",
    soDienThoai: ""
  }

  public isSuccess: boolean;
  public isDateValid: boolean;

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit() {
  }

  public parseDate(date) {
    let temp = date.split("-");
    let stringDate = `${temp[2]}-${temp[1]}-${temp[0]}`
    let mydate = new Date(stringDate);
    return mydate;
  }

  public compareDate() {
    let ngaySinh = this.parseDate(this.patient.ngaySinh);
    let hientai = new Date();
    if (ngaySinh > hientai) {
      this.isDateValid = true;
      this.isSuccess = false;
    }
    if (ngaySinh < hientai) {
      this.isDateValid = false;
      this.isSuccess = true;
    }
  }

  public createPatient() {
    this.compareDate();
    if (this.isSuccess === true) {
      this.patientService.create(this.patient).subscribe();
      if (this.isSuccess) {
        this.router.navigate(['/admin/patient']).then(() => {
          window.location.reload();
        })

      }
    }
  }
}
