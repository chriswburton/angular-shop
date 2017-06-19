// import our required modules
import { Subject } from 'rxjs/Subject';
import { Item } from '../models/item.model';

// export our Items service
export class ItemsService {
  // create a subject for sharing data between components ($' indicates it's a stream)
  items$ = new Subject();
  // provide some mock data (can be fetched from a db later)
  items: Item[] = [
    new Item('Strawberry Laces', 1),
    new Item('Cookies', 2),
    new Item('Doritos', 2)
  ];

  // declare a method to allow other components to get access to our items
  getItems(): void {
    // we'll push a copy of our data out through our subject
    // this prevents other components directly referencing the original data
    this.items$.next(this.items.slice());
  }

  // a helper function to fetch items for us
  getItemById(id: number): Item | false {
    // we must check the item exists before we return it
    const filteredItems = this.items.filter(item => item.id === id);
    if (filteredItems.length > 0) {
      // we found a match - we'll return it
      return filteredItems[0];
    } else {
      // no match was found! We'll redirect to the storefront
      return false;
    }              
  }

}