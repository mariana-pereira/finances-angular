import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-expenses',
  templateUrl: './invoice-expenses.component.html',
  styleUrls: ['./invoice-expenses.component.css']
})
export class InvoiceExpensesComponent implements OnInit {

  expenses: any[];
  total: any;
  id: any;

  constructor(
    private expenseService: ExpenseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    this.expenseService.invoice(this.id).subscribe((data: any[]) => {
      this.expenses = (data as any).expenses
      this.total = (data as any).total
    })

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
