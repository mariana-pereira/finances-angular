import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceExpensesComponent } from './invoice-expenses.component';

describe('InvoiceExpensesComponent', () => {
  let component: InvoiceExpensesComponent;
  let fixture: ComponentFixture<InvoiceExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
