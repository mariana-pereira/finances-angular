import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InvestmentService } from '../investment.service';
import { TargetService } from 'src/app/target/target.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  id = null;
  target_id: any;
  account_id: any;

  edit: boolean = false;

  title: string;

  targets: any[];

  types = ['Ações', 'CDB', 'COE', 'CRA', 'CRI', 'Debêntures', 'ETF', 'Fundos de investimentos', 'Fundos Imobiliários', 'LC', 'LCA', 'LCI', 'Opções', 'Poupança', 'Tesouro IPCA', 'Tesouro pré-fixado', 'Tesouro Selic'];

  investmentForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    type: new FormControl(''),
    tax: new FormControl(''),
    target_id: new FormControl(''),
    application_date: new FormControl(''),
    redeem_date: new FormControl(''),
    application_amount: new FormControl('')
  });

  constructor(
    private investmentService: InvestmentService,
    private targetService: TargetService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.title = 'Editar Investimento';
      this.edit = true;
      this.id = this.route.snapshot.paramMap.get("id");

      this.investmentService.show(this.id).subscribe((data: any) => {
        this.updateForm(data);
      });

      this.targetService.index().subscribe((data: any[]) => {
        this.targets = data;
      })
    } else {
      this.title = 'Adicionar Investimento';
      this.account_id = this.route.snapshot.paramMap.get("account");

      this.targetService.index().subscribe((data: any[]) => {
        this.targets = data;
      })
    }
  }

  onSubmit() {
    if (this.id !== null) {
      const investment = this.investmentForm.value;
      this.investmentService.update(investment, this.id, this.account_id, this.target_id)
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
      const investment = this.investmentForm.value;
      this.investmentService.create(investment, this.account_id)
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
    this.investmentForm.reset();
  }

  updateForm(investment) {
    this.investmentForm.patchValue({
      id: investment.id,
      name: investment.name,
      type: investment.type,
      tax: investment.tax,
      target_id: investment.target_id,
      application_date: investment.application_date,
      redeem_date: investment.redeem_date,
      application_amount: investment.application_amount
    });
    this.target_id = investment.target_id.toString();
    this.account_id = investment.account_id.toString();
  }

}
