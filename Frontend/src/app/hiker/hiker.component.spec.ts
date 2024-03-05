import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikerComponent } from './hiker.component';

describe('HikerComponent', () => {
  let component: HikerComponent;
  let fixture: ComponentFixture<HikerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HikerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
