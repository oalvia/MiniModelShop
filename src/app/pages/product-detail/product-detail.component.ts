import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProductsService } from '../../core/services/products/api/api-products.service';
import { ApiProduct } from '../../core/services/products/api/api-products.models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  public apiProduct?: ApiProduct;
  

  
  constructor(
    private activeRoute: ActivatedRoute,
    private productsService: ApiProductsService
  ) {
    this.activeRoute.params.subscribe((params) => { 
      const Id = params['id'];
      this.productsService
        .getApiProductDetail(Id)
        .subscribe((productFromApi) => {
          if(productFromApi){
            this.apiProduct= productFromApi[0];
          console.log(this.apiProduct);
          console.log(Id);
        }
          
          
        });
    });
  }
}
