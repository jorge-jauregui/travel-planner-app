import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BottomDashboardComponent } from './bottom-dashboard/bottom-dashboard.component';
import { TripsComponent } from './trips/trips.component';
import { TripListComponent } from './trips/trip-list/trip-list.component';
import { TripDetailComponent } from './trips/trip-detail/trip-detail.component';
import { ActivityItemComponent } from './trips/trip-list/activity-item/activity-item.component';
import { CheckListComponent } from './check-list/check-list.component';
import { CheckListEditComponent } from './check-list/check-list-edit/check-list-edit.component';
import { HeaderComponent } from './header/header.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BottomDashboardComponent,
    TripsComponent,
    TripListComponent,
    TripDetailComponent,
    ActivityItemComponent,
    CheckListComponent,
    CheckListEditComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
