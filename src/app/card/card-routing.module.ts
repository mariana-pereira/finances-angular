import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cards' },
  { path: 'cards', component: CardsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }
