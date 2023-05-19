import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { FakeUserService } from 'src/app/services/fake/user.service';

@Injectable({ providedIn: 'root' })
export class EmailExistsValidator {
  constructor(private userService: FakeUserService) {}

  validate(id: number | null = null) {
    return (
      control: FormControl
    ): Observable<{ [key: string]: any } | null> => {
      const value = control.value;

      return this.userService.checkExistsEmail(value, id).pipe(
        map((exists: boolean) => {
          console.log({ exists });
          if (exists) {
            return { emailExists: true };
          }

          return null;
        })
      );
    };
  }
}
