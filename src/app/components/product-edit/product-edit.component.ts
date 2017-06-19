// angular imports
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// we also need our item service
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  // declare a property for our product form
  productForm: FormGroup;

  constructor(private _route: ActivatedRoute,
              private _itemsService: ItemsService) { }

  ngOnInit(): void {
    // we'll fetch our target product from our URL and then grab it with our service
    let currentData = this._itemsService.getItemById(+this._route.snapshot.params.id);    
    // declare our form
    this.productForm = new FormGroup({
      id: new FormControl(currentData.id),
      title: new FormControl(currentData.title, [Validators.required, Validators.minLength(4)]),
      price: new FormControl(currentData.price, [Validators.required, Validators.pattern(/^(0|[1-9][0-9]*)$/)])
    });
  }

  // method to handle the submission of our form
  onSubmit(): void {
    // we'll use a method on our items service to do this
    this._itemsService.saveItem(this.productForm.value);
  }

}
