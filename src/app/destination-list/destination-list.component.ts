import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.scss']
})
export class DestinationListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  destinations = [
  { "title": "Elephant Sanctua", "subtitle":"Guruvayoor elephant Sanctuary","url": "assets/default.jpg" },
  { "title": "Beaches", "subtitle":"Snehatheeram/periyabalam/chavakkad","url": "assets/default.jpg" },
  { "title": "Athirapalli waterfalls", "subtitle":"Situated in Athirappilly panchayath, Chalakudy Taluk in of Thrissur district","url": "assets/default.jpg" },
  { "title": "Chettuva boating", "subtitle":"","url": "assets/default.jpg" },
  { "title": "Thrissur Zoo/Museum", "subtitle":"14/17/26 Seater @20Rs/KM","url": "assets/default.jpg" },

  ];


}
