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

  public isSuccess = true;

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit() {
  }

  public createPatient() {
    this.patientService.create(this.patient).subscribe();
    if (this.isSuccess) {
      this.router.navigate(['/admin/patient']).then(()=> {
        window.location.reload();
      })

    }
  }

}
