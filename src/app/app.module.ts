import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CardModule } from './card/card.module';
import { TargetModule } from './target/target.module';
import { BudgetModule } from './budget/budget.module';
import { MaterialModule } from './material.module';
import { CompanyModule } from './company/company.module';
import { InvoiceModule } from './invoice/invoice.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    CardModule,
    TargetModule,
    BudgetModule,
    MaterialModule,
    CompanyModule,
    InvoiceModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
