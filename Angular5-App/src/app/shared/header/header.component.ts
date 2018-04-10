import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { Recipe } from '../../recipe/recipe.model';
import { RecipeService } from '../../recipe/recipe.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorage: DataStorageService,
    private recipeService: RecipeService, public authService: AuthService) { }

  onSaveData() {
    this.dataStorage.storeRecipe()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorage.fetchRecipe();
  }

  onLogout() {
    this.authService.logoutUser();
  }

}
