import { Action } from '@ngrx/store';


export const START_LOADING = '[UI] start loading';
export const STOP_LOADING = '[UI] stop loading';

export class StartLoading implements Action {
    readonly type = START_LOADING;
}

export class StopLoading implements Action {
    readonly type = STOP_LOADING;
}

export type UIAction = StartLoading | StopLoading;