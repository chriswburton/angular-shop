// import the framework modules we need
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Item } from '../../models/item.model';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Item;

  constructor(private _router: Router,
              private _route: ActivatedRoute, 
              private _itemsService: ItemsService) { }

  ngOnInit() {
    // we'll subscribe to our route params to get access to URL data
    // this will allow us keep content updated even if the component is not re-created
    this._route.params
      .subscribe((params: Params) => {  
        const responseData = this._itemsService.getItemById(+params.id);
        // does the product exist?
        if (responseData === false) {
          // it does not exist - we'll force a redirect
          this._router.navigate(['/store'], {
            relativeTo: this._route,
            queryParams: { error: true }
          });
        } else {
          this.product = responseData;
        }
      });     
  }

}
