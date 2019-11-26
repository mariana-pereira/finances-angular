import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CardService } from '../card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  cardForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    number: new FormControl(''),
    total_limit: new FormControl(''),
    available_limit: new FormControl(''),
    expiry_date: new FormControl('')
  });

  title: string;

  id = null;

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.title = 'Editar Cartão';

      this.id = this.route.snapshot.paramMap.get("id");

      this.cardService.show(this.id).subscribe((data: any) => {
        this.updateForm(data);
      });
    } else {
      this.title = 'Adicionar Cartão';
    }
  }

  onSubmit() {
    if (this.id !== null) {
      const card = this.cardForm.value;
      this.cardService.update(card, this.id)
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
      const card = this.cardForm.value;
      this.cardService.create(card)
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
    this.cardForm.reset();
  }

  updateForm(card) {
    this.cardForm.patchValue({
      id: card.id,
      name: card.name,
      number: card.number,
      total_limit: card.total_limit,
      available_limit: card.available_limit,
      expiry_date: card.expiry_date
    })
  }

}
