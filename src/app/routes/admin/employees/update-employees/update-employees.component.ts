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

  public isSuccess = true;
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router) {
    this.route.params.pipe(
      switchMap((res) => this.employeeService.getById(res.id))
    ).subscribe((value: any) => {
      this.employee = value;
    })
  }

  ngOnInit() {
  }

  public updateEmployee() {
    this.employeeService.update(this.employee).subscribe();
    if (this.isSuccess) {
      this.router.navigate(['/admin/employees']).then(() => {
        window.location.reload();
      })
    }
  }

}
