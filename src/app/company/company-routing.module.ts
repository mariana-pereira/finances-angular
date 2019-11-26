import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'companies' },
  { path: 'companies', component: CompaniesComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
