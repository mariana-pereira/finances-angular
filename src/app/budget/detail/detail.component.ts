import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  budgets: any[];
  total: number;

  year;
  month;

  constructor(
    private budgetService: BudgetService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.month = this.route.snapshot.paramMap.get("month");

    this.year = this.route.snapshot.paramMap.get("year");

    this.budgetService.index(this.month, this.year).subscribe((data: any[]) => {
      this.budgets = (data as any).budgets;
      this.total = (data as any).total;
    })
  }

  navigate() {
    this.router.navigate([`/budget/add/${this.year}/${this.month}`]);
  }

  onEdit(id) {
    this.router.navigate([`/budget/edit/${id}`]);
  }

  formatDate() {
    var monthNames = [
      "Janeiro", "Fevereiro", "Março",
      "Abril", "Maio", "Junho", "Julho",
      "Agosto", "Setembro", "Outubro",
      "Novembro", "Dezembro"
    ];
    return monthNames[this.month - 1];

  }

  deleteItem(id) {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      this.budgetService.delete(id).subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }

      );
    }

  }

}
