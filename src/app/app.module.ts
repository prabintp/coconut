import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CardOverComponent } from './shared/components/card-over/card-over.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { DatepickerModule } from 'angular2-material-datepicker';
import { CSSCarouselComponent } from './csscarousel/csscarousel.component';
import { BooknowComponent } from './booknow/booknow.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { DestinationListComponent } from './destination-list/destination-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardOverComponent,
    BookingFormComponent,
    CSSCarouselComponent,
    BooknowComponent,
    VehicleListComponent,
    DestinationListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    DatepickerModule,
    MaterialModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
