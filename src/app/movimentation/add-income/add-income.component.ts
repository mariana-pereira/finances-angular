import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovimentationService } from '../movimentation.service';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/company/company.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {

  categories = ['Bonificação', 'Cashback', 'Extra', 'Rendimento', 'Salário', 'Transferência', 'Outros'];

  incomeForm = new FormGroup({
    date: new FormControl(''),
    amount: new FormControl(''),
    category: new FormControl(''),
    company_id: new FormControl('')
  });

  id: any;

  companies: any[];

  constructor(
    private movimentationService: MovimentationService,
    private companyService: CompanyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    this.companyService.index().subscribe((data: any[])=>{
      this.companies = data;
      console.log(this.companies)
    })
  }

  onSubmit() {
    const income = this.incomeForm.value;
    this.movimentationService.createIncome(income, this.id)
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
    this.incomeForm.reset();
  }

}
