import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductReviewRoutingModule } from './product-review-routing.module';
import { ProductReviewComponent } from './product-review.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    ProductReviewRoutingModule,
    RouterModule
  ]
})
export class ProductReviewModule { }
