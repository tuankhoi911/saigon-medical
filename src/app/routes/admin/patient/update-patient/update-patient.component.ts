import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private patientService: PatientService) {
    this.route.params.pipe(
      switchMap((res) => this.patientService.getById(res.id))
    ).subscribe((value: any) => {
      this.patient = value;
    })
  }

  ngOnInit() {  
  }

  public updatePatient() {
    this.patientService.update(this.patient).subscribe();
  }
}
