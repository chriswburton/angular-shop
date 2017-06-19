// define the blueprint for our item
export class Item {
  id: number;

  constructor(public title: string, public price: number) { 
    // generate a (possibly) unique id for our product
    this.id = Math.floor((1 + Math.random()) * 10000);
  }
}
