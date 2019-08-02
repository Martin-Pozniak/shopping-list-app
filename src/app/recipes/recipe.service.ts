import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'It\'s a pizza',
      'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/dc23cd051d2249a5903d25faf8eeee4c/BFV36537_CC2017_2IngredintDough4Ways-FB.jpg'
    ),
    new Recipe(
      'Italian Beef',
      'It\'s a Mario',
      'https://amazingribs.com/files/styles/content_body_600px/public/articles/hero/beef-and-bison-recipes/italian-beef.jpg?itok=sMFKOMku'),
  ];

  getRecipes() {
    // using .slice makes it so we return a copy of the recipes object not a direct reference to the recipes object in this class
    return this.recipes.slice();
  }

}
