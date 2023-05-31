import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeFormService {
  constructor(private http: HttpClient) {}

  getSimpleForm(): Observable<Array<any>> {
    return this.http.get<Array<any>>('assets/data/simple-form.json');
  }
}
