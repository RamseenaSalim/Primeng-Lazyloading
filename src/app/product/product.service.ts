import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productsResponse } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(skip:number):Observable<productsResponse>{
    return this.http.get<productsResponse>(`https://dummyjson.com/products?limit=10&skip=${skip}`);
  }
}
