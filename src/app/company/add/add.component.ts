import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  name = new FormControl('');

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  onSubmit() {
    const company = {
      name: this.name.value
    }
    
    this.companyService.create(company)
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
    this.name.reset();
  }

}
