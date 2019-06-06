import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
  providers: [PatientService]
})
export class PatientComponent implements OnInit {

  isHidden = false;
  patients: any;

  constructor(private router: Router, protected patientService: PatientService) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if ((router.url != '/admin/patient')) {
          this.isHidden = false;
        } else {
          this.isHidden = true;
        }
      }
    })
  }

  ngOnInit() {
    this.getAllPatients();
  }

  public getAllPatients() {
    this.patientService
      .getAll()
      .subscribe(
        (patientData: any) => {
          this.patients = patientData;
          console.log(this.patients);
          
        }
      )
  }

  public updatePatien(patient) {
    this.patientService
    .update(patient)
    .subscribe(() => {
      this.getAllPatients();
    })
  }

  public deletePatient(patient) {
    this.patientService
    .delete(patient.maBenhNhan)
    .subscribe(() => {
      this.getAllPatients();
      
    }
    )
  }


}
