import { Component, OnInit } from '@angular/core';
import { BucketListItem } from '../shared/bucket-list-item.model';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent implements OnInit {
  bucketListItems: BucketListItem[] = [
    new BucketListItem('Panorama trail hike', false),
    new BucketListItem('Visit cathedral lakes', false),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onBucketListItemAdded(bucketListItem: BucketListItem) {
    this.bucketListItems.push(bucketListItem);
  }

}
