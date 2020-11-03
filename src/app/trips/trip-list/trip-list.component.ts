import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip.model';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  trips: Trip[] = [
    new Trip(
      'Winter exploration in Yosemite',
      'This is a test description',
      'https://64.media.tumblr.com/66d5f719e168cfa94c33abeb47104b29/tumblr_pm0cvjfn481wy4q19_1280.png'
    ),
    new Trip(
      'Amsterdam Autumn',
      'This is a test description',
      'https://cdn.images.express.co.uk/img/dynamic/25/590x/netherlands-amsterdam-travel-1310607.jpg?r=1595313436331'
    ),
    new Trip(
      'Canada forest offroad driving',
      'This is a test description',
      'https://64.media.tumblr.com/997d4dbb4dd41dcbc4f11e8b0fae94cb/tumblr_p6who82qTv1w8v8h1o1_1280.jpg'
    ),
    new Trip(
      'Hiking Mount Fuji',
      'This is a test description',
      'https://64.media.tumblr.com/26c32a3388b7cf9c0dcb97e377a56e81/957647876237df42-e5/s1280x1920/2240376776e663bfa09ee701638653bcaea2e0cf.jpg'
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
