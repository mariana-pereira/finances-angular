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


@NgModule({
  declarations: [CardsComponent, AddComponent, DetailComponent],
  imports: [
    CommonModule,
    CardRoutingModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialModule
  ]
})
export class CardModule { }
