import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/activity.model';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  activities: Activity[] = [
    new Activity('Panorama trail hike', false),
    new Activity('Visit cathedral lakes', false),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
