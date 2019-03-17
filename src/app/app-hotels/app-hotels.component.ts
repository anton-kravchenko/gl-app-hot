import { HotelsService } from './../services/hotels.service';
import { IHotel } from './../models/hotels.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-hotels',
  templateUrl: './app-hotels.component.html',
  styleUrls: ['./app-hotels.component.css'],
})
export class AppHotelsComponent implements OnInit {
  public hotels: Array<IHotel>;
  public selectedHotel: IHotel;

  constructor(private hotelsService: HotelsService) {}

  ngOnInit() {
    this.getHotels();
    this.selectHotelByDefault();
  }

  onHotelSelect(h: IHotel): void {
    this.selectedHotel = h;
  }

  public getHotels(): void {
    this.hotels = this.hotelsService.getHotels();
  }

  private selectHotelByDefault(): void {
    this.selectedHotel = this.hotels[0];
  }
}
