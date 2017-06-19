// import framework dependencies
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// import our required resources
import { ItemsService } from './services/items.service';
import { Item } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

}
