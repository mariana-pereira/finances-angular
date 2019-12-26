import { Component, OnInit } from '@angular/core';
import { MovimentationService } from '../movimentation.service';
import { CompanyService } from 'src/app/company/company.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  selected: boolean = null;

  companies: any[];
  movimentations = [];

  month: string = (new Date().getMonth() + 1).toString();
  year: string = new Date().getFullYear().toString();

  bonus: number;
  cashback: number;
  extra: number;
  profit: number;
  salary: number;
  other: number;
  shopping: number;
  subscription: number;
  invoice: number;
  withdrawal: number;

  constructor(
    private movimentationService: MovimentationService,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    this.companyService.index().subscribe((data: any[]) => {
      this.companies = data;
      console.log(this.companies)
    })
  }

  setMovimentations(e) {
    this.selected = true;
    if (e.target.value === 'month') {
      this.movimentationService.categoryMonth(this.month, this.year).subscribe((data: any[]) => {
        this.bonus = (data as any).bonus;
        this.cashback = (data as any).cashback;
        this.extra = (data as any).extra;
        this.profit = (data as any).profit;
        this.salary = (data as any).salary;
        this.other = (data as any).other;
        this.shopping = (data as any).shopping;
        this.subscription = (data as any).subscription;
        this.invoice = (data as any).invoice;
        this.withdrawal = (data as any).withdrawal;
      })
    } else if (e.target.value === 'year') {
      this.movimentationService.categoryYear(this.year).subscribe((data: any[]) => {
        this.bonus = (data as any).bonus;
        this.cashback = (data as any).cashback;
        this.extra = (data as any).extra;
        this.profit = (data as any).profit;
        this.salary = (data as any).salary;
        this.other = (data as any).other;
        this.shopping = (data as any).shopping;
        this.subscription = (data as any).subscription;
        this.invoice = (data as any).invoice;
        this.withdrawal = (data as any).withdrawal;

      })
    } else if (e.target.value === 'origin') {
      this.selected = false;
      for (var i = 0; i < this.companies.length; i++) {
        this.movimentationService.company(this.companies[i].id.toString(), this.year).subscribe((data: any) => {
          this.movimentations.push(data)
        })

      }
      
    }
  }

  convertCurrency(amount) {
    return Number(amount).toLocaleString("pt", {style: "currency", currency: "BRL", minimumFractionDigits: 2})
  }

}
