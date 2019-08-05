import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  toShoppingListClicked() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
    console.log("Adding in details")
  }

}
