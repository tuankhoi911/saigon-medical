import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/services/medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.scss']
})
export class AddMedicineComponent implements OnInit {

  public medicine = {
    tenThuoc: "",
    donVi: "",
    soLuong: "",
    hanSuDung: "",
    ngaySanXuat: "",
    gia: ""
  }
  isSuccess = true;
  isDateValid: boolean;


  constructor(private medicineService: MedicineService, private router: Router) { }

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

  public createMedicine() {
    this.compareDate();
    if (this.isSuccess === true) {
      this.medicineService.create(this.medicine).subscribe();
      if (this.isSuccess) {
        this.router.navigate(['/admin/medicine']).then(() => {
          window.location.reload();
        })
      }
    }
  }
}
