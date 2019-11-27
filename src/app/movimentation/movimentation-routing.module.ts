import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovimentationsComponent } from './movimentations/movimentations.component';
import { DetailComponent } from './detail/detail.component';
import { AddIncomeComponent } from './add-income/add-income.component';
import { AddOutcomeComponent } from './add-outcome/add-outcome.component';
import { StatsComponent } from './stats/stats.component';
import { EditComponent } from './edit/edit.component';
import { TransferComponent } from './transfer/transfer.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'movimentations' },
  { path: 'movimentations', component: MovimentationsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'add/income/:id', component: AddIncomeComponent },
  { path: 'add/outcome/:id', component: AddOutcomeComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'transfer', component: TransferComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimentationRoutingModule { }
