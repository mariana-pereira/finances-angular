import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expenses: any[];
  total: any = 0.00;

  month: string = (new Date().getMonth() + 1).toString();
  year: string = new Date().getFullYear().toString();

  constructor(
    private expenseService: ExpenseService,
    private router: Router
  ) { }

  ngOnInit() {

    
  }

  setExpenses(e) {
    if(e.target.value === 'month') {
      this.expenseService.month(this.month, this.year).subscribe((data: any[]) => {
        this.expenses = (data as any).expenses
        this.total = (data as any).total
      })
    } else if (e.target.value === 'year') {
      this.expenseService.year(this.year).subscribe((data: any[]) => {
        this.expenses = (data as any).expenses
        this.total = (data as any).total
      })
    }
  }

  navigate(route) {
    this.router.navigate([route]);
  }

  formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

  convertCurrency(amount) {
    return Number(amount).toLocaleString("pt", {style: "currency", currency: "BRL", minimumFractionDigits: 2})
  }
}
