import { Injectable } from '@angular/core';
import { Observable, of, switchMap, tap, throwError, timer } from 'rxjs';
import { TokenAuth } from 'src/app/commons/models/token-auth';
import { User } from 'src/app/commons/models/user';
import { DateUtil } from 'src/app/utils/date';
const usersMock: User[] = require('./../dummy/users.mock.json');
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): Observable<TokenAuth> {

    const user = usersMock.find(usr => usr.email.toLowerCase() === email.toLowerCase() && usr.password === password);

    const error = {
      status: 404,
      message: 'Usuario no encontrado'
    };

    return of(user)
      .pipe(
        switchMap(user$ => {
          if (!user$) {
            return throwError(() => error);
          }

          const token: TokenAuth = {
            user: user$,
            expiredIn: DateUtil.getCurrent().add(15, 'minutes').toDate().getTime()
          };
          return of(token)

        }),
        tap(user$ => {
          sessionStorage.setItem('auth-user', JSON.stringify(user$));
        })
      );
  }

  user(): User {
    const token: TokenAuth = JSON.parse(sessionStorage.getItem('auth-user'));
    return token.user;
  }

  token(): TokenAuth {
    const token: TokenAuth = JSON.parse(sessionStorage.getItem('auth-user'));
    return token;
  }

  logout(): void {
    sessionStorage.removeItem('auth-user');
  }
}
