import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ExpenseService } from '../expense.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  categories = ['Alimentação', 'Assinaturas', 'Beleza', 'Contas', 'Decoração', 'Esporte', 'Lazer', 'Pet', 'Picpay', 'Saúde', 'Tech', 'Transporte', 'Vestuário', 'Outros'];

  expenseForm = new FormGroup({
    date: new FormControl(''),
    amount: new FormControl(''),
    shop: new FormControl(''),
    category: new FormControl('')
  });

  invoice_id: any;
  card_id: any;

  constructor(
    private expenseService: ExpenseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.invoice_id = this.route.snapshot.paramMap.get("invoice");
    this.card_id = this.route.snapshot.paramMap.get("card");
  }

  onSubmit() {
    const expense = this.expenseForm.value;
    this.expenseService.create(expense, this.invoice_id, this.card_id)
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
    this.expenseForm.reset();
  }

}
