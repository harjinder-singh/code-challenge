import { createSelector } from '@ngrx/store';
import { ItemState, AppState } from '../app.states';

const selectItems = (state: AppState) => state.items;
export const getItemsState = createSelector(selectItems, (state: ItemState) => state.coffeeItems);