import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestScheduler } from 'rxjs/testing';

import { ShowAllAction, ShowAllSuccessAction } from '../actions/item.actions';
import { ItemEffects } from './item.effects';
import { DataService } from '../../services/data.service';
import { Coffee } from '../../models/Coffee';

describe('ShowsEffects', () => {
  const initialState = { coffeeItems: [] };
  const dataService = jasmine.createSpyObj('DataService', ['getCoffees']);
  let effects: ItemEffects;
  let actions: Observable<any>;
  let store: MockStore<any>;
  let testScheduler: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions),
        { provide: DataService, useValue: dataService }
      ]
    });

    effects = TestBed.inject(ItemEffects);
    store = TestBed.inject(MockStore);
    store.setState({});

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadAllItems$', () => {
    it('should get coffee data and return a ShowAllSuccess action', () => {
      const coffeeItems: Coffee[] = [];
      const action = ShowAllAction();
      const outcome = ShowAllSuccessAction({payload: coffeeItems});

      testScheduler.run(({ hot, cold, expectObservable }: any) => {
        actions = hot('-a', { a: action });
        const response = cold('-b|', { b: coffeeItems });
        dataService.getCoffees.and.returnValue(response);

        expectObservable(effects.loadAllItems$).toBe('--b', { b: outcome });
      });
    });
  });
});