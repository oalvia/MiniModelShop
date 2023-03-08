import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiProduct } from './api-products.models';


const API_PRODUCT_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  constructor(private http: HttpClient) {}

  public getApiProducts(): Observable<ApiProduct[]> {
    return this.http.get<ApiProduct[]>(`${API_PRODUCT_URL}/products`);
  }

  public getApiProductDetail(id: string): Observable<ApiProduct[]> {
    let params = new HttpParams().set('productId', id);
    return this.http.get<ApiProduct[]>(`${API_PRODUCT_URL}/products`, {
      params: params,
    });
  }
}