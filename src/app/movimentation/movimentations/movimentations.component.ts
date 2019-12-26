import { Component, OnInit } from '@angular/core';
import { MovimentationService } from '../movimentation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movimentations',
  templateUrl: './movimentations.component.html',
  styleUrls: ['./movimentations.component.css']
})
export class MovimentationsComponent implements OnInit {

  movimentations: any[];
  total: any = 0.00;

  month: string = (new Date().getMonth() + 1).toString();
  year: string = new Date().getFullYear().toString();

  constructor(
    private movimentationService: MovimentationService,
    private router: Router
  ) { }

  ngOnInit() {


  }

  setMovimentations(e) {
    if (e.target.value === 'month') {
      this.movimentationService.month(this.month, this.year).subscribe((data: any[]) => {
        this.movimentations = (data as any).movimentations
        this.total = (data as any).total
      })
    } else if (e.target.value === 'year') {
      this.movimentationService.year(this.year).subscribe((data: any[]) => {
        this.movimentations = (data as any).movimentations
        this.total = (data as any).total
      })
    } else if (e.target.value === 'all') {
      this.movimentationService.index().subscribe((data: any[]) => {
        this.movimentations = (data as any).movimentations
        this.total = (data as any).total
      })
    }
  }

  navigate(route) {
    this.router.navigate([route]);
  }

  formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

  convertCurrency(amount) {
    return Number(amount).toLocaleString("pt", {style: "currency", currency: "BRL", minimumFractionDigits: 2})
  }

}
