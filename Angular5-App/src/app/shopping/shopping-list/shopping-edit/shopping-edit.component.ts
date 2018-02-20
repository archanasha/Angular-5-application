import { ShoppingService } from './../../shopping.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild ('nameInput') nameInputRef: ElementRef;
  @ViewChild ('quantityInput') quantityInputRef: ElementRef;

  constructor (private shoppingService: ShoppingService) {}
  ngOnInit() {
  }
  onSubmit() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientQuant = this.quantityInputRef.nativeElement.value;
    const ingredient = new Ingredient(ingredientName, ingredientQuant );
    this.shoppingService.onIngredientAdded(ingredient);
  }
}
