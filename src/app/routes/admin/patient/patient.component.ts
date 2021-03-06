import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, Event, NavigationEnd, NavigationStart } from "@angular/router";
import { PatientService } from "src/app/services/patient.service";
import { Subject } from "rxjs";
import "rxjs/add/operator/takeUntil";
import { RegisterService } from "src/app/services/register.service";
import { SuccessComponent } from "src/app/modals/success/success.component";
import {
  NgbModal,
  NgbModalConfig,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-patient",
  templateUrl: "./patient.component.html",
  styleUrls: ["./patient.component.scss"],
  providers: [
    PatientService,
    RegisterService,
    NgbModal,
    NgbModalConfig,
    NgbActiveModal,
  ],
})
export class PatientComponent implements OnInit, OnDestroy {
  public config: any;
  public isHidden = false;
  public isDelete = false;
  public isSuccess = true;
  public logo = "assets/images/pbLogo.png";
  public patients: any;
  public trash: any;
  public searchedUsers = this.patients;
  private onDestroy = new Subject<void>();
  public headerJsonWebToken = `Bearer ${localStorage.getItem(
    environment.accessToken
  )}`;

  title = {
    title: 'patient.title',
    description: 'patient.description'
  }

  constructor(
    private router: Router,
    protected patientService: PatientService,
    protected registerService: RegisterService,
    private modalService: NgbModal
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
        this.getAllPatients();

        if (router.url != "/admin/patient") {
          this.isHidden = false;
        } else {
          this.isHidden = true;
        }
      }
    });

    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.searchedUsers ? this.searchedUsers : 0,
    };
  }

  ngOnInit() {
    this.getAllPatients();
    // console.log(this.headerJsonWebToken);
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
          patientData.forEach(
            patient => (patient.keys = JSON.stringify(patient))
          );
          this.patients = patientData;
          this.searchedUsers = patientData;
          console.log(this.patients);
        },
        error => {
          this.router.navigate([""]);
        }
      );
  }

  public updatePatien(patient) {
    this.patientService
      .update(patient)
      .takeUntil(this.onDestroy)
      .subscribe(() => {
        this.getAllPatients();
      });
  }

  public deletePatient() {
    this.patientService
      .delete(this.trash.maBenhNhan)
      .takeUntil(this.onDestroy)
      .subscribe(() => {
        this.getAllPatients();
        this.isDelete = false;
      });
  }

  public searchUpdate(term: string): void {
    term = term.trim().toLowerCase();
    const isMatch = (patient: any) => patient.keys.toLowerCase().includes(term);
    if (term == "") {
      this.searchedUsers = this.patients;
    }
    this.searchedUsers = this.patients.filter(isMatch);
    this.config.currentPage = 1;
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  public registerExams(benhNhan) {
    this.registerService.create(benhNhan).subscribe();
    if (this.isSuccess) {
      this.modalService.open(SuccessComponent, { centered: true });
      this.getAllPatients();
    }
  }

  public verifyAction(patient) {
    this.trash = patient;
    this.isDelete = true;
  }

  public cancelAction() {
    this.isDelete = false;
  }
}
