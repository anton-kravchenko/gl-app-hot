import { HOTELS } from '../mocks/hotels.mock';
import { Injectable } from '@angular/core';
import { IHotel } from '../models/hotels.models';
import { Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class HotelsService {
  private favoriteHotels: Array<IHotel> = [];

  constructor() {}

  public getHotels(): Observable<Array<IHotel>> {
    return of(HOTELS);
  }

  public getFavoriteHotels(): Array<IHotel>{
    return this.favoriteHotels;
  }

  public addToFavoriteHotels(hotelToAdd: IHotel): void {
    if (this.favoriteHotels.includes(hotelToAdd) === false) {
      this.favoriteHotels.push(hotelToAdd);
    }
  }

  public removeFromFavoriteHotels(hotelToRemove: IHotel): void {
    this.favoriteHotels.splice(this.favoriteHotels.indexOf(hotelToRemove), 1);
  }

  public isInFavorites(hotel: IHotel): boolean {
    return this.favoriteHotels.includes(hotel);
  }
}
