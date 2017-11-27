import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from '../products/products.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [HeaderComponent],
  providers: [
    ProductsService,
    ShoppingCartService
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ]
})
export class CoreModule { }
