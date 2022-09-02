import * as fromReducer from './item.reducer';
import { ShowAllSuccessAction } from '../actions/item.actions';
import { ItemState } from '../app.states';

describe('ItemReducer', () => {

    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown'
      };
      const state = fromReducer.itemsReducer(initialState, action);

      expect(state).toBe(initialState);
    });

    describe('ShowAllSuccessAction action', () => {

      it('should update the state', () => {
        const { initialState } = fromReducer;
        const newState: ItemState = { coffeeItems: [
          {
              id: 123,
              uid: "Uid String",
              blend_name: "blend",
              origin: "origin",
              variety: "Variety",
              notes: "notes",
              intensifier: "intensifier"
          }
        ]};
        const action = ShowAllSuccessAction({ payload: newState.coffeeItems });
        const state = fromReducer.itemsReducer(initialState, action);

        expect(state).toEqual(newState);
        // Check for immutability
        expect(state).not.toBe(newState);
      });

    });
});
