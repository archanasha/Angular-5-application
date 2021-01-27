import { Action } from '@ngrx/store';
import { START_LOADING, STOP_LOADING, UIAction } from './ui.actions';

export interface State {
    isLoading: boolean
}

const initialState: State = {
    isLoading: false
}

export function uiReducer(state = initialState, action: UIAction) {
    switch (action.type) {
        case START_LOADING:
            return {
                isLoading: true
            }
        case STOP_LOADING:
            return {
                isLoading: true
            }
        default:
            return state;
    }
}

export const getIsloading = (state: State) => state.isLoading;