import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {


  public isHidden = false;
  public isDelete = false;
  public employees: any;
  public searchedEmployees = this.employees;
  public logo = 'assets/images/pbLogo.png';
  public trash: any;


  constructor(private router: Router, protected employeeService: EmployeeService) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (router.url != '/admin/employees') {
          this.isHidden = false;
        } else {
          this.isHidden = true;
        }
      }
    })
  }

  ngOnInit() {
    this.getAllEmployees();
  }

  public getAllEmployees() {
    this.employeeService
      .getAll()
      .subscribe(
        (employeeData = []) => {
          employeeData.forEach((employee) => employee.keys = JSON.stringify(employee).toLowerCase());
          this.employees = employeeData;
          this.searchedEmployees = employeeData;
        }
      )
  }

  public deleteEmployee() {
    this.employeeService
      .delete(this.trash.maNhanVien)
      .subscribe(() => {
        this.getAllEmployees();
      })
    this.isDelete = false;
  }

  public searchUpdateForEmployees(term: string): void {
    term = term.trim().toLowerCase();
    const isMatch = (employee: any) => employee.keys.includes(term);
    if (term == "") {
      this.searchedEmployees = this.employees;
    }
    this.searchedEmployees = this.employees.filter(isMatch);
  }

  public verifyAction(employee) {
    this.trash = employee;
    this.isDelete = true; 
  }

  public cancelAction() {
    this.isDelete = false;
  }
}
