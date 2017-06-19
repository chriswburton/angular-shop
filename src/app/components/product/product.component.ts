// import our framework assets
import { Component, Input } from '@angular/core';

// import our item model
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  // the item this component is rendering is being passed in
  @Input() item: Item;
}
