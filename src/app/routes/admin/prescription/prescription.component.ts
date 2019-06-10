import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss'],
  providers: [InvoiceService]
})
export class PrescriptionComponent implements OnInit {

  public isHidden = false;
  public invoices: any;
  public searchedInvoices = this.invoices;

  constructor(private router: Router, private invoiceService: InvoiceService) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (router.url != '/admin/prescription') {
          this.isHidden = false;
        } else {
          this.isHidden = true;
        }
      }
    })
  }

  ngOnInit() {
    this.getAllInvoices();
  }

  public getAllInvoices() {
    this.invoiceService
      .getAll()
      .subscribe(
        (invoiceData: any) => {
          invoiceData.forEach((invoice) => invoice.keys = JSON.stringify(invoice));
          this.invoices = invoiceData;
          this.searchedInvoices = invoiceData;
          // console.log(this.invoices)
        }
      )
  }

  public searchUpdateForInvoice(term: string): void {
    term = term.trim().toLowerCase();
    const isMatch = (invoice: any) => invoice.keys.toLowerCase().includes(term);
    if (term == "") {
      this.searchedInvoices = this.invoices;
    }
    // console.log(this.registers);
    this.searchedInvoices = this.invoices.filter(isMatch);
  }


}
