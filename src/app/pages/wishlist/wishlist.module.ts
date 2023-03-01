import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist.component';



@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    ReactiveFormsModule

  ]
})
export class WishlistModule { }
