import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {
  private sum: number;
  private subscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.subscription = this.shoppingCartService.sumUpdated.subscribe(
      sum => this.sum = sum
    );
    this.sum = this.shoppingCartService.getSum();
  }

}
