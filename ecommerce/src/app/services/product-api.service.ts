import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  url = "http://127.0.0.1:8000/";

  constructor(private httpClient: HttpClient) { }

  public getProductList() {
    return this.httpClient.get(this.url);
  }

  public getCategorybasedProductList(categoryName: string){
    console.log(this.url+'categories/'+categoryName)
    return this.httpClient.get(this.url+'categories/'+categoryName);
  }
}
