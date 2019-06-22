import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})
export class AddEmployeesComponent implements OnInit {

  public employee = {
    tenNhanVien: null,
    gioiTinh: null,
    ngaySinh: null,
    diaChi: null,
    ngayVao: null,
    chucVu: null
  }

  public isSuccess: any;
  public isDateValid = false;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {


  }

  public parseDate(date) {
    let temp = date.split("-");
    let stringDate = `${temp[2]}-${temp[1]}-${temp[0]}`
    let mydate = new Date(stringDate);
    return mydate;
  }

  public compareDate() {
    let ngaySinh = this.parseDate(this.employee.ngaySinh);
    let ngayVao = this.parseDate(this.employee.ngayVao);
    if (ngaySinh > ngayVao) {
      this.isDateValid = true;
      this.isSuccess = false;
    }
    if (ngaySinh < ngayVao) {
      this.isDateValid = false;
      this.isSuccess = true;
    }
  }

  public getDateddmmyyyy() {
    // let today = new Date();
    // let dd = String(today.getDate()).padStart(2, '0');
    // let mm = String(today.getMonth() + 1).padStart(2, '0');
    // let yyyy = today.getFullYear();
    // console.log(dd + '/' + mm + '/' + yyyy);
    // console.log(this.employee.ngaySinh);
    // let mydate = new Date('21-12-2012');
  }

  public createEmployee() {
    this.compareDate();
    if (this.isSuccess === true) {
      this.employeeService.create(this.employee).subscribe();
      this.router.navigate(['/admin/employees']).then(() => {
        window.location.reload();
      })
    }
  }
}
