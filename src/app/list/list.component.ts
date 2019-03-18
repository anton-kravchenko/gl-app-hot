import { IHotel } from './../models/hotels.models';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() hotels: Array<IHotel>;
  @Input() selectedHotel: IHotel;
  @Output() selectHotel = new EventEmitter<IHotel>();

  constructor() {}

  public ngOnInit() {}

  public onHotelSelect(hotel: IHotel): void {
    this.selectHotel.emit(hotel);
  }
}
