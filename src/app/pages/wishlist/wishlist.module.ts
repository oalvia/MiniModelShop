import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistRoutingModule } from './wishlist-routing.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    ReactiveFormsModule,
    RouterModule,
   

  ]
})
export class WishlistModule { }
