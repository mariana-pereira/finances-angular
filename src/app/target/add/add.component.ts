import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TargetService } from '../target.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  targetForm = new FormGroup({
    name: new FormControl(''),
    necessary_amount: new FormControl(''),
    deadline: new FormControl('')
  });

  constructor(private targetService: TargetService) { }

  ngOnInit() {
  }

  onSubmit() {
    const target = this.targetForm.value;
    this.targetService.create(target)
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
    this.targetForm.reset();
  }

}
