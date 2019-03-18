import { HOTELS } from '../mocks/hotels.mock';
import { Injectable } from '@angular/core';
import { IHotel } from '../models/hotels.models';
// import { of, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HotelsService {
  constructor() {}

  private favoriteHotels: Array<IHotel> = [];
  private selectedHotel: IHotel = HOTELS[0];

  // public getHotels(): Observable<Array<IHotel>> {
  //   return of(HOTELS);
  // }

  public getHotels(): Array<IHotel> {
    return HOTELS;
  }

  public getFavoriteHotels(): Array<IHotel> {
    return this.favoriteHotels;
  }

  public addToFavoriteHotels(h: IHotel) {
    console.log('added to favs', h.id);
    return this.favoriteHotels.push(h);
  }

  public removeFromFavoriteHotels(h: IHotel) {
    this.favoriteHotels = this.favoriteHotels.filter(hotel => hotel !== h);
  }

  public selectHotel(h: IHotel): void {
    this.selectedHotel = h;
    console.log(h.id);
  }

  public getSelectedHotel(): IHotel {
    return this.selectedHotel;
  }
}
