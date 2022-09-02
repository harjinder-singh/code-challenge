import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { Coffee } from '../models/Coffee';

describe('DataService', () => {
  let httpTestingController: HttpTestingController;
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getData should return expected data', (done) => {
    const expectedData: Coffee[] = [
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
              ];
 
    service.getCoffees().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
 
    const testRequest = httpTestingController.expectOne('https://random-data-api.com/api/coffee/random_coffee?size=50');
 
    testRequest.flush(expectedData);
  });
});
