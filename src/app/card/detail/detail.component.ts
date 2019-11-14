import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CardService } from '../card.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  card: any = null;

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    this.cardService.show(id).subscribe((data: any) => {
      this.card = (data)
      console.log(this.card)
    });
  }

}
