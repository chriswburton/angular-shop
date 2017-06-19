// import angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import our components
import { AppComponent } from './app.component';

// import our services
import { ItemsService } from './services/items.service';

// declare our module
@NgModule({
  declarations: [
    AppComponent
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
