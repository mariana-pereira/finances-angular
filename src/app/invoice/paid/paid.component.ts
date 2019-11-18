import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paid',
  templateUrl: './paid.component.html',
  styleUrls: ['./paid.component.css']
})
export class PaidComponent implements OnInit {

  invoices: any[];

  constructor(
    private invoiceService: InvoiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    const paid = this.route.snapshot.paramMap.get("paid");

    this.invoiceService.paid(id, paid).subscribe((data: any[]) => {
      this.invoices = (data as any).invoices;
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
