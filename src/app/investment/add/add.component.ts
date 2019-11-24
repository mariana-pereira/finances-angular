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

  id: any;

  targets: any[];

  types = ['Ações', 'CDB', 'COE', 'CRA', 'CRI', 'Debêntures', 'ETF', 'Fundos de investimentos', 'Fundos Imobiliários', 'LC', 'LCA', 'LCI', 'Opções', 'Poupança', 'Tesouro IPCA', 'Tesouro pré-fixado', 'Tesouro Selic'];

  investmentForm = new FormGroup({
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
    this.id = this.route.snapshot.paramMap.get("id");

    this.targetService.index().subscribe((data: any[])=>{
      this.targets = data;
    })
  }

  onSubmit() {
    const investment = this.investmentForm.value;
    this.investmentService.create(investment, this.id)
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
    this.investmentForm.reset();
  }

}
