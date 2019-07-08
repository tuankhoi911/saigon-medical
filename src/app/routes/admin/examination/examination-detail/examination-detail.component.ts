import { Component, OnInit } from '@angular/core';
import { PrescripService } from 'src/app/services/prescrip.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-examination-detail',
  templateUrl: './examination-detail.component.html',
  styleUrls: ['./examination-detail.component.scss']
})
export class ExaminationDetailComponent implements OnInit {

  logo = 'assets/images/pbLogo.png';
  public exam = {
    maPhieuKham: "",
    trieuChung: "",
    chuanDoan: "",
    diaChi: "",
    maBacSi: "",
  }

  public meds: any;

  constructor(private route: ActivatedRoute, private prescripService: PrescripService, private router: Router) {
    this.route.params.pipe(
      switchMap((res) => this.prescripService.getById(res.id))
    ).subscribe((value: any) => {
      this.exam = value;
      this.meds = value['chiTietDonThuocList']
      // console.log(this.meds);

    })
  }

  public close() {
    this.router.navigate(['/admin/examination'])
  }

  ngOnInit() {
  }

}
