import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { range } from 'lodash';
import { IHotel } from '../models/hotels.models';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css'],
})
export class HotelCardComponent implements OnInit {
  @Input() hotel: IHotel;
  @Input() isSelected: boolean; // FIXME: REMOVE
  @Output() selectHotel = new EventEmitter<IHotel>();

  public range = range;

  constructor(private hotelsService: HotelsService) {}

  // FIXME: REMOVE ALL EMPTY hooks / constructors
  ngOnInit() {}

  public addToFavorites(h: IHotel): void {
    this.hotelsService.addToFavoriteHotels(h);
  }

  public removeFromFavorites(h: IHotel): void {
    this.hotelsService.removeFromFavoriteHotels(h);
  }

  public isInListOfFavorites(h: IHotel): boolean {
    return this.hotelsService.isInFavorites(h);
  }
}
