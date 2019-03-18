import { HotelsService } from './../services/hotels.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels-filter',
  templateUrl: './hotels-filter.component.html',
  styleUrls: ['./hotels-filter.component.css'],
})
export class HotelsFilterComponent implements OnInit {
  words: string[];

  constructor(private hotelsService: HotelsService) {}

  ngOnInit() {}
}
