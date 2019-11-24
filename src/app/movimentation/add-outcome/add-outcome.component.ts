import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovimentationService } from '../movimentation.service';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/company/company.service';

@Component({
  selector: 'app-add-outcome',
  templateUrl: './add-outcome.component.html',
  styleUrls: ['./add-outcome.component.css']
})
export class AddOutcomeComponent implements OnInit {

  categories = ['Compras', 'Pagamento de Mensalidade', 'Pagamento de Fatura', 'Saque', 'Transferência'];

  outcomeForm = new FormGroup({
    date: new FormControl(''),
    amount: new FormControl(''),
    category: new FormControl(''),
    company_id: new FormControl(null)
  });

  id: any;

  value = null;

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
    })
  }

  onSubmit() {
    const outcome = this.outcomeForm.value;
    this.movimentationService.createOutcome(outcome, this.id)
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
    this.outcomeForm.reset();
  }

}
