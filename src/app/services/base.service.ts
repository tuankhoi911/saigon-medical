import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';




export class BaseService {
  public url: string;
  public API_URL = environment.apiUrl;
  public headerJsonWebToken = `Bearer ${localStorage.getItem(environment.accessToken)}`;


  constructor(public http: HttpClient, url) {
    this.url = url;
  }


  public getAll(): Observable<any[]> {
    const headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.headerJsonWebToken);
    const httpOptions = {
      headers: headers_object
    };

    return this.http
      .get(`${this.API_URL}/${this.url}`, httpOptions)
      .pipe(
        map((response: any[]) => {
          return response;
        })
      )

  }

  public getById(id: number): Observable<any> {
    const headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.headerJsonWebToken);
    const httpOptions = {
      headers: headers_object
    };
    return this.http
      .get(`${this.API_URL}/${this.url}/` + id, httpOptions)
      .pipe(
        map(response => response)
      )
  }

  public create(object: any): Observable<any> {
    const headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.headerJsonWebToken);
    const httpOptions = {
      headers: headers_object
    };
    return this.http
      .post(`${this.API_URL}/${this.url}`, object, httpOptions)
      .pipe(
        map(response => response)
      )
  }

  public update(object: any): Observable<any> {
    const headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.headerJsonWebToken);
    const httpOptions = {
      headers: headers_object
    };
    return this.http
      .put(`${this.API_URL}/${this.url}`, object, httpOptions)
      .pipe(
        map(response => response)
      )
  }

  public delete(id: number): Observable<any> {
    const headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.headerJsonWebToken);
    const httpOptions = {
      headers: headers_object
    };
    return this.http
      .delete(`${this.API_URL}/${this.url}/${id}`, httpOptions)
      .pipe(
        map(response => response)
      )
  }
}

