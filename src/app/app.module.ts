import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BottomDashboardComponent } from './bottom-dashboard/bottom-dashboard.component';
import { TripsComponent } from './trips/trips.component';
import { TripListComponent } from './trips/trip-list/trip-list.component';
import { TripDetailComponent } from './trips/trip-detail/trip-detail.component';
import { TripItemComponent } from './trips/trip-list/trip-item/trip-item.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { BucketListEditComponent } from './bucket-list/bucket-list-edit/bucket-list-edit.component';
import { HeaderComponent } from './header/header.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BottomDashboardComponent,
    TripsComponent,
    TripListComponent,
    TripDetailComponent,
    TripItemComponent,
    BucketListComponent,
    BucketListEditComponent,
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
