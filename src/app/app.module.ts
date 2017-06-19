// import angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import our components
import { AppComponent } from './app.component';

// import our services
import { ItemsService } from './services/items.service';

// import compponents
import { StorefrontComponent } from './components/storefront/storefront.component';
import { ProductComponent } from './components/product/product.component';

// declare our module
@NgModule({
  declarations: [
    AppComponent,
    StorefrontComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
