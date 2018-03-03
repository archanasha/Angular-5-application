import { ShoppingService } from './../shopping/shopping.service';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  constructor(private shoppingService: ShoppingService) { }
  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'cheese burger',
      './assets/images/burger.jpg',
      [new Ingredient('Cheese slice', 1),
      new Ingredient('Lettuce', 1),
      new Ingredient('Buns', 2),
      ]),
    new Recipe(
      'sandwich',
      'Veg sandwiches',
      './assets/images/sandwich.jpg',
      [new Ingredient('Tomatoes', 1),
      new Ingredient('Capsicum', 1),
      new Ingredient('Bread slice', 4),
      ]),
    new Recipe(
      'Milkshake',
      'Mango milkshake',
      './assets/images/milkshake-mango.jpg',
      [new Ingredient('Mango', 1),
      new Ingredient('milk', 1),
      new Ingredient('sugar', 2),
      ]),
    new Recipe(
      'Pancake',
      'Banana Pancake',
      './assets/images/pancake.jpg',
      [new Ingredient('Banana', 1),
      new Ingredient('Egg', 1),
      new Ingredient('sugar', 2),
      new Ingredient('Flour ', 2),
      new Ingredient('salt ', 2),
      new Ingredient('Butter ', 2),
      ]),
    new Recipe(
      'Fries',
      'Potato fries',
      './assets/images/fries.jpg',
      [new Ingredient('Sliced Potato', 2),
      new Ingredient('salt', 1),
      new Ingredient('oil', 0.5),
      new Ingredient('White cheese', 0.5),
      ]),
    new Recipe(
      'Strawberry cake',
      'Yummy cake!!',
      './assets/images/Strawberry Cake.jpg',
      [new Ingredient('All purpose flour', 2),
      new Ingredient('Sugar', 1),
      new Ingredient('Cream', 0.5),
      new Ingredient('Strawberries', 4),
      ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  getrecipe(index: number) {
    return this.recipes.slice()[index];
  }

  onAddIngredientToShopList(ingredients: Ingredient[]) {
    this.shoppingService.onAddIngridientToList(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
}
