import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimentationRoutingModule } from './movimentation-routing.module';
import { MovimentationsComponent } from './movimentations/movimentations.component';
import { DetailComponent } from './detail/detail.component';
import { AddIncomeComponent } from './add-income/add-income.component';
import { AddOutcomeComponent } from './add-outcome/add-outcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { MatDatepickerModule } from '@angular/material';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [MovimentationsComponent, DetailComponent, AddIncomeComponent, AddOutcomeComponent, StatsComponent],
  imports: [
    CommonModule,
    MovimentationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDatepickerModule
  ]
})
export class MovimentationModule { }
