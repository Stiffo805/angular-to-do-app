import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSlider } from './date-slider';

describe('DateSlider', () => {
  let component: DateSlider;
  let fixture: ComponentFixture<DateSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateSlider]
    }).compileComponents();

    fixture = TestBed.createComponent(DateSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
