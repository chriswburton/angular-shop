// get our 'Routes' type
import { Routes } from '@angular/router';

// import our components that will form our routes
import { StorefrontComponent } from './components/storefront/storefront.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

// export our route structure
export const appRoutes: Routes = [
    { path: '', redirectTo: '/store', pathMatch: 'full' },
    { path: 'store', component: StorefrontComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'product/:id/edit', component: ProductEditComponent },
    // we can finish by declaring a catch-all route
    { path: '**', redirectTo: '/store' }
];