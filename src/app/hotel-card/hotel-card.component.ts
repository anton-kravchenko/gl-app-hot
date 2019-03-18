import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  constructor(private hotelsService: HotelsService) {}

  ngOnInit() {
    console.log(this.hotel, this.isSelected);
  }

  public addToFavorites(h: IHotel): void {
    // this.hotelsService.addToFavoriteHotels(h);
  }
}
