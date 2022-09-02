import { createReducer, on } from '@ngrx/store';
import { ShowAllSuccessAction} from '../actions/item.actions';
import { ItemState } from '../app.states';

export const initialState: ItemState = {coffeeItems: []};

// Creating reducer
export const itemsReducer = createReducer(
  initialState,
  on(ShowAllSuccessAction, (state, {payload}) => ({...state, coffeeItems: payload}))
);
