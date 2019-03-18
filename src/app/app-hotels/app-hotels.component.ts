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
  public selectedHotel: IHotel | null = null;

  constructor(private hotelsService: HotelsService) {}

  ngOnInit() {
    this.getHotels();
  }

  public getHotels(): void {
    this.hotelsService.getHotels().subscribe((hotels: Array<IHotel>) => {
      this.hotels = hotels;
      this.selectHotel(hotels[0]);
    });
  }

  public selectHotel(hotel: IHotel): void {
    this.selectedHotel = hotel;
  }
}
