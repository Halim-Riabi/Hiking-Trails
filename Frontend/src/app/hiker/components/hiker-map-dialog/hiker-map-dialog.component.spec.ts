import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikerMapDialogComponent } from './hiker-map-dialog.component';

describe('HikerMapDialogComponent', () => {
  let component: HikerMapDialogComponent;
  let fixture: ComponentFixture<HikerMapDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HikerMapDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HikerMapDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
