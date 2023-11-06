import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {LoginPresenter} from './login.presenter';
import {AuthService} from './commons/services/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {of, throwError} from 'rxjs';
import {TokenAuth} from '../../commons/models/token-auth';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        LoginComponent
      ],
      providers: [
        // { provide: Router, useValue: mockRouter },
        LoginPresenter,
        AuthService,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
    spyOn(component.router, 'navigate').and.returnValue(Promise.resolve(true));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do onLogin success', () => {
    component.presenter.email.setValue('test@gmail.com');
    component.presenter.password.setValue('*');
    spyOn(authService, 'login').and.returnValue(of({
      user: {},
      expiredIn: 123123
    } as TokenAuth));
    component.onLogin();
    expect(authService.login).toHaveBeenCalled();
    expect(component.router.navigate).toHaveBeenCalled();
  });

  it('should do onLogin failed', () => {
    const error = {status: 404};
    component.presenter.email.setValue('test@gmail.com');
    component.presenter.password.setValue('*');
    spyOn(component, 'errorLogin');
    spyOn(authService, 'login').and.returnValue(throwError(error));
    component.onLogin();
    expect(component.errorLogin).toHaveBeenCalled();
  });
});