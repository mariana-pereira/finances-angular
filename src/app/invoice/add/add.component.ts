import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InvoiceService } from '../invoice.service';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/card/card.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  invoiceForm = new FormGroup({
    id: new FormControl(null),
    month: new FormControl(''),
    year: new FormControl(''),
    expiry_date: new FormControl('')
  });

  id = null;

  card_id: any;
  card: any;

  title: string;

  constructor(
    private invoiceService: InvoiceService,
    private cardService: CardService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.title = 'Editar Fatura';
      this.id = this.route.snapshot.paramMap.get("id");

      this.invoiceService.show(this.id).subscribe((data: any) => {
        this.updateForm(data);
      });
    } else {
      this.title = 'Adicionar Fatura';
      this.card_id = this.route.snapshot.paramMap.get("card");

      this.cardService.show(this.card_id).subscribe((data: any) => {
        this.card = (data)
      });
    }
  }

  onSubmit() {
    if (this.id !== null) {
      const invoice = this.invoiceForm.value;
      this.invoiceService.update(invoice, this.card_id)
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
      const invoice = this.invoiceForm.value;
      this.invoiceService.create({ ...invoice, name: this.card.name + ' ' + this.invoiceForm.controls.month.value }, this.id)
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
    this.invoiceForm.reset();
  }

  updateForm(invoice) {
    this.invoiceForm.patchValue({
      id: invoice.id,
      month: invoice.month,
      year: invoice.year,
      expiry_date: invoice.expiry_date
    })
  }

}
