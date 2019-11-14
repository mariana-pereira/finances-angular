import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'account', loadChildren: './account/account.module#AccountModule', canActivate: [ AuthGuard ] },
  { path: 'card', loadChildren: './card/card.module#CardModule', canActivate: [ AuthGuard ] },
  { path: 'target', loadChildren: './target/target.module#TargetModule', canActivate: [ AuthGuard ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
