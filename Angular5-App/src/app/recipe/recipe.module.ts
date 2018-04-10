import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeComponent } from './recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        RecipeComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailsComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipeRoutingModule,
        SharedModule
    ],
    exports: []
})
export class RecipeModule {}
