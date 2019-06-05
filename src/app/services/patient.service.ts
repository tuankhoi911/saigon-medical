import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService extends BaseService {

  constructor(public http: HttpClient) {
    super(http, "benhnhan")
  }
}
