import { HOTELS } from '../mocks/hotels.mock';
import { Injectable } from '@angular/core';
import { IHotel, Stars } from '../models/hotels.models';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { NotificationManagerService } from './notification-manager.service';

export type StarsFiltering = Stars | 'All';

@Injectable({ providedIn: 'root' })
export class HotelsService {
  private favoriteHotels: Array<IHotel> = [];

  private hotelsFilteringKeywordSubject: BehaviorSubject<string> = new BehaviorSubject('');
  private hotelsFilteringKeyword = this.hotelsFilteringKeywordSubject.asObservable();

  private hotelsStarsFilteringSubject: BehaviorSubject<StarsFiltering> = new BehaviorSubject<
    StarsFiltering
  >('All');
  private hotelsStarsFiltering = this.hotelsStarsFilteringSubject.asObservable();

  constructor(private notificationsManager: NotificationManagerService) {}

  public getHotels(): Observable<Array<IHotel>> {
    return of(HOTELS); // FIXME : async
  }

  public getFavoriteHotels(): Array<IHotel> {
    return this.favoriteHotels;
  }

  public addToFavoriteHotels(hotelToAdd: IHotel): void {
    if (this.favoriteHotels.includes(hotelToAdd) === false) {
      this.favoriteHotels.push(hotelToAdd);
      this.notificationsManager.postNotification({
        type: 'info',
        message: `${hotelToAdd.title} has ben added to the list of favorite hotels.`,
      });
    } else {
      this.notificationsManager.postNotification({
        type: 'error',
        message: `${hotelToAdd.title} is already in your list of favorite hotels.`,
      });
    }
  }

  public removeFromFavoriteHotels(hotelToRemove: IHotel): void {
    this.favoriteHotels.splice(this.favoriteHotels.indexOf(hotelToRemove), 1);
    this.notificationsManager.postNotification({
      type: 'info',
      message: `${hotelToRemove.title} was removed from the list of favorite hotels.`,
    });
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
