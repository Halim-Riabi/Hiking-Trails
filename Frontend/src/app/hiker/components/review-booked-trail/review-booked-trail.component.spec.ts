import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewBookedTrailComponent } from './review-booked-trail.component';

describe('ReviewBookedTrailComponent', () => {
  let component: ReviewBookedTrailComponent;
  let fixture: ComponentFixture<ReviewBookedTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewBookedTrailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewBookedTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
