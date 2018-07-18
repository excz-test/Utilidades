import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoAddComponent } from './ingreso-add.component';

describe('IngresoAddComponent', () => {
  let component: IngresoAddComponent;
  let fixture: ComponentFixture<IngresoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
