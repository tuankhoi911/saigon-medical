import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.scss']
})
export class UpdatePatientComponent implements OnInit {

  public patient = {
    tenBenhNhan: "",
    gioiTinh: "",
    ngaySinh: "",
    diaChi: "",
    ngheNghiep: "",
    soDienThoai: ""
  }

  public isSuccess = true;
  isDateValid: boolean;

  constructor(private route: ActivatedRoute, private patientService: PatientService, private router: Router) {
    this.route.params.pipe(
      switchMap((res) => this.patientService.getById(res.id))
    ).subscribe((value: any) => {
      this.patient = value;
    })
  }

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

  public updatePatient() {
    this.compareDate();
    if (this.isSuccess === true) {
      this.patientService.update(this.patient).subscribe();
      if (this.isSuccess) {
        this.router.navigate(['/admin/patient']).then(() => {
          // window.location.reload();
        })
      }
    }
  }
}
