import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let storage = {};
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    spyOn(sessionStorage, 'setItem').and.callFake((key: string, value: string) => storage[key] = value);
    spyOn(sessionStorage, 'getItem').and.callFake((key: string) => storage[key]);
    spyOn(sessionStorage, 'removeItem').and.callFake((key: string) => storage = {});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('iniciar sesion', () => {
    service.login('jssmy@gmail.com', '123456789')
    .subscribe(token => {
      expect(token).toBeTruthy();
      expect(token.user.email).toBe('jssmy@gmail.com');
      expect(service.token().user.email).toBe('jssmy@gmail.com');
  
    })
  });

  it('cerrar session', () => {
    service.logout();
    expect(sessionStorage.removeItem).toHaveBeenCalledWith('auth-user');
    expect(sessionStorage.getItem('auth-user')).toBeFalsy();
  })


});
