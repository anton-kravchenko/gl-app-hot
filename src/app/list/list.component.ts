import { IHotel } from './../models/hotels.models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() hotels: Array<IHotel>;
  @Input() selectedHotel: IHotel;

  constructor() {}

  public ngOnInit() {}
}
