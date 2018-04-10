import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ShoppingComponent } from './shopping.component';

@NgModule({
    declarations: [
        ShoppingComponent,
        ShoppingEditComponent,
        ShoppingListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: []
})
export class ShoppingModule { }
