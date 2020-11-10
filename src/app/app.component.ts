import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedSection = 'trip';

  onNavigate(section: string) {
    this.loadedSection = section;
  }
}
