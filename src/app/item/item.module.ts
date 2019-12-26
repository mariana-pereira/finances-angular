import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemsComponent } from './items/items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';


@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CurrencyMaskModule
  ]
})
export class ItemModule { }
