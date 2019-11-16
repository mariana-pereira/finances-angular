import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetsComponent } from './budgets/budgets.component';
import { DetailComponent } from './detail/detail.component';
import { MatDatepickerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [BudgetsComponent, DetailComponent, AddComponent],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class BudgetModule { }
