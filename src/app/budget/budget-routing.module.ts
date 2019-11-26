import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetsComponent } from './budgets/budgets.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'budgets' },
  { path: 'budgets', component: BudgetsComponent },
  { path: 'detail/:year/:month', component: DetailComponent },
  { path: 'add/:year/:month', component: AddComponent },
  { path: 'edit/:id', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
