import { Subject } from 'rxjs/Subject';

import { Product } from '../products/product.modal';

export class ShoppingCartService {
  private shoppingCart: Product[] = [];
  private sum: number = 0;

  shoppingCartUpdated = new Subject<Product[]>();
  sumUpdated = new Subject<number>();

  constructor() { }

  getShoppingCart() {
    return this.shoppingCart.slice();
  }
  getSum() {
    return this.sum;
  }

  addToShoppingCart(product: Product){
    this.shoppingCart.push(product);
    this.pushChange();
  }

  removeFromShoppingCart(index: number) {
    this.shoppingCart.splice(index, 1);
    this.pushChange();
  }

  removeProduct(id: number) {
    for (let i = this.shoppingCart.length - 1; i >= 0; i--){
      if(this.shoppingCart[i].getId() === id){
        this.shoppingCart.splice(i, 1);
      }
    }
    this.pushChange();
  }

  private updateSum() {
    let updatedSum = 0;
    for(let product of this.shoppingCart){
      updatedSum += product.price;
    }
    this.sum = updatedSum;
    this.sumUpdated.next(this.sum);
  }

  private pushChange() {
    this.shoppingCartUpdated.next(this.shoppingCart.slice());
    this.updateSum();
  }


}
