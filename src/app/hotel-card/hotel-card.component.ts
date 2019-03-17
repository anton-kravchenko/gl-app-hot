import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from '../models/hotels.models';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css'],
})
export class HotelCardComponent implements OnInit {
  @Input() hotel: IHotel;
  @Input() isSelected: boolean;

  constructor() {}

  ngOnInit() {
    console.log(this.hotel, this.isSelected);
  }
}
