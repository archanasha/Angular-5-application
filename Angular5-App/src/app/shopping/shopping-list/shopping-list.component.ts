import { ShoppingService } from './../shopping.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingService: ShoppingService) { }
  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.ingredientsChanged.subscribe(
      (ingredientList: Ingredient[]) => {
        this.ingredients = ingredientList;
      });
  }

  onEditItem(index: number) {
    this.shoppingService.startEditing.next(index);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
