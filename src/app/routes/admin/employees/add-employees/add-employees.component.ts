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
    tenNhanVien: "",
    gioiTinh: "",
    ngaySinh: "",
    diaChi: "",
    ngayVao: "",
    chucVu: ""
  }

  public isSuccess = true;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  public createEmployee() {
    this.employeeService.create(this.employee).subscribe();
    if (this.isSuccess) {
      this.router.navigate(['/admin/employees']).then(() => {
        window.location.reload();
      })

    }
  }
}
