import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestmentsComponent } from './investments/investments.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'investments' },
  { path: 'investments', component: InvestmentsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'add/:account', component: AddComponent },
  { path: 'edit/:id', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentRoutingModule { }
