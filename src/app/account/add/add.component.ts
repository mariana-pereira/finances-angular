import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  types = ['Conta Corrente', 'Conta Poupança', 'Conta de pagamentos', 'Corretora'];

  accountForm = new FormGroup({
    bank: new FormControl(''),
    branch: new FormControl(''),
    account_number: new FormControl(''),
    type: new FormControl('')
  });

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    
  }

  onSubmit() {
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

  onCancel() {
    this.accountForm.reset();
  }

}
