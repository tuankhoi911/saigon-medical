import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class OverviewService {
  public urlCard = 'tongquan/cardInfo';
  public urlSex = 'tongquan/tylegioitinh';
  public urlRevenue = 'tongquan/doanhthu';
  public urlDpt = 'tongquan/tylechucvu';
  public urlIncome = 'tongquan/doanhthumuoihaithang';
  public urlPat = 'tongquan/benhnhanmoi';
  public urlEmp = 'tongquan/nhanvientieubieu';
  public API_URL = environment.apiUrl;
  public headerJsonWebToken = `Bearer ${localStorage.getItem(environment.accessToken)}`;


  constructor(public http: HttpClient) {

  }


  public getAllCard(): Observable<any[]> {
    const headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.headerJsonWebToken);
    const httpOptions = {
      headers: headers_object
    };

    return this.http
      .get(`${this.API_URL}/${this.urlCard}`, httpOptions)
      .pipe(
        map((response: any[]) => {
          return response;
        })
      )

  }
  public getAllRevenue(): Observable<any[]> {
    const headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.headerJsonWebToken);
    const httpOptions = {
      headers: headers_object
    };

    return this.http
      .get(`${this.API_URL}/${this.urlRevenue}`, httpOptions)
      .pipe(
        map((response: any[]) => {
          return response;
        })
      )

  }
  public getAllGenderRate(): Observable<any[]> {
    const headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.headerJsonWebToken);
    const httpOptions = {
      headers: headers_object
    };

    return this.http
      .get(`${this.API_URL}/${this.urlSex}`, httpOptions)
      .pipe(
        map((response: any[]) => {
          return response;
        })
      )

  }
  public getAllDptRate(): Observable<any[]> {
    const headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.headerJsonWebToken);
    const httpOptions = {
      headers: headers_object
    };

    return this.http
      .get(`${this.API_URL}/${this.urlDpt}`, httpOptions)
      .pipe(
        map((response: any[]) => {
          return response;
        })
      )

  }
  public getAllIncome(): Observable<any[]> {
    const headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.headerJsonWebToken);
    const httpOptions = {
      headers: headers_object
    };

    return this.http
      .get(`${this.API_URL}/${this.urlIncome}`, httpOptions)
      .pipe(
        map((response: any[]) => {
          return response;
        })
      )

  }
  public getPatient(): Observable<any[]> {
    const headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.headerJsonWebToken);
    const httpOptions = {
      headers: headers_object
    };

    return this.http
      .get(`${this.API_URL}/${this.urlPat}`, httpOptions)
      .pipe(
        map((response: any[]) => {
          return response;
        })
      )

  }
  public getEmployee(): Observable<any[]> {
    const headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.headerJsonWebToken);
    const httpOptions = {
      headers: headers_object
    };

    return this.http
      .get(`${this.API_URL}/${this.urlEmp}`, httpOptions)
      .pipe(
        map((response: any[]) => {
          return response;
        })
      )

  }

}

