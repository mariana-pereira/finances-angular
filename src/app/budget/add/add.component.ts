import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BudgetService } from '../budget.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  budgetForm = new FormGroup({
    name: new FormControl(''),
    amount: new FormControl('')
  });

  year;
  month;

  constructor(
    private budgetService: BudgetService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.month = this.route.snapshot.paramMap.get("month");
    this.year = this.route.snapshot.paramMap.get("year");
  }

  onSubmit() {
    const budget = this.budgetForm.value;
    this.budgetService.create({...budget, year: this.year, month: this.month})
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }

      );
    this.onCancel();
  }

  onCancel() {
    this.budgetForm.reset();
  }

}
