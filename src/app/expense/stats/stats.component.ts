import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  selected: boolean = null;

  month: string = (new Date().getMonth() + 1).toString();
  year: string = new Date().getFullYear().toString();

  food: number;
  subscription: number;
  beauty: number;
  bill: number;
  decoration: number;
  sport: number;
  recreation: number;
  pet: number;
  picpay: number;
  health: number;
  tech: number;
  transportation: number;
  clothing: number;
  other: number;

  constructor(
    private expenseService: ExpenseService
  ) { }

  ngOnInit() {
  }

  setExpenses(e) {
    this.selected = true;
    if(e.target.value === 'month') {
      this.expenseService.categoryMonth(this.month, this.year).subscribe((data: any[]) => {
        this.food = (data as any).food;
        this.subscription = (data as any).subscription;
        this.beauty = (data as any).beauty;
        this.bill = (data as any).bill;
        this.decoration = (data as any).decoration;
        this.clothing = (data as any).clothing;
        this.sport = (data as any).sport;
        this.recreation = (data as any).recreation;
        this.pet = (data as any).pet;
        this.picpay = (data as any).picpay;
        this.health = (data as any).health;
        this.tech = (data as any).tech;
        this.transportation = (data as any).transportation;
        this.other = (data as any).other;
      })
    } else if (e.target.value === 'year') {
      this.expenseService.categoryYear(this.year).subscribe((data: any[]) => {
        this.food = (data as any).food;
        this.subscription = (data as any).subscription;
        this.beauty = (data as any).beauty;
        this.bill = (data as any).bill;
        this.decoration = (data as any).decoration;
        this.clothing = (data as any).clothing;
        this.sport = (data as any).sport;
        this.recreation = (data as any).recreation;
        this.pet = (data as any).pet;
        this.picpay = (data as any).picpay;
        this.health = (data as any).health;
        this.tech = (data as any).tech;
        this.transportation = (data as any).transportation;
        this.other = (data as any).other;
        
      })
    }
  }

}
