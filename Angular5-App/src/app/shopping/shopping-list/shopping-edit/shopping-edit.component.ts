import { ShoppingService } from './../../shopping.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingService: ShoppingService) { }
  ngOnInit() {
    this.subscription = this.shoppingService.startEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            quantity: this.editedItem.quantity
          });
        }
      );
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.quantity);
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editedItemIndex, ingredient);
    } else {
      this.shoppingService.onIngredientAdded(ingredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
