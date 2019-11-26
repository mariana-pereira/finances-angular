import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TargetsComponent } from './targets/targets.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'targets' },
  { path: 'targets', component: TargetsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TargetRoutingModule { }
