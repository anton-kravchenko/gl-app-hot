import { HOTELS } from '../mocks/hotels.mock';
import { Injectable } from '@angular/core';
import { IHotel } from '../models/hotels.models';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HotelsService {
  constructor() {}

  public getHotels(): Observable<Array<IHotel>> {
    return of(HOTELS);
  }
}
