import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Coffee } from '../models/Coffee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl: string = 'https://random-data-api.com/api/coffee/random_coffee';
  returnSize: number = 50;

  constructor( private httpClient: HttpClient) { }

  getCoffees() : Observable<Coffee[]> {
    return this.httpClient.get<Coffee[]>(`${this.apiUrl}?size=${this.returnSize}`);
  }
  
}
