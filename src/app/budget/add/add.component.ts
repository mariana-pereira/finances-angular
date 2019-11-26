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
    id: new FormControl(null),
    name: new FormControl(''),
    amount: new FormControl('')
  });

  title: string;

  year;
  month;
  id = null;

  constructor(
    private budgetService: BudgetService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.month = this.route.snapshot.paramMap.get("month");
    this.year = this.route.snapshot.paramMap.get("year");

    if (this.route.snapshot.paramMap.get('id')) {
      this.title = 'Editar Budget';

      this.id = this.route.snapshot.paramMap.get("id");

      this.budgetService.show(this.id).subscribe((data: any) => {
        this.updateForm(data);
      });
    } else {
      this.title = 'Adicionar Budget';
    }
  }

  onSubmit() {
    if (this.id !== null) {
      const budget = this.budgetForm.value;
      this.budgetService.update(budget, this.id)
        .subscribe(
          (data) => {
            console.log(data);
          },
          (err) => {
            console.log(err);
          }

        );
      this.onCancel();
    } else {
      const budget = this.budgetForm.value;
      this.budgetService.create({ ...budget, year: this.year, month: this.month })
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
  }

  onCancel() {
    this.budgetForm.reset();
  }

  updateForm(budget) {
    this.budgetForm.patchValue({
      id: budget.id,
      name: budget.name,
      amount: budget.amount
    })
  }

}
