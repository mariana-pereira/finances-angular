import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfitService } from '../profit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  id: any;

  profitForm = new FormGroup({
    amount: new FormControl(''),
    date: new FormControl('')
  });

  constructor(
    private profitService: ProfitService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  onSubmit() {
    const profit = this.profitForm.value;
    this.profitService.create(profit, this.id)
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
    this.profitForm.reset();
  }

}
