import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    this.cardService.show(id).subscribe((data: any) => {
      this.card = (data)
    });
  }

  formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

  navigate(route) {
    this.router.navigate([route]);
  }

  deleteItem(id) {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      this.cardService.delete(id).subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }

      );
  
      this.navigate('/card/cards');
    }
    
  }

}
