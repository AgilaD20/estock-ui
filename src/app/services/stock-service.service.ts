import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockDetails } from '../models/StockDetails';
import { StockInfo } from '../models/StockInfo';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  private Stock_URL: string="http://hackfse2-agila-gateway.westus.azurecontainer.io:8080/stock-manager-service/api/v1.0/market/stock";

  constructor(private http: HttpClient) { }

  getStock(companycode: String,from :Date, to: Date){
    return this.http.get<StockDetails[]>(this.Stock_URL+"/info/"+companycode+"/"+from+"/"+to);

  }

  getStockInfo(companycode: String,from :Date, to: Date){
    return this.http.get<StockInfo>(this.Stock_URL+"/get/"+companycode+"/"+from+"/"+to)
    
  }


}
