import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Product } from './product.modal';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    new Product('Bread', 1),
    new Product('Milk', 0.6),
    new Product('Banana', 0.4),
  ];
  productsUpdated = new Subject<Product[]>();

  constructor(private shoppingCartService: ShoppingCartService) { }

  getProducts() {
    return this.products.slice();
  }

  addProduct(name: string, price: number ) {
    const newProduct = new Product(name, price);
    this.products.push( newProduct );
    this.pushChange();
  }

  updateProduct(id: number, updatedName: string, updatedPrice: number ) {
    for(let product of this.products){
      if(product.getId() === id){
        product.name = updatedName;
        product.price = updatedPrice;
        break;
      }
    }
  }

  deleteProduct(id: number) {
    for (let i = 0; i < this.products.length; i++){
      if(this.products[i].getId() === id){
        this.products.splice(i, 1);
        this.shoppingCartService.removeProduct(id);
        break;
      }
    }
    this.pushChange();
  }

  addProductToShoppingCart(product: Product) {
    this.shoppingCartService.addToShoppingCart(product);
  }

  private pushChange() {
    this.productsUpdated.next(this.products.slice());
  }
}
