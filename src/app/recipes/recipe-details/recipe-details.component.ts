import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  selectedRecipe: Recipe;
  recipeId: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.recipeId = +params.id; // the + in front of params is a cast to a number.
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeId);
      }
    );
  }

  toShoppingListClicked() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
    console.log('Adding in details');
  }

}
