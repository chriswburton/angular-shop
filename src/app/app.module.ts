// import angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import our components
import { AppComponent } from './app.component';

// import our services
import { ItemsService } from './services/items.service';

// import components
import { StorefrontComponent } from './components/storefront/storefront.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

// import our routes
import { appRoutes } from './app.routes';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

// declare our module
@NgModule({
  declarations: [
    AppComponent,
    StorefrontComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
