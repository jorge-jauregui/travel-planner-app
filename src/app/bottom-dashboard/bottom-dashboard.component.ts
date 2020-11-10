import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bottom-dashboard',
  templateUrl: './bottom-dashboard.component.html',
  styleUrls: ['./bottom-dashboard.component.css']
})

export class BottomDashboardComponent {
  @Output() sectionSelected = new EventEmitter<string>();

  onSelect(section: string) {
    this.sectionSelected.emit(section);
  }
}
