import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentRoutingModule } from './investment-routing.module';
import { InvestmentsComponent } from './investments/investments.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { MatDatepickerModule } from '@angular/material';
import { CurrencyMaskModule } from 'ng2-currency-mask';


@NgModule({
  declarations: [InvestmentsComponent, DetailComponent, AddComponent],
  imports: [
    CommonModule,
    InvestmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDatepickerModule,
    CurrencyMaskModule
  ]
})
export class InvestmentModule { }
