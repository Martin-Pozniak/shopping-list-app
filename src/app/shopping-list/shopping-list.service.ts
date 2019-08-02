import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

  // We manage the data for a shopping list in the shopping list service.
  // We access the data in the necessary components through accessor functions.
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 3)
  ];

  newIngredientAdded: EventEmitter<Ingredient> = new EventEmitter();

  getIngredients() {
    return this.ingredients.slice();
  }

  onAddItem(ingName, ingAmount) {
    const newIngredient: Ingredient = new Ingredient(ingName, ingAmount);
    this.ingredients.push(newIngredient);
  }

  onDeleteItem() {

  }

  onClearItem() {

  }

}
