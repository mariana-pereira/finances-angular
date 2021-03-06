import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: any[];

  constructor(
    private cardService: CardService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cardService.index().subscribe((data: any[]) => {
      this.cards = data;
    })
  }

  navigate(route) {
    this.router.navigate([route]);
  }

  convertCurrency(amount) {
    return Number(amount).toLocaleString("pt", {style: "currency", currency: "BRL", minimumFractionDigits: 2})
  }

}
