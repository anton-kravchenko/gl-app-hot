import { Component, Input, Output, EventEmitter } from '@angular/core';
import { range } from 'lodash';
import { IHotel } from '../models/hotels.models';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css'],
})
export class HotelCardComponent {
  @Input() hotel: IHotel;
  @Input() isSelected: boolean;
  @Output() selectHotel = new EventEmitter<IHotel>();

  public range = range;

  constructor(private hotelsService: HotelsService) {}

  public addToFavorites(h: IHotel): void {
    this.hotelsService.addToFavoriteHotels(h);
  }

  public removeFromFavorites(h: IHotel): void {
    this.hotelsService.removeFromFavoriteHotels(h);
  }

  public isInListOfFavorites(h: IHotel): boolean {
    return this.hotelsService.isInFavorites(h);
  }

  public generateRange(till: number): Array<number> {
    return range(till);
  }
}
