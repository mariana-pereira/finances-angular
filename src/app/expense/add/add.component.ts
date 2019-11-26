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

  id = null;

  title: string;

  expenseForm = new FormGroup({
    id: new FormControl(null),
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

    if (this.route.snapshot.paramMap.get('id')) {
      this.title = 'Editar Despesa'
      
      this.id = this.route.snapshot.paramMap.get("id");

      this.expenseService.show(this.id).subscribe((data: any) => {
        this.updateForm((data as any).expense);
      });
    } else {
      this.title = 'Adicionar Despesa';

      this.invoice_id = this.route.snapshot.paramMap.get("invoice");
      this.card_id = this.route.snapshot.paramMap.get("card");
    }
  }

  onSubmit() {
    if (this.id !== null) {
      const expense = this.expenseForm.value;
      this.expenseService.update(expense, this.id)
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
  }

  onCancel() {
    this.expenseForm.reset();
  }

  updateForm(expense) {
    this.expenseForm.patchValue({
      id: expense.id,
      date: expense.date,
      amount: expense.amount,
      shop: expense.shop,
      category: expense.category
    })
  }

}
