import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovimentationService } from '../movimentation.service';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/company/company.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  categories = ['Bonificação', 'Cashback', 'Extra', 'Rendimento', 'Salário', 'Transferência', 'Outros'];

  movimentationForm = new FormGroup({
    id: new FormControl(null),
    date: new FormControl(''),
    amount: new FormControl(''),
    category: new FormControl(''),
    company_id: new FormControl('')
  });

  id: any;

  account_id: any;

  constructor(
    private movimentationService: MovimentationService,
    private companyService: CompanyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    this.movimentationService.show(this.id).subscribe((data: any) => {
      this.updateForm(data);
    });
  }

  onSubmit() {
    const movimentation = this.movimentationForm.value;
    this.movimentationService.update(movimentation, this.id, this.account_id)
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
    this.movimentationForm.reset();
  }

  updateForm(movimentation) {
    this.movimentationForm.patchValue({
      id: movimentation.id,
      date: movimentation.date,
      amount: movimentation.amount,
      category: movimentation.category
    });

    this.account_id = movimentation.account_id.toString();
  }

}
