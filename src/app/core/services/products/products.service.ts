import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiProduct } from './api/api-products.models';
import { ApiProductsService } from './api/api-products.service';
import { Product } from './product.models';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  public alterImage = "MiniModelShop/src/assets/image/comingSoon.png"

  constructor(private apiProductsService: ApiProductsService) {}
  public getProducts(): Observable<Product[]> {
    return this.apiProductsService.getApiProducts().pipe(
      map((products: ApiProduct[]) => {
        return products.map((product: ApiProduct) => {
          



          
          return product;
        });
      })
    );
  }
}
