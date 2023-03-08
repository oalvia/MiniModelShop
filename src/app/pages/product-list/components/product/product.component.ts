import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../../../../core/services/products/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() public product?: Product;
  // @Output() public onReview: EventEmitter<void> = new EventEmitter<void>();

constructor(private router: Router){}

public showMore(){
  if(this.product){this.router.navigate(['product_detail', this.product.productId]);
}
  
}
}
