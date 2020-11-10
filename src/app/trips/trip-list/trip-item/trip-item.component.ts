import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Trip } from '../../trip.model';

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.css']
})
export class TripItemComponent implements OnInit {
  @Input() trip: Trip;
  @Output() tripSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onTripSelected() {
    this.tripSelected.emit();
  }

}
