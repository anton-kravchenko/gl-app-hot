import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IHotel } from './../models/hotels.models';
import { HotelsService, StarsFiltering } from '../services/hotels.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() hotels: Array<IHotel>;
  @Input() selectedHotel: IHotel;
  @Output() selectHotel = new EventEmitter<IHotel>();

  public filterKeyword: string;
  public starsFilter: StarsFiltering;

  constructor(private hotelsService: HotelsService) {}

  public ngOnInit() {
    this.getFilterKeyword();
    this.getStarsFiltering();
  }

  public onHotelSelect(hotel: IHotel): void {
    this.selectHotel.emit(hotel);
  }

  public getFilterKeyword(): void {
    this.hotelsService
      .getHotelsFilterKeyword()
      .subscribe(keyword => (this.filterKeyword = keyword));
  }

  public getStarsFiltering(): void {
    this.hotelsService
      .getHotelsStarsFiltering()
      .subscribe(starsFilter => (this.starsFilter = starsFilter));
  }
}
