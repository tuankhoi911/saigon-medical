import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicineService extends BaseService {

  constructor(public http: HttpClient) {
    super(http, "thuoc")
  }
}
