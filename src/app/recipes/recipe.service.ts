import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'It\'s a pizza',
      'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/dc23cd051d2249a5903d25faf8eeee4c/BFV36537_CC2017_2IngredintDough4Ways-FB.jpg',
      [
        new Ingredient('Shredded Cheese', 2),
        new Ingredient('Tomato Sauce', 1)
      ]
    ),
    new Recipe(
      'Italian Beef',
      'It\'s a Portillos Italian Beef Sub',
      'https://amazingribs.com/files/styles/content_body_600px/public/articles/hero/beef-and-bison-recipes/italian-beef.jpg?itok=sMFKOMku',
      [
        new Ingredient('Beef', 3),
        new Ingredient('Bread', 1)
      ]
    ),
  ];

  constructor( private slService: ShoppingListService) {}

  getRecipes() {
    // using .slice makes it so we return a copy of the recipes object not a direct reference to the recipes object in this class
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
    console.log('Adding in recipe service');
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

}
