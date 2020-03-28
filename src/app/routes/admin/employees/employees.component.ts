import { Component, OnInit } from "@angular/core";
import { Router, Event, NavigationEnd, NavigationStart, ActivatedRoute } from "@angular/router";
import { EmployeeService } from "src/app/services/employee.service";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.scss"],
  providers: [EmployeeService],
})
export class EmployeesComponent implements OnInit {
  public config: any;
  public isHidden = false;
  public isDelete = false;
  public employees: any;
  public searchedEmployees = this.employees;
  public logo = "assets/images/pbLogo.png";
  public trash: any;
  title = {
    title: 'employee.title',
    description: 'employee.description'
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    protected employeeService: EmployeeService
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (router.url != "/admin/employees") {
          this.getAllEmployees();
          this.isHidden = false;
        } else {
          this.isHidden = true;
        }
      }
    });

    route.params.subscribe((params)=>console.log());


    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.searchedEmployees ? this.searchedEmployees : 0,
    };
  }

  ngOnInit() {
    this.getAllEmployees();
  }

  public getAllEmployees() {
    this.employeeService.getAll().subscribe((employeeData = []) => {
      employeeData.forEach(
        employee => (employee.keys = JSON.stringify(employee).toLowerCase())
      );
      this.employees = employeeData;
      this.searchedEmployees = employeeData;
    });
  }

  public deleteEmployee() {
    this.employeeService.delete(this.trash.maNhanVien).subscribe(() => {
      this.getAllEmployees();
    });
    this.isDelete = false;
  }

  public searchUpdateForEmployees(term: string): void {
    term = term.trim().toLowerCase();
    const isMatch = (employee: any) => employee.keys.includes(term);
    if (term == "") {
      this.searchedEmployees = this.employees;
    }
    this.searchedEmployees = this.employees.filter(isMatch);

    this.config.currentPage = 1;
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  public verifyAction(employee) {
    this.trash = employee;
    this.isDelete = true;
  }

  public cancelAction() {
    this.isDelete = false;
  }
}
