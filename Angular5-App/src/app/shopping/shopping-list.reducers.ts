import { Action } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

const initialState = {
    ingredients: [
        new Ingredient('egg', 1),
        new Ingredient('tomatoes', 2)
    ]
};

export function ShoppingListReducers(state = initialState, action: Action) {
    switch (action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action]
            };
    }
    return state;
}
