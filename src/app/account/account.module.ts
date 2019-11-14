import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountsComponent } from './accounts/accounts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [AccountsComponent, DetailComponent, AddComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    
  ]
})
export class AccountModule { }
