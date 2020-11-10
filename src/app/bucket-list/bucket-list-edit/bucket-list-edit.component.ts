import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { BucketListItem } from '../../shared/bucket-list-item.model';

@Component({
  selector: 'app-bucket-list-edit',
  templateUrl: './bucket-list-edit.component.html',
  styleUrls: ['./bucket-list-edit.component.css']
})
export class BucketListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('completedInput') completedInputRef: ElementRef;
  @Output() bucketListItemAdded = new EventEmitter<BucketListItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddBucketListItem() {
    const bucketListItemName = this.nameInputRef.nativeElement.value;
    const bucketListItemCompleted = this.completedInputRef.nativeElement.value;
    const newBucketListItem = new BucketListItem(bucketListItemName, bucketListItemCompleted)
    this.bucketListItemAdded.emit(newBucketListItem);
  }

}
