import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sculptures } from './sculptures';

describe('Sculptures', () => {
  let component: Sculptures;
  let fixture: ComponentFixture<Sculptures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sculptures],
    }).compileComponents();

    fixture = TestBed.createComponent(Sculptures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
