import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AccountService } from '../account.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  account: any = null;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    this.accountService.show(id).subscribe((data: any) => {
      this.account = (data as any).account;
    });
  }

  

}
