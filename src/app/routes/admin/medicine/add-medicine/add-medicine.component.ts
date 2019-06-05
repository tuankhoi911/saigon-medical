import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/services/medicine.service';

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


  constructor(private medicineService: MedicineService) { }

  ngOnInit() {
  }

  public createMedicine() {
    this.medicineService.create(this.medicine).subscribe();
  }

}
