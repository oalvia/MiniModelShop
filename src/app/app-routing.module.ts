import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'product_list',
    loadChildren: () => import('./pages/product-list/product-list.module').then(m=>m.ProductListModule)
  },
  {
    path:'product_review/:id',
    loadChildren: () => import('./pages/product-review/product-review.module').then(m=>m.ProductReviewModule)
  },
  {
    path:'product_detail/:id',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then(m=>m.ProductDetailModule)
  },
  {
    path:'wishlist',
    loadChildren: () => import('./pages/wishlist/wishlist.module').then(m=>m.WishlistModule)
  },
  {
    path:'**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m=>m.NotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
