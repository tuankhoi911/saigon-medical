import { Component, OnInit } from "@angular/core";
import { Router, Event, NavigationEnd } from "@angular/router";
import { RegisterService } from "src/app/services/register.service";

@Component({
  selector: "app-examination",
  templateUrl: "./examination.component.html",
  styleUrls: ["./examination.component.scss"],
  providers: [RegisterService],
})
export class ExaminationComponent implements OnInit {
  public config: any;
  isHidden = false;
  public registers: any;
  public searchedRegis = this.registers;
  isDelete: boolean;
  public logo = "assets/images/pbLogo.png";

  constructor(
    private router: Router,
    protected registerService: RegisterService
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (router.url != "/admin/examination") {
          this.isHidden = false;
        } else {
          this.isHidden = true;
        }
      }
    });

    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.searchedRegis ? this.searchedRegis : 0,
    };
  }

  ngOnInit() {
    this.getAllRegisters();
  }

  public getAllRegisters() {
    this.registerService.getAll().subscribe((registerData: any) => {
      registerData.forEach(
        register => (register.keys = JSON.stringify(register))
      );
      this.registers = registerData;
      this.searchedRegis = registerData;
      // console.log(this.registers);
    });
  }

  public updateRegister(register) {
    this.registerService.update(register).subscribe(() => {
      this.getAllRegisters();
    });
  }

  public deleteRegister(register) {
    this.registerService.delete(register.maDangKi).subscribe(() => {
      this.getAllRegisters();
    });
    this.isDelete = false;
  }

  public verifyAction() {
    this.isDelete = true;
  }

  public cancelAction() {
    this.isDelete = false;
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  public searchUpdateForRegister(term: string): void {
    term = term.trim().toLowerCase();
    const isMatch = (register: any) =>
      register.keys.toLowerCase().includes(term);
    if (term == "") {
      this.searchedRegis = this.registers;
    }
    // console.log(this.registers);
    this.searchedRegis = this.registers.filter(isMatch);

    this.config.currentPage = 1;
  }
}
