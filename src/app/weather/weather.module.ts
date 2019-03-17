import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';

@NgModule({
  declarations: [WeatherComponent],
  imports: [CommonModule, SharedModule],
  exports: [WeatherComponent],
})
export class WeatherModule {}
