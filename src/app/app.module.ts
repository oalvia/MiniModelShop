import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListModule } from './pages/product-list/product-list.module';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductReviewComponent } from './pages/product-review/product-review.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
