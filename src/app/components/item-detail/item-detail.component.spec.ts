import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

import { getItemsState } from '../../store/selectors/item.selector';
import { ItemDetailComponent } from './item-detail.component';

describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailComponent ],
      providers: [
        provideMockStore({
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
        }),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {params: {'id': '1'}},
          },
        }
      ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render component with item detail', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges()
    expect(fixture.debugElement.queryAll(By.css('.item-detail')).length).toBe(1);
  });
});
