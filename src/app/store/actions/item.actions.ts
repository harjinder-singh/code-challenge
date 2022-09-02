import { createAction, props } from '@ngrx/store';
import { Coffee } from '../../models/Coffee';

export const ShowAllAction = createAction('[ITEM] Show All');
export const ShowAllSuccessAction = createAction('[ITEM] Show All Success', props<{ payload: Coffee[]}>());