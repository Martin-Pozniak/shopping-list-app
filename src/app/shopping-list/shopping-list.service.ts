import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {

  // We manage the data for a shopping list in the shopping list service.
  // We access the data in the necessary components through accessor functions.
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 3)
  ];

  ingredientsChanged = new Subject<Ingredient[]>();

  constructor(){}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingName, ingAmount) {
    const newIngredient: Ingredient = new Ingredient(ingName, ingAmount);
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // Could also use this.ingredients.push(...ingredients); //its called the spread operator
    this.ingredients = this.ingredients.concat(ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
    console.log('Added in shopping list');
  }

  onDeleteItem() {

  }

  onClearItem() {

  }

}
