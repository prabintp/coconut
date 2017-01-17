import { Component } from '@angular/core';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.scss']
})
export class BooknowComponent {

  items = [
  { "subtitle": "@4000", "title": "Explore outstation round trip package from guruvayoor","content":"Providing outstation trips package from guruvayoor with us for the most comfortable journey starting @4000 y. ", "url": "assets/booknow/outstation-from-guruvayoor.jpg" },
{ "subtitle": "@ Rs. 2000", "title": "Local sightseeing in guruvayoor, thrissur, kochin ...","content":"Providing local sightseeing taken as affordable package in guruvayoor. Starting @2000 Rs per day. ", "url": "assets/booknow/sightseeing-guruvayoor-cab.jpg" },
  { "subtitle": "@ Rs. 2000", "title": "Kochin Airport Transfers @ flat Rs. 2000 ","content":"Introducing pickup or drop to cochin international airport from guruvayoor with selected vehiclesat lowest rate.", "url": "assets/booknow/cochin-airport-cabs.jpg" },

  ];

}
