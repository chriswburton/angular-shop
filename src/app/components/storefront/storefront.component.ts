// import framework dependencies
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// import our required resources
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item.model';
import { ProductComponent } from '../product/product.component';

// declare our component
@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit, OnDestroy {
  // declare our properties
  items: Item[] = [];
  itemSubscription: Subscription;

  // get access to our app-wide instance of our ItemService
  constructor(private _itemsService: ItemsService) {}

  // run our initialisation logic
  ngOnInit() { 
    // create a subscription to our shared item data
    this.itemSubscription = this._itemsService
      .items$.subscribe((items: Item[]) => this.items = items);
    // fetch our item data
    this._itemsService.getItems();    
  }

  // to avoid any memory leaking, we'll clean up our item subscription on exit
  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
  }

}
