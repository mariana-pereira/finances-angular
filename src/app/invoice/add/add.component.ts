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
    month: new FormControl(''),
    year: new FormControl(''),
    expiry_date: new FormControl('')
  });

  id: any;
  card: any;

  constructor(
    private invoiceService: InvoiceService,
    private cardService: CardService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    this.cardService.show(this.id).subscribe((data: any) => {
      this.card = (data)
    });
  }

  onSubmit() {
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

  onCancel() {
    this.invoiceForm.reset();
  }

}
