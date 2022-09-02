import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Coffee } from '../../models/Coffee';
import { getItemsState } from '../../store/selectors/item.selector';
import { AppState } from '../../store/app.states';
import { ShowAllAction } from '../../store/actions/item.actions';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent implements OnInit, OnDestroy {

  items: Coffee[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  subscription: any;

  constructor( private store: Store<AppState>, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.store.dispatch(ShowAllAction());
    this.subscription = this.store.select(getItemsState).subscribe(result => {
      this.items = result;
      this.cdr.markForCheck();
    }
    ); 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
