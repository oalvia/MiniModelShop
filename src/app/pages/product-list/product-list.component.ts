import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from 'src/app/core/services/products/api/api-products.service';
import { ApiProduct } from '../../core/services/products/api/api-products.models';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


public notFoundImage = "../../../../../assets/image/comingSoon.png";

public apiProducts: ApiProduct[] = []; 

constructor(private productsService: ApiProductsService) {}

public ngOnInit(): void{
  this.productsService.getApiProducts().subscribe((productsFromApi) => {
   this.apiProducts = productsFromApi;})
}


// public reviewProductFromList(Id: string){
//   this.products = this.products.filter(product => product.productId !== Id);
// }
}
