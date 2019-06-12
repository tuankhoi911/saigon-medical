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


  constructor(private medicineService: MedicineService, private router: Router) { }

  ngOnInit() {
  }

  public createMedicine() {
    this.medicineService.create(this.medicine).subscribe();
    if (this.isSuccess) {
      this.router.navigate(['/admin/medicine']).then(() => {
        window.location.reload();
      })
    }
  }

}
