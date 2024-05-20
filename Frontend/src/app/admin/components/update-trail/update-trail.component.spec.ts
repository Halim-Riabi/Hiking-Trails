import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrailComponent } from './update-trail.component';

describe('UpdateTrailComponent', () => {
  let component: UpdateTrailComponent;
  let fixture: ComponentFixture<UpdateTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTrailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
