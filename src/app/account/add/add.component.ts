import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  types = ['Conta Corrente', 'Conta Poupança', 'Conta de pagamentos', 'Corretora'];

  id = null;

  title: string;

  accountForm = new FormGroup({
    id: new FormControl(null),
    bank: new FormControl(''),
    branch: new FormControl(''),
    account_number: new FormControl(''),
    type: new FormControl('')
  });

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.title = 'Editar Conta';

      this.id = this.route.snapshot.paramMap.get("id");

      this.accountService.show(this.id).subscribe((data: any) => {
        this.updateForm(data);
      });
    } else {
      this.title = 'Adicionar Conta'
    }

  }

  onSubmit() {
    if (this.id !== null) {
      const account = this.accountForm.value;
      this.accountService.update(account, this.id)
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
      const account = this.accountForm.value;
      this.accountService.create(account)
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
    this.accountForm.reset();
  }

  updateForm(account) {
    this.accountForm.patchValue({
      id: account.id,
      bank: account.bank,
      branch: account.branch,
      account_number: account.account_number,
      type: account.type
    })
  }

}
