import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AuthGaurdService } from '../auth/auth-gaurd.service';


const recipeRoutes: Routes = [
    { path: 'recipes', component: RecipeComponent, children: [
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGaurdService]},
        { path: ':id', component: RecipeDetailsComponent, canActivate: [AuthGaurdService]},
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGaurdService]},
      ]},
];
@NgModule({
    imports: [
        RouterModule.forChild(recipeRoutes)
    ],
    exports: [RouterModule]
})
export class RecipeRoutingModule {}
