import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Product } from '../../products/product.modal';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html'
})
export class ShoppingCartListComponent implements OnInit, OnDestroy {
  shoppingCart: Product[];
  private subscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.subscription = this.shoppingCartService.shoppingCartUpdated.subscribe(
      shoppingCart => this.shoppingCart = shoppingCart
    );
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
