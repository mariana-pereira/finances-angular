import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MovimentationService } from '../movimentation.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  movimentation: any = null;

  constructor(
    private movimentationService: MovimentationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    this.movimentationService.show(id).subscribe((data: any) => {
      this.movimentation = (data)
    });
  }

  formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

  navigate(route) {
    this.router.navigate([route]);
  }

  deleteItem(id, account) {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      this.movimentationService.delete(id, account.toString()).subscribe(
          (data) => {
            console.log(data);
          },
          (err) => {
            console.log(err);
          }

        );
  
      this.navigate('/movimentation/movimentations');
    }
    
  }

  convertCurrency(amount) {
    return Number(amount).toLocaleString("pt", {style: "currency", currency: "BRL", minimumFractionDigits: 2})
  }

}
