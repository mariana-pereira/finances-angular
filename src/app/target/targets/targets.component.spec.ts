import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetsComponent } from './targets.component';

describe('TargetsComponent', () => {
  let component: TargetsComponent;
  let fixture: ComponentFixture<TargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
