import { HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, of, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(email: string, password: string) {
    return of({}).pipe(
      delay(2000),
      switchMap(() => {
        if (email === 'admin@admin.com' && password === 'secret') {
          return of({
            email,
          });
        }

        return throwError(() => ({
          status: HttpStatusCode.BadRequest,
          message: 'Credenciales de acceso incorrectas',
        }));
      })
    );
  }
}
