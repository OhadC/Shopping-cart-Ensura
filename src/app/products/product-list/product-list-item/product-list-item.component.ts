import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../product.modal';
import { ProductsService } from '../../products.service';

@Component({
  selector: '[app-product-list-item]',
  templateUrl: './product-list-item.component.html'
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  onAdd() {
    this.productsService.addProductToShoppingCart(this.product);
  }

  onProductDelete() {
    this.productsService.deleteProduct(this.product.getId());
  }

}
