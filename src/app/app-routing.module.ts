import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'account', loadChildren: './account/account.module#AccountModule', canActivate: [ AuthGuard ] },
  { path: 'budget', loadChildren: './budget/budget.module#BudgetModule', canActivate: [ AuthGuard ] },
  { path: 'card', loadChildren: './card/card.module#CardModule', canActivate: [ AuthGuard ] },
  { path: 'company', loadChildren: './company/company.module#CompanyModule', canActivate: [ AuthGuard ] },
  { path: 'expense', loadChildren: './expense/expense.module#ExpenseModule', canActivate: [ AuthGuard ] },
  { path: 'investment', loadChildren: './investment/investment.module#InvestmentModule', canActivate: [ AuthGuard ] },
  { path: 'invoice', loadChildren: './invoice/invoice.module#InvoiceModule', canActivate: [ AuthGuard ] },
  { path: 'item', loadChildren: './item/item.module#ItemModule', canActivate: [ AuthGuard ] },
  { path: 'profit', loadChildren: './profit/profit.module#ProfitModule', canActivate: [ AuthGuard ] },
  { path: 'target', loadChildren: './target/target.module#TargetModule', canActivate: [ AuthGuard ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
