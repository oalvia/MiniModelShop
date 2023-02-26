import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from './components/product/product.component';
import { UppercaseDirective } from './directives/uppercase.directive';
import { FormsModule } from '@angular/forms';
import { ProducListRoutingModule } from './product-list-routing.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    UppercaseDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProducListRoutingModule,
    RouterModule
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductListModule { }
