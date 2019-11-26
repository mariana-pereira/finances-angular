import { Component, OnInit } from '@angular/core';
import { ProfitService } from '../profit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profits',
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.css']
})
export class ProfitsComponent implements OnInit {

  profits: any[];
  total: any;
  id: any;

  constructor(
    private profitService: ProfitService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    this.profitService.index(this.id).subscribe((data: any[]) => {
      this.profits = (data as any).profits
      this.total = (data as any).total
    })
  }

  formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

  deleteItem(id, investment) {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      this.profitService.delete(id, investment.toString()).subscribe(
          (data) => {
            console.log(data);
          },
          (err) => {
            console.log(err);
          }

        );
    }
    
  }

}
