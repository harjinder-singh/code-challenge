import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponent } from './item-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { getItemsState } from '../../store/selectors/item.selector';
import { By } from '@angular/platform-browser';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListComponent ],
      providers: [provideMockStore({
          initialState: { coffeeItems: [] },
          selectors: [
            { selector: getItemsState, value: [
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
            }
          ],
        })],
      imports: [
         NgxPaginationModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render component with product listing', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges()
    expect(fixture.debugElement.queryAll(By.css('.item')).length).toBe(2);
  });
});

