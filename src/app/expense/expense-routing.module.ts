import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
import { StatsComponent } from './stats/stats.component';
import { InvoiceExpensesComponent } from './invoice-expenses/invoice-expenses.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'expenses' },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'expenses/:id', component: InvoiceExpensesComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'add/:invoice/:card', component: AddComponent },
  { path: 'edit/:id', component: AddComponent },
  { path: 'stats', component: StatsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
