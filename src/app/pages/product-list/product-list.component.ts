import { Component, OnInit } from '@angular/core';
import { Product } from './../../core/services/products/product.models';
import { ProductsService } from './../../core/services/products/products.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


public notFoundImage = "../../../../../assets/image/comingSoon.png";

public products: Product[]=[];

constructor(private productsService: ProductsService) {}

public ngOnInit(): void{
  this.productsService.getProducts().subscribe((productsFromApi) => {
   this.products = productsFromApi;})
}
}
