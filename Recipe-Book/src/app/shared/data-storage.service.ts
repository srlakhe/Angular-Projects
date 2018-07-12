import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe-list/recipe.model';
import {map} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    // const token = this.authService.getToken();

    return this.httpClient.put('https://ng-recipe-book-37745.firebaseio.com/recipes.json',
      this.recipeService.getRecipes());
    // return this.httpClient.put('https://ng-recipe-book-37745.firebaseio.com/recipes.json?auth=' + token,
    //   this.recipeService.getRecipes());
      // {observe: 'events'});
      // { params: new HttpParams().set('auth', token}
      // const req = new HttpRequest('PUT', 'https://ng-recipe-book-37745.firebaseio.com/recipes.json',
      // this.recipeService.getRecipes(), {reportProgress: true, params})
      // this.httpClient.request(req)
  }
  getRecipes() {
    // const token = this.authService.getToken();
    // this.httpClient.get<>('https://ng-recipe-book-37745.firebaseio.com/recipes.json?auth=' + token, {
    //   observe: 'body',
    //   responseType: 'text'
    // })
    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-37745.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-37745.firebaseio.com/recipes.json')
      .pipe(map(
      (recipes) => {
        for(let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    ))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
