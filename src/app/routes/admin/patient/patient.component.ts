import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { Subject } from 'rxjs';
import "rxjs/add/operator/takeUntil";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
  providers: [PatientService]
})
export class PatientComponent implements OnInit, OnDestroy {

  public isHidden = false;
  public isDelete = false;
  public logo = 'assets/images/pbLogo.png';
  public patients: any;
  public searchedUsers = this.patients;
  private onDestroy = new Subject<void>();

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

  ngOnDestroy() {
    this.onDestroy.next();
  }

  public getAllPatients() {
    this.patientService
      .getAll()
      .takeUntil(this.onDestroy)
      .subscribe(
        (patientData: any) => {
          patientData.forEach((patient) => patient.keys = JSON.stringify(patient));
          this.patients = patientData;
          this.searchedUsers = patientData;
          // console.log(this.patients)
        }
      )
  }

  public updatePatien(patient) {
    this.patientService
      .update(patient)
      .takeUntil(this.onDestroy)
      .subscribe(() => {
        this.getAllPatients();
      })
  }

  public deletePatient(patient) {
    this.patientService
      .delete(patient.maBenhNhan)
      .takeUntil(this.onDestroy)
      .subscribe(() => {
        this.getAllPatients();
        this.isDelete = false;
      })
  }

  public searchUpdate(term: string): void {
    term = term.trim().toLowerCase();
    const isMatch = (patient: any) => patient.keys.toLowerCase().includes(term);
    if (term == "") {
      this.searchedUsers = this.patients;
    }
    this.searchedUsers = this.patients.filter(isMatch);
  }

  public verifyAction() {
    this.isDelete = true;
  }

  public cancelAction() {
    this.isDelete = false;
  }
}
