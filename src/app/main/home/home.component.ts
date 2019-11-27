import { Component, OnInit } from '@angular/core';
import { MovimentationService } from 'src/app/movimentation/movimentation.service';
import { ExpenseService } from 'src/app/expense/expense.service';
import { AccountService } from 'src/app/account/account.service';
import { InvestmentService } from 'src/app/investment/investment.service';
import { InvoiceService } from 'src/app/invoice/invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  monthIndex = (new Date().getMonth() + 1).toString();
  year = (new Date().getFullYear()).toString();
  month = this.formatMonth(new Date());

  incomes: any[];
  outcomes: any[];
  expenses: any[];

  account: number;
  investment: number;
  invoice: number;

  isLoading: boolean = false;

  constructor(
    private movimentationService: MovimentationService,
    private expenseService: ExpenseService,
    private accountService: AccountService,
    private investmentService: InvestmentService,
    private invoiceService: InvoiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoading = true;

    this.accountService.index().subscribe((data: any[])=>{
      this.account = (data as any).total;
    }) 

    this.investmentService.index().subscribe((data: any[])=>{
      this.investment = (data as any).total;
    }) 

    this.invoiceService.month(this.month, this.year).subscribe((data: any[])=>{
      this.invoice = (data as any).total;
    })

    this.movimentationService.monthIncome(this.monthIndex, this.year).subscribe((data: any[])=>{
      this.incomes = (data as any).movimentations;
      console.log(this.incomes)
    })

    this.movimentationService.monthOutcome(this.monthIndex, this.year).subscribe((data: any[])=>{
      this.outcomes = (data as any).movimentations;
      console.log(this.outcomes)
    })

    this.expenseService.month(this.monthIndex, this.year).subscribe((data: any[])=>{
      this.expenses = (data as any).expenses;
      console.log(this.expenses)
    })

    this.isLoading = false;
  }

  navigate(route) {
    this.router.navigate([route]);
  }

  formatMonth(date) {
    var monthNames = [
      "Janeiro", "Fevereiro", "Março",
      "Abril", "Maio", "Junho", "Julho",
      "Agosto", "Setembro", "Outubro",
      "Novembro", "Dezembro"
    ];
    var monthIndex = date.getMonth();

    return monthNames[monthIndex];
  }

  formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

}
