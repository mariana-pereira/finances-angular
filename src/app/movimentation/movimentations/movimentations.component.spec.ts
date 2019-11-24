import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentationsComponent } from './movimentations.component';

describe('MovimentationsComponent', () => {
  let component: MovimentationsComponent;
  let fixture: ComponentFixture<MovimentationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
