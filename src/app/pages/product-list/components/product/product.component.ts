import { Component,EventEmitter,Input, Output } from '@angular/core';
import { ApiProduct } from 'src/app/core/services/products/api/api-products.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() public product?: ApiProduct;
  // @Output() public onReview: EventEmitter<void> = new EventEmitter<void>();

constructor(private router: Router){}

public showMore(){
  if(this.product){this.router.navigate(['product_detail', this.product.productId]);
}
  
}
}
