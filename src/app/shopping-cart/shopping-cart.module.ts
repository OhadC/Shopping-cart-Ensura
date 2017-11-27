import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartListComponent } from './shopping-cart-list/shopping-cart-list.component';
import { ShoppingCartItemComponent } from './shopping-cart-list/shopping-cart-item/shopping-cart-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShoppingCartComponent,
    ShoppingCartListComponent,
    ShoppingCartItemComponent
  ]
})
export class ShoppingCartModule { }
