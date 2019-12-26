import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { CardRoutingModule } from './card-routing.module';
import { CardsComponent } from './cards/cards.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { DetailComponent } from './detail/detail.component';
import { MaterialModule } from '../material.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';


@NgModule({
  declarations: [CardsComponent, AddComponent, DetailComponent],
  imports: [
    CommonModule,
    CardRoutingModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialModule,
    CurrencyMaskModule
  ]
})
export class CardModule { }
