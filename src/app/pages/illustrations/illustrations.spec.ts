import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Illustrations } from './illustrations';

describe('Illustrations', () => {
  let component: Illustrations;
  let fixture: ComponentFixture<Illustrations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Illustrations],
    }).compileComponents();

    fixture = TestBed.createComponent(Illustrations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
