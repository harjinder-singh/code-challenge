import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Coffee } from '../../models/Coffee';
import { AppState } from '../../store/app.states';
import { getItemsState } from '../../store/selectors/item.selector';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemDetailComponent implements OnInit, OnDestroy {

  selectedItemId: number | undefined;
  selectedItem: Coffee | undefined;
  subscription: any;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { 
  }

  ngOnInit(): void {
    this.selectedItemId = +this.route.snapshot.params['id'];
    this.subscription = this.store.select(getItemsState).subscribe(result => {
      this.selectedItem = result.find((item) => item.id === this.selectedItemId);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
