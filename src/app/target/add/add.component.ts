import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TargetService } from '../target.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  id = null;

  title: string;

  targetForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    necessary_amount: new FormControl(''),
    deadline: new FormControl('')
  });

  constructor(
    private targetService: TargetService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.title = 'Editar Objetivo';
      this.id = this.route.snapshot.paramMap.get("id");

      this.targetService.show(this.id).subscribe((data: any) => {
        this.updateForm(data);
      });
    } else {
      this.title = 'Adicionar Objetivo';
    }
  }

  onSubmit() {
    if (this.id !== null) {
      const target = this.targetForm.value;
      this.targetService.update(target, this.id)
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
  }

  onCancel() {
    this.targetForm.reset();
  }

  updateForm(target) {
    this.targetForm.patchValue({
      id: target.id,
      name: target.name,
      necessary_amount: target.necessary_amount,
      deadline: target.deadline
    })
  }

}
