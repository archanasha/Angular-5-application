import { Injectable } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipe.model';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService,
        private authService: AuthService) { }

    storeRecipe() {
        // return this.http.put('domainURL/recipes.json',
        // this.recipeService.getRecipes(), {
        //     observe: 'body',
        //     params: new HttpParams().set('auth', token),
        // });
        // TODO: add the domain URL of firebase
        const req = new HttpRequest('PUT', 'domainURL/recipes.json',
            this.recipeService.getRecipes(), {reportProgress: true});
        return this.http.request(req);
    }

    fetchRecipe() {
        // TODO: add the domain URL of firebase
        this.http.get<Recipe[]>('domainURL/recipes.json', {
            observe: 'body',
            responseType: 'json',
        }).map(
            (recipes) => {
                // tslint:disable-next-line:prefer-const
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                        console.log(recipe);
                    }
                }
                return recipes;
            }
        ).subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}
