import { Pipe, PipeTransform } from '@angular/core';
import { IHotel, Stars } from '../models/hotels.models';
import { StarsFiltering } from '../services/hotels.service';

@Pipe({ name: 'hotelsStarsFilter' })
export class HotelsStarsFilterPipe implements PipeTransform {
  transform(
    hotels: Array<IHotel>,
    starsToFilter: StarsFiltering,
  ): Array<IHotel> {
    return starsToFilter === 'All'
      ? hotels
      : hotels.filter(({ stars }: IHotel) => starsToFilter === stars);
  }
}
