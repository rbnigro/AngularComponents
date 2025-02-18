import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaterangerpickerComponent } from './daterangerpicker.component';

describe('DaterangerpickerComponent', () => {
  let component: DaterangerpickerComponent;
  let fixture: ComponentFixture<DaterangerpickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DaterangerpickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaterangerpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
