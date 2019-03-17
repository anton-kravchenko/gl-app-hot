import { HOTELS } from '../mocks/hotels.mock';
import { Injectable } from '@angular/core';
import { IHotel } from '../models/hotels.models';

@Injectable({ providedIn: 'root' })
export class HotelsService {
  constructor() {}

  getHotels(): Array<IHotel> {
    return HOTELS;
  }
}
