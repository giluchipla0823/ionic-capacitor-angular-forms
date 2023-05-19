import { Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeUserService {
  private users: Array<any> = [
    {
      id: 1,
      firstName: 'Harry',
      lastName: 'Potter',
      email: 'harry.potter@gmail.com',
    },
    {
      id: 2,
      firstName: 'Emma',
      lastName: 'Watson',
      email: 'emma.watson@gmail.com',
    },
  ];

  constructor() {}

  checkExistsEmail(email: string, id: number = null): Observable<boolean> {
    return of(this.users).pipe(
      delay(1000),
      map((users) =>
        users.some((user) => {
          return user.email === email && (!!id ? user.id !== id : true);
        })
      )
    );
  }
}
