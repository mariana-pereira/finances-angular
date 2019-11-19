import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { MatDatepickerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { StatsComponent } from './stats/stats.component';
import { InvoiceExpensesComponent } from './invoice-expenses/invoice-expenses.component';


@NgModule({
  declarations: [ExpensesComponent, AddComponent, DetailComponent, StatsComponent, InvoiceExpensesComponent],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ExpenseModule { }
