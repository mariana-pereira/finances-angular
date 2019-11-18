import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoicesComponent } from './invoices/invoices.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material';
import { PaidComponent } from './paid/paid.component';


@NgModule({
  declarations: [InvoicesComponent, DetailComponent, AddComponent, PaidComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule
  ]
})
export class InvoiceModule { }
