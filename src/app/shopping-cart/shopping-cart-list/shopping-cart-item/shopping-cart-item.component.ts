import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../../products/product.modal';
import { ShoppingCartService } from '../../shopping-cart.service';

@Component({
  selector: '[app-shopping-cart-item]',
  templateUrl: './shopping-cart-item.component.html'
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() product: Product;
  @Input() index: number;


  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  onDelete(){
    this.shoppingCartService.removeFromShoppingCart(this.index);
  }

}
