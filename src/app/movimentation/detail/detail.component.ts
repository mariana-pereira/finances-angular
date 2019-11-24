import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    this.movimentationService.show(id).subscribe((data: any) => {
      this.movimentation = (data)
      console.log(this.movimentation)
    });
  }

  formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

}
