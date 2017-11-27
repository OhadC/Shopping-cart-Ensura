import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ProductsModule,
    ShoppingCartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
