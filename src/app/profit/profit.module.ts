import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfitRoutingModule } from './profit-routing.module';
import { ProfitsComponent } from './profits/profits.component';
import { AddComponent } from './add/add.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProfitsComponent, AddComponent],
  imports: [
    CommonModule,
    ProfitRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfitModule { }
