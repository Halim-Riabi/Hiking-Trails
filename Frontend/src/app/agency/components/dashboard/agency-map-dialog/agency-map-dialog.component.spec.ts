import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyMapDialogComponent } from './agency-map-dialog.component';

describe('AgencyMapDialogComponent', () => {
  let component: AgencyMapDialogComponent;
  let fixture: ComponentFixture<AgencyMapDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyMapDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyMapDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
