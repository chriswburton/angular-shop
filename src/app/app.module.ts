// import angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import our components
import { AppComponent } from './app.component';

// import our services
import { ItemsService } from './services/items.service';

// import compponents
import { StorefrontComponent } from './components/storefront/storefront.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

// import our routes
import { appRoutes } from './app.routes';

// declare our module
@NgModule({
  declarations: [
    AppComponent,
    StorefrontComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
