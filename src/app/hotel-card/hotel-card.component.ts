import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private hotelsService: HotelsService) {}

  ngOnInit() {
    console.log(this.hotel, this.isSelected);
  }

  public onSelect(h: IHotel): void {
    this.hotelsService.selectHotel(h);
  }

  public addToFavorites(h: IHotel): void {
    this.hotelsService.addToFavoriteHotels(h);
  }
}
