import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    this.invoiceService.show(id).subscribe((data: any) => {
      this.invoice = (data)
      console.log(this.invoice)
    });
  }

  formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

  handlePay(id) {
    this.invoiceService.pay(id).subscribe((data: any) => {
      console.log(data);
    })

}

}
