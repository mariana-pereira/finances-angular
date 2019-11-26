import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  investment: any = null;

  constructor(
    private investmentService: InvestmentService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    this.investmentService.show(id).subscribe((data: any) => {
      this.investment = (data)
    });
  }

  navigate(route) {
    this.router.navigate([route]);
  }

  formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

  deleteItem(id) {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      this.investmentService.delete(id).subscribe(
          (data) => {
            console.log(data);
          },
          (err) => {
            console.log(err);
          }

        );
  
      this.navigate('/investment/investments');
    }
    
  }

}
