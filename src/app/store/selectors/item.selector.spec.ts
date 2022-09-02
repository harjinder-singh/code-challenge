import {getItemsState} from './item.selector';
import { ItemState } from '../app.states';

describe('Selectors', () => {

  it('should select all coffees', () => {
    const initialState: ItemState = {
        coffeeItems: [
        {
            id: 1,
            uid: "Uid String -1",
            blend_name: "blend-1",
            origin: "origin-1",
            variety: "Variety-1",
            notes: "notes-1",
            intensifier: "intensifier-1"
        },
        {
            id: 2,
            uid: "Uid String-2",
            blend_name: "blend-2",
            origin: "origin-2",
            variety: "Variety-2",
            notes: "notes-2",
            intensifier: "intensifier-2"
        }
      ]
    };
    const result = getItemsState.projector(initialState);
    expect(result.length).toEqual(2);
  });

});
