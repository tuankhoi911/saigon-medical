import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-prescription-detail',
  templateUrl: './prescription-detail.component.html',
  styleUrls: ['./prescription-detail.component.scss']
})
export class PrescriptionDetailComponent implements OnInit {
  logo = 'assets/images/pbLogo.png'
  public invoice = {
    maBenhNhan: "",
    maHoaDon: "",
    ngayThem: "",
    tienKham: 0,
    tienThuoc: 0,
    thanhTien: 0,
  }

  public presDetail: any;
  public isSuccess = true;

  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService, private router: Router) {
    this.route.params.pipe(
      switchMap((res) => this.invoiceService.getById(res.id))
    ).subscribe((value: any) => {
      this.invoice = value;
      this.presDetail = value['chiTietDonThuocs'];
      this.invoice.tienThuoc = this.invoice.thanhTien - 300000;
      this.invoice.tienKham = 300000;
      // console.log(this.invoice.tienThuoc);
    })
  }

  close() {
    this.router.navigate(['/admin/prescription']);
  }

  public updateStatusAndPrintBill() {
    this.invoiceService
      .update(this.invoice).subscribe();
    if (this.isSuccess) {
      // window.open("'http://localhost:8080/baocao/hoadon/' + invoice?.maHoaDon ", '_blank')
      this.router.navigate(['/admin/prescription']).then(() => {
        window.location.reload();
      })
    }
  }


  ngOnInit() {
  }

}
