import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignupRedirectionComponent } from './login-signup-redirection.component';

describe('LoginSignupRedirectionComponent', () => {
  let component: LoginSignupRedirectionComponent;
  let fixture: ComponentFixture<LoginSignupRedirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSignupRedirectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSignupRedirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
