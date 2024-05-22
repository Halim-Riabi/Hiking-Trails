import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookedTrailsComponent } from './view-booked-trails.component';

describe('ViewBookedTrailsComponent', () => {
  let component: ViewBookedTrailsComponent;
  let fixture: ComponentFixture<ViewBookedTrailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookedTrailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBookedTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
