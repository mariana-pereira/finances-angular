import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  invoice: any = null;

  constructor(
    private invoiceService: InvoiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    this.invoiceService.show(id).subscribe((data: any) => {
      this.invoice = (data)
    });
  }

  formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

  handlePay(id, card) {
    this.invoiceService.pay(id, card.toString()).subscribe((data: any) => {
      console.log(data);
    })
    this.navigate('/invoice/invoices');
  }

  navigate(route) {
    this.router.navigate([route]);
  }

  deleteItem(id) {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      this.invoiceService.delete(id).subscribe(
          (data) => {
            console.log(data);
          },
          (err) => {
            console.log(err);
          }

        );
  
      this.navigate('/invoice/invoices');
    }
    
  }

}
