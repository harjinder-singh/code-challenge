import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ShowAllAction, ShowAllSuccessAction } from '../actions/item.actions';
import { DataService } from '../../services/data.service';

@Injectable()
export class ItemEffects {

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) { }

  loadAllItems$ = createEffect(() => this.actions$.pipe(
    ofType(ShowAllAction),
    switchMap(() =>
      this.dataService.getCoffees().pipe(
        map(result =>  ShowAllSuccessAction({payload: result}))
      )
    )
  ));

} 