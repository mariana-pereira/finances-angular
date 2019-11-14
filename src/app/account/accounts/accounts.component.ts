import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts: any[];

  constructor(
    private accountService: AccountService,
    private router: Router
    ) { }

  ngOnInit() {

    this.accountService.index().subscribe((data: any[])=>{
      this.accounts = data;
    })  
  }

  navigate(route) {
    this.router.navigate([route]);
  }

}
