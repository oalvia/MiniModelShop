import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiProduct } from './api-products.models';

const API_PRODUCT_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}

  public getApiProducts(): Observable<ApiProduct[]> {
    return this.http.get<ApiProduct[]>(`${API_PRODUCT_URL}/products`);
  }

  public getApiProductDetail(id: string): Observable<ApiProduct> {
    return this.http.get<ApiProduct>(`${API_PRODUCT_URL}/products/?productId=${id}`);
  }
}
