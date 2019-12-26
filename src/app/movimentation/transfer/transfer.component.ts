import { Component, OnInit } from '@angular/core';
import { MovimentationService } from '../movimentation.service';
import { AccountService } from 'src/app/account/account.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  accounts: any[];
  
  origin: any;
  target: any;

  movimentationForm = new FormGroup({
    date: new FormControl(new Date()),
    amount: new FormControl('')
  });

  constructor(
    private movimentationService: MovimentationService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.accountService.index().subscribe((data: any[]) => {
      this.accounts = (data as any).accounts;
    })
  }

  handleOrigin(origin) {
    this.accountService.show(origin).subscribe((data: any) => {
      this.origin = (data)
    });
  }

  handleTarget(target) {
    this.accountService.show(target).subscribe((data: any) => {
      this.target = (data)
    });
  }

  onSubmit() {
    const movimentation = this.movimentationForm.value;
    this.movimentationService.transfer(movimentation, this.origin.id.toString(), this.target.id.toString())
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }

      );
  }

  convertCurrency(amount) {
    return Number(amount).toLocaleString("pt", {style: "currency", currency: "BRL", minimumFractionDigits: 2})
  }

}
