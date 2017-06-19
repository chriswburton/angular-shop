// import our required modules
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Item } from '../models/item.model';


// export our Items service
@Injectable()
export class ItemsService {
  // create a subject for sharing data between components ($' indicates it's a stream)
  items$ = new Subject();
  // provide some mock data (can be fetched from a db later)
  items: Item[] = [
    new Item('Strawberry Laces', 1),
    new Item('Cookies', 2),
    new Item('Doritos', 2)
  ];

  constructor(private _router: Router) { }

  // declare a method to allow other components to get access to our items
  getItems(): void {
    // we'll push a copy of our data out through our subject
    // this prevents other components directly referencing the original data
    this.items$.next(this.items.slice());
  }

  // a helper function to fetch items for us
  getItemById(id: number): Item {
    // we must check the item exists before we return it
    const filteredItems = this.items.filter(item => item.id === id);
    // does the product exist?
    if (filteredItems.length > 0) {
      // we found a match - we'll return it
      return filteredItems[0];
    } else {
      // no match was found! We'll redirect to the storefront
      this._router.navigate(['/store'], {
        queryParams: { error: true }
      });
    }              
  }

  // a helper function to add/edit items
  saveItem(updatedItem: Item): void {
    // does this item exist already?
    if (this.items.filter(item => item.id === +updatedItem.id).length > 0) {
      // it does exist - we'll update it
      this.items = this.items.map(
        item => item.id === +updatedItem.id
        ? updatedItem
        : item
      );
    } else {
      // we need to create it      
      this.items.push(new Item(
        updatedItem.title, 
        updatedItem.price
      ));
    }
    // we'll make a call to getItems() to trigger the subject to emit a new batch
    this.getItems();
    // finish by redirecting back to the storefront
    this._router.navigate(['/store']);
  }

}