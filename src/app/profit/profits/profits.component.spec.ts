import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitsComponent } from './profits.component';

describe('ProfitsComponent', () => {
  let component: ProfitsComponent;
  let fixture: ComponentFixture<ProfitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
