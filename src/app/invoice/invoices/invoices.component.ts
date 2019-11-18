import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  invoices: any[];

  constructor(
    private invoiceService: InvoiceService,
    private router: Router
  ) { }

  ngOnInit() {

    this.invoiceService.index().subscribe((data: any[]) => {
      this.invoices = data;
    })
  }

  navigate(route) {
    this.router.navigate([route]);
  }

  formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

}
