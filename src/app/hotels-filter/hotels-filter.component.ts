import { Component } from '@angular/core';
import { range } from 'lodash';
import { HotelsService } from './../services/hotels.service';

@Component({
  selector: 'app-hotels-filter',
  templateUrl: './hotels-filter.component.html',
  styleUrls: ['./hotels-filter.component.css'],
})
export class HotelsFilterComponent {
  public range = range;
  constructor(private hotelsService: HotelsService) {}
  updateSearchKeyword(keyword: string): void {
    this.hotelsService.setHotelsFilterKeyword(keyword);
  }
}
