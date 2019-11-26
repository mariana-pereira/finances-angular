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

}
