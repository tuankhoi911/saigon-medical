import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

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


  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  public createPatient() {
    this.patientService.create(this.patient).subscribe();
  }

}
