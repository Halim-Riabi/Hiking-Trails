import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTrailComponent } from './post-trail.component';

describe('PostTrailComponent', () => {
  let component: PostTrailComponent;
  let fixture: ComponentFixture<PostTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTrailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
