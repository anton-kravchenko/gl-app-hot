import { HOTELS } from '../mocks/hotels.mock';
import { Injectable } from '@angular/core';
import { IHotel, Stars } from '../models/hotels.models';
import { Observable, of, BehaviorSubject } from 'rxjs';

export type StarsFiltering = Stars | 'All';

@Injectable({ providedIn: 'root' })
export class HotelsService {
  private favoriteHotels: Array<IHotel> = [];

  private hotelsFilteringKeywordSubject: BehaviorSubject<
    string
  > = new BehaviorSubject('');
  private hotelsFilteringKeyword = this.hotelsFilteringKeywordSubject.asObservable();

  private hotelsStarsFilteringSubject: BehaviorSubject<
    StarsFiltering
  > = new BehaviorSubject<StarsFiltering>('All');
  private hotelsStarsFiltering = this.hotelsStarsFilteringSubject.asObservable();

  public getHotels(): Observable<Array<IHotel>> {
    return of(HOTELS);
  }

  public getFavoriteHotels(): Array<IHotel> {
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

  public getHotelsFilterKeyword(): Observable<string> {
    return this.hotelsFilteringKeyword;
  }

  public setHotelsFilterKeyword(keyword: string): void {
    this.hotelsFilteringKeywordSubject.next(keyword);
  }

  public getHotelsStarsFiltering(): Observable<StarsFiltering> {
    return this.hotelsStarsFiltering;
  }

  public setHotelsStatsFiltering(starsFilter: StarsFiltering): void {
    this.hotelsStarsFilteringSubject.next(starsFilter);
  }
}
