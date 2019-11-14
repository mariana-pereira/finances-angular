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
      console.log(this.cards)
    })
  }

  navigate(route) {
    this.router.navigate([route]);
  }

}
