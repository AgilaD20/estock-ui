import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { companyDetails } from '../models/companyDetails';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private COMPANY_URL: string="http://localhost:8082/api/v1.0/market/company";

  constructor(private http: HttpClient) { }

  getCompany(companycode : String){
    return this.http.get<companyDetails>(this.COMPANY_URL+"/info/"+companycode);
  }
}
