import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesComponent } from './invoices/invoices.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
import { PaidComponent } from './paid/paid.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'invoices' },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'add/:card', component: AddComponent },
  { path: 'edit/:id', component: AddComponent },
  { path: 'card/:id/:paid', component: PaidComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
