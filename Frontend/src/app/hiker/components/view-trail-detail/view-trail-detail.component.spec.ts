import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrailDetailComponent } from './view-trail-detail.component';

describe('ViewTrailDetailComponent', () => {
  let component: ViewTrailDetailComponent;
  let fixture: ComponentFixture<ViewTrailDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTrailDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTrailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
