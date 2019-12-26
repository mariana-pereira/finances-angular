import { Component, OnInit } from '@angular/core';
import { InvestmentService } from '../investment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  investments: any[];

  constructor(
    private investmentService: InvestmentService,
    private router: Router
    ) { }

  ngOnInit() {

    this.investmentService.index().subscribe((data: any[])=>{
      this.investments = (data as any).investments;
    })  
  }

  navigate(route) {
    this.router.navigate([route]);
  }

  convertCurrency(amount) {
    return Number(amount).toLocaleString("pt", {style: "currency", currency: "BRL", minimumFractionDigits: 2})
  }

}
