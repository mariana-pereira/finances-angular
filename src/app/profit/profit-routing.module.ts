import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfitsComponent } from './profits/profits.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'profits' },
  { path: 'profits/:id', component: ProfitsComponent },
  { path: 'add/:id', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfitRoutingModule { }
