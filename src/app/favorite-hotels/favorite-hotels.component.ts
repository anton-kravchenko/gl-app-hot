import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { IHotel } from '../models/hotels.models';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.css']
})
export class FavoriteHotelsComponent implements OnInit {
  public favoriteHotels: Array<IHotel>;

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.favoriteHotels = this.hotelsService.getFavoriteHotels();
  }

}
