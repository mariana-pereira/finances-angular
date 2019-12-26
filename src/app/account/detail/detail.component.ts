import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AccountService } from '../account.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  account: any = null;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    this.accountService.show(id).subscribe((data: any) => {
      this.account = (data)
    });
  }

  navigate(route) {
    this.router.navigate([route]);
  }

  deleteItem(id) {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      this.accountService.delete(id).subscribe(
          (data) => {
            console.log(data);
          },
          (err) => {
            console.log(err);
          }

        );
  
      this.navigate('/account/accounts');
    }
    
  }

  convertCurrency(amount) {
    return Number(amount).toLocaleString("pt", {style: "currency", currency: "BRL", minimumFractionDigits: 2})
  }

}
