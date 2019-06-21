import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public API_URL = environment.apiAuthUrl;

  constructor(public http: HttpClient) {
  }

  public login(object: any): Observable<any> {
    return this.http
      .post(`${this.API_URL}`, object)
      .pipe(
        map(response => response)
      )
  }
}
