import {Recipe} from './recipe-list/recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply test recipe', 'http://4.bp.blogspot.com/-LDp06Qkodlc/' +
      'UWbNIQak7ZI/AAAAAAAAGfg/oSFabj7Z6tU/s1600/oreo-dessert-MAIN-final.jpg', [
        new Ingredient('Apple', 1),
        new Ingredient('French Fries', 20)
    ]),
    new Recipe('A Test Recipe 2', 'This ' +
      'is simply test recipe 2', 'http://4.bp.blogspot.com/-LDp06Qkodlc/' +
      'UWbNIQak7ZI/AAAAAAAAGfg/oSFabj7Z6tU/s1600/oreo-dessert-MAIN-final.jpg', [
        new Ingredient('Buns', 2),
        new Ingredient('Milk', 3)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
