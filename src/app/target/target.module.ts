import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TargetRoutingModule } from './target-routing.module';
import { TargetsComponent } from './targets/targets.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { MaterialModule } from '../material.module';
import { MatDatepickerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';


@NgModule({
  declarations: [TargetsComponent, AddComponent, DetailComponent],
  imports: [
    CommonModule,
    TargetRoutingModule,
    MaterialModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ]
})
export class TargetModule { }
