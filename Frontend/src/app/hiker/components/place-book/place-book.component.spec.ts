import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceBookComponent } from './place-book.component';

describe('PlaceBookComponent', () => {
  let component: PlaceBookComponent;
  let fixture: ComponentFixture<PlaceBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
