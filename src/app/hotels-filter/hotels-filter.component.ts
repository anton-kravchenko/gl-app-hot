import { HotelsService } from './../services/hotels.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hotels-filter',
  templateUrl: './hotels-filter.component.html',
  styleUrls: ['./hotels-filter.component.css'],
})
export class HotelsFilterComponent {
  constructor(private hotelsService: HotelsService) {}
  updateSearchKeyword(keyword: string): void {
    this.hotelsService.setHotelsFilterKeyword(keyword);
  }
}
