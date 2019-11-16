import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: any[] = null;

  constructor(
    private companyService: CompanyService,
    private router: Router
  ) { }

  ngOnInit() {

    this.companyService.index().subscribe((data: any[])=>{
      this.companies = data;
    })  
  }

  navigate(route) {
    this.router.navigate([route]);
  }

}
