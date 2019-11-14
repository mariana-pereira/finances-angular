import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CardService } from '../card.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl(''),
    number: new FormControl(''),
    total_limit: new FormControl(''),
    available_limit: new FormControl(''),
    expiry_date: new FormControl('')
  });

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  onSubmit() {
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

  onCancel() {
    this.cardForm.reset();
  }

}
