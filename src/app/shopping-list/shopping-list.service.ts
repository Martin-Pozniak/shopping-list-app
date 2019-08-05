import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

  // We manage the data for a shopping list in the shopping list service.
  // We access the data in the necessary components through accessor functions.
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 3)
  ];

  // newIngredientAdded = new EventEmitter<Ingredient>();
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingName, ingAmount) {
    const newIngredient: Ingredient = new Ingredient(ingName, ingAmount);
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  onDeleteItem() {

  }

  onClearItem() {

  }

}
