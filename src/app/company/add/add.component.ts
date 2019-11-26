import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CompanyService } from '../company.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  name = new FormControl('');

  id = null;

  title: string;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.title = 'Editar Empresa';

      this.id = this.route.snapshot.paramMap.get("id");

      this.companyService.show(this.id).subscribe((data: any) => {
        this.updateForm(data);
      });
    } else {
      this.title = 'Adicionar Empresa';
    }
  }

  onSubmit() {
    if (this.id !== null) {
      const company = {
        name: this.name.value
      }
  
      this.companyService.update(company, this.id)
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
  }

  onCancel() {
    this.name.reset();
  }

  updateForm(company) {
    this.name.patchValue(company.name)

  }

}
