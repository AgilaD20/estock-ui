import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { companyDetails } from '../models/companyDetails';

@Injectable({
  providedIn: 'root'
})
export class CompanyRegistrationServiceService {

  private COMPANY_URL: string="http://localhost/api/v1.0/";

  constructor(private http: HttpClient) { }

  addCompany(companyDetails : companyDetails){
    return this.http.post<companyDetails>(this.COMPANY_URL+"/register",companyDetails);
  }
}
