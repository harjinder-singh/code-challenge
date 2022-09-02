import { Coffee } from '../models/Coffee';

export interface AppState {
	items: ItemState;
}

export interface ItemState {
	coffeeItems: Coffee[];
}