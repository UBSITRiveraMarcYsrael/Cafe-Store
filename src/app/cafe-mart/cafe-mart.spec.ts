import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeMart } from './cafe-mart';

describe('CafeMart', () => {
  let component: CafeMart;
  let fixture: ComponentFixture<CafeMart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeMart],
    }).compileComponents();

    fixture = TestBed.createComponent(CafeMart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
