import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHotelsComponent } from './app-hotels/app-hotels.component';
import { ListComponent } from './list/list.component';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { HotelsFilterComponent } from './hotels-filter/hotels-filter.component';
import { FavoriteHotelsComponent } from './favorite-hotels/favorite-hotels.component';
import { HotelsFilterPipe } from './pipes/hotels-filter.pipe';
import { HotelsStarsFilterPipe } from './pipes/hotels-stars-filter.pipe';
import { NotificationsComponent } from './notifications/notifications.component';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AppHotelsComponent,
    ListComponent,
    WeatherComponent,
    ProfileComponent,
    HotelCardComponent,
    HotelsFilterComponent,
    FavoriteHotelsComponent,
    HotelsFilterPipe,
    HotelsStarsFilterPipe,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
