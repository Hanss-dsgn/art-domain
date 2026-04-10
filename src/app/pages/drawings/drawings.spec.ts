import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drawings } from './drawings';

describe('Drawings', () => {
  let component: Drawings;
  let fixture: ComponentFixture<Drawings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Drawings],
    }).compileComponents();

    fixture = TestBed.createComponent(Drawings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
