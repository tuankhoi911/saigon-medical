import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


export class BaseService {
  public url: string;
  public API_URL = environment.apiUrl;

  constructor(public http: HttpClient, url) {
    this.url = url;
  }

  public getAll(): Observable<any[]> {
    return this.http
      .get(`${this.API_URL}/${this.url}`)
      .pipe(
        map((response: any[]) => {
          return response;
        })
      )
  }

  public getById(id: number): Observable<any> {
    return this.http
      .get(`${this.API_URL}/${this.url}` + id)
      .pipe(
        map(response => response)
      )
  }

  public create(object: any): Observable<any> {
    return this.http
      .post(`${this.API_URL}/${this.url}`, object)
      .pipe(
        map(response => response)
      )
  }
  
  public update(object: any): Observable<any> {
    return this.http
      .put(`${this.API_URL}/${this.url}` + object.id, object)
      .pipe(
        map(response => response)
      )
  }

  public delete(id: number): Observable<any> {
    return this.http
      .delete(`${this.API_URL}/${this.url}/${id}`)
      .pipe(
        map(response => response)
      )
  }
}
