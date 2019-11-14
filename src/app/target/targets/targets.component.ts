import { Component, OnInit } from '@angular/core';
import { TargetService } from '../target.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css']
})
export class TargetsComponent implements OnInit {

  targets: any[];

  constructor(
    private targetService: TargetService,
    private router: Router
  ) { }

  ngOnInit() {

    this.targetService.index().subscribe((data: any[])=>{
      this.targets = data;
    })  
  }

  navigate(route) {
    this.router.navigate([route]);
  }

  formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

}
