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
  constructor(private route: ActivatedRoute, private medicineService: MedicineService, private router: Router) {
    this.route.params.pipe(
      switchMap((res) => this.medicineService.getById(res.id))
    ).subscribe((value: any) => {
      this.medicine = value;
    })
  }

  ngOnInit() {
  }

  public updateMedicine() {
    this.medicineService.update(this.medicine).subscribe();
    if (this.isSuccess) {
      this.router.navigate(['/admin/medicine']).then(() => {
        window.location.reload();
      })
    }
  }

}
