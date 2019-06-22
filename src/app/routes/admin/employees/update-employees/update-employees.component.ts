import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrls: ['./update-employees.component.scss']
})
export class UpdateEmployeesComponent implements OnInit {
  public employee = {
    tenNhanVien: "",
    gioiTinh: "",
    ngaySinh: "",
    diaChi: "",
    ngayVao: "",
    chucVu: ""
  }

  public isSuccess: any;
  public isDateValid = false;
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router) {
    this.route.params.pipe(
      switchMap((res) => this.employeeService.getById(res.id))
    ).subscribe((value: any) => {
      this.employee = value;
    })
  }

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

  public updateEmployee() {
    this.compareDate();
    if (this.isSuccess === true) {
      this.employeeService.update(this.employee).subscribe();
      if (this.isSuccess) {
        this.router.navigate(['/admin/employees']).then(() => {
          window.location.reload();
        })
      }
    }
  }
}
