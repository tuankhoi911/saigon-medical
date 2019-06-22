import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from 'src/app/services/medicine.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.scss']
})
export class UpdateMedicineComponent implements OnInit {

  public medicine = {
    tenThuoc: "",
    donVi: "",
    soLuong: "",
    ngaySanXuat: "",
    hanSuDung: "",
    gia: ""
  }

  public isSuccess = true;
  isDateValid: boolean;
  constructor(private route: ActivatedRoute, private medicineService: MedicineService, private router: Router) {
    this.route.params.pipe(
      switchMap((res) => this.medicineService.getById(res.id))
    ).subscribe((value: any) => {
      this.medicine = value;
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
    let ngaySanXuat = this.parseDate(this.medicine.ngaySanXuat);
    let hanSuDung = this.parseDate(this.medicine.hanSuDung);
    if (ngaySanXuat > hanSuDung) {
      this.isDateValid = true;
      this.isSuccess = false;
    }
    if (ngaySanXuat < hanSuDung) {
      this.isDateValid = false;
      this.isSuccess = true;
    }
  }

  public updateMedicine() {
    this.compareDate();
    if (this.isSuccess === true) {
      this.medicineService.update(this.medicine).subscribe();
      if (this.isSuccess) {
        this.router.navigate(['/admin/medicine']).then(() => {
          window.location.reload();
        })
      }
    }
  }

}
