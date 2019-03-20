import { Component } from '@angular/core';
import { range } from 'lodash';
import { HotelsService, StarsFiltering } from './../services/hotels.service';

@Component({
  selector: 'app-hotels-filter',
  templateUrl: './hotels-filter.component.html',
  styleUrls: ['./hotels-filter.component.css'],
})
export class HotelsFilterComponent {
  public range = range;
  constructor(private hotelsService: HotelsService) {}

  setSearchKeyword(keyword: string): void {
    this.hotelsService.setHotelsFilterKeyword(keyword);
  }

  setStarsFilter(starsFilter: StarsFiltering): void {
    this.hotelsService.setHotelsStatsFiltering(starsFilter);
  }
}
