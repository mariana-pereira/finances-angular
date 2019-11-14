import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TargetService } from '../target.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  target: any = null;

  constructor(
    private targetService: TargetService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    this.targetService.show(id).subscribe((data: any) => {
      this.target = (data)
    });
  }

  formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

}
