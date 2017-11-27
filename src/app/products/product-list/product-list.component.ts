import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Product } from '../product.modal';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];
  private subscription: Subscription;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.subscription = this.productsService.productsUpdated.subscribe(
      products => this.products = products
    );
    this.products = this.productsService.getProducts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
