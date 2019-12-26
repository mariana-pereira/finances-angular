import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent implements OnInit {

  budget: any;

  dates = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2040];

  year = null;

  constructor(
    private budgetService: BudgetService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onChange(year) {
    this.year = year;

    this.budgetService.dashboard(this.year).subscribe((data: any) => {
      this.budget = data;
      console.log(this.budget)
    })
  }

  navigate(route) {
    this.router.navigate([route]);
  }

  convertCurrency(amount) {
    return Number(amount).toLocaleString("pt", {style: "currency", currency: "BRL", minimumFractionDigits: 2})
  }

}
