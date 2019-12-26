import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  expense: any = null;

  constructor(
    private expenseService: ExpenseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    this.expenseService.show(id).subscribe((data: any) => {
      this.expense = (data as any).expense;
      console.log(this.expense)
    });
  }

  formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

  navigate(route) {
    this.router.navigate([route]);
  }

  deleteItem(id) {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      this.expenseService.delete(id).subscribe(
          (data) => {
            console.log(data);
          },
          (err) => {
            console.log(err);
          }

        );
  
      this.navigate('/expense/expenses');
    }
    
  }

  convertCurrency(amount) {
    return Number(amount).toLocaleString("pt", {style: "currency", currency: "BRL", minimumFractionDigits: 2})
  }

}
