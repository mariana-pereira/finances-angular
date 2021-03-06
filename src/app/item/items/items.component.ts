import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: any[];
  total: any;
  id: any;

  itemForm = new FormGroup({
    name: new FormControl(''),
    amount: new FormControl('')
  });

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    this.itemService.index(this.id).subscribe((data: any[]) => {
      this.items = (data as any).items
      this.total = (data as any).total
    })
  }

  onSubmit() {
    const item = this.itemForm.value;
    this.itemService.create(item, this.id)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }

      );

    this.itemForm.reset();

  }

  deleteItem(id) {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      this.itemService.delete(id).subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }

      );
    }

  }

  convertCurrency(amount) {
    return Number(amount).toLocaleString("pt", {style: "currency", currency: "BRL", minimumFractionDigits: 2})
  }

}
