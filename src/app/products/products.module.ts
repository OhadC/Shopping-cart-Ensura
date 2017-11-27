import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list/product-list-item/product-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductListItemComponent
  ]
})
export class ProductsModule { }
