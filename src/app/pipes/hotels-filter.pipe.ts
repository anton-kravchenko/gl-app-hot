import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from '../models/hotels.models';

@Pipe({ name: 'hotelsFilter' })
export class HotelsFilterPipe implements PipeTransform {
  transform(hotels: Array<IHotel>, keyword: string): Array<IHotel> {
    return hotels.filter(
      (h: IHotel) =>
        h.title.toLowerCase().includes(keyword) ||
        h.description.toLowerCase().includes(keyword),
    );
  }
}
