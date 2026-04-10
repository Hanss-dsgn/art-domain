import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalArt } from './digital-art';

describe('DigitalArt', () => {
  let component: DigitalArt;
  let fixture: ComponentFixture<DigitalArt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalArt],
    }).compileComponents();

    fixture = TestBed.createComponent(DigitalArt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
